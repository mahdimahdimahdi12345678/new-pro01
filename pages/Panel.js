window.onload = function(){
    cheackUser()
 }
 cheackUser = () =>{
     const currentUser = getCookie("currentUser");
     if(currentUser == undefined || currentUser == null || currentUser == ""){
         location.href = "login.html"
     }
 }

logout = () =>{
    setCookie("currentUser", null , 0);
    setCookie("token", null, 0);
    location.href = "../login.html"
}