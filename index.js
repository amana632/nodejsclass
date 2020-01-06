//Import express
let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
//Initialize the app
let app = express();
//importing routes
let apiRoutes = require("./api-routes")

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//connecting moongoose
mongoose.connect('mongodb://localhost/myfirstdb',{useNewUrlParser: true});
var db = mongoose.connection;

//check db
if(!db)
    console.log("error in db connection")
else 
    console.log("db connected successfully")

//setup server ka port
var port = process.env.PORT || 8080;

//default url
app.get('/',(req,res) => res.send('this is my 1st page'));
//for using api routes in the app
app.use('/api',apiRoutes);
//app launch
app.listen(port, function(){
    console.log("the server is running on port" + port);
});

