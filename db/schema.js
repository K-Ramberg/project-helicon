const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notePlacementSchema = new Schema({
    notePlacement: {
        type: Array,
        default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
})

const compostionSchema = new Schema({
    name: {
        type: String,
        default: "new Comp"
    },
    notePlaces: [notePlacementSchema]
})

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
    },
    compositions: [compostionSchema]
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

const NotePLacementModel = mongoose.model('notePlacer', notePlacementSchema)
const CompositionModel = mongoose.model('composition', compostionSchema)
const MuseModel = mongoose.model('muse', museSchema)
const UserModel = mongoose.model('user', userSchema)

module.exports = {
    MuseModel,
    UserModel,
    CompositionModel,
    NotePLacementModel
}