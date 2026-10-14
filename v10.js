const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.work-card');
filters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach(b => {const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  projects.forEach(card => card.hidden=filter!=='all' && !card.dataset.category.split(' ').includes(filter));
}));
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.header-nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));}
const y=document.getElementById('year');if(y)y.textContent=String(new Date().getFullYear());
