
console.log("hi")
let input = prompt("시작하려면 1누르세요")
if(input ==1) {
    while (true) {

        console.log("downfloor")
        let inputLocation = prompt("몇층을 가실건지 선택해주세요(99입력시 종료)")
        let nowLocation = prompt("현재 계신 층을 입력하세요 ")
        if (inputLocation==99){break;}
        if (inputLocation > 6 | nowLocation > 6 | inputLocation == nowLocation) {
            alert("다시 입력해주세요 (1~6층 사이의 범위)");
            continue;
        }
        if (inputLocation > nowLocation) {
            getUpfloor(inputLocation, nowLocation);
        } else { // 같은 조건은 있을 수 없다.
            getDownfloor(inputLocation, nowLocation);
        }


    }

    function getDownfloor(inputLocation, nowLocation) {
        console.log("downflooer")
        console.log(inputLocation +"" + nowLocation);
        for (let i = nowLocation; i >= inputLocation; i--) {
                console.log("ssss")
            console.log(i + "층입니다.")

        }
        alert(inputLocation + "층에 도착햇습니다.");
    }

    function getUpfloor(inputLocation, nowLocation) {
        console.log("upflooer")
        for (let i = nowLocation; i <= inputLocation; i++) {

            console.log(i + "층입니다.")


        }
        alert(inputLocation + "층에 도착햇습니다.");
    }
}