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
        Country.create(countryData)
            .then(countries => {
                console.log(countries)
            })
            .catch(err => {
                console.log(err)
            })
    });
