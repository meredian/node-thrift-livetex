var blacklist = [
    // 'es6.arrowFunctions', // partially supported
    'es6.blockScoping', // supported
    'es6.constants', // supported
    'es6.forOf' // supported
];

var ignore = [
    /node_modules/,
    /gen-nodejs/
];

try {
    eval('var a = (x) => { x + 1 }');
} catch (e) {
    console.warn('running node without --harmony flag');
    blacklist = [
        'es6.constants'
    ];
}

require('babel/register')({
    blacklist: blacklist,
    optional: [
        'es7.exportExtensions',
        'es7.decorators',
        'es7.asyncFunctions'
    ],
    ignore: ignore
});
