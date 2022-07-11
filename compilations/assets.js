const fsExtra = require('fs-extra')
const path = require("path");
__dirname = path.resolve(__dirname, "..")

const input_dir = "src/assets"
const output_dir = "dist/assets"

// cleaning directory
fsExtra.emptyDirSync(path.resolve(__dirname, output_dir))

//copy directory
fsExtra.copySync(path.resolve(__dirname, input_dir), path.resolve(__dirname, output_dir),{})

