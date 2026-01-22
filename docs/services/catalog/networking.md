# Networking and DNS

Method legend: webhook, script, polling, email, ci

- Cloudflare — Possible: yes. Method: webhook/polling. Quirks: limited outgoing webhooks; often API polling or Logpush. Docs: https://developers.cloudflare.com/
- AWS Route 53 — Possible: yes. Method: script (Lambda) or polling. Quirks: no outbound webhooks. Docs: https://docs.aws.amazon.com/Route53/
- NS1 — Possible: yes. Method: webhook. Quirks: use notifications. Docs: https://ns1.com/api
- Dynatrace — Possible: yes. Method: webhook. Quirks: problem notifications. Docs: https://www.dynatrace.com/support/help/extend-dynatrace/notifications
- ThousandEyes — Possible: yes. Method: webhook. Quirks: alert webhooks. Docs: https://docs.thousandeyes.com/
- Datadog Network Monitoring — Possible: yes. Method: webhook. Quirks: monitor notifications. Docs: https://docs.datadoghq.com/integrations/webhooks/
- Pingdom — Possible: yes. Method: webhook. Quirks: HTTPS required. Docs: https://www.pingdom.com/resources/api/
- Kentik — Possible: yes. Method: webhook. Quirks: alert notifications. Docs: https://docs.kentik.com/
- NetBox — Possible: yes. Method: webhook. Quirks: webhook configuration. Docs: https://docs.netbox.dev/en/stable/configuration/webhooks/
- LibreNMS — Possible: yes. Method: webhook. Quirks: alert transports. Docs: https://docs.librenms.org/Alerting/Transports/
- Observium — Possible: yes. Method: script/email. Quirks: alerting transport. Docs: https://docs.observium.org/
- Cisco Meraki — Possible: yes. Method: webhook. Quirks: alert webhooks; validate shared secret. Docs: https://developer.cisco.com/meraki/webhooks/
- Cisco DNA Center — Possible: yes. Method: webhook. Quirks: event subscriptions. Docs: https://developer.cisco.com/docs/dna-center/
- Fortinet FortiGate — Possible: yes. Method: script/email. Quirks: email alerts; use bridge. Docs: https://docs.fortinet.com/
- Palo Alto PAN-OS — Possible: yes. Method: webhook/script. Quirks: syslog or email; use bridge. Docs: https://docs.paloaltonetworks.com/
- Arista EOS — Possible: yes. Method: script. Quirks: event handler scripts. Docs: https://www.arista.com/en/support/toi/eos-4-20-1f/11463-event-handler
