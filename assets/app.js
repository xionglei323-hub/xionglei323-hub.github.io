'use strict';
const menuButton=document.querySelector('.menu-toggle');
const mobileNav=document.getElementById('mobile-nav');
menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!expanded));menuButton.setAttribute('aria-label',expanded?'打开导航菜单':'关闭导航菜单');mobileNav.hidden=expanded;});
function closeMenu(){mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','打开导航菜单');}
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const filters=document.querySelectorAll('[data-filter]');const cards=document.querySelectorAll('.project-card');
filters.forEach(button=>button.addEventListener('click',()=>{const type=button.dataset.filter;filters.forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});let count=0;cards.forEach(card=>{card.hidden=type!=='all'&&card.dataset.category!==type;if(!card.hidden)count++;});document.getElementById('filter-status').textContent=`当前显示 ${count} 个项目`; }));
const projects={
hoist:{title:'智能数控吊机控制系统',meta:'2026 — 至今 · 硬件开发与系统联调 · 持续开发',sections:[['项目目标','面向舞台电动葫芦，推进主控板、无线遥控器及 H5 / APP 控制方案，集成伺服通信、限位输入、刹车控制与电池电压采集。'],['技术实践',['主控采用 ESP32-C5、ESP-IDF 与 FreeRTOS，结合 LoRa、Wi-Fi / TCP 和 RS-485 / Modbus RTU。','遥控器采用 STM32F103、TFT 触摸屏及 LVGL，开展界面与无线链路联调。','排查刹车线圈动作引发的偶发主控复位问题，在线圈两端增加续流二极管后，当前测试中未再复现。']],['当前进度','已完成主控与遥控器阶段性编译验证，H5 控制初版可用；APP 与多机联动功能持续开发中。']]},
stage:{title:'舞台特效设备控制板',meta:'2016.08 — 至今 · 电子硬件研发 · 长期产品实践',sections:[['工作范围','承担喷花、喷火系列产品控制板的原理图开发、PCB Layout、样机测试及产品迭代，配合产品需求完成电路设计与验证。'],['核心职责',['跟进立项评估、硬件开发、试产与量产，负责 PCB 下单并协同生产导入。','处理生产测试异常及售后故障，定位原因并提出改善方案。','将生产与现场反馈带回设计和验证环节，积累产品全流程经验。']],['关注重点','电路稳定性、可制造性、测试可执行性，以及真实使用环境中的问题闭环。']]},
materials:{title:'内网物料查重管理工具',meta:'2026 · 需求设计与 AI 辅助开发 · 本机已运行',sections:[['业务需求','面向约 1 万条物料的管理需求，帮助识别完全重复与相似规格记录，支持单条和批量录入，辅助人工复核。'],['实现内容',['使用 Python、Django、SQLite 开发，结合 AI 辅助实现与调试。','包含管理员导入、规则配置、账号与复核、日志等功能。']],['当前进度','已在本机运行，阶段性版本通过 23 项测试。局域网部署待推进，暂不提供公网体验。']]},
testing:{title:'统一 PCB 测试平台',meta:'2026 · 方案设计 · 最小原型待实现',sections:[['方案目标','设计 ESP32 与触摸屏组成的测试平台，连接不同控制板输出，在被测板运行正式固件的条件下，执行功能与温度相关测试。'],['已完成的工作',['确定 ESP32 与触摸屏作为操作与记录终端的基本方案。','梳理温度、预热、喷射、充电参数和无电池运行等测试项。']],['下一步','实现最小原型，验证被测板信号接入、测试流程和结果记录方式。此项目目前处于方案阶段。']]}
};
const dialog=document.getElementById('project-dialog');let lastTrigger=null;
function closeDialog(){dialog.close();}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const data=projects[button.dataset.project];lastTrigger=button;document.getElementById('dialog-title').textContent=data.title;document.getElementById('dialog-meta').textContent=data.meta;const content=document.getElementById('dialog-content');content.replaceChildren();data.sections.forEach(([heading,body])=>{const h=document.createElement('h3');h.textContent=heading;content.append(h);if(Array.isArray(body)){const list=document.createElement('ul');body.forEach(text=>{const li=document.createElement('li');li.textContent=text;list.append(li);});content.append(list);}else{const p=document.createElement('p');p.textContent=body;content.append(p);}});dialog.showModal();document.body.classList.add('modal-open');dialog.scrollTop=0;}));
document.getElementById('close-dialog').addEventListener('click',closeDialog);
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeDialog();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(lastTrigger)lastTrigger.focus({preventScroll:true});});
document.getElementById('dialog-contact').addEventListener('click',()=>closeDialog());
document.getElementById('copy-email').addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{if(!navigator.clipboard)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText('leoxiong555@qq.com');status.textContent='邮箱已复制，可以粘贴到你的邮件应用。';}catch{status.textContent='请手动复制：leoxiong555@qq.com';}});
document.querySelector('.print-resume').addEventListener('click',()=>window.print());
document.getElementById('year').textContent=new Date().getFullYear();
