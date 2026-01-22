# Version control and code hosting

Method legend: webhook, script, polling, email, ci

- GitHub — Possible: yes. Method: webhook. Quirks: verify signature if needed. Docs: https://docs.github.com/webhooks
- GitLab — Possible: yes. Method: webhook. Quirks: configure per project. Docs: https://docs.gitlab.com/ee/user/project/integrations/webhooks.html
- Bitbucket Cloud — Possible: yes. Method: webhook. Quirks: per repo. Docs: https://support.atlassian.com/bitbucket-cloud/docs/event-payloads/
- Bitbucket Server/Data Center — Possible: yes. Method: webhook. Quirks: admin config. Docs: https://confluence.atlassian.com/bitbucketserver/webhooks-776640367.html
- Azure DevOps Repos — Possible: yes. Method: webhook. Quirks: service hooks. Docs: https://learn.microsoft.com/azure/devops/service-hooks/
- Gitea — Possible: yes. Method: webhook. Quirks: per repo. Docs: https://docs.gitea.io/en-us/webhooks/
- Gogs — Possible: yes. Method: webhook. Quirks: per repo. Docs: https://gogs.io/docs/features/webhook
- Forgejo — Possible: yes. Method: webhook. Quirks: per repo. Docs: https://forgejo.org/docs/latest/user/webhooks/
- SourceHut — Possible: yes. Method: webhook. Quirks: webhook per repo. Docs: https://man.sr.ht/
- Gerrit — Possible: yes. Method: script. Quirks: stream-events + script. Docs: https://gerrit-review.googlesource.com/Documentation/cmd-stream-events.html
- Phabricator — Possible: yes. Method: webhook. Quirks: use Herald webhooks. Docs: https://secure.phabricator.com/book/phabricator/article/webhooks/
- Perforce Helix — Possible: yes. Method: script. Quirks: triggers. Docs: https://www.perforce.com/manuals/p4sag/Content/P4SAG/chapter.triggers.html
- SVN (Subversion) — Possible: yes. Method: script. Quirks: post-commit hook. Docs: https://subversion.apache.org/docs/
- Fossil — Possible: yes. Method: script. Quirks: hooks or timeline polling. Docs: https://fossil-scm.org/home/doc/trunk/www/hooks.md
- AWS CodeCommit — Possible: yes. Method: webhook via EventBridge. Quirks: no direct webhooks. Docs: https://docs.aws.amazon.com/codecommit/
- GitHub Enterprise Server — Possible: yes. Method: webhook. Quirks: admin-level config may be required. Docs: https://docs.github.com/enterprise-server
- GitLab (Self-managed) — Possible: yes. Method: webhook. Quirks: instance settings may restrict outbound calls. Docs: https://docs.gitlab.com/ee/user/project/integrations/webhooks.html
- Codeberg — Possible: yes. Method: webhook. Quirks: Gitea-compatible webhooks. Docs: https://codeberg.org/docs/
- Launchpad — Possible: yes. Method: polling/script. Quirks: limited webhooks; use API polling. Docs: https://launchpad.net/
