const express = require("express");
const app = express();
const cors = require('cors');



app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));


app.use(cors('http://127.0.0.1:5173/')); //la data de este servidor puede ser accedida desde esta url 


const routes = require('./routes/routes')
app.use(routes)



app.listen(3000, ()=> {
	
	console.log("server on port 3000");
	
})