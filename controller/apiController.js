var express = require('express');
var router = express.Router();
var sha1 = require('sha1');
var api = require('../model/api');
var path= require('path');
var url = require('url');

var adr = 'http://localhost:3000';
var q = url.parse(adr, true);

router.get("/",function(req,res){
		 tableobj={tablename:'amendo_product'}  ; 
     api.select(tableobj,function(err,result){
     	
     	res.send(result);

        
	 });
});

/* Get Detail Fo user Profile by userid */

router.get("/viewprofile/:id",function(req,res){
    var findObj = { id : req.params.id };  
    var tableobj={tablename:'amendo_user'}  ;  
    api.findWhere( findObj ,tableobj, function(err, result){
       var response = JSON.stringify({"msg":"success","status":'200',"data":result});
       res.send(response);
    });
});

router.post("/login", function(req, res){
      var u = req.body.email;
      var p = sha1(req.body.password);
      var tableobj={tablename:'amendo_user'}  ;  
      api.findWhere({ email : u},tableobj, function(err, result){
        if(result.length==1)
        {
            var data = JSON.parse(JSON.stringify(result[0]));
            if(data.password == p)
            {
                req.session.name = data.full_name;
                req.session.uid = data.id;
                req.session.is_user_logged_in = true;
                var response = JSON.stringify({"msg":"Login successfully","status":'200',"data":result});
                res.send(response);
            }
            else
            {
                 var response = JSON.stringify({"msg":"Invalid Password","status":'501'});
                 res.send(response);
            }
        }
        else
        {
             var response = JSON.stringify({"msg":"Invalid Username","status":'501'});
              res.send(response);
            
        }
    });
});
router.post("/insert", function(req, res){
    var tableobj={tablename:'amendo_user'}  ;
    api.insert(req.body,tableobj, function(err, result){
         if(err)
           res.send(JSON.stringify({"msg":"fail"}));
         else
           res.send(JSON.stringify({"msg":"success"}));
    });
});


/* Get Single Product detail */
router.get("/single/:id",function(req,res){

    tableobj={tablename:'amendo_product'}  ;  
    findObj={product_id:req.params.id}  ;  
    api.findWhere( findObj , tableobj,function(err, result){
       var response = JSON.stringify({"msg":"success","status":'200',"data":result});
       res.send(response);
    });
});

/* Get Category List */
router.get("/list",function(req,res){
     tableobj={tablename:'amendo_category'}  ; 
     api.select(tableobj,function(err,result){
      //obj=JSON.stringify(result);
      //console.log(JSON.parse(JSON.stringify(result)));
      // for(var k in result){
        //console.log(k);
        //if(result[k].category_image)
        //{
          //path.join(__dirname + '/app/index.html')  
         //result[k].category_image =path.join('http://109.168.1:3000/category_image/' + result[k].category_image);
        //}
      // }
       //console.log(result);
      //console.log(path.join(__dirname + '/app/index.html'));
      var response = JSON.stringify({"msg":"success","status":'200',"data":result});
      res.send(response);
   });
});


module.exports=router;