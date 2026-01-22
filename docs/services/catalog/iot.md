# Hardware and IoT

Method legend: webhook, script, polling, email, ci

- Ubiquiti UniFi — Possible: yes. Method: webhook/script. Quirks: use controller events or log tail. Docs: https://help.ui.com/
- MikroTik — Possible: yes. Method: script. Quirks: RouterOS scripting. Docs: https://help.mikrotik.com/docs/
- Netgear — Possible: yes. Method: script/polling. Quirks: limited outbound webhooks. Docs: https://www.netgear.com/support/
- Tailscale — Possible: yes. Method: webhook. Quirks: admin webhooks. Docs: https://tailscale.com/kb/
- WireGuard — Possible: yes. Method: script. Quirks: log tail or wg show. Docs: https://www.wireguard.com/
- OpenWrt — Possible: yes. Method: script. Quirks: limited packages. Docs: https://openwrt.org/docs
- pfSense — Possible: yes. Method: email/script. Quirks: email only by default. Docs: https://docs.netgate.com/
- OPNsense — Possible: yes. Method: email/script. Quirks: custom scripts. Docs: https://docs.opnsense.org/
- ESPHome — Possible: yes. Method: webhook/script. Quirks: Home Assistant automations. Docs: https://esphome.io/
- Zigbee2MQTT — Possible: yes. Method: script. Quirks: MQTT bridge. Docs: https://www.zigbee2mqtt.io/
- MQTT (general) — Possible: yes. Method: script. Quirks: use MQTT bridge to curl. Docs: https://mqtt.org/
- Home Assistant — Possible: yes. Method: webhook. Quirks: REST command. Docs: https://www.home-assistant.io/docs/automation/
- OpenHAB — Possible: yes. Method: script. Quirks: rules engine. Docs: https://www.openhab.org/docs/
- Domoticz — Possible: yes. Method: webhook/script. Quirks: use dzVents. Docs: https://www.domoticz.com/wiki/
- Node-RED — Possible: yes. Method: webhook. Quirks: HTTP request node. Docs: https://nodered.org/docs/
- Grafana Agent (IoT) — Possible: yes. Method: webhook. Quirks: alerting via Grafana. Docs: https://grafana.com/docs/agent/
- Syncthing — Possible: yes. Method: webhook. Quirks: events API. Docs: https://docs.syncthing.net/
- UPS (NUT) — Possible: yes. Method: script. Quirks: upssched hooks. Docs: https://networkupstools.org/
- SmartThings — Possible: yes. Method: webhook/script. Quirks: use SmartThings webhooks or SmartApps. Docs: https://developer.smartthings.com/
- Homey — Possible: yes. Method: webhook. Quirks: flow with HTTP request. Docs: https://apps.developer.homey.app/
- Tuya — Possible: yes. Method: webhook. Quirks: use cloud events + API. Docs: https://developer.tuya.com/en/docs
- Shelly — Possible: yes. Method: webhook/script. Quirks: HTTP action URLs. Docs: https://shelly-api-docs.shelly.cloud/
- ESP32 (custom) — Possible: yes. Method: script/webhook. Quirks: send HTTP POST from device. Docs: https://docs.espressif.com/projects/esp-idf/
