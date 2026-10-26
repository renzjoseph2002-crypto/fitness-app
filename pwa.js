let installPrompt;
const installButton=document.getElementById('install-app');
const pwaStatus=document.getElementById('pwa-status');
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;});
installButton.addEventListener('click',async()=>{
 if(installPrompt){await installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;}
 else alert('Android / Chrome: browser menu → Install app or Add to Home screen.\niPhone / iPad: open in Safari → Share → Add to Home Screen.\nIf already installed, open Daily Form from your home screen.');
});
window.addEventListener('appinstalled',()=>{installButton.textContent='Installed';installButton.disabled=true;});
if('serviceWorker' in navigator){
 navigator.serviceWorker.register('./sw.js').then(()=>navigator.serviceWorker.ready).then(()=>{
 pwaStatus.textContent='Ready for offline use on this device.';
 }).catch(()=>{pwaStatus.textContent='Offline setup failed. Reopen online and try again.';});
}else{pwaStatus.textContent='Offline mode requires a supported browser and HTTPS.';}
