# BI and analytics

Method legend: webhook, script, polling, email, ci

- Power BI — Possible: yes. Method: webhook. Quirks: use alert rules + webhook/Power Automate. Docs: https://learn.microsoft.com/power-bi/service-alerts
- Tableau — Possible: yes. Method: webhook/script. Quirks: use subscriptions or webhooks in Tableau Cloud. Docs: https://help.tableau.com/current/api/webhooks/en-us/index.html
- Looker — Possible: yes. Method: webhook. Quirks: use Looker action or alerts. Docs: https://docs.looker.com/data-modeling/extension-framework/actions
- Looker Studio — Possible: yes. Method: polling. Quirks: no outbound webhooks; use scheduled export + script. Docs: https://support.google.com/looker-studio/
- Metabase — Possible: yes. Method: webhook. Quirks: alerts + webhook on Pro/Enterprise. Docs: https://www.metabase.com/docs/latest/alerts
- Apache Superset — Possible: yes. Method: webhook/script. Quirks: alerts via email; use email bridge or report schedules. Docs: https://superset.apache.org/docs/creating-charts-dashboards/alerts-reports
- Redash — Possible: yes. Method: webhook. Quirks: alert destinations. Docs: https://redash.io/help/user-guide/alerts-and-notifications
- Grafana (Reporting) — Possible: yes. Method: webhook. Quirks: reporting via email; use email bridge. Docs: https://grafana.com/docs/grafana/latest/alerting/notifications/
- Mode Analytics — Possible: yes. Method: webhook/script. Quirks: use scheduled reports; email bridge. Docs: https://mode.com/help
- Periscope (Sisense for Cloud Data Teams) — Possible: yes. Method: webhook/script. Quirks: alerts via email. Docs: https://www.sisense.com/documentation/
- Sisense — Possible: yes. Method: webhook. Quirks: use alerts/webhooks. Docs: https://www.sisense.com/documentation/
- Qlik Sense — Possible: yes. Method: webhook/script. Quirks: alerts via email; use bridge. Docs: https://help.qlik.com/
