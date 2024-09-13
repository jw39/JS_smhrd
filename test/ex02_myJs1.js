let red = document.getElementById("redBox");
let green = document.getElementById("greenBox");
let blue = document.getElementById("blueBox");
let gray = document.getElementById("grayBox");

function margin() {
    green.style.marginLeft = "100px";
    blue.style.marginLeft = "200px";
    gray.style.marginLeft = "300px";
}

// queryselectorAll -> 반환 객체 : nodeList 유사 배열 형태로 반환!
let divList = document.querySelectorAll("div");
for (let i = 0; i < divList.length; i++) {
    console.log(divList[i]);

}

const radius = () => {
    // for(let i of divList){
    //     i.style.borderTopRightRadius = "50%"
    //     i.style.borderTopLeftRadius = "50%"
    //     i.style.borderBottomLeftRadius = "50%"
    // }

    divList.forEach((element) => {
        element.style.borderTopRightRadius = "50%";
        element.style.borderBottomLeftRadius = "50%";

    })

}