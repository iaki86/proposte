function loadMap(btn){
  var box=btn.closest('.map');
  var f=document.createElement('iframe');
  f.title='Mappa';f.loading='lazy';f.src=box.getAttribute('data-src');
  box.innerHTML='';box.appendChild(f);
}
document.addEventListener('click',function(ev){
  var m=document.getElementById('menu');
  if(m&&m.classList.contains('open')&&ev.target.closest('.menu a')){m.classList.remove('open');}
});
