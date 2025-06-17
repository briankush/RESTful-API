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

let users = [
    {id:1, name:'John', age:25},
    {id:2, name:'Jane', age:30},
    {id:3, name:'Bob', age:35},
    {id:4, name:'Alice', age:40}
    
]

//CRUD operations

//Create
app.post('/users', (req, res)=>{
    const newUser= {id: users.length + 1, name: req.body.name};

    users.push(newUser);
    res.status(201).json(newUser);

})

//Read
app.get('/users', (req, res)=>{
    res.json(users);
});

//read one
app.get('/users/:id', (req, res)=>{
    const user = users.find(u => u.id == req.params.id);
    res.json(user);
});

// update
app.put('/user/:id', (req, res)=>{
    const user = users.find(u => u.id == req.params.id);
    user.name = req.body.name;
    res.json(user);
});

//delete
app.delete('/users/:id', (req, res) =>{
    users= users.filter(u => u.id !=/*u.id ===Number() */ req.params.id);
    res.status(204).send();
});



app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
});