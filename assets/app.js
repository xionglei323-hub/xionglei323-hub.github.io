'use strict';
const { projects, skills, experience } = window.siteData;
const grid = document.getElementById('projects-grid');
for (const project of projects) {
  const item = document.createElement('details');
  const summary = document.createElement('summary');
  summary.innerHTML = `<span class="index">${project.number}</span><span class="project-name"><small>${project.english}</small><strong>${project.title}</strong></span><span class="status">${project.status}</span><span class="plus" aria-hidden="true"></span>`;
  const notes = document.createElement('div');
  notes.className = 'notes';
  notes.innerHTML = `<p class="technologies">${project.tags.join(' / ')}</p>` + project.sections.map(([title, body]) => `<h3>${title}</h3><p>${body}</p>`).join('');
  if (project.id === 'hoist') {
    const link = document.createElement('a');
    link.href = 'projects/esp32-floorplan/index.html';
    link.className = 'text-link';
    link.textContent = '探索 ESP32-C5 交互架构图 ↗';
    notes.append(link);
  }
  item.append(summary, notes);
  grid.append(item);
}
document.getElementById('skills-list').innerHTML=skills.map(s=>`<article><span>${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join('');
document.getElementById('timeline').innerHTML=experience.map(e=>`<article><span>${e[0]}</span><div><h3>${e[1]}</h3><strong>${e[2]}</strong><p>${e[3]}</p>${e[4] ? `<a class="text-link" href="${e[4]}">公司官网 ↗</a>` : ''}</div></article>`).join('');
const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('nav');menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded)});nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});document.getElementById('year').textContent=new Date().getFullYear();

document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus()}});
