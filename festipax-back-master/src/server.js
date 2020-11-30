let express = require('express')
let app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
app.use(cors());
app.use(bodyParser.json())
const mongoose = require('mongoose');


mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_FULL_HOSTNAME}/festipacs?authSource=admin&readPreference=primary?authSource=admin&readPreference=primary`, { useNewUrlParser: true, useUnifiedTopology: true },
(e) => {
    if (e == null)
        return console.log('Connected to db')
    console.error(e)
});
const comment = mongoose.Schema({
    name: String,
    comment: String
})
const Message = mongoose.model('Comment', comment)

app.get('/status', (req, res) => {
    res.send('ok')
})
app.get('/message', async (req, res) => { 
    const result = await Message.find({}, {_id:0})
    res.send(result)
})
app.post('/insert', (req, res) => {
    console.log(req.body);
    if (!req.body.name
        || typeof req.body.name !== 'string'
        || req.body.name.trim() === ''
        ||!req.body.comment
        || typeof req.body.comment !== 'string'
        || req.body.comment.trim() === '') {
            return res.status(401).send('pas ok');
        }
    const { name, comment } = req.body;
    Message.create({ name, comment }, function (err) {
        if (err) return handleError(err);
        res.send('inserted !');
      });
})

app.listen(process.env.PORT)