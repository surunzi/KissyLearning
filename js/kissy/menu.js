/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jun 13 11:52
*/
KISSY.add("menu","menu/control,menu/menuitem,menu/check-menuitem,menu/radio-menuitem,menu/submenu,menu/popupmenu".split(","),function(d,c,g,f){d=c("menu/control");d.Item=c("menu/menuitem");d.CheckItem=c("menu/check-menuitem");d.RadioItem=c("menu/radio-menuitem");d.SubMenu=c("menu/submenu");d.PopupMenu=c("menu/popupmenu");f.exports=d});
KISSY.add("menu/control",["util","component/container","component/extension/delegate-children","node"],function(d,c,g,f){function b(a){a.target.isMenu&&(a=a.newVal,this.el.setAttribute("aria-activedescendant",a&&a.el.id||""))}var a=c("util"),d=c("component/container"),g=c("component/extension/delegate-children"),i=c("node").Event.KeyCode;f.exports=d.extend([g],{isMenu:1,beforeCreateDom:function(a){a.elAttrs.role="menu"},bindUI:function(){this.on("afterHighlightedItemChange",b,this)},_onSetHighlightedItem:function(a,
e){var b;a&&e&&(b=e.prevVal)&&b.set("highlighted",!1,{data:{byPassSetHighlightedItem:1}})},_onSetVisible:function(a,e){this.callSuper(a,e);var b;!a&&(b=this.get("highlightedItem"))&&b.set("highlighted",!1)},getRootMenu:function(){return this},handleMouseEnterInternal:function(a){this.callSuper(a);a=this.getRootMenu();a!==this&&a._popupAutoHideTimer&&(clearTimeout(a._popupAutoHideTimer),a._popupAutoHideTimer=null)},handleBlurInternal:function(a){this.callSuper(a);var e;(e=this.get("highlightedItem"))&&
e.set("highlighted",!1)},_getNextEnabledHighlighted:function(a,e){var b=this.get("children"),h=b.length,c=a;do{var d=b[a];if(!d.get("disabled")&&!1!==d.get("visible"))return b[a];a=(a+e+h)%h}while(a!==c)},handleKeyDownInternal:function(b){var e=this.get("highlightedItem");if(e&&e.handleKeyDownInternal(b))return!0;var c=this.get("children"),h=c.length;if(0!==h){var d;switch(b.keyCode){case i.ESC:(e=this.get("highlightedItem"))&&e.set("highlighted",!1);break;case i.HOME:d=this._getNextEnabledHighlighted(0,
1);break;case i.END:d=this._getNextEnabledHighlighted(h-1,-1);break;case i.UP:e?(b=a.indexOf(e,c),h=(b-1+h)%h):h-=1;d=this._getNextEnabledHighlighted(h,-1);break;case i.DOWN:e?(b=a.indexOf(e,c),h=(b+1+h)%h):h=0,d=this._getNextEnabledHighlighted(h,1)}if(d)return d.set("highlighted",!0,{data:{fromKeyboard:1}}),!0}},containsElement:function(a){var b=this.$el;if(!this.get("visible")||!b)return!1;if(b&&(b[0]===a||b.contains(a)))return!0;for(var b=this.get("children"),d=0,h=b.length;d<h;d++){var c=b[d];
if(c.containsElement&&c.containsElement(a))return!0}return!1}},{ATTRS:{highlightedItem:{value:null},defaultChildCfg:{valueFn:function(){return{xclass:"menuitem"}}}},xclass:"menu"})});
KISSY.add("menu/menuitem",["component/control","node"],function(d,c,g,f){var d=c("component/control"),b=c("node");f.exports=d.extend({isMenuItem:1,beforeCreateDom:function(a){a.elAttrs.role="menuitem"},handleClickInternal:function(a){this.callSuper(a);a.preventDefault();this.fire("click");return!0},_onSetHighlighted:function(a,d){var c=this.get("parent");this.callSuper(a,d);if(!d||!d.byPassSetHighlightedItem)this.get("rendered")?c.set("highlightedItem",a?this:null):a&&c.set("highlightedItem",this);
if(a){var e=this.$el;(c=e.parent(function(a){return"visible"!==b(a).css("overflow")},c.get("el").parent()))&&e.scrollIntoView(c,{alignWithTop:!0,allowHorizontalScroll:!0,onlyScrollIfNeeded:!0})}},containsElement:function(a){var b=this.$el;return b&&(b[0]===a||b.contains(a))}},{ATTRS:{focusable:{value:!1},handleGestureEvents:{value:!1}},xclass:"menuitem"})});
KISSY.add("menu/check-menuitem",["./menuitem","component/extension/content-box","./check-menuitem-xtpl"],function(d,c,g,f){d=c("./menuitem");g=c("component/extension/content-box");c=c("./check-menuitem-xtpl");f.exports=d.extend([g],{beforeCreateDom:function(b){b.checked&&b.elCls.push(this.getBaseCssClasses("checked"))},_onSetChecked:function(b){var a=this.getBaseCssClasses("checked");this.$el[b?"addClass":"removeClass"](a)},handleClickInternal:function(b){this.set("checked",!this.get("checked"));
this.callSuper(b);return!0}},{ATTRS:{contentTpl:{value:c},checked:{render:1,sync:0}},xclass:"check-menuitem"})});
KISSY.add("menu/check-menuitem-xtpl",[],function(d,c,g,f){d=function(b,a,d){var c=this.root.utils.callFn;a.write('<div class="',0);var e={escape:1},f=[];f.push("checkbox");e.params=f;if((e=c(this,b,e,a,["getBaseCssClasses"],0,1))&&e.isBuffer)a=e,e=d;a.write(e,!0);a.write('">\r\n</div>\r\n<div class="',0);e={escape:1};f=[];f.push("content");e.params=f;if((c=c(this,b,e,a,["getBaseCssClasses"],0,3))&&c.isBuffer)a=c,c=d;a.write(c,!0);a.write('">',0);b=b.resolve(["content"],0);a.write(b,!1);a.write("</div>",
0);return a};d.TPL_NAME=f.name;d.version="5.0.0";f.exports=d});
KISSY.add("menu/radio-menuitem",["./menuitem","component/extension/content-box","./radio-menuitem-xtpl"],function(d,c,g,f){d=c("./menuitem");g=c("component/extension/content-box");c=c("./radio-menuitem-xtpl");f.exports=d.extend([g],{beforeCreateDom:function(b){b.elAttrs.role="menuitemradio";b.selected&&b.elCls.push(this.getBaseCssClasses("selected"))},_onSetSelected:function(b){var a=this.getBaseCssClasses("selected");this.$el[b?"addClass":"removeClass"](a)},handleClickInternal:function(b){var a=
this.get("parent").getRootMenu(),c=a.__selectedItem;c&&c!==this&&c.set("selected",!1);a.__selectedItem=this;this.set("selected",!0);this.callSuper(b);return!0},destructor:function(){var b=this.get("parent");if((b=b&&b.getRootMenu())&&b.__selectedItem===this)b.__selectedItem=null}},{ATTRS:{contentTpl:{value:c},selected:{sync:0,render:1}},xclass:"radio-menuitem"})});
KISSY.add("menu/radio-menuitem-xtpl",[],function(d,c,g,f){d=function(b,a,c){var d=this.root.utils.callFn;a.write('<div class="',0);var e={escape:1},f=[];f.push("radio");e.params=f;if((e=d(this,b,e,a,["getBaseCssClasses"],0,1))&&e.isBuffer)a=e,e=c;a.write(e,!0);a.write('">\r\n</div>\r\n<div class="',0);e={escape:1};f=[];f.push("content");e.params=f;if((d=d(this,b,e,a,["getBaseCssClasses"],0,3))&&d.isBuffer)a=d,d=c;a.write(d,!0);a.write('">',0);b=b.resolve(["content"],0);a.write(b,!1);a.write("</div>",
0);return a};d.TPL_NAME=f.name;d.version="5.0.0";f.exports=d});
KISSY.add("menu/submenu",["util","./submenu-xtpl","./menuitem","component/extension/content-box","node"],function(d,c,g,f){function b(a){var b=a.target;b!==this&&b.isMenuItem&&a.newVal&&(this.clearHidePopupMenuTimers(),this.get("highlighted")||(this.set("highlighted",!0),b.set("highlighted",!1),b.set("highlighted",!0)))}function a(){var a=this.get("menu"),b={node:this.$el,points:["tr","tl"],overflow:{adjustX:1,adjustY:1}};j.mix(a.get("align"),b,!1);a.show();this.el.setAttribute("aria-haspopup",a.get("el").attr("id"))}
function i(){this.get("menu").hide()}var j=c("util"),d=c("./submenu-xtpl"),g=c("./menuitem"),e=c("component/extension/content-box"),k=c("node").Event.KeyCode;f.exports=g.extend([e],{isSubMenu:1,decorateDom:function(a){var b=this.get("prefixCls"),a=a.one("."+b+"popupmenu"),c=a[0].ownerDocument.body;c.insertBefore(a[0],c.firstChild);this.setInternal("menu",new (this.getComponentConstructorByNode(b,a))({srcNode:a,prefixCls:b}))},bindUI:function(){this.on("afterHighlightedChange",b,this)},clearShowPopupMenuTimers:function(){var a;
if(a=this._showTimer)a.cancel(),this._showTimer=null},clearHidePopupMenuTimers:function(){var a;if(a=this._dismissTimer)a.cancel(),this._dismissTimer=null},clearSubMenuTimers:function(){this.clearHidePopupMenuTimers();this.clearShowPopupMenuTimers()},handleMouseLeaveInternal:function(){this.set("highlighted",!1,{data:{fromMouse:1}});this.clearSubMenuTimers();this.get("menu").get("visible")&&(this._dismissTimer=j.later(i,1E3*this.get("menuDelay"),!1,this))},handleMouseEnterInternal:function(){this.set("highlighted",
!0,{data:{fromMouse:1}});this.clearSubMenuTimers();this.get("menu").get("visible")||(this._showTimer=j.later(a,1E3*this.get("menuDelay"),!1,this))},_onSetHighlighted:function(b,c){this.callSuper(b,c);c&&!c.fromMouse&&(b&&!c.fromKeyboard?a.call(this):b||i.call(this))},handleClickInternal:function(b){a.call(this);this.callSuper(b)},handleKeyDownInternal:function(b){var c=this.get("menu"),d,e=c.get("visible"),f=b.keyCode;if(e){if(!c.handleKeyDownInternal(b))if(f===k.LEFT)this.set("highlighted",!1),this.set("highlighted",
!0,{data:{fromKeyboard:1}});else return}else if(f===k.RIGHT)a.call(this),b=c.get("children"),(d=b[0])&&d.set("highlighted",!0,{data:{fromKeyboard:1}});else{if(f===k.ENTER)return this.handleClickInternal(b);return}return!0},containsElement:function(a){return this.get("menu").containsElement(a)},destructor:function(){var a=this.get("menu");this.clearSubMenuTimers();a.destroy()}},{ATTRS:{contentTpl:{value:d},menuDelay:{value:0.15},menu:{getter:function(a){a=a||{};a.isControl||(a.xclass=a.xclass||"popupmenu",
a=this.createComponent(a),this.setInternal("menu",a));return a},setter:function(a){a.isControl&&a.setInternal("parent",this)}}},xclass:"submenu"})});
KISSY.add("menu/submenu-xtpl",[],function(d,c,g,f){d=function(b,a,c){var d=this.root.utils.callFn;a.write('<div class="',0);var e={escape:1},f=[];f.push("content");e.params=f;if((d=d(this,b,e,a,["getBaseCssClasses"],0,1))&&d.isBuffer)a=d,d=c;a.write(d,!0);a.write('">',0);c=b.resolve(["content"],0);a.write(c,!1);a.write('</div>\r\n<span class="',0);b=b.resolve(["prefixCls"],0);a.write(b,!0);a.write('submenu-arrow">\u25ba</span>',0);return a};d.TPL_NAME=f.name;d.version="5.0.0";f.exports=d});
KISSY.add("menu/popupmenu",["component/extension/align","component/extension/shim","./control","component/extension/content-box"],function(d,c,g,f){var d=c("component/extension/align"),g=c("component/extension/shim"),b=c("./control"),c=c("component/extension/content-box");f.exports=b.extend([c,g,d],{getRootMenu:function(){var a=this,b;do b=a,a=a.get("parent");while(a&&(a.isMenuItem||a.isMenu));return b},handleMouseLeaveInternal:function(a){this.callSuper(a);if(this.get("autoHideOnMouseLeave")){var b=
this.getRootMenu();b!==this&&(clearTimeout(b._popupAutoHideTimer),b._popupAutoHideTimer=setTimeout(function(){var a;(a=b.get("highlightedItem"))&&a.set("highlighted",!1)},1E3*this.get("parent").get("menuDelay")))}},isPopupMenu:1,handleBlurInternal:function(a){this.callSuper(a);this.hide()}},{ATTRS:{focusable:{value:!1},autoHideOnMouseLeave:{},visible:{value:!1}},xclass:"popupmenu"})});
