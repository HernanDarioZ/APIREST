const fs = require('fs')
const epxress = require('express')
const router = epxress.Router()



const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    //TODO tracks.js [tracks, js]
    return fileName.split('.').shift()
    
    }
    
    fs.readdirSync(PATH_ROUTES).filter((file) => {

        const name = removeExtension(file) //todo user storage, tracks 
        if(name !== 'index'){
            console.log(`Cargando ruta ${name}`)
            router.use(`/${name}`, require(`./${file}`)) //todo http://localhost3000/API/tracks
        }
    })
module.exports = router