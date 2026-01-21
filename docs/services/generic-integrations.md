# Generic integrations

This guide explains the most common ways to send notifications to ntfy from any service.

## Quick start: HTTP POST
Most services can send a webhook. For ntfy, a webhook is just an HTTP POST to your topic URL.

### Hosted ntfy
```sh
curl -d "Hello from a webhook" https://ntfy.sh/my-topic
```

### Self-hosted ntfy
```sh
curl -d "Hello from a webhook" https://ntfy.example.com/my-topic
```

## Common patterns

### 1) Webhook (recommended)
Use when the service supports webhooks.

Steps:
1. Create a topic (example: `alerts`)
2. In the service, add a webhook URL
3. Set the webhook URL to your ntfy topic endpoint

Example webhook URL:
```
https://ntfy.sh/alerts
```

If the service can send JSON, ntfy will store and deliver it. For a cleaner notification, map the message body to a simple text field if the service allows it.

### 2) Email to webhook bridge
Some services only support email. Use an email-to-webhook bridge to forward to ntfy.

Options:
- Use a small server that receives email and triggers a webhook
- Use a SaaS email parser that can call a webhook

Flow:
1. Service sends email to your parser address
2. Parser calls ntfy with the subject/body
3. ntfy pushes to subscribers

### 3) Scheduled scripts (cron/systemd/Task Scheduler)
If a service cannot send webhooks, poll its API on a schedule and send ntfy notifications.

Example (Linux/macOS cron):
```sh
#!/usr/bin/env sh
set -eu

# Example: call a service API and alert on failure
if ! curl -fsS https://example.com/health; then
  curl -d "Health check failed" https://ntfy.sh/alerts
fi
```

### 4) CLI hooks from jobs (CI/CD)
Most CI/CD systems can run a script on success/failure. Add a curl step.

Example:
```sh
curl -d "Build failed: $CI_JOB_URL" https://ntfy.sh/ci-alerts
```

### 5) Log or event tailing
If a service writes logs instead of sending webhooks, tail the log and notify on pattern.

Example:
```sh
tail -F /var/log/app.log | while read -r line; do
  echo "$line" | grep -q "ERROR" && curl -d "Error: $line" https://ntfy.sh/alerts
done
```

## Authentication patterns
If your ntfy server requires auth, add a token or basic auth.

### Token (bearer)
```sh
curl \
  -H "Authorization: Bearer $NTFY_TOKEN" \
  -d "Authenticated message" \
  https://ntfy.example.com/alerts
```

### Basic auth
```sh
curl \
  -u user:password \
  -d "Authenticated message" \
  https://ntfy.example.com/alerts
```

## Message metadata
You can set title, priority, tags, and click action by sending headers.

Example:
```sh
curl \
  -H "Title: Backup failed" \
  -H "Priority: 5" \
  -H "Tags: warning,backup" \
  -H "Click: https://status.example.com" \
  -d "Backup job on db-01 failed" \
  https://ntfy.sh/alerts
```

## Troubleshooting
- If you receive no notifications, verify the topic is correct and you are subscribed
- Check ntfy server logs for incoming requests
- Some services require the URL to respond within a timeout; use a fast ntfy instance
- For large payloads, send a short summary in the body
