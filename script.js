function face(skin,hair,bg,extra){return '<svg viewBox="0 0 44 44" width="100%" height="100%"><rect width="44" height="44" fill="'+bg+'"/><path d="M6 44c2-10 9-13 16-13s14 3 16 13z" fill="#2d3a55"/><circle cx="22" cy="21" r="9" fill="'+skin+'"/><path d="M12.5 20c0-8 5-11 10-11s9 3 9 10c-2-4-5-5-9-5s-7 2-10 6z" fill="'+hair+'"/>'+(extra||'')+'<circle cx="18.5" cy="21" r="1" fill="#222"/><circle cx="25.5" cy="21" r="1" fill="#222"/><path d="M19 25.5q3 2 6 0" stroke="#7a3b2a" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>'}
const glasses='<g fill="none" stroke="#222" stroke-width="1"><circle cx="18.5" cy="21" r="2.6"/><circle cx="25.5" cy="21" r="2.6"/></g>';
const beard='<path d="M14 24q8 12 16 0q-2 8-8 8t-8-8z" fill="#3a2418"/>';
document.getElementById('me').innerHTML=face('#e9b98a','#2b1a10','#f4d35e',glasses);
var nav=document.querySelector('nav'),blob=nav.querySelector('.blob'),items=nav.querySelectorAll('div:not(.fab):not(.sp)');
function place(t){blob.style.width=t.offsetWidth+'px';blob.style.transform='translateX('+t.offsetLeft+'px)'}
items.forEach(function(t){t.addEventListener('click',function(){nav.querySelectorAll('div.active').forEach(function(a){a.classList.remove('active')});void t.offsetWidth;t.classList.add('active');place(t)})});
function sync(){place(nav.querySelector('div.active'))}
sync();window.addEventListener('resize',sync);
