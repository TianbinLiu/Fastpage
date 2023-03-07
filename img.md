---
title: Image
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

<body onload="checking(); startTimer();"> 
<div id="video_wrapper">
  <video autoplay loop id="background">
    <source src="https://drive.google.com/uc?export=view&id=17ygkkkTDZb219cgsmglfod33qP8PGW58" type="video/mp4">
  </video>
</div>
    <div id="wrapper">
        {% include nav_frontend.html %}
         <table>
            <tr>
                <td><div id="digital-clock"></div></td>
                <td><a href="https://github.com/aaditgupta21/football-pages/graphs/contributors">See commits for the project tri 1</a></td>
                <td><a href="https://github.com/CanCodeDevelopment/cancode-frontend/commits/main">See commits for the project tri 2</a></td>
            </tr>
        </table>
  <table style="width: 25%; margin-top: 3%; position: absolute;">
      <tr>
        <th>
            <h1>
            Tri 1 Night of Museum capture
            </h1>
            <img id="img" style="width: auto; height: 800px; border-radius: 5px;
    box-shadow: 7px 7px 7px #666666;" src="images/NAM.jpg" alt="NAM">
          </th>
      </tr>
      <tr>
        <th><button type="button" onclick="displayPreviousImage()">Previous</button>
       <button type="button" onclick="displayNextImage()">Next</button></th>
      </tr>
      <tr>
      <th>
      <h1>
      Tri 2 Night of Museum capture
      </h1>
      <img id="img2" style="width: auto; height: 800px; border-radius: 5px;
    box-shadow: 7px 7px 7px #666666;" src="images/NofM/NightofMuseum1.jpg" alt="NAM"></th>
      </tr>
      <tr>
        <th><button type="button" onclick="displayPreviousImage2()">Previous</button>
       <button type="button" onclick="displayNextImage2()">Next</button></th>
      </tr>
  </table>
</div>   

    
<script src="{{ '/assets/js/videojava.js' | relative_url }}" type="text/javascript"></script>

    
</body>
</html>
