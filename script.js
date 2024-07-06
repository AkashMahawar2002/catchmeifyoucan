let box = document.getElementById("box");

let viewHeight = window.innerHeight;
let viewWidth = window.innerWidth;

box.addEventListener("mouseover", function(event){
    console.log(event);

    let boxAttributes = box.getBoundingClientRect();
    console.log(boxAttributes);

    let pos = getNewPosition(boxAttributes.width, boxAttributes.height);

    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";

})


function getNewPosition(boxWidth, boxHeight){
    let newX = Math.floor((Math.random() * viewWidth) - boxWidth);
    let newY = Math.floor((Math.random() * viewHeight) - boxHeight);

    console.log(newX);
    console.log(newY);

    if(newX < 0){
        newX = 0;
    }

    if(newY < 0){
        newY = 0;
    }

    return {x:newX, y:newY};
}