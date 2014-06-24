/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jun 13 11:41
*/
KISSY.add("component/extension/align",["util","node","ua"],function(y,m,z,u){function n(a){var c=a.ownerDocument.body,d=k(a).css("position");if(!("fixed"===d||"absolute"===d))return"html"===a.nodeName.toLowerCase()?null:a.parentNode;for(a=a.parentNode;a&&a!==c;a=a.parentNode)if(d=k(a).css("position"),"static"!==d)return a;return null}function o(a){var c,d,b={left:0,right:Infinity,top:0,bottom:Infinity},f;f=a.ownerDocument;d=k(f).getWindow();c=f.body;for(f=f.documentElement;a=n(a);)if((!v.ie||0!==
a.clientWidth)&&a!==c&&a!==f&&"visible"!==k(a).css("overflow")){var h=k(a).offset();h.left+=a.clientLeft;h.top+=a.clientTop;b.top=Math.max(b.top,h.top);b.right=Math.min(b.right,h.left+a.clientWidth);b.bottom=Math.min(b.bottom,h.top+a.clientHeight);b.left=Math.max(b.left,h.left)}f=d.scrollLeft();a=d.scrollTop();b.left=Math.max(b.left,f);b.top=Math.max(b.top,a);c=d.width();d=d.height();b.right=Math.min(b.right,f+c);b.bottom=Math.min(b.bottom,a+d);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>
b.left?b:null}function p(a,c,d,b){var f,h;f=a.left;h=a.top;c=q(c,d[0]);a=q(a,d[1]);a=[a.left-c.left,a.top-c.top];return{left:f-a[0]+ +b[0],top:h-a[1]+ +b[1]}}function r(a,c,d){var b=[];l.each(a,function(a){b.push(a.replace(c,function(a){return d[a]}))});return b}function j(){}function s(a){var c,d;c=a[0];l.isWindow(c)?(a=k(c).getWindow(),c={left:a.scrollLeft(),top:a.scrollTop()},d=a.width(),a=a.height()):(c=a.offset(),d=a.outerWidth(),a=a.outerHeight());c.width=d;c.height=a;return c}function q(a,
c){var d=c.charAt(0),b=c.charAt(1),f=a.width,h=a.height,e,g;e=a.left;g=a.top;"c"===d?g+=h/2:"b"===d&&(g+=h);"c"===b?e+=f/2:"r"===b&&(e+=f);return{left:e,top:g}}function w(a){a.target===this&&a.newVal&&this._onSetAlign(this.get("align"))}function t(){this.get("visible")&&this._onSetAlign(this.get("align"))}var l=m("util"),x=window,k=m("node"),v=m("ua");j.__getOffsetParent=n;j.__getVisibleRectForElement=o;j.ATTRS={align:{valueFn:function(){return{}}}};j.prototype={__bindUI:function(){this.on("beforeVisibleChange",
w,this);this.$el.getWindow().on("resize",t,this)},_onSetAlign:function(a){a&&a.points&&this.align(a.node,a.points,a.offset,a.overflow)},align:function(a,c,d,b){var a=k(a||x),d=d&&[].concat(d)||[0,0],b=b||{},f=this.$el,h=0,e=o(f[0]),g=s(f),j=s(a),a=p(g,j,c,d),i=l.merge(g,a);if(e&&(b.adjustX||b.adjustY)){if(a.left<e.left||a.left+g.width>e.right)h=1,c=r(c,/[lr]/gi,{l:"r",r:"l"}),d[0]=-d[0];if(a.top<e.top||a.top+g.height>e.bottom)h=1,c=r(c,/[tb]/gi,{t:"b",b:"t"}),d[1]=-d[1];h&&(a=p(g,j,c,d),l.mix(i,a));
c=b.adjustX&&(a.left<e.left||a.left+g.width>e.right);b=b.adjustY&&(a.top<e.top||a.top+g.height>e.bottom);if(c||b)a=l.clone(a),i={width:g.width,height:g.height},c&&a.left<e.left&&(a.left=e.left),c&&a.left+i.width>e.right&&(a.left=Math.max(e.right-i.width,e.left)),b&&a.top<e.top&&(a.top=e.top),b&&a.top+i.height>e.bottom&&(a.top=Math.max(e.bottom-i.height,e.top)),i=l.mix(a,i)}this.set({x:i.left,y:i.top},{force:1});i.width!==g.width&&this.set("width",f.width()+i.width-g.width);i.height!==g.height&&this.set("height",
f.height()+i.height-g.height);return this},center:function(a){this.set("align",{node:a,points:["cc","cc"],offset:[0,0]});return this},__destructor:function(){this.$el&&this.$el.getWindow().detach("resize",t,this)}};u.exports=j});
