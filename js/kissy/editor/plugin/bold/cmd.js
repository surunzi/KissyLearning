/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jun 13 11:44
*/
KISSY.add("editor/plugin/bold/cmd",["editor","../font/cmd"],function(a,b,f,c){var a=b("editor"),d=b("../font/cmd"),e=new a.Style({element:"strong",overrides:[{element:"b"},{element:"span",attributes:{style:"font-weight: bold;"}}]});c.exports={init:function(a){d.addButtonCmd(a,"bold",e)}}});
