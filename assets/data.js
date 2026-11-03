// 网站内容集中在这里，修改文字后重新上传此文件即可。
window.siteData = {
  projects: [
    {id:'hoist', number:'01', category:'EMBEDDED / CONTROL', status:'持续开发', title:'智能数控吊机控制系统', english:'Smart Hoist System', description:'连接主控、无线遥控器与网页端，推进舞台电动葫芦的软硬件协同控制。', tags:['ESP32-C5','STM32','LoRa','Modbus'], visual:'hoist', sections:[['项目目标','面向舞台电动葫芦，推进主控板、无线遥控器及 H5 / APP 控制方案，集成伺服通信、限位输入、刹车控制与电池电压采集。'],['技术实践','主控采用 ESP32-C5、ESP-IDF 与 FreeRTOS，结合 LoRa、Wi-Fi / TCP 和 RS-485 / Modbus RTU；遥控器采用 STM32F103、TFT 触摸屏及 LVGL。'],['当前进度','主控与遥控器已完成阶段性编译验证，H5 控制初版可用；APP 与多机联动功能持续开发中。']]},
    {id:'stage', number:'02', category:'HARDWARE / PRODUCT', status:'长期产品实践', title:'舞台特效设备控制板', english:'Stage Effects Control', description:'参与喷花、喷火系列产品控制板开发，跟进样机、试产、量产与异常处理。', tags:['PCB Design','Hardware','Validation'], visual:'stage', sections:[['工作范围','承担喷花、喷火系列产品控制板的原理图开发、PCB Layout、样机测试及产品迭代。'],['工程实践','跟进立项评估、硬件开发、试产与量产，处理生产测试异常及售后故障，并将反馈带回设计和验证环节。']]},
    {id:'materials', number:'03', category:'SOFTWARE / AI-ASSISTED', status:'本机已运行', title:'内网物料查重管理工具', english:'Material Dedup System', description:'面向约一万条物料，辅助识别重复和相似规格，为人工复核提供依据。', tags:['Python','Django','SQLite'], visual:'software', sections:[['业务需求','面向约一万条物料的管理需求，识别完全重复与相似规格，支持单条和批量录入及人工复核。'],['实现与进度','使用 Python、Django、SQLite，结合 AI 辅助实现与调试；阶段性版本已在本机运行，局域网部署待推进。']]},
    {id:'testing', number:'04', category:'TEST / CONCEPT', status:'方案阶段', title:'统一 PCB 测试平台', english:'PCB Test Platform', description:'以 ESP32 与触摸屏构建测试终端，探索不同控制板的统一功能测试。', tags:['ESP32','HMI','Testing'], visual:'testing', sections:[['方案目标','设计 ESP32 与触摸屏组成的测试平台，连接不同控制板，在被测板运行正式固件时执行功能与温度相关测试。'],['下一步','实现最小原型，验证被测板信号接入、测试流程和结果记录方式。']]}
  ],
  skills:[['HARDWARE','原理图 / PCB / 电源设计','器件选型、PCB Layout、样机验证与生产导入。'],['EMBEDDED','STM32 / ESP32 / FreeRTOS','嵌入式控制、LVGL、人机界面与系统联调。'],['CONNECTIVITY','LoRa / RS-485 / Modbus','无线链路、串行通信与控制系统集成。'],['WORKFLOW','Python / Git / AI Tools','用自动化和 AI 辅助开发、调试与文档整理。']],
  experience:[['2016.08 — 至今','湖南孝文电子科技有限公司','电子工程师','承担舞台特效产品控制板研发，跟进立项、开发、试产与量产，处理生产异常及客户反馈。'],['2016.03 — 2016.08','微经纬电脑设计有限公司','电路工程师 / 技术员','使用 Altium Designer、Allegro、PADS 绘制封装，开展 PCB 布局与布线。'],['教育与培训','湖南信息职业技术学院','大专 · 电子工程与自动化','2012 年入学；2015 年参加高级 PCB 制图员培训。']]
};
