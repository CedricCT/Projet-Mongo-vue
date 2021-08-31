const mongoose = require('mongoose');

const UserDataModel = mongoose.model(
    "DUELFR",{
        name:{
            type: String,
            require:true,
            lowercase: true,
            unique: true,
            trim:true
        },
        password:{
            type: String,
            require: true,
            trim: true
        },
        email:{
            type: String,
            require: true,
            unique:true,
            trim:true,
            lowercase: true
        },
        biography:{
            type: String,
            require:false
        }
    },"userdata"
)

module.exports = UserDataModel;