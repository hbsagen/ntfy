# Wazuh -> ntfy

Send Wazuh alerts to ntfy using a custom integration script or webhook.

## Who this is for
- Wazuh administrators who want mobile/web push notifications

## Prerequisites
- Wazuh manager access
- An ntfy topic you control

## High-level approach
1. Create an ntfy topic (hosted or self-hosted)
2. Add a Wazuh integration to call `curl` on alert
3. Test with a sample alert

## Example (placeholder)

```sh
curl -d "Wazuh test alert" https://ntfy.sh/my-alerts
```

## Notes
This guide will be expanded with a full Wazuh integration script and config references.
