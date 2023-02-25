
$(document).ready(function() {
    
    $(".icon").hover(function(){ 
        $( this ).toggleClass("iconswell");});

        var xmlhttp = new XMLHttpRequest();
var url = "https://api.github.com/users/isaacamartin/repos";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out +="<li>" + arr[i].name;
  }
  document.getElementById("githubRepo-1").innerHTML = out;
}

});
