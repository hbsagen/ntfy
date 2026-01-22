const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const REPO_ROOT = process.cwd();
const CATALOG_DIR = path.join(REPO_ROOT, "docs/services/catalog");
const INDEX_FILE = path.join(REPO_ROOT, "docs/services/index.md");

function titleCaseFromFilename(filename) {
  const base = path.basename(filename, ".md");
  return base
    .split(/[-_]/)
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function ensureCatalogPage(filePath) {
  if (fs.existsSync(filePath)) return false;
  const title = titleCaseFromFilename(filePath);
  const content = `# ${title}\n\nMethod legend: webhook, script, polling, email, ci\n\n`;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
  return true;
}

function readIndexCategoryPaths() {
  if (!fs.existsSync(INDEX_FILE)) return [];
  const content = fs.readFileSync(INDEX_FILE, "utf8");
  const matches = [...content.matchAll(/`(docs\/services\/catalog\/[^`]+\.md)`/g)];
  return matches.map((m) => m[1]);
}

function requestUrl(url) {
  return new Promise((resolve) => {
    const isHttps = url.startsWith("https://");
    const lib = isHttps ? https : http;
    const req = lib.request(url, { method: "GET" }, (res) => {
      res.resume();
      resolve({ ok: res.statusCode >= 200 && res.statusCode < 400, status: res.statusCode });
    });
    req.on("error", () => resolve({ ok: false, status: 0 }));
    req.setTimeout(8000, () => {
      req.destroy();
      resolve({ ok: false, status: 0 });
    });
    req.end();
  });
}

async function fixDocsUrl(url) {
  if (url.startsWith("http://")) {
    const httpsUrl = `https://${url.slice("http://".length)}`;
    const httpsOk = await requestUrl(httpsUrl);
    if (httpsOk.ok) return httpsUrl;
  }
  const ok = await requestUrl(url);
  if (ok.ok) return url;

  try {
    const u = new URL(url);
    const base = `${u.protocol}//${u.host}/`;
    const baseOk = await requestUrl(base);
    if (baseOk.ok) return base;
  } catch {
    // ignore
  }
  return url;
}

function ensureLegend(lines) {
  if (lines.length === 0) return lines;
  const hasLegend = lines.some((l) => l.startsWith("Method legend:"));
  if (hasLegend) return lines;
  const out = [];
  out.push(lines[0]);
  if (lines.length > 1 && lines[1].trim() === "") {
    out.push(lines[1]);
    out.push("Method legend: webhook, script, polling, email, ci");
    out.push("");
    out.push(...lines.slice(2));
    return out;
  }
  out.push("");
  out.push("Method legend: webhook, script, polling, email, ci");
  out.push("");
  out.push(...lines.slice(1));
  return out;
}

async function normalizeCatalogFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  let lines = content.split(/\r?\n/).map((l) => l.replace(/[ \t]+$/g, ""));
  lines = ensureLegend(lines);

  const seen = new Set();
  const out = [];
  let changed = false;

  for (const line of lines) {
    if (line.startsWith("- ")) {
      if (seen.has(line)) {
        changed = true;
        continue;
      }
      seen.add(line);
      out.push(line);
      continue;
    }
    out.push(line);
  }

  // Fix docs links
  for (let i = 0; i < out.length; i++) {
    const line = out[i];
    const match = line.match(/Docs: (https?:\/\/\S+)/);
    if (!match) continue;
    const url = match[1];
    const fixed = await fixDocsUrl(url);
    if (fixed !== url) {
      out[i] = line.replace(url, fixed);
      changed = true;
    }
  }

  const newContent = out.join("\n");
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent);
    return true;
  }
  return changed;
}

async function main() {
  let changed = false;

  const categoryPaths = readIndexCategoryPaths();
  for (const rel of categoryPaths) {
    const full = path.join(REPO_ROOT, rel);
    if (ensureCatalogPage(full)) changed = true;
  }

  if (fs.existsSync(CATALOG_DIR)) {
    const files = fs.readdirSync(CATALOG_DIR).filter((f) => f.endsWith(".md"));
    for (const f of files) {
      const full = path.join(CATALOG_DIR, f);
      if (await normalizeCatalogFile(full)) changed = true;
    }
  }

  if (changed) {
    process.exit(0);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
