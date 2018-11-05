var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    user:String
},{
    collection:'Users'
})

var modal = mongoose.model('Users',userSchema);

mongoose.connect('mongodb://localhost:27017/users',{ useNewUrlParser: true },function(err){
    if(err){
        console.log(err)
    }
    console.log('success')
});




module.exports = modal;