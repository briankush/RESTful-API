const express = require('express')
const app = express()
const PORT = 3000
app.use(express.json)

app.get('/', (req, res) =>{ //route to handle get request from root url
    res.send('Hello World i am learning react on a teusday') //send a response to client 
});

// middlewwares
app.use((req, res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
}); // end
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
}) // end

// route parameters
app.get('/user/:id', (req, res) =>{
    res.send(`User ID: ${req.params.id}`)
})

//Query params
app.get('/search', (req, res) =>{
    res.send(`Search Query: ${req.query.q}`)
})




//REST API
//CRUD operations




app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
});