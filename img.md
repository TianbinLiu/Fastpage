---
title: img
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
    <div class="container">
    <video autoplay loop id="background" class="videoPlayer">
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
     </div>   
<script src="{{ '/assets/js/videojava.js' | relative_url }}" type="text/javascript"></script>
    
</body>
    </html>
