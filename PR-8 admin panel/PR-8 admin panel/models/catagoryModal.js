const mongoose = require('mongoose');

const catagorySchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
   
})
const catagoryuser = mongoose.model('catagoryuser',catagorySchema);

module.exports = catagoryuser;