require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const { MuseModel, UserModel, CompositionModel } = require('./schema')

const testComp1 = new CompositionModel({
    name: "Comp1",
    notePlaces: [
        [0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    ]
})

const testComp2 = new CompositionModel({
    name: "Comp2",
    notePlaces: [
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    ]
})

const testComp3 = new CompositionModel({
    name: "My New Comp",
    notePlaces: [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0]
    ]
})

const testComp4 = new CompositionModel({
    name: "Another New Comp",
    notePlaces: [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    ]
})

const testMuse1 = new MuseModel({
    name: "A walk in the park",
    description: "a quick little fugue, but Ominous",
    keySignature: "Gm",
    timeSignature: "2:1",
    tempoBps: 60,
    tuningHz: 440,
    compositions: [testComp1, testComp2]
})

const testMuse2 = new MuseModel({
    name: "after Dark",
    description: "moonlight sonata rip off, but again, Ominous",
    keySignature: "C#m",
    timeSignature: "4:1",
    tempoBps: 58,
    tuningHz: 435,
    compositions: []
})

const testMuse3 = new MuseModel({
    name: "concerto thoughts",
    description: "A-B-B-C to crescendo. Theme around falling minor second into falling major third",
    keySignature: "Am",
    timeSignature: "2:4",
    tempoBps: 50,
    tuningHz: 440,
    compositions: []
})

const testMuse4 = new MuseModel({
    name: "a sweet suite",
    description: "on the cello, arpeggiate G B G B G C G C",
    keySignature: "G",
    timeSignature: "2:1",
    tempoBps: 60,
    tuningHz: 440,
    compositions: []
})

const testMuse5 = new MuseModel({
    name: "this tune stuck in my head",
    description: "open with a big Bb trill",
    keySignature: "Ab",
    timeSignature: "4:1",
    tempoBps: 58,
    tuningHz: 435,
    compositions: [testComp3, testComp4]
})


const testUser1 = new UserModel({
    name: "Johan Schmidt",
    description: "ambiguously North-German. Enjoys walks. Incorrect theories about Music Theory",
    muses: [testMuse1, testMuse2, testMuse3]
})

const testUser2 = new UserModel({
    name: "John Smith",
    description: "new to composing. Happy to talk about about music without being a snob.",
    muses: [testMuse4, testMuse5]
})

UserModel.remove({})
    .then(() => testUser1.save())
    .then(() => testUser2.save())
    .then(() => console.log('seeds ran successfully'))
    .then(() => mongoose.connection.close())