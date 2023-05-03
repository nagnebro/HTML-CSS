// 선택한 옵션을 팝업창에 띄우기
const selectMenu = document.querySelector("#major");  // 선택 목록을 가져와 selectMenu로 저장

function displaySelect() {
    let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    // selectedIndex는 드롭다운에서 선택된 인덱스를 가져온다
    //alert();
    alert(`[${selectedText}]를 선택했습니다.`);
}
selectMenu.onchange = displaySelect();

//라디오 버튼이나 체크 박스는 name 을 사용해 버튼을 그룹으로 묶는다. (라디오 버튼이나 체크 박스는 하나의 그룹 안에서 항목을 선택하기 때문)
// 라디오 버튼과 체크박스는 name 값을 사용해 접근한다.
// 같은 name을 가진 항목이 많기 때문에 RadioNodeList라는 노드 리스트 형태로 저장됨.(배열과 비슷한 형태)
// 어떤 항목을 선택했는지 알려면 checked 속성이 있는지 체크 (checked 속성은 HTML에서 라디오 버튼과 체크 박스에서 사용할 수 있는 속성)



// 그래서 결론적으로 DOM 객체를 통해 우리가 사용자가 넘긴 데이터를 처리하는 방법에 대해 배우고 있다는 것이다.

// form태그의 name(testForm)을 통해 직접 접근.
//document.testForm.subject;

