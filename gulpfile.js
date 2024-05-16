var gulp = require("gulp");
var uglify = require("gulp-uglify");

gulp.task("buildjs", function () {
  return gulp.src("source/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});