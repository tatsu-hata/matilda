function drop(){
   var imgsrc = document.getElementById('blues').getAttribute('src');
   var images = document.getElementById('blues');
   
   if(imgsrc == '../imgs/btn_arrow1.png'){
   document.getElementById("dis").style.display = "block";
   document.getElementById("dis2").style.display = "block";
   document.getElementById("bluesub1").style.display = "block";
   document.getElementById("bluesub2").style.display = "block";
   images.src='../imgs/btn_arrow2.png';
   }else{
   document.getElementById("dis").style.display = "none";
   document.getElementById("dis2").style.display = "none";
   document.getElementById("bluesub1").style.display = "none";
   document.getElementById("bluesub2").style.display = "none";
   images.src='../imgs/btn_arrow1.png';
       
   }
}

function drop2(){
   var imgsrc = document.getElementById('org').getAttribute('src');
   var images = document.getElementById('org');
   if(imgsrc == '../imgs/btn_arrow1.png'){
   document.getElementById("orgdis").style.display = "block";
   document.getElementById("orgsub").style.display = "block";
   images.src='../imgs/btn_arrow2.png';
   }else{
   document.getElementById("orgdis").style.display = "none";
   document.getElementById("orgsub").style.display = "none";
   images.src='../imgs/btn_arrow1.png';
       
   }
}

function drop3(){
    
   var imgsrc = document.getElementById('yell').getAttribute('src');
   var images = document.getElementById('yell');
   if(imgsrc == '../imgs/btn_arrow1.png'){
   document.getElementById("yellowdis").style.display = "block";
   document.getElementById("yellowdis2").style.display = "block";
   document.getElementById("yellowdis3").style.display = "block";
   document.getElementById("yelsub1").style.display = "block";
   document.getElementById("yelsub2").style.display = "block";
   images.src='../imgs/btn_arrow2.png';
   }else{
   document.getElementById("yellowdis").style.display = "none";
   document.getElementById("yellowdis2").style.display = "none";
   document.getElementById("yellowdis3").style.display = "none";
   document.getElementById("yelsub1").style.display = "none";
   document.getElementById("yelsub2").style.display = "none";
   images.src='../imgs/btn_arrow1.png';
       
   }
}

function drop4(){
   var imgsrc = document.getElementById('blues').getAttribute('src');
   var images = document.getElementById('blues');
   
   if(imgsrc == '../imgs/btn_arrow1.png'){
   document.getElementById("dis").style.display = "block";
   document.getElementById("bluesub1").style.display = "block";
   images.src='../imgs/btn_arrow2.png';
   }else{
   document.getElementById("dis").style.display = "none";
   document.getElementById("bluesub1").style.display = "none";
   images.src='../imgs/btn_arrow1.png';
       
   }
}


