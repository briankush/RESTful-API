const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) =>{ //route to handle get request from root url
    res.send('Hello World i am learning react on a monday') //send a response to client 
});


app.use((req, res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
});
// routing , about page
app.get('/about', (req, res) => {
    res.send('About page')
});

//home page
app.get('/home', (req, res) => {
    res.send('Home page')
});

//Contact page
app.get('/contact', (req, res) =>{
    res.send('Contact page')
})
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
});