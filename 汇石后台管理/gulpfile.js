var gulp = require('gulp');
var del = require('del');
var fileinclude = require('gulp-file-include');
// gulp.task('default',function(){
//     //默认的任务代码位置
// });
// gulp.task('clean:mobile',function(cb){
//     del([
//         'report.csv',
//         'mobile/**/*',
//         '!mobile/deploy.json'
//     ],cb);
// });
// gulp.task('default',['clean:mobile']);//编译前删除文件操作
gulp.task('fileinclude',function(){
   gulp.src(['page/**/*.html','!page/common/**.html'])
       .pipe(fileinclude({
           prefix:'@@',
           basepath:'@file'
       }))
       .pipe(gulp.dest('dist'));
});
gulp.task('default',['fileinclude']);//代码编译复用
