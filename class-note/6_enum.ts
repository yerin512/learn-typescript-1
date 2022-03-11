// 이넘(Enums)
// 이넘은 특정 값들의 집합을 의미하는 자료형임.

// 숫자형 이넘
enum Shoes {
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

// 문자형 이넘

enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes2 = Shoes2.Nike;
console.log(myShoes); // '나이키'

enum Answer {
    Yes = 'Y',
    No = 'N'
}
// 이넘 활용 예제
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.')
    }
    if (answer === Answer.No) {
        console.log('오답입니다.')
    }
}

// askQuestion('Y'); 오류
askQuestion(Answer.Yes);