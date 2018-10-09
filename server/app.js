express = require('express');
app = express();
port = process.env.PORT || 3000;
morgan = require('morgan');
Papa = require('papaparse');
cors = require('cors');

app.use(cors());
app.use(morgan('combined'));

app.get("/", ( req, res, next )=>{
    res.send("Success");
})

app.listen(port, ()=>{ console.log(`Literary party on port: ${port}`) });

