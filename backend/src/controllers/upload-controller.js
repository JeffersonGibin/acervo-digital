const multer = require('multer')
const md5 = require('md5')
const path = require('path')
const fs = require('fs')
const { Midia } = require('../models')

/**
 * Controller de Upload
*/
module.exports = {
    create: async (req, res, imageExists, typeFile, finishUpload) => {
        const midiaid = req.params.id
        const { imagem } = await Midia.getImageByID(midiaid)

		if(imagem) imageExists(res, imagem)

        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
        
                // error first callback
                cb(null, 'public/images/');
            },
            filename: function (req, file, cb) {
                const filename = md5(file.fieldname + '-' + Date.now()) + '.jpg'
                cb(null, filename)
                Midia.saveImage(filename, midiaid)
            }
        });
    
        // utiliza a storage para configurar a instância do multer
        const upload = multer({ 
            storage,
            fileFilter: function (req, file, callback) {
                const ext = path.extname(file.originalname).replace(".", "")

                if(!["jpg", "png"].includes(ext)){
                    callback(new Error('Only files allowed!'));
                    typeFile(req, res)
				}
                callback(null, true)
            },
        }).single('photo');

        upload(req, res, function(err) {
            finishUpload(req, res, err)
        })
    },

    destroy: async (req, res, callbackFileExists, callbackNotFileExists) => {
        const midiaid= req.params.id
        const { imagem } = await Midia.getImageByID(midiaid)

        return await fs.exists(process.env.DIRECTORY_IMAGES + imagem, function(exists) {
            if(exists) {
                fs.unlinkSync(process.env.DIRECTORY_IMAGES + imagem)
                Midia.saveImage(null, midiaid).then(() => {
                    callbackFileExists(req, res)
                })
            } else {
                callbackNotFileExists(req, res)
            }
          });
    }
}