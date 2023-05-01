
// let time = prompt("초를 입력하세요");
/*
function getTime(time) {

    if(time>24*60*60){
        console.warn("큰 수를 입력하셨습니다");
        return;
    }
    let hour = parseInt(time/3600);
    let tmp = time%3600;
    let minute = parseInt(tmp/60);
    console.log(tmp);
    let second =  tmp %60;
    console.log("시간은" + hour + "   분은 " + minute + "   초는 "+ second);

}

// getTime(time);


let totalPrice =  prompt("소비자가를 입력하세요");
function cal_price(totalPrice){

    let productPrice = parseInt(totalPrice/1.1);
    let tax = productPrice *0.1;

    alert("상품 가격 : "  + productPrice + "부가가치세 : "+ tax);
}

cal_price(totalPrice);

*/


function creditCard(contractPrice, period, cardCode){
    let tmp1 = contractPrice;
    let tmp2 = contractPrice;

    if (period>12){
        tmp1 *= 0.2;
    }else if(period >6){
        tmp1 *= 0.1;
    }

    tmp2 = cardCode==11 ? tmp2*=0.05 : cardCode==12 ? tmp2*=0.08 : cardCode==13 ? tmp2*=0.12 : contractPrice;
    alert("최종 금액은 : " + (contractPrice-tmp1-tmp2));
}

let contractPrice = prompt("계약 금액을 입력하세요");
let period = prompt("사용 기간을 입력하세요");
let cardCode = prompt("카드 코드를 입력하세요");
creditCard(contractPrice,period,cardCode);
