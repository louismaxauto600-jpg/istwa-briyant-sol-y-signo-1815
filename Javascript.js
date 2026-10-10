// BSS1815 - Orange Apricot Black Only
window.addEventListener('scroll',()=>{
  const scrolled=(window.scrollY/(document.documentElement.scrollHeight-innerHeight))*100;
  document.getElementById('progress').style.width=scrolled+'%';
});
document.getElementById('playBtn').onclick=()=>{
  document.getElementById('videoModal').classList.add('show');
}
