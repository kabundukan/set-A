    function randomizedColor(){
    var x = Math.floor(Math.random() *255) +1;
    var y = Math.floor(Math.random() *255) +1;
    var z = Math.floor(Math.random() *255) +1;
    document.querySelector("#motor-png").style.backgroundColor = "rgb("+x+","+y+","+z+")";
    }
    function changeColor(){
        var color = document.getElementById("color-varience").value;
        document.querySelector("#motor-png").style.backgroundColor = color;
    }
    function resetColor(){
        var white =document.getElementById("reset-color").value;
        document.querySelector("#motor-png").style.backgroundColor = white;
    }