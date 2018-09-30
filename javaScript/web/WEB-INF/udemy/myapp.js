
/*var el = document.getElementById('style');
/!*
el.style.background = "blue";
el.style.color = "white";
el.style.width = "200px";
*!/

el.style.cssText ="background : blue  ; color : white ; width : 200px "
el.style.cssText +=" height : 400px";

console.log(getComputedStyle(el)) // it grabs el object and get all the applied styles

var el1 = document.getElementsByName('cars')[0];

 el1.onclick = function (event) {

    console.log( event);

}*/



/*
function CallbackFunction(event) {

     console.log("clicked by event listener")

}

el1.addEventListener('click', CallbackFunction);

 el1.removeEventListener('click' , CallbackFunction);
*/


var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');

div1.style.cssText = "width: 200px; height : 20px ; background: blue ;"
div2.style.cssText = "width:200px; height : 20px ; background: green ;"
div3.style.cssText = "width:200px; height : 20px ; background: yellow ;"

/*
document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(div3);
*/
var target = document.getElementById("style");

document.body.insertBefore(div1 , target);
document.body.insertBefore(div2 , target);
document.body.insertBefore(div3 , target);

div1.onclick = function (event) { alert("hello") }



