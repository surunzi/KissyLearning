KISSY.use(['base', 'node'], function (S, Base, Node) {

// 工具栏
var Toolbar = Base.extend({
    constructor: function () {},
    
    initToolbar: function (editor) {
        var toolbar = Node.one('<div class="toolbar"></div>');
        editor.append(toolbar);
        this.set('toolbar', toolbar);
    }
}, {
    name: 'Toolbar',
    ATTRS: {
        toolbar: {
            value: null
        }
    }
});

// 编辑区
var EditArea = Base.extend({
    constructor: function () {},
    
    getHtml: function () {
        var editArea = this.get('editArea');
        return editArea.html();
    },
    
    initEditArea: function (editor) {
        var editArea = Node.one('<div class="edit-area" contentEditable="true"></div>');
        editor.append(editArea);
        this.set('editArea', editArea);
    },
    
    setHtml: function (text) {
        var editArea = this.get('editArea');
        editArea.html(text);
    }
}, {
    name: 'EditArea',
    ATTRS: {
        editArea: {
            value: null
        }
    }
});

// 编辑器
var Editor = Base.extend([Toolbar, EditArea], {
    constructor: function (ele) {
        var editor = Node.one(ele),
            self = this;
        self.set('editor', editor);
        editor.delegate('click', '.toolbar button', function (e) {
            var cmd = Node.one(e.currentTarget).attr('data-cmd');
            self.execCommand(cmd);
        });
        self.callSuper();
    },
    
    execCommand: function (cmd, param) {
        param = param || null;
        document.execCommand(cmd, false, param);
    },
    
    initializer: function () {
        var editor = this.get('editor');
        this.initToolbar(editor);
        this.initEditArea(editor);
    }
}, {
    name: 'Editor',
    ATTRS: {
        editor: {
            value: null
        }
    }
});

var editor = new Editor('#editor');
editor.setHtml('Base的<b>extend</b>还提供了扩展功能，把一个主类与多个扩充类合并为一个新类。<br><br>' + 
    'Plugins机制可以用来在类的实例（而不是类本身）上动态添加特性。' + 
    'Base提供了一个配置（plugins）和三个函数（<b>plug</b>、<b>unplug</b>和<b>getPlugin</b>）用来管理插件。');

// 插件
function Plugin(cmd, icon, container) {
    this.ele = '<button data-cmd="' + cmd + '"><li class="fa ' + icon + '"></li></button>';
    if (container) {
        this.setContainer(container);
    }
}

Plugin.prototype = {
    pluginInitializer: function (){
        var ele = Node.one(this.ele);
        this.container.append(ele);
        this.ele = ele;
    },
    pluginDestructor: function () {
        this.ele.remove();  
    },
    setContainer: function (ele) {
        this.container = Node.one(ele);
    }
}

var undo = new Plugin('undo', 'fa-undo', '.toolbar'),
    redo = new Plugin('redo', 'fa-repeat', '.toolbar');
    bold = new Plugin('bold', 'fa-bold', '.toolbar'),
    italic = new Plugin('italic', 'fa-italic', '.toolbar'),
    underline = new Plugin('underline', 'fa-underline', '.toolbar'),
    alignLeft = new Plugin('justifyLeft', 'fa-align-left', '.toolbar'),
    alignCenter = new Plugin('justifyCenter', 'fa-align-center', '.toolbar'),
    alignRight = new Plugin('justifyRight', 'fa-align-right', '.toolbar'),
    alignJustify = new Plugin('justifyFull', 'fa-align-justify', '.toolbar'),
    indent = new Plugin('indent', 'fa-indent', '.toolbar'),
    outdent = new Plugin('outdent', 'fa-outdent', '.toolbar'),
    deletion = new Plugin('delete', 'fa-times', '.toolbar');

editor.plug(undo);
editor.plug(redo);
editor.plug(bold);
editor.plug(italic);
editor.plug(underline);
editor.plug(alignLeft);
editor.plug(alignCenter);
editor.plug(alignRight);
editor.plug(alignJustify);
editor.plug(indent);
editor.plug(outdent);
editor.plug(deletion);

});