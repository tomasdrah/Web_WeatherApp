const path = require('path')
const handlebars = require('handlebars')
const fs = require('fs')
const fsExtra = require('fs-extra')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
__dirname = path.resolve(__dirname, "..")

const input_pages_dir = "src/html/handlebars/pages"
const output_dir = "dist/html"

// cleaning directory
fsExtra.emptyDirSync(path.resolve(__dirname, output_dir))


function process_file(filename) {
    // file loading
    // let filename = "example"
    let handlebars_input = fs.readFileSync(path.resolve(__dirname, input_pages_dir + "/" + filename + ".handlebars")).toString()
    let json_file_content = fs.readFileSync(path.resolve(__dirname, input_pages_dir + "/" + filename + ".json")).toString()
    let template_context = JSON.parse(json_file_content);


    //template rendering
    let template = handlebars.compile(handlebars_input);
    let html_page = template(template_context);
    // let precompiled_template =handlebars.precompile(handlebars_input)

    fs.writeFile(path.resolve(__dirname, output_dir + "/" + filename + ".html"), html_page, function (err) {
        if (err) return console.log(err);
    })
}

//process all handlebars pages
fs.readdir(input_pages_dir, (err, files) => {
    files.forEach(filename => {
        if (path.extname(filename) === ".handlebars") {
            process_file(path.parse(filename).name)
        }
    });
});

