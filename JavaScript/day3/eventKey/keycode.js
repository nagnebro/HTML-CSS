const body = document.body;

const result = document.querySelector("#result")

body.addEventListener("keydown",(e)=>{

    // tag의 innerText는 태그안의 text를 뜻하는 거고 .value는 input 타입의
    // value, 즉 속성값 같은(텍스트)것들을 바꾸는데 사용된다
    // tag의 innerHTML은 태그와 텍스트 전체를 포함한 문자열을 뜻한다.
    // innerText에 접근해 문자열을 수정할 수 있듯이 innerHTML역시 "<div>hi</div>"와 같이 태그 작성한 것을
    //  문자열로 반환할 수 있다.
    result.innerText = ` 
    
    code : ${e.code},
    key : ${e.key}
    `;
});