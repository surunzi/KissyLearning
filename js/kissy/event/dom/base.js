/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jun 13 11:50
*/
KISSY.add("event/dom/base","./base/dom-event,./base/object,./base/key-codes,./base/special-events,./base/mouseenter,util".split(","),function(d,b,j,h){var d=b("./base/dom-event"),j=b("./base/object"),a=b("./base/key-codes"),g=b("./base/special-events");b("./base/mouseenter");b=b("util");h.exports=b.merge({add:d.on,remove:d.detach,KeyCode:a,Special:g,Object:j},d)});
KISSY.add("event/dom/base/dom-event","event/base,./utils,dom,./special,./observable,./object,util".split(","),function(d,b,j,h){function a(e,c){var a=n[c]||{},k;if(!e.originalType&&(k=a.typeFix)){e.originalType=c;c=k}return c}function g(e,c,r){var f,b,i,r=k.merge(r),c=a(r,c);f=m.getDomEventObservablesHolder(e,1);if(!(i=f.handle)){i=f.handle=function(c){var e=c.type,a=i.currentTarget;if(!(m.triggeredEvent===e||typeof KISSY==="undefined"))if(e=m.getDomEventObservable(a,e)){c.currentTarget=a;c=new q(c);
return e.notify(c)}};i.currentTarget=e}if(!(b=f.observables))b=f.observables={};f=b[c];if(!f){f=b[c]=new m({type:c,currentTarget:e});f.setup()}f.on(r);e=null}function i(e,c,f){var f=k.merge(f),c=a(f,c),e=m.getDomEventObservablesHolder(e),b=(e||{}).observables;if(e&&b)if(c)(c=b[c])&&c.detach(f);else for(c in b)b[c].detach(f)}var d=b("event/base"),o=b("./utils"),l=b("dom"),n=b("./special"),m=b("./observable"),q=b("./object"),k=b("util"),e=d.Utils,f={on:function(a,c,f,k){a=l.query(a);e.batchForType(function(c,
a,f,k){for(var f=e.normalizeParam(a,f,k),p,a=f.type,k=c.length-1;k>=0;k--){p=c[k];g(p,a,f)}},1,a,c,f,k);return a},detach:function(a,c,f,k){a=l.query(a);e.batchForType(function(c,a,f,k){for(var f=e.normalizeParam(a,f,k),p,r,a=f.type,k=c.length-1;k>=0;k--){p=c[k];i(p,a,f);if(f.deep&&p.getElementsByTagName){r=p.getElementsByTagName("*");for(p=r.length-1;p>=0;p--)i(r[p],a,f)}}},1,a,c,f,k);return a},delegate:function(e,c,a,k,b){return f.on(e,c,{fn:k,context:b,filter:a})},undelegate:function(e,c,a,k,b){return f.detach(e,
c,{fn:k,context:b,filter:a})},fire:function(a,c,k,f){var b;if(c.isEventObject){k=c;c=c.type}k=k||{};k.synthetic=1;e.splitAndRun(c,function(c){var i,g,d;e.fillGroupsForEvent(c,k);c=k.type;if((g=n[c])&&g.typeFix)c=g.typeFix;a=l.query(a);for(g=a.length-1;g>=0;g--){i=a[g];d=m.getDomEventObservable(i,c);!f&&!d&&(d=new m({type:c,currentTarget:i}));if(d){i=d.fire(k,f);b!==false&&i!==void 0&&(b=i)}}});return b},fireHandler:function(a,c,e){return f.fire(a,c,e,1)},clone:function(a,c){var e;if(e=m.getDomEventObservablesHolder(a)){var f=
o.data(a);f&&f===o.data(c)&&o.removeData(c);k.each(e.observables,function(a,e){k.each(a.observers,function(a){g(c,e,a)})})}}};h.exports=f});
KISSY.add("event/dom/base/utils",["dom"],function(d,b,j,h){var a=b("dom"),g="ksEventTargetId_"+ +new Date,d=document;h.exports={simpleAdd:d&&d.addEventListener?function(a,b,g,d){a.addEventListener&&a.addEventListener(b,g,!!d)}:function(a,b,g){a.attachEvent&&a.attachEvent("on"+b,g)},simpleRemove:d&&d.removeEventListener?function(a,b,g,d){a.removeEventListener&&a.removeEventListener(b,g,!!d)}:function(a,b,g){a.detachEvent&&a.detachEvent("on"+b,g)},data:function(b,d){return a.data(b,g,d)},removeData:function(b){return a.removeData(b,
g)}}});KISSY.add("event/dom/base/special",[],function(d,b,j,h){h.exports={}});
KISSY.add("event/dom/base/observable","util,logger-manager,event/base,dom,./special,./utils,./observer,./object".split(","),function(d,b,j,h){function a(a){g.mix(this,a);this.reset()}var g=b("util");b("logger-manager");var d=b("event/base"),i=b("dom"),o=b("./special"),l=b("./utils"),n=b("./observer"),m=b("./object"),q=d.Utils;g.extend(a,d.Observable,{setup:function(){var a=this.type,e=o[a]||{},f=this.currentTarget,b=l.data(f).handle;(!e.setup||e.setup.call(f,a)===false)&&l.simpleAdd(f,a,b)},constructor:a,
reset:function(){a.superclass.reset.call(this);this.lastCount=this.delegateCount=0},notify:function(a){var e=a.target,f=a.type,b=this.currentTarget,c=this.observers,g=[],d,l,h=this.delegateCount||0,o,n;if(h&&e.nodeType)for(;e!==b;){if(e.disabled!==true||f!=="click"){var m={},j,q,t;o=[];for(l=0;l<h;l++){n=c[l];t=n.filter;q=t+"";j=m[q];j===void 0&&(j=m[q]=i.test(e,t));j&&o.push(n)}o.length&&g.push({currentTarget:e,currentTargetObservers:o})}e=e.parentNode||b}h<c.length&&g.push({currentTarget:b,currentTargetObservers:c.slice(h)});
l=0;for(e=g.length;!a.isPropagationStopped()&&l<e;++l){f=g[l];o=f.currentTargetObservers;f=f.currentTarget;a.currentTarget=f;for(f=0;!a.isImmediatePropagationStopped()&&f<o.length;f++){b=o[f];b=b.notify(a,this);d!==false&&b!==void 0&&(d=b)}}return d},fire:function(b,e){var b=b||{},f=""+this.type,p,c,d=o[f]||{};p=d.bubbles!==false;var l=this.currentTarget;if(!(d.fire&&d.fire.call(l,e)===false)){if(!b.isEventObject){c=b;b=new m({type:f});g.mix(b,c)}b.currentTarget=l;b.target=b.target||l;if(!(d.preFire&&
d.preFire.call(l,b,e)===false)){c=l;var h=i.getWindow(c),n=h.document,d=[],j,q="on"+f,u=0;do{d.push(c);c=c.parentNode||c.ownerDocument||c===n&&h}while(!e&&c&&p);c=d[u];do{b.currentTarget=c;if(p=a.getDomEventObservable(c,f)){p=p.notify(b);p!==void 0&&j!==false&&(j=p)}c[q]&&c[q].call(c)===false&&b.preventDefault();c=d[++u]}while(!e&&c&&!b.isPropagationStopped());if(!e&&!b.isDefaultPrevented()){try{if(l[f]&&!g.isWindow(l)){a.triggeredEvent=f;l[f]()}}catch(s){}a.triggeredEvent=""}return j}}},on:function(a){var e=
this.observers,b=o[this.type]||{},a=a instanceof n?a:new n(a);if(this.findObserver(a)===-1){if(a.filter){e.splice(this.delegateCount,0,a);this.delegateCount++}else if(a.last){e.push(a);this.lastCount++}else e.splice(e.length-this.lastCount,0,a);b.add&&b.add.call(this.currentTarget,a)}},detach:function(a){var e,b=o[this.type]||{},g="filter"in a,c=a.filter,d=a.context,i=a.fn,l=this.currentTarget,h=this.observers,a=a.groups;if(h.length){a&&(e=q.getGroupsRe(a));var j,n,m,s,v=h.length;if(i||g||e){d=d||
l;j=a=0;for(n=[];a<v;++a){m=h[a];s=m.context||l;if(d!==s||i&&i!==m.fn||g&&(c&&c!==m.filter||!c&&!m.filter)||e&&!m.groups.match(e))n[j++]=m;else{m.filter&&this.delegateCount&&this.delegateCount--;m.last&&this.lastCount&&this.lastCount--;b.remove&&b.remove.call(l,m)}}this.observers=n}else this.reset();this.checkMemory()}},checkMemory:function(){var a=this.type,e,b,d=o[a]||{},c=this.currentTarget,i=l.data(c);if(i){e=i.observables;if(!this.hasObserver()){b=i.handle;(!d.tearDown||d.tearDown.call(c,a)===
false)&&l.simpleRemove(c,a,b);delete e[a]}if(g.isEmptyObject(e)){i.handle=null;l.removeData(c)}}}});a.triggeredEvent="";a.getDomEventObservable=function(a,e){var b=l.data(a),g;if(b)g=b.observables;return g?g[e]:null};a.getDomEventObservablesHolder=function(a,e){var b=l.data(a);!b&&e&&l.data(a,b={});return b};h.exports=a});
KISSY.add("event/dom/base/observer",["event/base","./special","util"],function(d,b,j,h){function a(b){a.superclass.constructor.call(this,b)}var d=b("event/base"),g=b("./special");b("util").extend(a,d.Observer,{keys:"fn,filter,data,context,originalType,groups,last".split(","),notifyInternal:function(a,b){var d,h,m=a.type,j;(j=this.originalType)?a.type=j:j=m;(d=g[j])&&d.handle?(d=d.handle(a,this,b))&&0<d.length&&(h=d[0]):h=this.simpleNotify(a,b);!1===h&&a.halt();a.type=m;return h}});h.exports=a});
KISSY.add("event/dom/base/object",["event/base","util"],function(d,b,j,h){function a(){return n}function g(){return m}function i(b){var f=b.type,d="function"===typeof b.stopPropagation||"boolean"===typeof b.cancelBubble;i.superclass.constructor.call(this);this.originalEvent=b;var c=g;"defaultPrevented"in b?c=b.defaultPrevented?a:g:"getPreventDefault"in b?c=b.getPreventDefault()?a:g:"returnValue"in b&&(c=b.returnValue===m?a:g);this.isDefaultPrevented=c;var h=[],j,n=q.concat();o.each(k,function(a){f.match(a.reg)&&
(n=n.concat(a.props),a.fix&&h.push(a.fix))});for(c=n.length;c;)j=n[--c],this[j]=b[j];!this.target&&d&&(this.target=b.srcElement||l);this.target&&3===this.target.nodeType&&(this.target=this.target.parentNode);for(c=h.length;c;)d=h[--c],d(this,b);this.timeStamp=b.timeStamp||o.now()}var d=b("event/base"),o=b("util"),l=document,n=!0,m=!1,q="altKey,bubbles,cancelable,ctrlKey,currentTarget,eventPhase,metaKey,shiftKey,target,timeStamp,view,type".split(","),k=[{reg:/^key/,props:["char","charCode","key","keyCode",
"which"],fix:function(a,b){null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode);void 0===a.metaKey&&(a.metaKey=a.ctrlKey)}},{reg:/^touch/,props:["touches","changedTouches","targetTouches"]},{reg:/^hashchange$/,props:["newURL","oldURL"]},{reg:/^gesturechange$/i,props:["rotation","scale"]},{reg:/^(mousewheel|DOMMouseScroll)$/,props:[],fix:function(a,b){var g,c,d,i=b.wheelDelta,h=b.axis,l=b.wheelDeltaY,k=b.wheelDeltaX,j=b.detail;i&&(d=i/120);j&&(d=0-(0===j%3?j/3:j));void 0!==h&&(h===a.HORIZONTAL_AXIS?
(c=0,g=0-d):h===a.VERTICAL_AXIS&&(g=0,c=d));void 0!==l&&(c=l/120);void 0!==k&&(g=-1*k/120);!g&&!c&&(c=d);void 0!==g&&(a.deltaX=g);void 0!==c&&(a.deltaY=c);void 0!==d&&(a.delta=d)}},{reg:/^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,props:"buttons,clientX,clientY,button,offsetX,relatedTarget,which,fromElement,toElement,offsetY,pageX,pageY,screenX,screenY".split(","),fix:function(a,b){var d,c,g=a.target,i=b.button;g&&null==a.pageX&&null!=b.clientX&&(d=g.ownerDocument||l,c=d.documentElement,
d=d.body,a.pageX=b.clientX+(c&&c.scrollLeft||d&&d.scrollLeft||0)-(c&&c.clientLeft||d&&d.clientLeft||0),a.pageY=b.clientY+(c&&c.scrollTop||d&&d.scrollTop||0)-(c&&c.clientTop||d&&d.clientTop||0));!a.which&&void 0!==i&&(a.which=i&1?1:i&2?3:i&4?2:0);!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===g?a.toElement:a.fromElement);return a}}];o.extend(i,d.Object,{constructor:i,preventDefault:function(){var a=this.originalEvent;a.preventDefault?a.preventDefault():a.returnValue=m;i.superclass.preventDefault.call(this)},
stopPropagation:function(){var a=this.originalEvent;a.stopPropagation?a.stopPropagation():a.cancelBubble=n;i.superclass.stopPropagation.call(this)}});h.exports=i});
KISSY.add("event/dom/base/key-codes",[],function(d,b,j,h){var a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,
Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,
WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(b){var d=b.keyCode;if(b.altKey&&!b.ctrlKey||b.metaKey||d>=a.F1&&d<=a.F12)return!1;switch(d){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return!1;
default:return!0}},isCharacterKey:function(b){if(b>=a.ZERO&&b<=a.NINE||b>=a.NUM_ZERO&&b<=a.NUM_MULTIPLY||b>=a.A&&b<=a.Z||-1!==window.navigation.userAgent.indexOf("WebKit")&&0===b)return!0;switch(b){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return!0;
default:return!1}}};h.exports=a});
KISSY.add("event/dom/base/special-events",["./dom-event","./special","util","ua"],function(d,b,j,h){var a=b("./dom-event"),d=b("./special"),j=b("util"),b=b("ua").gecko?"DOMMouseScroll":"mousewheel";h.exports=j.mix(d,{mousewheel:{typeFix:b},load:{bubbles:!1},click:{fire:function(a){if(!a&&"checkbox"===""+this.type&&this.click&&"input"===this.nodeName.toLowerCase())return this.click(),!1}},focus:{bubbles:!1,preFire:function(b,d){if(!d)return a.fire(this,"focusin")},fire:function(a){if(!a&&this.ownerDocument&&
this!==this.ownerDocument.activeElement&&this.focus)return this.focus(),!1}},blur:{bubbles:!1,preFire:function(b,d){if(!d)return a.fire(this,"focusout")},fire:function(a){if(!a&&this.ownerDocument&&this===this.ownerDocument.activeElement&&this.blur)return this.blur(),!1}}})});
KISSY.add("event/dom/base/mouseenter",["dom","./special","util"],function(d,b){var j=b("dom"),h=b("./special");b("util").each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(a){h[a.name]={typeFix:a.fix,handle:function(a,b,d){var h=a.currentTarget,n=a.relatedTarget;if(!n||n!==h&&!j.contains(h,n))return[b.simpleNotify(a,d)]}}})});
