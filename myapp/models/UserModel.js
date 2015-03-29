var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my_database');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
	"first_name" : String,
	"last_name" : String,
	"age" : Number
});

module.exports = mongoose.model('User', UserSchema);