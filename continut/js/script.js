function f(){
    console.log("Hello");
    setInterval(g,1000);
}


function g(){
    const d = new Date();
    document.getElementById("data").innerHTML = d;
    document.getElementById("url").innerHTML =
    "The full URL of this page is:" + window.location.href;
}


function schimbaContinut(resursa,jsFisier,jsFunctie) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("continut").innerHTML = this.responseText;
    }
    };

    xhttp.open("GET", "../" + resursa + ".html", true);
    xhttp.send();

    if (jsFisier) {
        var elementScript = document.createElement('script');
        elementScript.onload = function () {
            console.log("hello");
            if (jsFunctie) {
                window[jsFunctie]();
            }
        };
        elementScript.src = jsFisier;
        document.head.appendChild(elementScript);
    } else {
        if (jsFunctie) {
            window[jsFunctie]();
        }
    }
    }


/*<canvas id="c"  onclick="desen(event)">

var x=null,y=null;
function desen(e){
    if(x==null){
        x=e.offsetX;
        y=e.offsetY;
    
    }else{
        let ctx=.....;
        ...
        ctx.fillRect(Math.min(x,e.offsetX),MAth.min...,Math.abs(x-e.offsetX),...     )
        x=y=null;
    }
}*/
