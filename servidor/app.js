var ttn = require("ttn")

var appID = "lora-node-jcarloscandela"
var accessKey = "ttn-account-v2.887Flf39sj7QaSAteMdXc8t0VSEpfc1A-kSVKcQEiu8"

console.log("Program running")

ttn.data(appID, accessKey).then(function (client) {
        client.on("uplink", function (devID, payload) {
            console.log("Received uplink from ", devID)
            console.log(payload)
			console.log(payload.dev_id)
			console.log(payload.payload_fields)
			console.log(payload.payload_fields.Temp)
        })
    })
    .catch(function (error) {
        console.error("Error", error)
        process.exit(1)
    })