
'use strict';
const menuButton=document.querySelector('[data-menu]');
const navigation=document.querySelector('[data-navigation]');
if(menuButton && navigation){
  menuButton.addEventListener('click',()=>{
    const open=navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded',String(open));
    menuButton.textContent=open?'Fechar':'Menu';
  });
  navigation.addEventListener('click',event=>{
    if(event.target.closest('a')){navigation.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menu';}
  });
}
const filters=document.querySelectorAll('[data-filter]');
const cards=document.querySelectorAll('.project-card[data-category]');
filters.forEach(button=>button.addEventListener('click',()=>{
  const selected=button.dataset.filter;
  filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  cards.forEach(card=>card.hidden=selected!=='all' && !(card.dataset.category||'').split(/\s+/).includes(selected));
}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
