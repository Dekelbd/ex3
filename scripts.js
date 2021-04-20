
var counter = 0;
var colors = [];

function createObj() {
    counter++;
    colors.push("#" + Math.random().toString(16).slice(2,8).toUpperCase());
    var square = document.createElement('div');
    square.id=counter;
    square.className = "squares";
    square.style.backgroundColor = colors[counter-1];
    if(counter === 1) {
        square.classList.add("plus-icon");
    }
    if(counter % 3 === 0) {
        square.classList.add("star-icon");
    }
    return square;
}


function init() {
    var lastName = "benDavid";
    var main = document.getElementsByTagName('main')[0];

    for (i = 0 ; i < (lastName.length*2) ; i++)
    {
            main.appendChild(createObj());
    }
    main.addEventListener("click",handleClick);
}

function handleClick(item) {
    if(item.target.id === "1") {
        document.getElementsByTagName('main')[0].appendChild(createObj());
    }
    else {
        if (item.target.classList.contains("funny-img")){
            item.target.classList.remove("funny-img");
            if (item.target.id % 3 === 0){
                item.target.classList.add("star-icon");
            }
            item.target.style.backgroundColor = colors[item.target.id-1];
        } else {
            item.target.style.removeProperty("background-color");
            if (item.target.classList.contains("star-icon")) {
                item.target.classList.remove("star-icon");
            }
            item.target.classList.add("funny-img");
        }
    }
}



