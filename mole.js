let currMoleTile;
let plantTile;
let score=0;
let gameover=false;
function setgame() {
    for (let i = 0; i < 9; i++) { 
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); 
    setInterval(setPlant, 2000); 
}
function getRandomtile()
{
    let num=Math.floor(Math.random() * 9);
    return num.toString();
}
function setMole()
{
    if(gameover)
    return;
    if(currMoleTile)
    currMoleTile.innerHTML="";
    let mole=document.createElement("img");
    mole.src="./monty-mole.png";
     let num=getRandomtile();
     if(plantTile && plantTile.id==num)
     return;
     currMoleTile=document.getElementById(num);
     currMoleTile.appendChild(mole);
}
function setPlant()
{
    if(gameover)
    return;
    if(plantTile)
    plantTile.innerHTML="";
let plant=document.createElement("img");
plant.src="./piranha-plant.png";
let num=getRandomtile();
if(currMoleTile && currMoleTile.id==num)
return;
plantTile=document.getElementById(num);
plantTile.appendChild(plant);
}
function selectTile()
{
    if(gameover)
    return;
    if(this==currMoleTile)
    {
        score+=10;
        document.getElementById("score").innerText=score.toString();
    }
    else if(this==plantTile)
    {
        document.getElementById("score").innerText="GAMEOVER :"+score.toString();
        gameover=true;
    }
}