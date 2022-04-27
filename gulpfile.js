var gulp = require("gulp"),
	sass = require("gulp-sass")(require("sass")),
	autoprefixer = require("gulp-autoprefixer"),
	cleanCSS = require("gulp-clean-css"),
	rename = require("gulp-rename"),
	browserSync = require("browser-sync").create(),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify-es").default;

gulp.task("browser-sync", () => {
	browserSync.init({
		server: {
			baseDir: "app",
		},
		notify: false,
		// online: false, // Work offline without internet connection
		// tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
	});
});

gulp.task("styles", () => {
	return gulp
		.src("app/sass/**/*.sass")
		.pipe(sass())
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["last 10 versions"],
			})
		)
		.pipe(cleanCSS())
		.pipe(rename((path) => (path.extname = ".min.css")))
		.pipe(gulp.dest("app/css"))
		.pipe(browserSync.stream());
});

gulp.task("code", () => gulp.src("app/**/*.html").pipe(browserSync.reload({ stream: true })));

gulp.task("watch", () => {
	gulp.watch("app/sass/**/*.sass", gulp.parallel("styles"));
	gulp.watch("app/**/*.html", gulp.parallel("code"));
});

gulp.task("default", gulp.parallel("styles", "browser-sync", "watch"));
