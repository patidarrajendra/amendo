var express = require('express');
var router = express.Router();
var category = require("../model/category");



router.get("/", function(req, res){
	var pagedata = {title : "Add Category", pagename : "admin/add_category", message : req.flash('msg')};
	res.render("admin_layout", pagedata);
});
router.post("/", function(req, res){
	// console.log(req.body);
	category.insert(req.body, function(err, result){
		req.flash("msg", "Successful added");
		res.redirect("/admin/add_category");
	});

});

router.post("/update", function(req, res){
	 category.updateWhere({ category_id : req.body.category_id }, req.body, function(err, result){
	 	res.redirect("/admin/view_category");
	 });

});

router.delete("/",function(req,res){
      console.log('hello');
      // category.deletewhere({category_id:req.body.category_id},function(err,result){
      //   res.redirect("/admin/view_category");
      // }); 
 
});

router.post("/delete",function(req,res){
      console.log('hello');
      category.deletewhere({category_id:req.body.category_id},function(err,result){
        res.redirect("/admin/view_category");
      }); 
 
});

module.exports=router;