import { transformFileSync } from 'babel-core'
import { join } from 'path'
import { writeFileSync } from 'fs'
import plugin from '../src/index'

let originFile = join(__dirname, 'input.jsx')
let outputFile = join(__dirname, 'output.js')

let outputText = transformFileSync(originFile, {
    "presets": [
        ["env", {
            "targets": {
                "browsers": ["last 2 versions", "safari >= 7", "ie >= 10"]
            }
        }]
    ],
    "plugins": [
        ["transform-vue-jsx"],
        [plugin, [
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-default"
            }
        ]]
    ]
}).code

writeFileSync(outputFile, outputText)