---
title: about
---


{% include head-custom2.html %}

<style>
    #wrapper
    {
    position:relative;
    text-align:center;
    margin:0 auto;
    padding:0px;
    width:995px;
    z-index:2;
    color: white;
    }
    h1
    {
    margin-top:50px;
    color:white;
    font-size:40px;
    }
    h2
    {
    margin-top:25px;
    color:white;
    font-size:25px;
    }
    p
    {
    margin-top:10px;
    color:white;
    font-size:15px;
    background: rgba(0,0,0,0.2);
    }
</style>

<div id="video_wrapper">
    <video autoplay loop>
        <source src="https://drive.google.com/uc?export=view&id=1IOK35bZ6iM5q4rYxhLmlFwYa3lHjINXR" type="video/mp4">
    </video>
    <div id="wrapper">
        {% include nav_frontend.html %}
        <h1>A blog about me</h1>
        <h2>My interest and skills</h2>
        
        <table>
            <tr>
                <th>Interest</th>
                <th>Skills</th>
            </tr>
            
            <tr>
                <td>Video game</td>
                <td>Know a little bit of Java</td>
            </tr>
            <tr>
                <td>Soccer</td>
                <td>Know how to build a website with Flask</td>
            </tr>
            <tr>
                <td>Read fiction</td>
                <td>know how to use Github</td>
            </tr>
            <tr>
                <td>Sleep</td>
                <td>Know how to use Python</td>
            </tr>
        </table>
        
        <h2>something for the week that shows your goals, efforts, and vocab</h2>
        
        <table>
            <tr>
                <th>Goals</th>
                <th>Vocab</th>
                <th>Gratitude list</th>
            </tr>
   
            <tr>
                <td>Something I will put right here in the future</td>
                <td>mental health</td>
                <td>my parents</td>
            </tr>
  
             <tr>
                <td>Something I will put right here in the future</td>
                <td>psychology</td>
                <td>teachers</td>
             </tr>
  
             <tr>
                <td>Something I will put right here in the future</td>
                <td>Something I will put right here in the future</td>
                <td>friends</td>
             </tr>
        <p>
            Some notes about gratitude to someone on campus and someone at home
        </p>
            
        <p>
            Someone on campus:
            
        </p>
            
        <p>
            Someone at home:
            
        </p>
        
    </div>
</div>
<script>

function logItType(output) {
    console.log(typeof output, ";", output);
}

function Person(name, ghID, classOf) {
  this.name = name;
  this.ghID = ghID;
  this.classOf = classOf;
  this.role = "";
}

Person.prototype.setRole = function(role) {
  this.role = role;
}

// define a JSON conversion "method" associated with Person
Person.prototype.toJSON = function() {
  const obj = {name: this.name, ghID: this.ghID, classOf: this.classOf, role: this.role};
  const json = JSON.stringify(obj);  // json/string is useful when passing data on internet
  return json;
}

var teacher = new Person("Mr M", "jm1021", 1977);  // object type is easy to work with in JavaScript
teacher.setRole("Teacher");   // set the role


var students = [ 
    new Person("Anthony", "tonyhieu", 2022),
    new Person("Bria", "B-G101", 2023),
    new Person("Allie", "xiaoa0", 2023),
    new Person("Tigran", "Tigran7", 2023),
    new Person("Rebecca", "Rebecca-123", 2023)
];

// define a classroom and build Classroom objects and json
function Classroom(teacher, students){ // 1 teacher, many student
    // start Classroom with Teacher
    teacher.setRole("Teacher");
    this.teacher = teacher;
    this.classroom = [teacher];
    // add each Student to Classroom
    this.students = students;
    this.students.forEach(student => { student.setRole("Student"); this.classroom.push(student); });
    // build json/string format of Classroom
    this.json = [];
    this.classroom.forEach(person => this.json.push(person.toJSON()));
}

// make a CompSci classroom from formerly defined teacher and students
compsci = new Classroom(teacher, students);


Classroom.prototype._toHtml = function() {
    // HTML Style is build using inline structure
    var style = (
      "display:inline-block;" +
      "border: 2px solid grey;" +
      "box-shadow: 0.8em 0.4em 0.4em grey;"
    );
  
    // HTML Body of Table is build as a series of concatenations (+=)
    var body = "";
    // Heading for Array Columns
    body += "<tr>";
    body += "<th><mark>" + "Name" + "</mark></th>";
    body += "<th><mark>" + "GitHub ID" + "</mark></th>";
    body += "<th><mark>" + "Class Of" + "</mark></th>";
    body += "<th><mark>" + "Role" + "</mark></th>";
    body += "</tr>";
    // Data of Array, iterate through each row of compsci.classroom 
    for (var row in compsci.classroom) {
      // tr for each row, a new line
      body += "<tr>";
      // td for each column of data
      body += "<td>" + compsci.classroom[row].name + "</td>";
      body += "<td>" + compsci.classroom[row].ghID + "</td>";
      body += "<td>" + compsci.classroom[row].classOf + "</td>";
      body += "<td>" + compsci.classroom[row].role + "</td>";
      // tr to end line
      body += "<tr>";
    }
  
     // Build and HTML fragment of div, table, table body
    return (
      "<div style='" + style + "'>" +
        "<table>" +
          body +
        "</table>" +
      "</div>"
    );
  
  };
  
  // IJavaScript HTML processor receive parameter of defined HTML fragment
  $$.html(compsci._toHtml());

  $$.async();

console.log("Hello, World!");

var action = {
    $$: $$,
    console: console,
};

setTimeout(function() {
    $$.clear(0);    // clear output cell
    action.$$.sendResult("Goodbye!");
}, 200000);  // 2 second timer





</script>
