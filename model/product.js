var con = require("../config/connect");
 

module.exports.insert=function(obj, cb){

	con.connect(function(err){

		var que = "INSERT INTO amendo_product (category_id, product_name, product_price, product_image,product_description,product_discount) VALUES ('"+obj.category+"','"+obj.name+"', '"+obj.price+"',  '"+obj.image+"', '"+obj.detail+"',  '"+obj.discount+"')";
		con.query(que, cb);
	});
} 

module.exports.find=function(cb){
	con.connect(function(err){
       var que = "SELECT * FROM  amendo_product";
       con.query(que,cb); 
	});
}

module.exports.findWhere=function(obj,table, cb){
	con.connect(function(err){
		 var que= "SELECT *  FROM  amendo_product WHERE ";
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

module.exports.update=function(where, obj, cb)
{
	con.connect(function(err){
	     var que= "UPDATE  amendo_product SET ";
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
		 que +=" WHERE product_id="+where.product_id ;
		 con.query(que, cb);
	});
}

/*
module.exports.find=function(cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('product').find().toArray(cb);
	});
}

module.exports.findWhere=function(obj, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('product').find(obj).toArray(cb);
	});
}
module.exports.remove=function(obj, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('product').remove(obj, cb);
	});

}
module.exports.update=function(where, obj, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('product').update(where, {$set : obj}, cb);
	});

}

module.exports.findGetCate=function(cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('product').aggregate({ $lookup : { from : "category", localField : new mongo.ObjectId('$category'), foreignField : "_id", as : "catedata" }},cb);
	});
}
*/
