# Finance and accounting

Method legend: webhook, script, polling, email, ci

- QuickBooks Online — Possible: yes. Method: webhook. Quirks: webhooks require app + subscriptions. Docs: https://developer.intuit.com/app/developer/qbo/docs/develop/webhooks
- Xero — Possible: yes. Method: webhook. Quirks: webhooks require app + signature verification. Docs: https://developer.xero.com/documentation/guides/webhooks/overview/
- FreshBooks — Possible: yes. Method: webhook. Quirks: webhooks require app setup. Docs: https://www.freshbooks.com/api/webhooks
- Wave — Possible: yes. Method: webhook/script. Quirks: limited webhook support; use API polling. Docs: https://developer.waveapps.com/
- Zoho Books — Possible: yes. Method: webhook. Quirks: webhook for events; requires app. Docs: https://www.zoho.com/books/api/v3/#webhooks
- Sage — Possible: yes. Method: webhook/script. Quirks: limited outbound webhooks; use API polling. Docs: https://developer.sage.com/
- NetSuite — Possible: yes. Method: webhook/script. Quirks: use RESTlet + polling or workflows. Docs: https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/
- Stripe Billing — Possible: yes. Method: webhook. Quirks: verify signature; retry handling. Docs: https://stripe.com/docs/webhooks
- PayPal Subscriptions — Possible: yes. Method: webhook. Quirks: verify signature. Docs: https://developer.paypal.com/docs/api-basics/notifications/webhooks/
- Plaid — Possible: yes. Method: webhook. Quirks: webhook per product. Docs: https://plaid.com/docs/api/webhooks/
- Square — Possible: yes. Method: webhook. Quirks: signature verification. Docs: https://developer.squareup.com/docs/webhooks/overview
- Chargebee — Possible: yes. Method: webhook. Quirks: event verification. Docs: https://www.chargebee.com/
- Recurly — Possible: yes. Method: webhook. Quirks: signature verification. Docs: https://developers.recurly.com/docs/webhooks
- Zuora — Possible: yes. Method: webhook. Quirks: use callouts. Docs: https://knowledgecenter.zuora.com/BC_Developers/M_Events_and_Notifications
