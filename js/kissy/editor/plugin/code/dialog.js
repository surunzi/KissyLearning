/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jun 13 11:44
*/
KISSY.add("editor/plugin/code/dialog","util,editor,menubutton,dom,../dialog,node,ua".split(","),function(e,b,r,k){function h(a){this.editor=a}var c=b("util"),e=b("editor"),l=b("menubutton"),i=e.XHTML_DTD,m=b("dom").NodeType,n=e.Walker.whitespaces(true),o=b("../dialog"),j=b("node"),p=b("ua"),q='<div class="{prefixCls}code-wrap"><table class="{prefixCls}code-table"><tr><td class="{prefixCls}code-label"><label for="ks-editor-code-type">\u7c7b\u578b\uff1a</label></td><td class="{prefixCls}code-content"><select id="ks-editor-code-type"  class="{prefixCls}code-type">'+
c.map([["ActionScript3","as3"],["Bash/Shell","bash"],["C/C++","cpp"],["Css","css"],["CodeFunction","cf"],["C#","c#"],["Delphi","delphi"],["Diff","diff"],["Erlang","erlang"],["Groovy","groovy"],["HTML","html"],["Java","java"],["JavaFx","jfx"],["Javascript","js"],["Perl","pl"],["Php","php"],["Plain Text","plain"],["PowerShell","ps"],["Python","python"],["Ruby","ruby"],["Scala","scala"],["Sql","sql"],["Vb","vb"],["Xml","xml"]],function(a){return'<option value="'+a[1]+'">'+a[0]+"</option>"})+'</select></td></tr><tr><td><label for="ks-editor-code-textarea">\u4ee3\u7801\uff1a</label></td><td><textarea id="ks-editor-code-textarea"  class="{prefixCls}code-textarea {prefixCls}input"></textarea></td></tr></table></div>';
c.augment(h,{initDialog:function(){var a=this.editor.get("prefixCls")+"editor-",f,b;b=this.dialog=(new o({width:500,mask:true,headerContent:"\u63d2\u5165\u4ee3\u7801",bodyContent:c.substitute(q,{prefixCls:a}),footerContent:c.substitute('<div class="{prefixCls}code-table-action"><a href="javascript:void(\'\u63d2\u5165\')" class="{prefixCls}code-insert {prefixCls}button">\u63d2\u5165</a><a href="javascript:void(\'\u53d6\u6d88\')" class="{prefixCls}code-cancel {prefixCls}button">\u53d6\u6d88</a></td></div>',{prefixCls:a})})).render();f=b.get("el");this.insert=
f.one("."+a+"code-insert");this.cancel=f.one("."+a+"code-cancel");this.type=l.Select.decorate(f.one("."+a+"code-type"),{prefixCls:a+"big-",width:150,menuCfg:{prefixCls:a,height:320,render:b.get("contentEl")}});this.code=f.one("."+a+"code-textarea");this.insert.on("click",this._insert,this);this.cancel.on("click",this.hide,this)},hide:function(){this.dialog.hide()},_insert:function(){var a,b=this.editor;if(c.trim(a=this.code.val())){a=j(c.substitute('<pre class="prettyprint ks-editor-code brush:{type};toolbar:false;">{code}</pre>',
{type:this.type.get("value"),code:c.escapeHtml(a)}),b.get("document")[0]);this.dialog.hide();b.insertElement(a);var e=b.getSelection().getRanges()[0],d=a.next(n,1),g=d&&d[0].nodeType===m.ELEMENT_NODE&&d.nodeName();if(!g||!i.$block[g]||!i[g]["#text"]){d=j("<p></p>",b.get("document")[0]);p.ie||d._4eAppendBogus();a.after(d)}e.moveToElementEditablePosition(d);b.getSelection().selectRanges([e])}else alert("\u8bf7\u8f93\u5165\u4ee3\u7801!")},show:function(){this.dialog||this.initDialog();this.dialog.show()}});k.exports=h});
