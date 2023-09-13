const express = require("express");
app = express();
const port = 5173;

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get("/", (req, res) => {
  const name= req.body.name ;
  res.send(name);
  console.log(' ${name} ww');
});


app.listen(port, ()=>{
  console.log('port ${port} Listening');
});
