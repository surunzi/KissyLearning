KISSY.use(['base', 'node'], function (S, Base, Node) {

// 工具栏
var Toolbar = Base.extend({
    initToolbar: function (editor) {
        var toolbar = Node.one('<ul class="toolbar"></ul>');
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
    initEditArea: function (editor) {
        var editArea = Node.one('<div class="edit-area" contentEditable="true"></div>');
        editor.append(editArea);
        this.set('editArea', editArea);
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
        var editor = Node.one('#editor');
        this.set('editor', editor);
        this.initEditor();
    },
    initEditor: function () {
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

// 插件
var bold = {
    container: null,
    ele: null,
    pluginInitializer: function(){
        var ele = Node.one('<li class="bold">B</li>');
        this.container.append(ele);
        ele.on('click', function () {
            
        });
        this.ele = ele;
    }
}
bold.container = editor.get('toolbar');

console.dir(editor);

// editor.plug(bold);

});