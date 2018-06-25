const mongoose = require('mongoose')
const Schema = mongoose.Schema

const museSchema = new Schema({
    name: {
        type: String,
        default: "Default Sonata"
    },
    description: {
        type: String,
        default: "a sound of succession of notes"
    },
    keySignature: {
        type: String,
        default: "C"
    },
    timeSignature: {
        type: String,
        default: "4:4"
    },
    tempoBps: {
        type: Number,
        default: 60
    },
    tuningHz: {
        type: Number,
        default: 440
    }
})


const userSchema = new Schema({
    name: {
        type: String,
        default: 'Joe bag of Doughnuts'
    },
    description: {
        type: String,
        default: "Amature composer, champion consumer of doughnuts"
    },
    muses: [museSchema]
})

const MuseModel = mongoose.model('muse', museSchema)
const UserModel = mongoose.model('user', userSchema)

module.exports = {
    MuseModel,
    UserModel
}