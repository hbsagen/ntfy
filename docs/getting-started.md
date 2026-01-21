# Getting started

This guide helps you send your first notification with ntfy using the hosted service, which is the same pattern used by most integrations.

## Prerequisites
- A device with a web browser or the ntfy app

## 1) Pick a topic
A topic is just a name used as a channel. Example: `my-alerts`.

## 2) Subscribe
Choose one:
- Web: open `https://ntfy.sh/my-alerts`
- App: add a new subscription to `my-alerts`

## 3) Publish a test message
From a terminal:

```sh
curl -d "Hello from ntfy" https://ntfy.sh/my-alerts
```

You should receive a notification on every subscriber.

## Next steps
- Learn about authentication and privacy in `docs/self-hosting.md`
- Pick a service integration in `docs/services/README.md`
- Add integrations in `docs/services/README.md`
