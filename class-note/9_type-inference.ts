
// # 1. 타입 추론의 기본
// 변수, 속성 인자의 기본 값, 함수의 반환 값 등을 설정할 때 타입 추론이 일어난다.

var a = 10;


function getB(b = 10) {
    var c ='hi'
    return b + c;
}

10 + '10' // 1010



// # 2. 타입 추론의 기본 2
// 인터페이스와 제네릭을 이용한 타입 추론 방식

// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }


// # 3. 타입 추론의 기본 3
// 복잡한 구조에서의 타입 추론 방식


interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetaildDropdown<K> extends Dropdown<K>{
    desc: string;
    tag: K
}

var detailedItem: DetaildDropdown<string> = {
    value: 'abc',
    title: 'hello',
    desc: 'ㅇㅇㅇ',
    tag: 'ㄷㄷㄷ',
}
    
// # 4. Best Common Type
// 타입은 보통 몇 개의 표현식(코드)을 바탕으로 타입을 추론함. 그리고 그 표현식을 이용해 가장 근접한 타입을 추론하게 되는데. 
// 가장 근접한 타입을 Best Commont Type 이라고 함.
    var arr = [1,2, true, true, 'hi']

