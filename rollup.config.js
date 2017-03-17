import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import replace from 'rollup-plugin-replace'
import json from 'rollup-plugin-json'
import less from 'less'
import fs from 'fs'
import LessPluginAutoPrefix from 'less-plugin-autoprefix'
const autoprefixPlugin = new LessPluginAutoPrefix({ browsers: ['last 4 ios versions', 'last 3 Android versions', 'last 2 versions'] })

const plugins = [
  json(),
  vue({
    css (content, styles) {
      const css = new Array(styles.length)
      let counter = 0
      styles.forEach(({ id, code }, index) => {
        less.render(code, { filename: id, paths: ['node_modules'], plugins: [autoprefixPlugin]}).then(function (output) {
          counter++
          css[index] = output.css
          if (counter === styles.length) {
            fs.writeFile('dist/build.css', css.join('\n'))
          }
        }).catch(function (err) {
          console.log(err)
        })
      })
    }
  }),
  buble({
    objectAssign: 'Object.assign'
  }),
  nodeResolve({ browser: true, jsnext: true }),
  commonjs()
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(replace({
    'process.env.NODE_ENV': JSON.stringify( 'production' )
  }))
  plugins.push(uglify())
}

if (process.env.NODE_ENV === 'development') {
  plugins.push(replace({
    'process.env.NODE_ENV': JSON.stringify( 'development' )
  }))
  plugins.push(livereload())
  plugins.push(serve({
    open: true
  }))
}

export default {
  entry: 'src/index.js',
  dest: 'dist/build.js',
  sourceMap: true,
  format: 'iife',
  plugins
}
