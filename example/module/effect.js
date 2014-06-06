KISSY.config('packages', {
    'myModule': {
        base: window.location.href.replace('index.html', ''),
        ignorePackageNameInUri: true
    }
});

KISSY.ready(function (S) {

KISSY.use('node', function (S, Node) {
    Node.one('#btn').on('click', function () {
        KISSY.use('myModule/snow', function (S, snow) {
            snow.begin();
        });
    });
});

});