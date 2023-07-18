let input = document.getElementById('formula');
let result = document.getElementById('result');

// 1
// function b1() {
//     input.value += '1';
// }
// function b2() {
//     input.value += '2';
// }

// 2
// function inputNum(num){
//     input.value += num;
// }

// 3
function inputNum2(obj){
    input.value += obj.innerHTML;
}

// C 버튼 구현
function clearInput(){
    input.value = '';
    result.value = '';
}

// 한 글자씩 지우기
/* 
    let str = 'abcdef';

    let startIndex = 2;
    let endIndex = 4;
    let lengthNumber = 4;

    str.substr(startIndex, lengthNumber);
        => cdef
    
    str.substring(startIndex, endIndex);
        => cd

    str.slice(-4, 4);
        => cd
*/
function backspace(){
    let str = input.value;
    if(str != ''){
        input.value = str.substring(0, str.length - 1);
    }
}

// 계산
function formulaResult(){
    // 문자열을 수식으로서 계산하는 함수
    result.value = eval(input.value);
}

// 부호 바꾸기
function plusMinus(){
    input.value = '-(' + input.value + ')';
}