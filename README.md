# Leonida — GTA VI Completion Tracker

A free, static, installable iPhone web app (PWA) created from the user's GTA VI Excel completion tracker.

## Privacy and your existing Excel progress

**Important: This deployment ZIP intentionally does not contain your private spreadsheet progress.** The 89 completed ticks, personal notes and $2,880 narcotics-fencing total have been saved separately in the file:

`GTA6_Your_Private_Progress_Backup.json`

**DO NOT upload that private JSON file to a public repository or public hosting service.** After you open the hosted app on your iPhone, use **Settings → Import a backup** to restore those entries locally. Your new updates are saved on the device; they are not synchronised to a cloud account.

## What this includes

- 2,685 individual checklist entries from the expanded workbook (including 27 magazine slots and 480 individual collectible cards)
- Five chapter views with soft progression gates
- Chapter-exclusive missables, optional quest entries, open-world categories and named/unnamed cards
- 35 milestone requirements and a separately calculated completionist item total
- Four cumulative dollar-based fencing targets
- Individual per-item ticks, Missed state, editable titles, locations and notes
- Custom discoveries, including random events
- Full JSON progress backup / restore and CSV export
- Home-screen installation and offline support after the first successful load
- No third-party JavaScript libraries, telemetry, advertising or server-side account

Targets and names reproduce the spreadsheet, including unverified early-guide placeholders. This app is not an independently verified game database.

## Free hosting with GitHub Pages

GitHub Pages is free for public repositories on GitHub Free. No Apple Developer Program membership is required for this web-app approach.

1. Create a free GitHub account (if needed).
2. Create a **public** repository called `leonida-tracker`.
3. Extract this ZIP. Upload **the contents** of this folder to the root of the repository: `index.html`, `app.js`, `styles.css`, `data.json`, `sw.js`, `manifest.webmanifest`, `README.md` and the `icons` folder. Keep the icons at `icons/icon-192.png`, etc. Uploading the ZIP alone is not sufficient.
4. In GitHub, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.
5. Wait for GitHub to show your site link, usually in the format `https://YOUR-USERNAME.github.io/leonida-tracker/`.
6. On the iPhone, open that HTTPS link in **Safari**. Tap **Share → Add to Home Screen**, enable **Open as Web App** if offered, and tap **Add**.
7. Open the new Leonida icon on your iPhone. Tap **Settings → Import a backup**, and select your separately downloaded `GTA6_Your_Private_Progress_Backup.json` in Files/iCloud Drive.
8. Confirm the Dashboard shows **89 individual items ticked**, **17/22 Chapter 1 story missions**, and **$2,880 Narcotics Fenced** in Fencing Totals.

Official guides:
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- iPhone Add to Home Screen: https://support.apple.com/guide/iphone/turn-a-website-into-an-app-iphea86e5236/ios

## Keeping your progress safe

All changes are stored locally in browser data. Browser data clearing, deleting/reinstalling the Home Screen web app or iOS storage cleanup could remove progress. **Back up regularly in Settings → Download JSON backup**, and keep that file in iCloud Drive or Files.

There is no automatic device-to-device synchronisation. To move progress, export JSON from the old device, install/open the app on the new device, and import JSON there.

## Offline use

After the hosted app has loaded successfully online at least once, its service worker caches the UI and checklist. Standard checklists and progress can then work offline on that iPhone, subject to iOS storage policies. External guide links require internet access.

## Local testing on a computer

Because the app loads `data.json`, don't double-click `index.html` and expect it to work under `file://`. From the unzipped folder, run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/` in a browser. The production PWA will use GitHub Pages HTTPS.

## File descriptions

- `index.html`: app shell
- `styles.css`: iPhone and desktop responsive presentation
- `app.js`: tasks, filters, milestone calculations, editing, saved progress, backup/restore
- `data.json`: generic checklist, zero private progress
- `manifest.webmanifest`: iPhone home-screen app metadata
- `sw.js`: offline cache
- `icons/`: application icon sizes

MIT-style permission: You may use and modify these files for personal use. Game titles and associated content belong to their respective owners.
