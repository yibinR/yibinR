function showWechat(){
    document.getElementsByClassName("Contact-hidden")[0].style.display = "flex";
}
function showPhoneNumber(){
    document.getElementsByClassName("Contact-hidden")[0].style.display = "none";
    document.getElementsByClassName("Contact__phoneNumber")[0].innerHTML= "Mobile Number: +61 042093443344";
}
function popup(){
    window.alert("comments made sucessufl.")
}
