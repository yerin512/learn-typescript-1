// Union Type
// 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는(필터링하는) 과정
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    } else if (typeof value === 'string') {
        value.toLowerCase();
    }

    throw new TypeError('value must be string or number');
}

logMessage(33);
logMessage('hello');


// Union Type 특징
// 인터페이스 두 개를 연결 했을 때, 공통된 속성만 접근할 수 있다.

interface Developer {
    name: string;
    skill: string;
}

interface Person{
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    someone.name;
    // someone.skill;
    // someone.age;
}


// & 연산자를 이용한 인터섹션 타입 소개
// 인터페이스에 해당되는 속성들이 다 들어가있어야함

function askSomeone2(someone: Developer & Person) {
    someone.name;
    someone.skill;
    someone.age;
}







