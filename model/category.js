var con = require('../config/connect');

module.exports.insert=function(obj, cb){
	con.connect(function(err){
		var que = "INSERT INTO amendo_category (category_name,category_image) VALUES ('"+obj.name+"','"+obj.category_image+"')";
		console.log(que);
		con.query(que, cb);
	});
}

module.exports.find=function(cb){
	con.connect(function(err){
		var que = "SELECT * FROM amendo_category";
		  
		con.query(que, cb);
	});
}

module.exports.findWhere=function(obj, cb){
	con.connect(function(err){
		 var que= "SELECT *  FROM  amendo_category WHERE ";
		 var counter=1;
		 for(var k in obj){
		 	if(counter==1)
			{
				que += k+"= '"+obj[k]+"'";
			}
			else
			{
				que += " AND "+k+"= '"+obj[k]+"' ";

			}
			counter++;
		 }
		 //console.log(que);
		 con.query(que, cb);
	});
}

module.exports.updateWhere=function(where, obj, cb){

	con.connect(function(err){
		var que = "UPDATE amendo_category SET  ";
		//var db = client.db(config.dbName);
		//db.collection('category').update(where, {$set : obj}, cb);
         var counter=1;
		 for(var k in obj){
		 	if(counter==1)
			{
				que += k+"= '"+obj[k]+"'";
			}
			else
			{
				que += " , "+k+"= '"+obj[k]+"' ";

			}
			counter++;
		 }
        que+= "WHERE category_id = "+where.category_id;
		con.query(que, cb);
	});
}

module.exports.deletWhere=function(where, cb){

	con.connect(function(err){
		var que = "DELETE FROM amendo_category  WHERE category_id = "+where.category_id;
		console.log(que);
		con.query(que, cb);
	});
}

/*
module.exports.find=function(cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('category').find().toArray(cb);
	});
}


*/
		// db.collection('category').update({}, {$set : obj}, cb);