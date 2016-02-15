/*
from .babelrc:
,
"plugins": [
    "transform-decorators-legacy",
    "transform-class-properties",
    "transform-object-rest-spread"
  ]
 */
import gulp from 'gulp'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import mainBowerFiles from 'gulp-main-bower-files'
import watchify from 'watchify'

const destPath = './build'
const browserifyOptions = Object.assign(watchify.args, {
  entries: './app/purereact/index.jsx',
  extensions: ['.js', '.jsx'],
  debug: true
})

function browserifyIt(watch = false) {
  const bro = browserify(browserifyOptions)
    .transform('babelify')

  const bundleIt = () => {
    return bro
      .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest(destPath))
  }

  if(watch) {
    watchify(bro).on('update', bundleIt)
  }

  return bundleIt()
}

gulp.task('browserify', () => {
  return browserifyIt()
})

gulp.task('watch:browserify', () => {
  return browserifyIt(true)
})

gulp.task('files', () => {
  return gulp.src('./app/index.html')
  .pipe(gulp.dest(destPath))
})

gulp.task('bower', () => {
  return gulp.src('./bower.json')
  .pipe(mainBowerFiles())
  .pipe(gulp.dest(destPath))
})

gulp.task('watch', ['watch:browserify'])
gulp.task('default', ['files', 'bower', 'browserify'])
