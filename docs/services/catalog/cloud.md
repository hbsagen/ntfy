# Cloud providers

Method legend: webhook, script, polling, email, ci

- AWS CloudWatch alarms — Possible: yes. Method: webhook via SNS/Lambda. Quirks: no direct webhook; use SNS or EventBridge bridge. Docs: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html
- AWS EventBridge — Possible: yes. Method: webhook via API destination/Lambda. Quirks: API destinations require connection/auth config. Docs: https://docs.aws.amazon.com/eventbridge/
- AWS SNS — Possible: yes. Method: webhook via HTTPS subscription. Quirks: endpoint must confirm subscription; expect retries. Docs: https://docs.aws.amazon.com/sns/latest/dg/sns-http-https-endpoint-as-subscriber.html
- AWS Lambda — Possible: yes. Method: script. Quirks: include curl or HTTP client. Docs: https://docs.aws.amazon.com/lambda/
- AWS Step Functions — Possible: yes. Method: script via Lambda. Quirks: call ntfy from task. Docs: https://docs.aws.amazon.com/step-functions/
- AWS ECS — Possible: yes. Method: webhook via EventBridge. Quirks: use task state change events. Docs: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eventbridge.html
- AWS EKS — Possible: yes. Method: webhook/script. Quirks: use Alertmanager or event exporter. Docs: https://docs.aws.amazon.com/eks/
- AWS Lightsail — Possible: yes. Method: webhook/email. Quirks: alerts -> email; use bridge. Docs: https://docs.aws.amazon.com/lightsail/
- GCP Cloud Monitoring — Possible: yes. Method: webhook. Quirks: webhook channel has a fixed payload; use a relay if needed. Docs: https://cloud.google.com/monitoring/docs/alerting
- GCP Pub/Sub — Possible: yes. Method: webhook (push). Quirks: push subscription. Docs: https://cloud.google.com/pubsub/docs/push
- GCP Cloud Functions — Possible: yes. Method: script. Quirks: HTTP trigger. Docs: https://cloud.google.com/functions/docs
- GCP Cloud Run — Possible: yes. Method: script/webhook. Quirks: use Cloud Run job or service. Docs: https://cloud.google.com/run/docs
- Azure Monitor — Possible: yes. Method: webhook. Quirks: action groups send fixed JSON; use a relay to format. Docs: https://learn.microsoft.com/azure/azure-monitor/alerts/action-groups
- Azure Functions — Possible: yes. Method: script. Quirks: HTTP trigger. Docs: https://learn.microsoft.com/azure/azure-functions/
- Azure Logic Apps — Possible: yes. Method: webhook. Quirks: use HTTP action. Docs: https://learn.microsoft.com/azure/logic-apps/
- Azure Event Grid — Possible: yes. Method: webhook. Quirks: use subscription. Docs: https://learn.microsoft.com/azure/event-grid/
- DigitalOcean Monitoring — Possible: yes. Method: webhook. Quirks: alerts support webhooks. Docs: https://docs.digitalocean.com/products/monitoring/
- Linode (Akamai) alerts — Possible: yes. Method: email/webhook. Quirks: email only for some alerts. Docs: https://www.linode.com/docs/products/tools/monitoring/
- Hetzner Cloud — Possible: yes. Method: webhook. Quirks: event notifications. Docs: https://docs.hetzner.cloud/
- Oracle Cloud Monitoring — Possible: yes. Method: webhook. Quirks: notifications. Docs: https://docs.oracle.com/en-us/iaas/Content/Monitoring/Concepts/monitoringoverview.htm
- IBM Cloud Monitoring — Possible: yes. Method: webhook. Quirks: notification channels. Docs: https://cloud.ibm.com/docs/monitoring
- Alibaba Cloud — Possible: yes. Method: webhook/email. Quirks: use alert notifications. Docs: https://www.alibabacloud.com/help
- Tencent Cloud — Possible: yes. Method: webhook/email. Quirks: use alert notifications. Docs: https://www.tencentcloud.com/document/product
- OVHcloud — Possible: yes. Method: webhook/email. Quirks: use monitoring notifications. Docs: https://docs.ovh.com/
- Vultr — Possible: yes. Method: webhook/email. Quirks: use alerting. Docs: https://www.vultr.com/docs/
- Heroku — Possible: yes. Method: webhook. Quirks: use app webhooks or log drains + script. Docs: https://devcenter.heroku.com/
- Vercel — Possible: yes. Method: webhook. Quirks: deploy webhooks. Docs: https://vercel.com/
- Netlify — Possible: yes. Method: webhook. Quirks: build hooks and deploy notifications. Docs: https://docs.netlify.com/site-deploys/notifications/
- Render — Possible: yes. Method: webhook. Quirks: deploy hooks. Docs: https://render.com/docs/deploy-hooks
- Fly.io — Possible: yes. Method: webhook/script. Quirks: use logs/events; limited webhooks. Docs: https://fly.io/docs/
- Platform.sh — Possible: yes. Method: webhook. Quirks: activity webhooks. Docs: https://docs.platform.sh/development/events.html
