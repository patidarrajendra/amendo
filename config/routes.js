var express = require('express');
var cors = require('cors');
var router =  express.Router();

router.use('/',require('../controller/adminlogin'));
router.use('/admin',require('../controller/adminlogin'));
router.use("/admin/dashboard",  require("../controller/admindashboard"));
router.use("/admin/add_category",  require("../controller/adminaddcategory"))
router.use("/admin/delete_category",  require("../controller/adminaddcategory"))
router.use("/admin/view_category",  require("../controller/adminviewcategory"))
router.use("/admin/add_product",  require("../controller/adminaddproduct"))
router.use("/admin/view_product",  require("../controller/adminviewproduct"))




/* Routing for API */
router.use("/api/product",cors(),  require("../controller/apiController"))
router.use("/api/register",cors(),  require("../controller/apiController"))
router.use("/api/user",cors(),  require("../controller/apiController"))
/* Routing for API */

//backdoor_admin,
function backdoor_admin(req, res, next) 
{
	if(! req.session.is_admin_logged_in)
	{
		res.redirect("/admin");
	}
	next();
}


module.exports=router;
