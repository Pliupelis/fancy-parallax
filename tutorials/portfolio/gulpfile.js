const gulp = require('gulp');
const imageMin = require('gulp-imagemin');

//logs message
gulp.task('message', function(){
  return console.log('Gulp is running...');
});
//optimize images
gulp.task('imageMin', () =>
gulp.src('images/*')
.pipe(imageMin())
.pipe(gulp.dest('dist'))
);
