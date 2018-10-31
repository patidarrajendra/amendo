var express = require('express');
var router = express.Router();
var category = require('../model/category');
//var Mongo = require("mongodb");

router.get("/", function(req, res){
	category.find(function(err, result){
		 // console.log(result);
		var pagedata = { title : "View Category", pagename : "admin/view_category", data : result};
		res.render("admin_layout", pagedata);
	});
});

router.get('/edit/:id', function(req, res){
	//console.log(req.params);
	var findObj = { category_id : req.params.id };
	category.findWhere( findObj , function(err, result){
        result= JSON.parse(JSON.stringify(result[0]));
        //array=[];
       // array['category_id']=result.category_id;
        //array['category_name']=result.category_name;
		//JSON.parse(JSON.stringify(result));
		//result = JSON.parse(result[0]);
		//a=JSON.parse(result);
		//console.log(a['id']);
		//console.log(result);
		var pagedata = { title : "Update Category", pagename : "admin/update_category", data : result };
		res.render("admin_layout", pagedata);

	});
	
});
router.get('/delet/:id', function(req, res){
	 var findObj = { category_id : req.params.id };
	category.deletWhere( findObj , function(err, result){
		res.redirect("/admin/view_category");	
	});
});


module.exports=router;