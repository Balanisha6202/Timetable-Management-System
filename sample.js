var mysql = require('mysql');
var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "balanisha622002"
});
app.get('/',function(req,res){
  res.sendFile('D:\\Semester_3\\DBMS\\Project UI\\home.html'); 
});

app.get('/entry_timetable',function(req,res){
  res.sendFile('D:\\Semester_3\\DBMS\\Project UI\\entry_timetable.html')
});

app.get('/Fac_entry-1',function(req,res){
  res.sendFile('D:\\Semester_3\\DBMS\\Project UI\\Fac_entry-1.html')
});

app.get('/Fac_choose',function(req,res){
  res.sendFile('D:\\Semester_3\\DBMS\\Project UI\\Fac_choose.html')
});

app.get("/Faculty_Entry",function(req,res){
  res.sendFile('D:\\Semester_3\\DBMS\\Project UI\\Faculty_Entry.html')
});

app.get("/Student_Entry",function(req,res){
  res.sendFile('D:\\Semester_3\\DBMS\\Project UI\\Student_Entry.html')
});
//firstyear 
app.get('/student1',function(req,res){
    con.query("select f.FirstName, f.LastName, c.courseid, c.coursename, c.classroomid from timetable.faculty f, timetable.course c where f.ID = c.facultyid order by c.courseid asc", function (err, result, fields) {
      if (err) throw err;
      var s1 = result[0];
      var s2 = result[4];
      var s3 = result[5];
      res.render('D:\\Semester_3\\DBMS\\Project UI\\timetable.ejs',{s1,s2,s3});
    });
});
//secondyear
app.get('/student2',function(req,res){
    con.query("select f.FirstName, f.LastName, c.courseid, c.coursename, c.classroomid from timetable.faculty f, timetable.course c where f.ID = c.facultyid order by c.courseid asc", function (err, result, fields) {
      if (err) throw err;
      var s1 = result[6];
      var s2 = result[7];
      var s3 = result[8];
      res.render('D:\\Semester_3\\DBMS\\Project UI\\timetable.ejs',{s1,s2,s3});
    });
});
//thirdyear
app.get('/student3',function(req,res){
    con.query("select f.FirstName, f.LastName, c.courseid, c.coursename, c.classroomid from timetable.faculty f, timetable.course c where f.ID = c.facultyid order by c.courseid asc", function (err, result, fields) {
      if (err) throw err;
      var s1 = result[9];
      var s2 = result[10];
      var s3 = result[11];
      res.render('D:\\Semester_3\\DBMS\\Project UI\\timetable.ejs',{s1,s2,s3});
    });
});
//fourthyear
app.get('/student4',function(req,res){
    con.query("select f.FirstName, f.LastName, c.courseid, c.coursename, c.classroomid from timetable.faculty f, timetable.course c where f.ID = c.facultyid order by c.courseid asc", function (err, result, fields) {
      if (err) throw err;
      var s1 = result[1];
      var s2 = result[2];
      var s3 = result[3];
      res.render('D:\\Semester_3\\DBMS\\Project UI\\timetable.ejs',{s1,s2,s3});
    });
});
//Faculty data insertion
app.post('/facultydata',function(req,res){
  console.log("working");
  var id      =req.body.FacID;
  var fname   =req.body.FirstName;
  var lname   =req.body.LastName;
  var dob     =req.body.dob;
  var contact =req.body.numb;
  var dept    =req.body.dept;
  var sql = "INSERT INTO timetable.faculty (ID,FirstName,LastName,DOB,Contact,dept) VALUES ('"+id+"', '"+fname+"','"+lname+"','"+dob+"','"+contact+"','"+dept+"')";
  console.log(sql);
  con.query(sql, function (err, res) {
    if (err) throw err;
  
    console.log("1 record inserted");
  });
  res.redirect("/Faculty_Entry");
})
//Timetable for CSE101
app.get('/CSE101',function(req,res){
    con.query("select facultyid,courseid, coursename, classroomid from timetable.course c order by facultyid asc", function (err, result, fields) {
      if (err) throw err;
      var fac1 = result[0];
      var fac2 = result[1];
      var fac3 = result[2];
      res.render('D:\\Semester_3\\DBMS\\Project UI\\facultytt.ejs',{fac1,fac2,fac3});
    });
});
//Timetable for CSE102
app.get('/CSE102',function(req,res){
    con.query("select facultyid,courseid, coursename, classroomid from timetable.course c order by facultyid asc", function (err, result, fields) {
      if (err) throw err;
      var fac1 = result[5];
      var fac2 = result[4];
      var fac3 = result[3];
      res.render('D:\\Semester_3\\DBMS\\Project UI\\facultytt.ejs',{fac1,fac2,fac3});
    });
});
//Timetable for CSE103
app.get('/CSE103',function(req,res){
    con.query("select facultyid,courseid, coursename, classroomid from timetable.course c order by facultyid asc", function (err, result, fields) {
      if (err) throw err;
      var fac1 = result[6];
      var fac2 = result[8];
      var fac3 = result[7];
      res.render('D:\\Semester_3\\DBMS\\Project UI\\facultytt.ejs',{fac1,fac2,fac3});
    });
});
//Timetable for CSE104
app.get('/CSE104',function(req,res){
    con.query("select facultyid,courseid, coursename, classroomid from timetable.course c order by facultyid asc", function (err, result, fields) {
      if (err) throw err;
      var fac1 = result[11];
      var fac2 = result[9];
      var fac3 = result[10];
      res.render('D:\\Semester_3\\DBMS\\Project UI\\facultytt.ejs',{fac1,fac2,fac3});
    }); 
});
//Faculty timetable generate redirect wrt ID entered
app.post('/facultyid',function(req,res){
  var facid = req.body.fid;
  if(facid == 'CSE101'){
    console.log(facid);
    res.redirect("/CSE101");
  }
  else if(facid == 'CSE102'){
    console.log(facid);
    res.redirect("/CSE102");
  }
  else if(facid == 'CSE103'){
    console.log(facid);
    res.redirect("/CSE103");
  }
  else if(facid == 'CSE104'){
    console.log(facid);
    res.redirect("/CSE104");
  }
  else{
    console.log("No faculties in this ID");
  }
})
//Student data insertion
app.post('/studentdata',function(req,res){
  console.log("working");
  var id      =req.body.StuID;
  var fname   =req.body.SFirstName;
  var lname   =req.body.SLastName;
  var dept    =req.body.dept;
  var year    =req.body.year;
  var sql = "INSERT INTO timetable.student(SID,SFirstName,SLastName,dept,year) VALUES ('"+id+"', '"+fname+"','"+lname+"','"+dept+"','"+year+"')";
  console.log(sql);
  con.query(sql, function (err, res) {
    if (err) throw err;
  
    console.log("1 record inserted");
  });
  if(dept == "CSE"){
    if(year == '1'){
      console.log(year);
      res.redirect("/student1");
    }
    else if(year == '2'){
      console.log(year);
      res.redirect("/student2");
    }
    else if(year == '3'){
      console.log(year);
      res.redirect("/student3");
    }
    else if(year == '4'){
      console.log(year);
      res.redirect("/student4");
    }
    else{
      console.log("Record not available");
    }
  }
  else{
    console.log("Record not available");
  }
})

app.listen(3000);