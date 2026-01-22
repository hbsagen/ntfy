# Incident management and status

Method legend: webhook, script, polling, email, ci

- PagerDuty — Possible: yes. Method: webhook. Quirks: use webhook extensions or Events API. Docs: https://developer.pagerduty.com/docs/webhooks/
- Opsgenie — Possible: yes. Method: webhook. Quirks: outgoing webhooks. Docs: https://docs.opsgenie.com/docs/webhook-integration
- Splunk On-Call (VictorOps) — Possible: yes. Method: webhook. Quirks: outbound webhooks. Docs: https://help.victorops.com/knowledge-base/outbound-webhooks/
- xMatters — Possible: yes. Method: webhook. Quirks: outbound webhooks. Docs: https://help.xmatters.com/
- FireHydrant — Possible: yes. Method: webhook. Quirks: outbound webhooks. Docs: https://docs.firehydrant.io/
- Statuspage — Possible: yes. Method: webhook. Quirks: outgoing webhooks per incident. Docs: https://support.atlassian.com/
- Statuspage (incident creation) — Possible: yes. Method: script/webhook. Quirks: use API for incidents. Docs: https://developer.atlassian.com/
- Status.io — Possible: yes. Method: webhook. Quirks: use webhook notifications. Docs: https://statusio.docs.apiary.io/
- Cachet — Possible: yes. Method: script. Quirks: use API + cron. Docs: https://docs.cachethq.io/
- Better Stack Status Page — Possible: yes. Method: webhook. Quirks: integrations. Docs: https://betterstack.com/
- Atlassian Opsgenie (legacy) — Possible: yes. Method: webhook. Quirks: integration per team. Docs: https://docs.opsgenie.com/
- ServiceNow (incidents) — Possible: yes. Method: webhook/script. Quirks: use outbound REST message. Docs: https://docs.servicenow.com/
- Jira Service Management — Possible: yes. Method: webhook. Quirks: automation rules. Docs: https://support.atlassian.com/
- Atlassian Statuspage (webhooks) — Possible: yes. Method: webhook. Quirks: outgoing webhooks per incident. Docs: https://support.atlassian.com/
- Statuscast — Possible: yes. Method: webhook. Quirks: use incident webhooks. Docs: https://www.statuscast.com/docs/
- Better Stack On-Call — Possible: yes. Method: webhook. Quirks: use outbound webhooks. Docs: https://betterstack.com/
- Rootly — Possible: yes. Method: webhook. Quirks: incident webhooks. Docs: https://docs.rootly.com/
- Blameless — Possible: yes. Method: webhook. Quirks: incident webhooks. Docs: https://docs.blameless.com/
