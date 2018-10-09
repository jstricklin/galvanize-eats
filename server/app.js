express = require('express');
app = express();
port = process.env.PORT || 3000;
morgan = require('morgan');
Papa = require('papaparse');
cors = require('cors');
fs = require('fs');
data = JSON.parse(fs.readFileSync('../galvanize_reads_sample_data-json.js'));

app.use(cors());
app.use(morgan('combined'));

app.get("/", ( req, res, next )=>{
    res.json(data);
})

app.listen(port, ()=>{ console.log(`Literary party on port: ${port}`) });

