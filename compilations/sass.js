const sass = require('sass');
const fs = require('fs');
const path = require('path');

const input_file = "src/styles/style.scss"
const output_dir = "dist/styles"
const output_file = output_dir + "/style.css"


// cleaning directory
const fsExtra = require('fs-extra')
fsExtra.emptyDirSync(output_dir)

// compilation
let result = sass.compile(input_file)

// saving result
fs.writeFile(output_file, result.css, function (err) {
    if (err) return console.log(err);
})

