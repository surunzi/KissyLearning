KISSY.use(['node', 'xtemplate'], function (S, Node, Xtemplate) {

var $inputFunction = Node.one('#input-function'),
    $inputModule = Node.one('#input-module'),
    $outputArea = Node.one('#code');
    
// 初始化模块
var moduleNames = ['anim', 'base', 'button', 'color', 'combobox', 'cookie',
    'dd', 'dom', 'editor', 'filter-menu', 'io', 'json', 'menu', 'menubutton',
    'node', 'overlay', 'path', 'promise', 'resizable', 'scroll-view', 'split-button',
    'stylesheet', 'swf', 'tabs', 'toolbar', 'tree', 'xtemplate'],
    tpl = new Xtemplate('<option value="{{name}}">{{name}}</option>'), append = '';
    
for (var i = 0, len = moduleNames.length; i < len; i++) {
    append += tpl.render({
        name: moduleNames[i]
    });
}
$inputModule.append(append);

// 编辑器初始化
var editor = CodeMirror.fromTextArea($outputArea[0], {
    lineNumbers: true,
    lineWrapping: true,
    indentUnit: 4,
    smartIndent: true,
    theme: 'solarized light'
});

// 缩放支持
function resize() {
    var width = window.innerWidth,
        height = window.innerHeight;
    Node.one('.CodeMirror').css({
        'width': width,
        'height': height - 50
    });
    Node.one('.CodeMirror-gutters').css({
        'height': height - 50
    });
}
resize();
Node.one(window).on('resize', resize);

// 自动格式化
function autoFormat() {
    var totalLines = editor.lineCount();
    var totalChars = editor.getTextArea().value.length;
    editor.autoFormatRange({line:0, ch:0}, {line:totalLines, ch:totalChars});
    editor.refresh();
    editor.scrollTo(0, 0);
}

// 主函数，按回车键触发
$inputFunction.on('keypress', function (e) {
    if (e.keyCode !== 13) {
        return;
    }
    
    var functionName = $inputFunction.val(),
        moduleName = $inputModule.val();
        
    KISSY.use([moduleName], function (S, Module) {
        var functionDef = '// 抱歉，找不到该方法的定义╮(╯3╰)╭';
        
        // 如果模块中不只包含一个类
        if (functionName.indexOf('.') >= 0) {
            var splitResult = functionName.split('.');
            if (Module[splitResult[0]]) {
                Module = Module[splitResult[0]];
                functionName = splitResult[1];
            }
        }
        
        if (Module[functionName] && typeof Module[functionName] === 'function') {
            functionDef = Module[functionName].toString();
        } else if (typeof Module === 'function' && Module.prototype[functionName]) {
            functionDef = Module.prototype[functionName].toString();
        }
        
        editor.setValue(functionDef);
        autoFormat();
    });
});
    
});