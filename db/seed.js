const Emperor = require('../models/emperor-schema.js');
const emperorData = require('');

Emperor.deleteMany({});
Emperor.create(emperorData)
    .then(emperors => {
        console.log(emperors)
    })
    .catch(err => {
        console.log(err)
    });

