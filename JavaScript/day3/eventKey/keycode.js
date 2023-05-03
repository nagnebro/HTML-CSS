const body = document.body;

const result = document.querySelector("#result")

body.addEventListener("keydown",(e)=>{

    // tag의 innerText는 태그안의 text를 뜻하는 거고 .value는 input 타입의
    // value, 즉 속성값 같은(텍스트)것들을 바꾸는데 사용된다
    result.innerText = ` 
    
    code : ${e.code},
    key : ${e.key}
    `;
});