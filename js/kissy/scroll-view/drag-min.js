/*
Copyright 2014, KISSY v1.42
MIT Licensed
build time: Feb 28 14:17
*/
KISSY.add("scroll-view/drag",["./base","node","anim"],function(m,u){function y(b,c,a){var c=c.timeStamp,f=b.get("scroll"+m.ucfirst(a));b.startScroll[a]=f;b.swipe[a].startTime=c;b.swipe[a].scroll=f}function z(b,c,a,f){if(!A(b,a)){var e={pageX:c.pageX,pageY:c.pageY},d="left"===a?"pageX":"pageY",g=b.lastPageXY,h,k=b.startScroll[a]-(e[d]-f[d]),f=c.timeStamp,n=b.minScroll,r=b.maxScroll,i=b.lastDirection,j=b.swipe,l;g[d]&&(h=e[d]===g[d],l=0<e[d]-g[d]);b.get("bounce")||(k=Math.min(Math.max(k,n[a]),r[a]));
k<n[a]?(e=n[a]-k,e*=B,k=n[a]-e):k>r[a]&&(e=k-r[a],e*=B,k=r[a]+e);e=f-j[a].startTime;if(!h&&void 0!==i[a]&&i[a]!==l||e>G)j[a].startTime=f,j[a].scroll=k;b.set("scroll"+m.ucfirst(a),k);i[a]=l;g[d]=c[d]}}function A(b,c){return!b.allowScroll[c]&&b.get("left"===c?"lockX":"lockY")?1:0}function C(b,c,a,f){if(A(b,a))f();else{var e="scroll"+m.ucfirst(a),d=b.get(e),g=b.minScroll,h=b.maxScroll,k=c.timeStamp,c=b.swipe,n;d<g[a]?n=g[a]:d>h[a]&&(n=h[a]);void 0!==n?(d={},d[a]=n,b.scrollTo(d,{duration:b.get("bounceDuration"),
easing:b.get("bounceEasing"),queue:!1,complete:f})):b.pagesOffset?f():(n=k-c[a].startTime,c=d-c[a].scroll,0===n||0===c?f():(n=Math.min(Math.max(c/n,-D),D),f={node:{},to:{},duration:9999,queue:!1,complete:f,frame:H(b,n,d,e,h[a],g[a])},f.node[a]=d,f.to[a]=null,b.scrollAnims.push((new I(f)).run())))}}function H(b,c,a,f,e,d){var g=c*v,h=1,k=0;return function(c,r){var i=m.now(),j;if(h){j=i-c.startTime;var l=Math.exp(j*J);j=parseInt(a+g*(1-l)/-E,10);j>d&&j<e?r.lastValue===j?r.pos=1:(r.lastValue=j,b.set(f,
j)):(h=0,g*=l,a=j<=d?d:e,k=i)}else j=i-k,i=j/v,i*=Math.exp(-K*i),j=parseInt(g*i,10),0===j&&(r.pos=1),b.set(f,a+j)}}function L(b){if(b.isTouch){var c=b.touches;if(!(this.get("disabled")||this.isScrolling&&this.pagesOffset)){var a={pageX:b.pageX,pageY:b.pageY};this.isScrolling&&(this.stopAnimation(),this.fire("scrollEnd",a));1<c.length?w.detach(o.move,q,this).detach(o.end,x,this):(this.lastPageXY={},this.lastDirection={},this.swipe={left:{},top:{}},this.startMousePos=null,this.startScroll={},this.dragInitDirection=
null,this.startMousePos=a,y(this,b,"left"),y(this,b,"top"),w.on(o.move,q,this).on(o.end,x,this))}}}function x(b){if(b.isTouch){var c=this.startMousePos;w.detach(o.move,q,this).detach(o.end,x,this);c&&this.isScrolling&&this.fire("dragend",{pageX:b.pageX,deltaX:-(c.pageX-b.pageX),deltaY:-(c.pageY-b.pageY),pageY:b.pageY})}}function M(b){function c(){f++;if(2===f){var c=function(){a.isScrolling=0;a.fire("scrollEnd",{pageX:b.pageX,pageY:b.pageY,deltaX:-e,deltaY:-d,fromPageIndex:j,pageIndex:a.get("pageIndex")})};
if(a.pagesOffset){var g=a._snapDurationCfg,i=a._snapEasingCfg,j=a.get("pageIndex"),l=a.get("scrollLeft"),m=a.get("scrollTop"),g={duration:g,easing:i,complete:c},o=a.pagesOffset,s=o.length;a.isScrolling=0;if(h||k)if(h&&k){var i=[],p,t;for(p=0;p<s;p++){var q=o[p];q&&(0<e&&q.left>l?i.push(q):0>e&&q.left<l&&i.push(q))}o=i.length;if(0<d){l=Number.MAX_VALUE;for(p=0;p<o;p++)s=i[p],s.top>m&&l<s.top-m&&(l=s.top-m,t=i.index)}else{l=Number.MAX_VALUE;for(p=0;p<o;p++)s=i[p],s.top<m&&l<m-s.top&&(l=m-s.top,t=i.index)}void 0!==
t?t!==j?a.scrollToPage(t,g):(a.scrollToPage(t),c()):c()}else h||k?(c=a.getPageIndexFromXY(h?l:m,h,h?e:d),a.scrollToPage(c,g)):(a.scrollToPage(j),c())}else c()}}var a=this,f=0,e=-b.deltaX,d=-b.deltaY,g=a._snapThresholdCfg,h=a.allowScroll.left&&Math.abs(e)>g,k=a.allowScroll.top&&Math.abs(d)>g;C(a,b,"left",c);C(a,b,"top",c)}function N(b){b.preventDefault()}var O=u("./base"),P=m.Features.isTouchEventSupported(),F=u("node"),I=u("anim"),B=0.5,o=F.Gesture,G=300,D=6,w=F.all(document),v=20,E=Math.log(0.95),
J=E/v,K=0.3,q=function(b){if(b.isTouch){var c=this.startMousePos;if(c){var a={pageX:b.pageX,pageY:b.pageY},f=Math.abs(a.pageX-c.pageX),e=Math.abs(a.pageY-c.pageY);if(!(3>Math.max(f,e))){this.isScrolling||(this.fire("scrollStart",a),this.isScrolling=1);var d=this.get("lockX"),g=this.get("lockY");if(d||g){var h;if(!(h=this.dragInitDirection))this.dragInitDirection=h=f>e?"left":"top";if(d&&"left"===h&&!this.allowScroll[h]){this.isScrolling=0;this.get("preventDefaultX")&&b.preventDefault();return}if(g&&
"top"===h&&!this.allowScroll[h]){this.isScrolling=0;this.get("preventDefaultY")&&b.preventDefault();return}}P&&b.preventDefault();z(this,b,"left",c);z(this,b,"top",c);this.fire("scrollMove",a)}}}};m.UA.ie&&(q=m.throttle(q,30));return O.extend({initializer:function(){this._snapThresholdCfg=this.get("snapThreshold");this._snapDurationCfg=this.get("snapDuration");this._snapEasingCfg=this.get("snapEasing");this.publish("dragend",{defaultFn:M,defaultTargetOnly:!0})},bindUI:function(){this.$contentEl.on("dragstart",
N).on(o.start,L,this)},destructor:function(){this.stopAnimation()},stopAnimation:function(){this.callSuper();this.isScrolling=0}},{ATTRS:{lockX:{value:!0},preventDefaultX:{value:!0},lockY:{value:!1},preventDefaultY:{value:!1},snapDuration:{value:0.3},snapEasing:{value:"easeOut"},snapThreshold:{value:5},bounce:{value:!0},bounceDuration:{value:0.4},bounceEasing:{value:"easeOut"}}})});