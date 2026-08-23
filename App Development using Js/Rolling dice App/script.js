// dice image from value 1 to 6 are given in an array, codes are from Die face Emojipedia
var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
var stopped = true;

//for keep on changing dice emoji
function change()
{
    var random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
}
function stopstart()
{
     if(stopped) 
     {
        stopped = false;
        //change function is called change the image in very 0.1 second
        t=setInterval(change, 100);

     } 
     else
     {
        stopped = true;
        clearInterval(t);
     }
}

//invoking the function
window.onload = function(){
    dice=document.getElementById("dice");
    stopstart();
}