// 1. 제네릭의 기본 문법

// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); //숫자 10
// logText('하이'); //문자열 하이
// logText(true); //진위값 true

function logText<T>(text: T):T {
    console.log(text);
    return text;
}
logText(10); //숫자 10
logText('하이'); //문자열 하이
logText(true); //진위값 true

logText<string>('하이');


// 2. 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점

function logText2(text: string) {
    console.log(text);
    return text;
}

function logNumber(num: number) {
    console.log(num);
    return num;
}

logText('a');
const num = logNumber(10);

// 타입 하나 바꾸자고 똑같은 함수를 중복 선언 하는 거는 비효율적임.

// 3. 유니온 타입을 이용한 선언 방식의 문제점
// string number의 교집합인 api에 대해서만 사용할 수 있음.

function logText3(text: string | number) {
    console.log(text);
    return text;
}

const a = logText3('a');
// a.split('');   오류뜸 number로도 들어올수 있으니까 안 된다고 뜬다.


// 4. 제네릭의 장점과 타입 추론에서의 이점
//  함수 호출 시점에서 타입을 정해줄 수 있음.

function logText4<T>(text: T) {
    console.log(text);
    return text;
}

const str = logText4<string>('abc');
str.split('');
const login = logText4<boolean>(true);

// 5. 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj1: Dropdown<string> = { value: 'abc', selected: false };
const obj2: Dropdown<number> = { value:  55, selected: false };


// 제너릭의 타입 제한
function logTextLength<T>(text: T[]): T[]{
    console.log(text.length)
    return text;
}

logTextLength<string>(['hi', 'abc']);

// 제너릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number
}

function logTextLength2<T extends LengthType>(text: T):T {
    text.length;
    return text;
}

// logTextLength2(10); 오류
logTextLength2({ length: 10 })

// 제네릭 타입 제한 3 - keyof

interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
getShoppingItemOption('name');
getShoppingItemOption('price');
