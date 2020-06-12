var Payload  = require('../models/payload'); // get our mongoose model

function save(dev_id, payload_fields){
    let payload = new Payload();
    payload.dev_id = dev_id;
    payload.payload_fields = payload_fields;
    payload.payload_date = new Date();

    payload.save();
}

module.exports = {
    save
}