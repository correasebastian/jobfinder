var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    lazy: true
});

var root = './views/';
var test = './test/';

var allTest = [test + '**/*.spec.js'];
gulp.task('watchTest', function() {
    gulp.watch(allTest, ['mocha']);
});

gulp.task('mocha', function() {
    return gulp.src(test + '**/*.spec.js', {
            read: false
        })
        // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe($.mocha({
            reporter: 'nyan'
        }));
});
gulp.task('jade', ['wiredep'], function() {
    return gulp.src(root + '**/*.jade')
        .pipe($.jade({
            pretty: true
        }))
        .pipe(gulp.dest(root));
});

gulp.task('wiredep', function() {
    log('Wire up the bower css js and our app js into the html');

    var clientApp = './public/app/';
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/bower_components',
        ignorePath: '../..',
        devDependencies: false
    };
    var wiredep = require('wiredep').stream;
    var jsCss = [
        clientApp + '**/*.module.js',
        clientApp + '**/*.js',
        clientApp + '**/*.css',
        '!' + clientApp + '**/*.spec.js'
    ]
    return gulp
        .src([root + 'index.html', root + '**/*.jade'])
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(jsCss, {
            read: false
        }), {
            ignorePath: 'public',
            relative: false
        }))
        .pipe(gulp.dest(root))
});


function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    }
    else {
        $.util.log($.util.colors.blue(msg));
    }
}
