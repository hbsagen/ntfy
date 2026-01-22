# Messaging and ChatOps

Method legend: webhook, script, polling, email, ci

- Slack — Possible: yes. Method: webhook/event relay. Quirks: Events API requires URL verification and signature checks. Docs: https://api.slack.com/apis/connections/events-api
- Microsoft Teams — Possible: yes. Method: webhook/workflow. Quirks: use Power Automate HTTP action for outbound events. Docs: https://learn.microsoft.com/microsoftteams/platform/webhooks-and-connectors/
- Discord — Possible: yes. Method: webhook/script. Quirks: Discord webhooks are inbound only; use bot gateway events to trigger ntfy. Docs: https://discord.com/developers/docs/resources/webhook
- Mattermost — Possible: yes. Method: webhook. Quirks: outgoing webhooks. Docs: https://docs.mattermost.com/
- Rocket.Chat — Possible: yes. Method: webhook. Quirks: outgoing integrations. Docs: https://developer.rocket.chat/
- Zulip — Possible: yes. Method: webhook. Quirks: outgoing webhooks. Docs: https://zulip.com/help/add-a-bot-or-integration
- Matrix (Synapse) — Possible: yes. Method: webhook/script. Quirks: use bot or bridge. Docs: https://matrix.org/docs/guides/
- Telegram — Possible: yes. Method: webhook/script. Quirks: bot API webhooks are inbound; use bot to call ntfy. Docs: https://core.telegram.org/bots/api
- Signal (Unofficial) — Possible: yes. Method: script. Quirks: no official API; use signal-cli. Docs: https://github.com/AsamK/signal-cli
- WhatsApp Business — Possible: yes. Method: webhook. Quirks: Meta webhooks. Docs: https://developers.facebook.com/docs/whatsapp
- WeChat (WeCom) — Possible: yes. Method: webhook. Quirks: enterprise webhooks. Docs: https://developer.work.weixin.qq.com/document/path/91770
- Google Chat — Possible: yes. Method: webhook/script. Quirks: incoming webhooks are inbound; use Apps Script for outbound events. Docs: https://developers.google.com/chat
- Slack Workflow Builder — Possible: yes. Method: webhook. Quirks: use workflow webhooks. Docs: https://slack.com/help/articles/360035692513-Guide-to-Workflow-Builder
- IRC (via bot) — Possible: yes. Method: script. Quirks: use bot to forward events. Docs: https://www.rfc-editor.org/rfc/rfc1459
- Matrix (Element) — Possible: yes. Method: webhook/script. Quirks: use bot bridge. Docs: https://matrix.org/docs/guides/
- Rocket.Chat Apps — Possible: yes. Method: webhook. Quirks: use outgoing webhook apps. Docs: https://developer.rocket.chat/
