/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jun 13 11:42
*/
KISSY.add("date/picker-xtpl",[],function(l,n,o,m){l=function(e,b,g){var f=this,k=f.root.nativeCommands,h=f.root.utils.callFn,i=k.each,k=k["if"];b.write('<div class="',0);var a={escape:1},d=[];d.push("header");a.params=d;if((a=h(f,e,a,b,["getBaseCssClasses"],0,1))&&a.isBuffer)b=a,a=g;b.write(a,!0);b.write('">\r\n    <a class="',0);a={escape:1};d=[];d.push("prev-year-btn");a.params=d;if((a=h(f,e,a,b,["getBaseCssClasses"],0,2))&&a.isBuffer)b=a,a=g;b.write(a,!0);b.write('"\r\n       href="#"\r\n       tabindex="-1"\r\n       role="button"\r\n       title="',
0);a=e.resolve(["previousYearLabel"],0);b.write(a,!0);b.write('"\r\n       hidefocus="on">\r\n    </a>\r\n    <a class="',0);a={escape:1};d=[];d.push("prev-month-btn");a.params=d;if((a=h(f,e,a,b,["getBaseCssClasses"],0,9))&&a.isBuffer)b=a,a=g;b.write(a,!0);b.write('"\r\n       href="#"\r\n       tabindex="-1"\r\n       role="button"\r\n       title="',0);a=e.resolve(["previousMonthLabel"],0);b.write(a,!0);b.write('"\r\n       hidefocus="on">\r\n    </a>\r\n    <a class="',0);a={escape:1};d=[];d.push("month-select");
a.params=d;if((a=h(f,e,a,b,["getBaseCssClasses"],0,16))&&a.isBuffer)b=a,a=g;b.write(a,!0);b.write('"\r\n       role="button"\r\n       href="#"\r\n       tabindex="-1"\r\n       hidefocus="on"\r\n       title="',0);a=e.resolve(["monthSelectLabel"],0);b.write(a,!0);b.write('">\r\n        <span class="',0);a={escape:1};d=[];d.push("month-select-content");a.params=d;if((a=h(f,e,a,b,["getBaseCssClasses"],0,22))&&a.isBuffer)b=a,a=g;b.write(a,!0);b.write('">',0);a=e.resolve(["monthYearLabel"],0);b.write(a,
!0);b.write('</span>\r\n        <span class="',0);a={escape:1};d=[];d.push("month-select-arrow");a.params=d;if((a=h(f,e,a,b,["getBaseCssClasses"],0,23))&&a.isBuffer)b=a,a=g;b.write(a,!0);b.write('">x</span>\r\n    </a>\r\n    <a class="',0);a={escape:1};d=[];d.push("next-month-btn");a.params=d;if((a=h(f,e,a,b,["getBaseCssClasses"],0,25))&&a.isBuffer)b=a,a=g;b.write(a,!0);b.write('"\r\n       href="#"\r\n       tabindex="-1"\r\n       role="button"\r\n       title="',0);a=e.resolve(["nextMonthLabel"],
0);b.write(a,!0);b.write('"\r\n       hidefocus="on">\r\n    </a>\r\n    <a class="',0);a={escape:1};d=[];d.push("next-year-btn");a.params=d;if((a=h(f,e,a,b,["getBaseCssClasses"],0,32))&&a.isBuffer)b=a,a=g;b.write(a,!0);b.write('"\r\n       href="#"\r\n       tabindex="-1"\r\n       role="button"\r\n       title="',0);a=e.resolve(["nextYearLabel"],0);b.write(a,!0);b.write('"\r\n       hidefocus="on">\r\n    </a>\r\n</div>\r\n<div class="',0);a={escape:1};d=[];d.push("body");a.params=d;if((a=h(f,e,
a,b,["getBaseCssClasses"],0,40))&&a.isBuffer)b=a,a=g;b.write(a,!0);b.write('">\r\n    <table class="',0);a={escape:1};d=[];d.push("table");a.params=d;if((a=h(f,e,a,b,["getBaseCssClasses"],0,41))&&a.isBuffer)b=a,a=g;b.write(a,!0);b.write('" cellspacing="0" role="grid">\r\n        <thead>\r\n        <tr role="row">\r\n            ',0);var a={escape:1},d=[],j=e.resolve(["showWeekNumber"],0);d.push(j);a.params=d;a.fn=function(a,b){b.write('\r\n            <th role="columnheader" class="',0);var c={escape:1},
d=[];d.push("column-header");c.params=d;if((c=h(f,a,c,b,["getBaseCssClasses"],0,45))&&c.isBuffer)b=c,c=g;b.write(c,!0);b.write(" ",0);c={escape:1};d=[];d.push("week-number-header");c.params=d;if((c=h(f,a,c,b,["getBaseCssClasses"],0,45))&&c.isBuffer)b=c,c=g;b.write(c,!0);b.write('">\r\n                <span class="',0);c={escape:1};d=[];d.push("column-header-inner");c.params=d;if((c=h(f,a,c,b,["getBaseCssClasses"],0,46))&&c.isBuffer)b=c,c=g;b.write(c,!0);b.write('">x</span>\r\n            </th>\r\n            ',
0);return b};b=k.call(f,e,a,b,44);b.write("\r\n            ",0);a={escape:1};d=[];j=e.resolve(["weekdays"],0);d.push(j);a.params=d;a.fn=function(a,b){b.write('\r\n            <th role="columnheader" title="',0);var c=a.resolve(["this"],0);b.write(c,!0);b.write('" class="',0);var c={escape:1},d=[];d.push("column-header");c.params=d;if((c=h(f,a,c,b,["getBaseCssClasses"],0,50))&&c.isBuffer)b=c,c=g;b.write(c,!0);b.write('">\r\n                <span class="',0);c={escape:1};d=[];d.push("column-header-inner");
c.params=d;if((c=h(f,a,c,b,["getBaseCssClasses"],0,51))&&c.isBuffer)b=c,c=g;b.write(c,!0);b.write('">\r\n                    ',0);c=a.resolve(["xindex"],0);c=a.resolve(["veryShortWeekdays",c],0);b.write(c,!0);b.write("\r\n                </span>\r\n            </th>\r\n            ",0);return b};b=i.call(f,e,a,b,49);b.write('\r\n        </tr>\r\n        </thead>\r\n        <tbody class="',0);i={escape:1};a=[];a.push("tbody");i.params=a;if((i=h(f,e,i,b,["getBaseCssClasses"],0,58))&&i.isBuffer)b=i,
i=g;b.write(i,!0);b.write('">\r\n        ',0);if((i=h(f,e,{},b,["renderDates"],0,59))&&i.isBuffer)b=i,i=g;b.write(i,!1);b.write("\r\n        </tbody>\r\n    </table>\r\n</div>\r\n",0);i={escape:1};a=[];(j=d=e.resolve(["showToday"],0))||(j=e.resolve(["showClear"],0));a.push(j);i.params=a;i.fn=function(a,b){b.write('\r\n<div class="',0);var c={escape:1},d=[];d.push("footer");c.params=d;if((c=h(f,a,c,b,["getBaseCssClasses"],0,64))&&c.isBuffer)b=c,c=g;b.write(c,!0);b.write('">\r\n    <a class="',0);c=
{escape:1};d=[];d.push("today-btn");c.params=d;if((c=h(f,a,c,b,["getBaseCssClasses"],0,65))&&c.isBuffer)b=c,c=g;b.write(c,!0);b.write('"\r\n       role="button"\r\n       hidefocus="on"\r\n       tabindex="-1"\r\n       href="#"\r\n       title="',0);c=a.resolve(["todayTimeLabel"],0);b.write(c,!0);b.write('">',0);c=a.resolve(["todayLabel"],0);b.write(c,!0);b.write('</a>\r\n    <a class="',0);c={escape:1};d=[];d.push("clear-btn");c.params=d;if((c=h(f,a,c,b,["getBaseCssClasses"],0,71))&&c.isBuffer)b=
c,c=g;b.write(c,!0);b.write('"\r\n       role="button"\r\n       hidefocus="on"\r\n       tabindex="-1"\r\n       href="#">',0);c=a.resolve(["clearLabel"],0);b.write(c,!0);b.write("</a>\r\n</div>\r\n",0);return b};return b=k.call(f,e,i,b,63)};l.TPL_NAME=m.name;l.version="5.0.0";m.exports=l});
