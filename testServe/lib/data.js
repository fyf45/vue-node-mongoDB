var mongoose = require('mongoose');
var User = require('./db');

var info = {
    user:'hell world'
}
var UserInfo = new User({
    user:'hello'
})
UserInfo.save(function(err){
     if(err){
         console.log(err)
     }
     console.log('save success')
})
