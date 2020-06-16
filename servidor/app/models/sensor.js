var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const SensorSchema = new Schema({
    app_id: String,
    dev_id: {type: String, unique: true},
    hardware_serial: String,
    metadata: JSON,
    lastPayload: JSON
})


module.exports = mongoose.model('Sensor', SensorSchema)