const fs = require('fs')

let currentFolder = __dirname
let dataFolder = currentFolder+'/data/'
let configFile = dataFolder+'config.json'

// Load every css file from the css folder
let head = document.getElementsByTagName('head')[0]

let jsFolder = currentFolder+'/js'
let exclude = "script.js"
let jsFolderContent = fs.readdirSync(jsFolder)
for (let i = 0; i < jsFolderContent.length; i++) {
    let jsFile = jsFolderContent[i]
    if (jsFile.endsWith('.js') && jsFile != exclude) {
        let script = document.createElement('script')
        script.src = 'js/'+jsFile
        head.appendChild(script)
    }
}


let cssFolderContent = fs.readdirSync(currentFolder+'/css')
for (let i = 0; i < cssFolderContent.length; i++) {
    let cssFile = cssFolderContent[i]
    if (cssFile.endsWith('.css')) {
        let link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = currentFolder+'/css/'+cssFile
        head.appendChild(link)
    }
}

window.onload = () => {


    window.onresize = () => {
        // save window size
        let height = window.outerHeight
        let width = window.outerWidth

        let config = {
            "windowHeight": height,
            "windowWidth": width
        }
        fs.writeFileSync(configFile, JSON.stringify(config))
        
    }

}