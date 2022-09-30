---
title: about
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    {% include head-custom2.html %}
</head>

<body> 
<div id="video_wrapper">
    <video autoplay loop id="myVideo">
        <source type="video/mp4" class="video">
    </video>
    <div id="wrapper">
        {% include nav_frontend.html %}
         <table>
            <tr>
                <td><div id="digital-clock"></div></td>
            </tr>
        </table>
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
<script type="text/javascript" defer>
        var l;
function getDateTime(){
        var now     = new Date(); 
        var year    = now.getFullYear();
        var month   = now.getMonth()+1; 
        var day     = now.getDate();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds(); 
        l = hour;
        if(month.toString().length == 1) {
             month = '0'+month;
        }
        if(day.toString().length == 1) {
             day = '0'+day;
        }   
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }   
        var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
         return dateTime;
    }
    
    setInterval(function(){
        currentTime = getDateTime();
        document.getElementById("digital-clock").innerHTML = currentTime;
    }, 1000);
    
window.onload = function(){

function checking(){
    if ((l>=0)&&(l<=5)){
        document.querySelector("#myVideo").setAttribute("src","https://drive.google.com/uc?export=view&id=17ygkkkTDZb219cgsmglfod33qP8PGW58");
    }
    else if((l>=6)&&(l<=9)){
        document.querySelector("#myVideo").setAttribute("src","https://drive.google.com/uc?export=view&id=1GV5A1SChf-hhkKheakg01GBd-CjpzlHx");
    }
    else if((l>=9)&&(l<=12)){
        document.querySelector("#myVideo").setAttribute("src","https://drive.google.com/uc?export=view&id=1BFKYi3db4VSzsVtV6-imY8mhcOxHe-g_");
    }
    else if((l>=13)&&(l<=17)){
        document.querySelector("#myVideo").setAttribute("src","https://drive.google.com/uc?export=view&id=1w4kUtoqYsylUpLU_g3oI7OtYhhPcQIiM");
    }
    else if((l>=18)&&(l<=20)){
        document.querySelector("#myVideo").setAttribute("src","https://drive.google.com/uc?export=view&id=10qZhLCMqm_RDj89Jjp8edLKLurSjQmh-");
    }
    else if((l>=21)&&(l<=23)){
        document.querySelector("#myVideo").setAttribute("src","https://drive.google.com/uc?export=view&id=1IOK35bZ6iM5q4rYxhLmlFwYa3lHjINXR");
    }        
}
  checking();   
}                      
</script>
    
</body>
    </html>
