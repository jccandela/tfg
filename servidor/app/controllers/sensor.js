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

function getSensors(req, res){
    Sensor.find({}, function(err, sensors){
        if(err){
          return res.status(500).json({
            message: 'Error obteniendo los sensores'
          });
        }
        
        return res.json(sensors);
    })
}

function getSensor(req,res){
    if(req.params.dev_id){
        Sensor.findOne({dev_id: req.params.dev_id}, function(err, sensor){
            if(err){
                return res.status(500).json({
                  message: 'Error obteniendo el sensor'
                });
              }
              if(!sensor){
                return res.status(404).json({
                  message: 'No existe el sensor'
                });
              }
              return res.json(sensor);
        })
    } else {
        return res.status(400).json({
            message: 'Bad request'
          });  
    }
}

module.exports = {
    createSensor,
    getSensors,
    getSensor
}