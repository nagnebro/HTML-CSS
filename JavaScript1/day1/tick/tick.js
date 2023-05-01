let tickarr = [1,1,1,1,1,1,1,1,1]

let input = prompt("시작하려면 1을 입력하세요");
if (input ==1) {


    while (true) {
        console.log("hi");
        let player1 = prompt("Player1 : ")
        let player2 = prompt("Player2 : ")
        let str = "";
        if ((tickarr[player1] == 1) && (tickarr[player2] == 1)) {
            tickarr[player1] = "V";
            tickarr[player2] = "X";
        } else { // 한명이라도 O,X가 있는 인덱스에 체크하면 break시킨다.
            alert("다시 입력하세요");

        }

        for (let i = 1; i <= tickarr.length; i++) {// 빙고판 출력
            str += "[" + tickarr[i - 1] + "]";
            if (i % 3 == 0) {

                str += "\n";
            }
        }
        console.log(str);

        let tmp = "";

        if (((tickarr[0] == tickarr[1]) &(tickarr[0] == tickarr[2])) | ((tickarr[0] == tickarr[4])&(tickarr[0] == tickarr[8])) |
            ((tickarr[0] == tickarr[3])&(tickarr[0] == tickarr[6]))) {

            tmp = tickarr[0];

        } else if ( (tickarr[1] == tickarr[4]) & (tickarr[1] == tickarr[7])) {
            tmp = tickarr[1];
        } else if (((tickarr[2] == tickarr[5]) & (tickarr[2] == tickarr[8])) | ((tickarr[2] == tickarr[4]) &(tickarr[2] == tickarr[6]))) {
            tmp = tickarr[2];
        } else if ((tickarr[3] == tickarr[4]) & (tickarr[3] == tickarr[5])) {
            tmp = tickarr[3];
        } else if ((tickarr[6] == tickarr[7]) & ((tickarr[6]) == tickarr[8])) {
            tmp = tickarr[6];
        }

        console.log(tmp);
        if (tmp == "V") {

            alert("Player1의 승리입니다");
            break;
        } else if (tmp == "X") {
            console.log(tmp);
            alert("Player2의 승리입니다");
            break;
        }


    }
}