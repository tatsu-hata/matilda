// This is a JavaScript file
function login(){

   var userID = document.getElementById('user_ID').value;
   var password = document.getElementById('Password').value;
   var next = document.getElementById('login_button');
   
   if (userID != '' && password == '') {
       next.href="restaurant/index.html";
   } else if (userID == '' && password != ''){
       next.href="shiharai/index.html";
   } else {
       next.href="nouka/index.html";
   }
}

function clear(){
    document.getElementById('user_ID').value = "";
    document.getElementById('Password').value = "";
}
