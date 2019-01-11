const express = require('express');
const router = express.Router();


const Printer = require('../models/printer');

router.get('/printer_details',(req,res,next)=>{
    Printer.find(function(err,printer_data){
        res.json(printer_data);
        next();
        return;
    })
    
});

router.put('/update/:details', function(req, res) 
{
    Printer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) 
      {
        res.console("error");
      }
      else{
        console.log(" this details:"+req.params.id+" have updated");
        res.json(post);
      }
      });
  });

router.post('/save',(req,res)=>{
     newPrinter = new Printer({
        make:req.body.make,
        model:req.body.model,
        status:req.body.status,
        issue_remarks:req.body.issue_remarks
    });

    newPrinter.save((err,Printer)=>{

        if(err)
        {
            res.json({msg: 'failed to add a Printer'});
        }
        else{
            res.json({msg: 'Printer added successfully'});
        }
    });

});


router.delete('/delete/:id', function(req, res) 
{Printer.findByIdAndRemove(req.params.id, function (err, messgae) {
    if (err) return next(err);
    res.json(messgae);
  });
  });

  


module.exports = router;