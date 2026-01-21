# Developer tools and analytics

Method legend: webhook, script, polling, email, ci

- Sentry — Possible: yes. Method: webhook. Quirks: alert rules required. Docs: https://docs.sentry.io/product/alerts/
- Honeybadger — Possible: yes. Method: webhook. Quirks: integration webhooks. Docs: https://docs.honeybadger.io/
- Rollbar — Possible: yes. Method: webhook. Quirks: per-project webhook. Docs: https://docs.rollbar.com/docs/webhooks
- Bugsnag — Possible: yes. Method: webhook. Quirks: integration config. Docs: https://docs.bugsnag.com/product/integrations/
- Raygun — Possible: yes. Method: webhook. Quirks: alerting integrations. Docs: https://raygun.com/documentation/
- Airbrake — Possible: yes. Method: webhook. Quirks: webhook integration. Docs: https://airbrake.io/docs/
- GitHub Issues — Possible: yes. Method: webhook. Quirks: use issue events. Docs: https://docs.github.com/webhooks
- GitLab Issues — Possible: yes. Method: webhook. Quirks: issue events. Docs: https://docs.gitlab.com/ee/user/project/integrations/webhooks.html
- Jira — Possible: yes. Method: webhook. Quirks: system webhooks. Docs: https://developer.atlassian.com/server/jira/platform/webhooks/
- Linear — Possible: yes. Method: webhook. Quirks: team webhooks. Docs: https://developers.linear.app/docs/webhooks
- Shortcut — Possible: yes. Method: webhook. Quirks: per project. Docs: https://developer.shortcut.com/api/rest/v3#Webhooks
- YouTrack — Possible: yes. Method: webhook. Quirks: workflows/webhooks. Docs: https://www.jetbrains.com/help/youtrack/devportal/youtrack-workflows.html
- Azure Boards — Possible: yes. Method: webhook. Quirks: service hooks. Docs: https://learn.microsoft.com/azure/devops/service-hooks/
- Trello — Possible: yes. Method: webhook. Quirks: per board. Docs: https://developer.atlassian.com/cloud/trello/guides/rest-api/webhooks/
- Notion — Possible: yes. Method: polling. Quirks: no outbound webhooks; use API polling. Docs: https://developers.notion.com/
- Confluence — Possible: yes. Method: webhook. Quirks: configure in admin. Docs: https://developer.atlassian.com/cloud/confluence/webhooks/
- PostHog — Possible: yes. Method: webhook. Quirks: event plugins. Docs: https://posthog.com/docs
- Mixpanel — Possible: yes. Method: polling/webhook. Quirks: limited outbound webhooks. Docs: https://developer.mixpanel.com/docs
- Amplitude — Possible: yes. Method: webhook/polling. Quirks: cohort webhooks. Docs: https://www.docs.developers.amplitude.com/
- Segment — Possible: yes. Method: webhook. Quirks: use webhook destination. Docs: https://segment.com/docs/
- RudderStack — Possible: yes. Method: webhook. Quirks: webhook destination. Docs: https://www.rudderstack.com/docs/
- Google Analytics — Possible: yes. Method: polling. Quirks: no outbound webhooks. Docs: https://developers.google.com/analytics
- Plausible Analytics — Possible: yes. Method: polling. Quirks: no outbound webhooks. Docs: https://plausible.io/docs
- Matomo — Possible: yes. Method: polling. Quirks: use API polling. Docs: https://matomo.org/docs/
- New Relic Logs — Possible: yes. Method: webhook. Quirks: alert conditions. Docs: https://docs.newrelic.com/docs/alerts-applied-intelligence/alerts/alert-conditions/alerts-logs/
- LogRocket — Possible: yes. Method: webhook. Quirks: alert webhooks. Docs: https://docs.logrocket.com/
- FullStory — Possible: yes. Method: webhook. Quirks: integrations. Docs: https://help.fullstory.com/
- Datadog RUM — Possible: yes. Method: webhook. Quirks: monitor alerts. Docs: https://docs.datadoghq.com/real_user_monitoring/
- LaunchDarkly — Possible: yes. Method: webhook. Quirks: event hooks. Docs: https://docs.launchdarkly.com/home/webhooks
- Split — Possible: yes. Method: webhook. Quirks: webhooks for audit events. Docs: https://docs.split.io/docs/webhooks
- Firebase Crashlytics — Possible: yes. Method: webhook/script. Quirks: use alerting to email; bridge if needed. Docs: https://firebase.google.com/docs/crashlytics
- Google Play Console — Possible: yes. Method: webhook. Quirks: use Pub/Sub for notifications. Docs: https://developers.google.com/android-publisher/notifications
- Apple App Store Connect — Possible: yes. Method: webhook. Quirks: App Store Server Notifications. Docs: https://developer.apple.com/documentation/appstoreservernotifications
- Datadog APM — Possible: yes. Method: webhook. Quirks: use monitor notifications. Docs: https://docs.datadoghq.com/tracing/
