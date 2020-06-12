import app from "./app";
import ttn from "ttn";

const PORT = process.env.PORT || 3000;
const appID = "lora-node-jcarloscandela"
const accessKey = "ttn-account-v2.887Flf39sj7QaSAteMdXc8t0VSEpfc1A-kSVKcQEiu8"

app.listen(PORT, () => {
    console.log(`API REST corriendo en puerto ${PORT}`);
})

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