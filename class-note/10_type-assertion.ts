// 타입 단언(type assertion)
// 내가 더 잘 아니까 타입스크립트 너는 건들지마라
var a1;
a1 = 20;
a1 = 'a'
var b1 = a1 as string;

// DOM API 조작
// <div id ="app">hi</div>
var div = document.querySelector('div') as HTMLDivElement;
if (div) {
    div.innerText
}