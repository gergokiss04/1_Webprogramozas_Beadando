function Kastelyok(){
    let varosok = document.getElementsByClassName("var");
    
    var x = document.getElementsByClassName("eger");
    for(var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
       
    }

    var y = document.getElementsByClassName("var");
    for(var i = 0; i < x.length; i++) {
        y[i].style.display = "block";
        
    }
        
}

function Eger(){ 
    var x = document.getElementsByClassName("eger");
    for(var i = 0; i < x.length; i++) {
        x[i].style.display = "block";
        
    }
       

    var y = document.getElementsByClassName("var");
    for(var i = 0; i < x.length; i++) {
        y[i].style.display = "none";
    }
       
}

function Minden(){
    var x = document.getElementsByClassName("eger");
    for(var i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
    

    var y = document.getElementsByClassName("var");
    for(var i = 0; i < x.length; i++) {
        y[i].style.display = "block";
    }
}