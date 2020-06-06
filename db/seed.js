const data = require('./data.json');
const Emperor = require('../models/emperor-schema.js');

const emperorData = data.map(item => {
    const emperor = {}
    romanEmperor.name = item.name
    romanEmperor.birth = item.birth
    romanEmperor.birthProvidence = item.birthProvidence
    romanEmperor.rise = item.rise 
    romanEmperor.reignStart = item.reignStart
    romanEmperor.dynasty = item.dynasty
    romanEmperor.causeOfDeath = item.causeOfDeath
    return RomanEmperor
})

RomanEmperor.deleteMany({})
    .then(() => {
        RomanEmperor.create(data)
            .then(emperors => {
                console.log(emperors);
                process.exit();
            });
    });
