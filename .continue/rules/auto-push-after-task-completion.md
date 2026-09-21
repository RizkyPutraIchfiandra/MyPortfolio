---
description: Aturan untuk auto-push ke GitHub setelah menyelesaikan task agar
  Vercel auto-deploy.
alwaysApply: true
---

Setelah menyelesaikan task pada project ini (perubahan code, fitur baru, fix, dll) dan build sudah lulus, otomatis lakukan git add, commit dengan pesan deskriptif (format conventional commits seperti feat:, fix:, refactor:, style:), dan push ke remote main branch. Ini supaya Vercel auto-deploy ke production. Jangan tanya konfirmasi untuk push rutin setelah task selesai — langsung lakukan kecuali user minta sebaliknya. Tetap minta konfirmasi untuk operasi destruktif (force push, reset hard, dll).