var Sensor  = require('../models/sensor'); // get our mongoose model
var payload = require('../controllers/payload');

function createSensor(sensorRaw){
    Sensor.find({dev_id: sensorRaw.dev_id}, function(err, sensor){
        if(err){
            console.log(err);
        }else{
            if(sensor.length == 0){
                let sensor = new Sensor();
                sensor.app_id = sensorRaw.app_id;
                sensor.dev_id = sensorRaw.dev_id;
                sensor.hardware_serial = sensorRaw.hardware_serial;
                sensor.metadata = sensorRaw.metadata;
    
                sensor.save(function(err, sensor){
                    if(err){
                        console.log('Error al crear el sensor');
                    }
                    console.log('Sensor creado');
                });
            }
            else{
                console.log('El sensor ya existe');
            }

            payload.save(sensorRaw.dev_id, sensorRaw.payload_fields);
        }       
    })
}

module.exports = {
    createSensor
}