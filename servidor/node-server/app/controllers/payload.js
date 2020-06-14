var Payload = require('../models/payload'); // get our mongoose model

function save(dev_id, payload_fields) {
    let payload = new Payload();
    payload.dev_id = dev_id;
    payload.payload_fields = payload_fields;
    payload.payload_date = new Date();

    payload.save();
}

function getLastPayload(req, res) {
    if (req.params.dev_id) {
        Payload.findOne({ dev_id: req.params.dev_id })
            .sort([['payload_date', -1]])
            .exec(function (err, payload) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error obteniendo el payload del sensor'
                    });
                }
                if (!payload) {
                    return res.status(404).json({
                        message: 'El sensor no tiene payload almacenado'
                    });
                }

                return res.json(payload);
            })
    } else {
        return res.status(400).json({
            message: 'Bad request'
        });
    }
}

module.exports = {
    save,
    getLastPayload
}