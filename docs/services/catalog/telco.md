# Telco and communications

Method legend: webhook, script, polling, email, ci

- Twilio — Possible: yes. Method: webhook. Quirks: callbacks are inbound; use status callbacks to relay. Docs: https://www.twilio.com/docs/usage/webhooks
- Vonage (Nexmo) — Possible: yes. Method: webhook. Quirks: callbacks are inbound; use status webhooks. Docs: https://developer.vonage.com/
- Plivo — Possible: yes. Method: webhook. Quirks: callbacks are inbound; use event webhooks. Docs: https://www.plivo.com/docs/
- Telnyx — Possible: yes. Method: webhook. Quirks: use webhooks for call/SMS events. Docs: https://developers.telnyx.com/docs/v2/webhooks
- MessageBird — Possible: yes. Method: webhook. Quirks: use callbacks for delivery status. Docs: https://developers.messagebird.com/api/sms-messaging/#webhooks
- Bandwidth — Possible: yes. Method: webhook. Quirks: event callbacks. Docs: https://dev.bandwidth.com/docs/messaging/webhooks
- Sinch — Possible: yes. Method: webhook. Quirks: callback URLs. Docs: https://developers.sinch.com/
- Nexmo Verify — Possible: yes. Method: webhook. Quirks: callbacks for verification. Docs: https://developer.vonage.com/verify/overview
- Amazon SNS (SMS) — Possible: yes. Method: webhook. Quirks: events via SNS; use HTTP subscription. Docs: https://docs.aws.amazon.com/sns/latest/dg/sms_stats.html
- Azure Communication Services — Possible: yes. Method: webhook. Quirks: Event Grid events. Docs: https://learn.microsoft.com/azure/communication-services/concepts/event-handling
- Google Dialogflow — Possible: yes. Method: webhook. Quirks: fulfillment webhooks inbound; use events to trigger ntfy. Docs: https://cloud.google.com/dialogflow/docs/fulfillment-webhook
