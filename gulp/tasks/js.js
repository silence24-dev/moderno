import path from "path";
import webpack from "webpack";
import webpackStream from "webpack-stream";

export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpackStream({
			mode: app.isBuild ? 'production' : 'development',
			output: {
				filename: 'app.min.js',
			},
			resolve: {
				alias: {
					jquery: path.resolve('node_modules', 'jquery/src/jquery'),
				}
			},
			plugins: [
				new webpack.ProvidePlugin({
					$: 'jquery',
					jQuery: 'jquery',
				}),
			],
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}
