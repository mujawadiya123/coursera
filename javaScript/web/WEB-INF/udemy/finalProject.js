var div = document.getElementById('modify');

div.style.cssText = "width : 400px ; height : 400px ; background : yellow;";



function  set() {

var element = document.getElementsByName('cssProperty');



for(var i=0 ; i<element.length ; i++){

    "use Strict"

    var cssProperty = element[i].getAttribute('id');

    var cssValue = element[i].value;
    div.style[cssProperty]=cssValue;

}
}

var setButton = document.getElementById('set');

setButton.addEventListener('click' , set);