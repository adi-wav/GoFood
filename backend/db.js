const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:gofood@gofood.ekat4sc.mongodb.net/?retryWrites=true&w=majority'
const mongoDB =() =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connnected");
    });
}

module.exports = mongoDB;