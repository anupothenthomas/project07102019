const express = require('express');
const app = express();

// ES6 syntax, therefore const keyword used
const PORT = 5000;


app.get('/home', (req,Response)=>
{
    console.log("Hey guys i'm alive");
    Response.send("Hey Boys");
})

app.listen(PORT, ()=>{
    // ES6 way of doing 
    console.log(`Server started on port ${PORT}`);
    // normal way of doing
    console.log('Server started on port ' +PORT)
})