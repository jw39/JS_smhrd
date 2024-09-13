// id값 통해 div 정보 가져오기
// 가지고 온 정보를 변수에 담는다.
let pink = document.getElementById("pinkBox");
let blue = document.getElementById("blueBox");
let green = document.getElementById("greenBox");
let gray = document.getElementById("grayBox");

function margin() {
    // 스타일 제어
    // 제어를 할 속성은 marginLeft
    blue.style.marginLeft = "100px";
    green.style.marginLeft = "200px";
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