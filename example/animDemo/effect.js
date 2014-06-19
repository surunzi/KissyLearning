KISSY.use('node', function (S, Node) {

var $object = Node.one('#object');

Node.one('#reset').on('click', function () {
    $object.attr('style', '');
});

});