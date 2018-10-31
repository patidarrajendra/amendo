var con = require('../config/connect');
var sha1 = require('sha1');


module.exports.select= function(table , cb){
	  con.connect(function(err){
	  	    //console.log(obj);
	  	   con.query("SELECT * FROM "+table.tablename,cb); 
	  });
} 


module.exports.findWhere=function(obj,table,cb){
	con.connect(function(err){
		var que = "SELECT * FROM "+table.tablename+" WHERE ";
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
		con.query(que, cb);
	});
}

 

module.exports.insert =function(obj,table, cb){ 

	con.connect(function(err){
		//console.log(obj);
        var que = "INSERT INTO "+table.tablename+" SET ";

        var counter=1;
		for(var k in obj){
			if(counter==1)
			{
				que += k+"= '"+obj[k]+"'";
			}
			else
			{
				if(k=='password')
					que += " , "+k+"= '"+sha1(obj[k])+"' ";
				else
				   que += " , "+k+"= '"+obj[k]+"' ";

			}
			counter++;
		}
		//var que = "INSERT INTO amendo_user (full_name, username, password, email, phone) VALUES ('"+obj.full_name+"', '"+obj.username+"', '"+sha1(obj.password)+"', '"+obj.email+"', '"+obj.phone+"')";
		 //console.log(que);
		 con.query(que, cb);


	});
}

/*
UPDATE user SET salary=10000 WHERE city='ujjain'
UPDATE user SET salary=10000, age=25, name="rohit" WHERE city='ujjain'
{ salary : 1000, name : "rohit", age : 25 }
*/


module.exports.update=function(where, obj, cb){

	var que = "UPDATE user SET full_name='"+obj.full_name+"', address = '"+obj.address+"', gender = '"+obj.gender+"', city = '"+obj.city+"' WHERE id = "+where.id;
	con.connect(function(err){
		con.query(que, cb);
	});
	// var que = "UPDATE user SET ";
	// var counter=1;
	// for(var k in obj){
	// 	if(counter==1){
	// 		que += k+" = '"+obj[k]+"'"
			
	// 	}
	// 	else{
	// 	que += ", "+k+" = '"+obj[k]+"'"
			
	// 	}
	// 	counter++;
	// }
	// var key = Object.keys(where);
	// que += " WHERE "+key[0]+" = '"+where[key[0]]+"'";
	// console.log(que);
}
module.exports.updateImg=function(where, obj, cb){
	var que = "UPDATE user SET image='"+obj.img+"' WHERE id = "+where.id;
	con.connect(function(err){
		con.query(que, cb);
	});
}

