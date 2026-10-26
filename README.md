# Daily Form · GitHub Pages PWA

## Publish
1. Extract this ZIP.
2. Create a GitHub repository (for example, DailyForm).
3. Upload the CONTENTS of this folder directly to the repository root. index.html must be at the root, not inside a nested DailyForm-PWA folder.
4. Go to Settings → Pages → Deploy from a branch → main → /(root) → Save.
5. Open the HTTPS Pages URL GitHub displays. Keep it open until “Ready for offline use on this device” appears.

No build step or external dependencies are needed. Relative paths support both repository Pages URLs and custom domains.

## Install
Android / Chrome: press Install app, or browser menu → Install app / Add to Home screen.
iPhone / iPad: open in Safari → Share → Add to Home Screen, then open the home-screen icon.
Desktop Chrome / Edge: use Install app or the browser install option.
Installation options depend on browser support. Do not open index.html from the Files app to install: use your published HTTPS address.

## Offline and records
After offline setup completes, profile, food logging and training logging work without a connection. Records are saved in this browser on this device, not in GitHub. There is no cloud synchronization or account system. Clearing browser data can erase records. Export a backup from Profile regularly.
The previous hosted preview and your GitHub Pages address have separate browser storage. Existing preview records will not automatically transfer. The current app exports JSON backups but does not yet import them.

## Updates
Upload changed files to the same repository. For shell or asset changes, bump the v1 cache suffix in sw.js. An updated worker activates after all old app tabs/windows close. Reopen online, then close and reopen the app to receive updates. Do not change manifest id or repository path after installation unless intentionally creating a different app.

## Health calculations
Adult general-wellness tool; not medical advice. BMI = kg / metres². Resting energy uses Mifflin–St Jeor with an approximate activity multiplier. Goals do not automatically prescribe a deficit/surplus. Food calories and protein are manually entered for the portion eaten. Training is logged, not automatically prescribed, and does not add calories back to the target.

## Verification
JavaScript syntax, manifest paths, icon dimensions and offline worker handlers checked locally. Live GitHub Pages installation/offline testing must be completed after upload using the HTTPS URL. No personal records or credentials are included.
