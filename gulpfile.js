const { src, dest, task, watch, series, parallel } = require("gulp"),
	sass = require("gulp-sass")(require("sass")),
	autoprefixer = require("gulp-autoprefixer"),
	cleanCSS = require("gulp-clean-css"),
	rename = require("gulp-rename"),
	browserSync = require("browser-sync").create(),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify-es").default,
	del = require("del"),
	fileinclude = require("gulp-file-include"),
	imagemin = require("gulp-imagemin");

task("clear", () => {
	return del("dist/*");
});

task("html", () => {
	return src(["app/**/*.html", "!app/blocks/**/*.html"]).pipe(fileinclude()).pipe(dest("dist")).pipe(browserSync.stream());
});

task("css", () => {
	return src(["app/css/**/*.css"])
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["last 10 versions"],
			})
		)
		.pipe(cleanCSS())
		.pipe(rename((path) => (path.extname = ".min.css")))
		.pipe(dest("dist/css"))
		.pipe(browserSync.stream());
});

task("sass", () => {
	return src(["app/sass/**/*.sass"])
		.pipe(sass())
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["last 10 versions"],
			})
		)
		.pipe(cleanCSS())
		.pipe(rename((path) => (path.extname = ".min.css")))
		.pipe(dest("dist/css"))
		.pipe(browserSync.stream());
});

task("js", () => {
	return src(["app/js/**/*.js"])
		.pipe(rename((path) => (path.extname = ".min.js")))
		.pipe(dest("dist/js"))
		.pipe(browserSync.stream());
});

task("img-compress", () => {
	return (
		src("app/img/**/*")
			// .pipe(imagemin())
			.pipe(dest("dist/img"))
	);
});

task("watch", () => {
	browserSync.init({
		server: {
			baseDir: "dist",
		},
		startPath: "pages/about.html",
		notify: false,
	});
	watch("app/**/*.html", parallel("html"));
	watch("app/css/**/*.css", parallel("css"));
	watch("app/sass/**/*.sass", parallel("sass"));
	watch("app/js/**/*.js", parallel("js"));
});

task("default", series("clear", parallel("html", "css", "sass", "js", "img-compress"), "watch"));
