var randomNumber1=Math.random();
randomNumber1=Math.floor((randomNumber1*6)+1);

var newsrc1="images/dice"+randomNumber1+".png"

var randomNumber2=Math.random();
randomNumber2=Math.floor((randomNumber2*6)+1);

var newsrc2="images/dice"+randomNumber2+".png"

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="DRAW!"
}

document.querySelector(".img1").setAttribute("src",newsrc1);
document.querySelector(".img2").setAttribute("src",newsrc2);

