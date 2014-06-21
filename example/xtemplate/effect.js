KISSY.use(['node', 'xtemplate'], function (S, Node, XTemplate) {
    
var commentTemplate = Node.one('#comment-template').text(),
    commentTpl = new XTemplate(commentTemplate);
    $comments = Node.one('#comments'),
    $name = Node.one('input[name="name"]'),
    $content = Node.one('textarea[name="content"]'),
    $hidden = Node.one('#hidden');

// 提交按钮
Node.one('#submit-btn').on('click', function () {
    var name = S.trim($name.val()),
        content = S.trim($content.val());
    $name.val('');
    $content.val('');
    if (name === '') { name = '游客' }
    if (content === '') { content = '什么也没说' }
    
    // 渲染模板
    var $comment = Node.one(commentTpl.render({
            name: name,
            content: content,
            date: new Date().toLocaleString()
        }));
    
    $hidden.append($comment);
    var height = $comment.height();
    $comments.prepend($comment);
    $comment.animate({
        'height': height
    }, 1, 'bounceOut').animate({
        'opacity': 1
    }, 0.3);
    return false;
});
    
});