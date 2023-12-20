var randomnumber1=(Math.random()*6)+1;
randomnumber1=Math.floor(randomnumber1);
var randomdiceimage1="dice"+randomnumber1+".png";
var randomimgsource1="images/"+randomdiceimage1;
document.querySelector(".img1").setAttribute("src",randomimgsource1);


var randomnumber2=(Math.random()*6)+1;
randomnumber2=Math.floor(randomnumber2);
var randomdiceimg2="dice"+randomnumber2+".png";
var randomimgsource2="images/"+randomdiceimg2;
document.querySelector(".img2").setAttribute("src",randomimgsource2);
 
var win;
if(randomnumber1>randomnumber2)
{
    win="player 1 wins";
}
else if(randomnumber2>randomnumber1)
{
    win="player 2 wins";
}
else
{
    win="draw";
}
document.querySelector(".win").innerHTML=win;