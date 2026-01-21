# Proxmox -> ntfy

Send Proxmox notifications to ntfy (cluster events, backup jobs, alerts).

## Who this is for
- Proxmox administrators who want push notifications on events

## Prerequisites
- Proxmox VE access
- An ntfy topic you control

## High-level approach
1. Create an ntfy topic (hosted or self-hosted)
2. Configure a notification script or webhook in Proxmox
3. Test with a known event

## Example (placeholder)

```sh
curl -d "Proxmox test alert" https://ntfy.sh/my-alerts
```

## Notes
This guide will be expanded with a full Proxmox notification hook example.
