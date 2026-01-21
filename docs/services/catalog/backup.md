# Backup and scheduling

Method legend: webhook, script, polling, email, ci

- Restic — Possible: yes. Method: script. Quirks: use backup hooks. Docs: https://restic.readthedocs.io/
- BorgBackup — Possible: yes. Method: script. Quirks: pre/post hooks. Docs: https://borgbackup.readthedocs.io/
- Duplicati — Possible: yes. Method: webhook. Quirks: event notifications. Docs: https://duplicati.readthedocs.io/
- rclone — Possible: yes. Method: script. Quirks: wrap command. Docs: https://rclone.org/docs/
- Veeam — Possible: yes. Method: script/email. Quirks: use job notifications. Docs: https://helpcenter.veeam.com/
- Acronis — Possible: yes. Method: email/script. Quirks: email notifications. Docs: https://www.acronis.com/en-us/support/documentation/
- Bacula — Possible: yes. Method: script. Quirks: job hooks. Docs: https://www.bacula.org/
- Bareos — Possible: yes. Method: script. Quirks: job hooks. Docs: https://docs.bareos.org/
- UrBackup — Possible: yes. Method: email/script. Quirks: email only by default. Docs: https://www.urbackup.org/
- Syncthing — Possible: yes. Method: webhook. Quirks: events API. Docs: https://docs.syncthing.net/events.html
- rsync — Possible: yes. Method: script. Quirks: wrap command with notifier. Docs: https://download.samba.org/pub/rsync/rsync.html
- ZFS snapshots — Possible: yes. Method: script. Quirks: use zfs events/hooks. Docs: https://openzfs.github.io/
- Cron (Linux/macOS) — Possible: yes. Method: script. Quirks: environment limited. Docs: https://man7.org/linux/man-pages/man5/crontab.5.html
- systemd timers — Possible: yes. Method: script. Quirks: use OnFailure. Docs: https://www.freedesktop.org/software/systemd/man/systemd.timer.html
- Windows Task Scheduler — Possible: yes. Method: script. Quirks: use PowerShell curl. Docs: https://learn.microsoft.com/windows/win32/taskschd/task-scheduler-start-page
- Anacron — Possible: yes. Method: script. Quirks: periodic jobs. Docs: https://man7.org/linux/man-pages/man8/anacron.8.html
- Duplicacy — Possible: yes. Method: script. Quirks: run wrapper script. Docs: https://duplicacy.com/
- Arq Backup — Possible: yes. Method: script/email. Quirks: email notifications; use bridge. Docs: https://www.arqbackup.com/documentation/
- Synology Hyper Backup — Possible: yes. Method: email/script. Quirks: email only by default. Docs: https://kb.synology.com/
- QNAP Hybrid Backup Sync — Possible: yes. Method: email/script. Quirks: email notifications; use bridge. Docs: https://www.qnap.com/en/how-to/faq
- Kopia — Possible: yes. Method: script. Quirks: use post hooks. Docs: https://kopia.io/docs/
- Resticprofile — Possible: yes. Method: script. Quirks: use hooks in profiles. Docs: https://creativeprojects.github.io/resticprofile/
