const mongoose = require('mongoose');

const PrinterSchema = mongoose.Schema({
    
    make:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    issue_remarks:{
        type:String,
        required:true
    }
})

const Printer = module.exports = mongoose.model('Printer',PrinterSchema);