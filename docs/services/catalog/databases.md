# Databases and storage

Method legend: webhook, script, polling, email, ci

- PostgreSQL — Possible: yes. Method: script/polling. Quirks: use cron or LISTEN/NOTIFY + bridge. Docs: https://www.postgresql.org/docs/
- MySQL — Possible: yes. Method: script/polling. Quirks: cron + queries. Docs: https://dev.mysql.com/doc/
- MariaDB — Possible: yes. Method: script/polling. Quirks: cron + queries. Docs: https://mariadb.com/kb/en/documentation/
- MongoDB Atlas — Possible: yes. Method: webhook. Quirks: alert configuration. Docs: https://www.mongodb.com/docs/atlas/alerts/
- Redis — Possible: yes. Method: script. Quirks: poll metrics/logs. Docs: https://redis.io/docs/
- Elasticsearch — Possible: yes. Method: webhook. Quirks: watcher/Kibana alerting. Docs: https://www.elastic.co/guide/en/elasticsearch/reference/current/watcher-api.html
- OpenSearch — Possible: yes. Method: webhook. Quirks: alerting plugin. Docs: https://opensearch.org/docs/latest/observing-your-data/alerting/
- MinIO — Possible: yes. Method: webhook. Quirks: event notifications. Docs: https://min.io/docs/minio/linux/administration/notifications.html
- Backblaze B2 — Possible: yes. Method: webhook/polling. Quirks: limited webhooks. Docs: https://www.backblaze.com/b2/docs/
- AWS S3 — Possible: yes. Method: webhook via Lambda/EventBridge. Quirks: no direct webhook. Docs: https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to.html
- Google Cloud Storage — Possible: yes. Method: webhook via Pub/Sub. Quirks: use notifications. Docs: https://cloud.google.com/storage/docs/pubsub-notifications
- Azure Storage — Possible: yes. Method: webhook via Event Grid. Quirks: use Event Grid. Docs: https://learn.microsoft.com/azure/storage/blobs/storage-blob-event-overview
- CouchDB — Possible: yes. Method: script/polling. Quirks: _changes feed + script. Docs: https://docs.couchdb.org/
- Couchbase — Possible: yes. Method: script/polling. Quirks: use eventing. Docs: https://docs.couchbase.com/
- Cassandra — Possible: yes. Method: script/polling. Quirks: cron + queries. Docs: https://cassandra.apache.org/doc/
- ClickHouse — Possible: yes. Method: script/polling. Quirks: cron + queries. Docs: https://clickhouse.com/docs
- TimescaleDB — Possible: yes. Method: script/polling. Quirks: extension of Postgres. Docs: https://docs.timescale.com/
- Snowflake — Possible: yes. Method: webhook/script. Quirks: use tasks + external function. Docs: https://docs.snowflake.com/
- BigQuery — Possible: yes. Method: script. Quirks: schedule queries + script. Docs: https://cloud.google.com/bigquery/docs
- Amazon RDS — Possible: yes. Method: webhook via EventBridge. Quirks: use event subscriptions. Docs: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html
- Amazon Aurora — Possible: yes. Method: webhook via EventBridge. Quirks: use event subscriptions. Docs: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.html
- Amazon DynamoDB — Possible: yes. Method: webhook via Streams/Lambda. Quirks: needs bridge. Docs: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html
- Firebase Firestore — Possible: yes. Method: script via Cloud Functions. Quirks: use triggers. Docs: https://firebase.google.com/docs/firestore/extend-with-functions
- Supabase — Possible: yes. Method: webhook. Quirks: database webhooks. Docs: https://supabase.com/docs/guides/database/webhooks
- Microsoft SQL Server — Possible: yes. Method: script/polling. Quirks: use SQL Agent + script. Docs: https://learn.microsoft.com/sql/sql-server/
- Oracle Database — Possible: yes. Method: script/polling. Quirks: use scheduler + script. Docs: https://docs.oracle.com/en/database/
- SQLite — Possible: yes. Method: script. Quirks: local DB; use cron + query. Docs: https://www.sqlite.org/docs.html
- CockroachDB — Possible: yes. Method: script/polling. Quirks: use alerts + script. Docs: https://www.cockroachlabs.com/docs/
- YugabyteDB — Possible: yes. Method: script/polling. Quirks: use alerts + script. Docs: https://docs.yugabyte.com/
- Timescale Cloud — Possible: yes. Method: webhook/script. Quirks: use alerts or polling. Docs: https://www.timescale.com/cloud
