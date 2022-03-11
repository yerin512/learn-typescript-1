class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성되었습니다.');
        this.name = name;
        this.age = age;
    }
}

new Person('세호', 30); // 생성되었습니다.

// 함수로 표현하면

function Person(name, age) {
    this.anme = name;
    this.age = age;
}

var capt = new Person('캡틴', 100)