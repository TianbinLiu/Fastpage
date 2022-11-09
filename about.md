---
layout: default
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

<body onload="checking()">   
<div id="video_wrapper">
  <video autoplay loop>
        <source src="https://drive.google.com/uc?export=view&id=17ygkkkTDZb219cgsmglfod33qP8PGW58" type="video/mp4">
  </video>
</div>
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
<script src="{{ '/assets/js/videojava.js' | relative_url }}" type="text/javascript"></script>
    
</body>
    </html>
