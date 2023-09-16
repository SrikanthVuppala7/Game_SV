let currMoleTile;
let plantTile;
let score=0;
let gameover=false;
function setgame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        // setTimeout(appendChild,500);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setPlant, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}
// function setgame() {
//     let currentIndex = 0;
//     function createTile() {
//         if (currentIndex < 9) {
//             let tile = document.createElement("div");
//             tile.id = currentIndex.toString();
//             tile.eventListener("click",selectTile);
//             document.getElementById("board").appendChild(tile);
//             currentIndex++;
//             setTimeout(createTile, 100); 
//         }
//     }
//     createTile();
//     setInterval(setMole,2000);
//     setInterval(setPlant,3000);
// }
function getRandomtile()
{
    let num=Math.floor(Math.random() * 9);
    return num.toString();
}
function setMole()
{
    if(gameover)
    return;
    // if(plantTile && currMoleTile)
    // return;
    // if(currMoleTile==plantTile)
    // return;
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
    // if(plantTile && currMoleTile)
    // return;
    // if(currMoleTile==plantTile)
    if(gameover)
    return;
    // return;
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