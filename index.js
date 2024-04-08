import mqtt from "mqtt";
import express from "express";
import cors from "cors";
const app = express();
const port = 9999;

// Kết nối với MQTT Server
const client = mqtt.connect('mqtt://broker.emqx.io', { port: 1883, username: 'emqx', password: 'public' }); // Replace with your broker's address and port if different
let list = [
    { id: 'LIGHT001', on_off: false, brightness: 0 },
    { id: 'LIGHT002', on_off: false, brightness: 0 },
    { id: 'LIGHT003', on_off: false, brightness: 0 },
    { id: 'LIGHT004', on_off: false, brightness: 0 }
];
client.on('connect', () => {
    console.log('Connected to MQTT broker');
});

client.on('error', (err) => {
    console.error('Error connecting to broker:', err);
});

client.subscribe('PADORA001/report', (err, granted) => {
    if (err) {
        console.error('Error subscribing to topic:', err);
    } else {
        console.log(`granted: ${JSON.stringify(granted)}`);
    }
});


client.subscribe('PADORA001/command', JSON.stringify(

), (err, granted) => {
    if (err) {
        console.error('Error subscribing to topic:', err);
    } else {
        console.log(`granted: ${JSON.stringify(granted)}`);
    }
})

function lightToggle(id, status, res) {
    client.publish('PADORA001/command', JSON.stringify(
        {
            "cmd": "update_state",
            "data": {
                "id": id,
                "on_off": status
            }
        }
    ), (err) => {
        if (err) {
            console.error('Publish error:', err);
            res.status(500).send('Publish failed');
        } else {
            res.send('Published successfully');
        }
    });
}
app.use(express.json());
app.use(cors());
app.post('/active-light', (req, res) => {
    const { id, status } = req.body;
    console.log(id, status);
    lightToggle(id, status, res);
});


app.post('/brightness', (req, res) => {
    const { id, brightness } = req.body;
    client.publish('PADORA001/command', JSON.stringify(
        {
            "cmd": "update_state",
            "data": {
                "id": id,
                "brightness": brightness
            }
        }
    ), (err) => {
        if (err) {
            console.error('Publish error:', err);
            res.status(500).send('Publish failed');
        } else {
            res.send('Published successfully');
        }
    });
});

app.get('/get-all-lights', (req, res) => {
    res.status(200).json(list);
});

client.on('message', (topic, message) => {
    console.log('Received message on topic:', topic);
    console.log('Message:', message.toString());
    if(topic === 'PADORA001/report') {
        const data = JSON.parse(message.toString());
        list = data.data;
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})