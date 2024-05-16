var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("buildjs", function () {
  return gulp
    .src("*.js")
    .pipe(concat("all.js"))
    .pipe(gulp.dest("dist"))
    .pipe(rename("all.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});
