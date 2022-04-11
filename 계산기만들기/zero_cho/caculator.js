let numOne ='';
let numTwo ='';
let operator ='';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
const onClickNumber = (event) => {
  // return undefined (함수는 항상 마지막에 return undefined 가 있다)
  //함수를 리턴해준다.
  //화살표함수는 중괄효와 return 이 붙으면 생략이 가능하다. --> 화살표가 연달아 나오는 형태
  //해석 방법 : 함수 안에 함수가 있다. 함수가 함수를 return 하고 있다. (고차 함수 : high order function)

    if (!operator) {
      numOne += event.target.textContent;
      $result.value += event.target.textContent;
      return;
    } 
    if(!numTwo){
      $result.value = '';
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
}


// error ) onClickNumber() 는 undefined 반환 --> 함수자리에 undefined 가 들어가있다,
// onClickNumber 이 함수를 return 하면 된다.
// 참고 : onClickNumber 자리는 브라우저가 그 함수를 호출해주면서, 이벤트 객체를 인수로 넣어준다.
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-0').addEventListener('click', onClickNumber);


//연산자를 입력했을 때 
const onClickOperator = (op) => () => {
  if(numTwo){
    $operator.value = '=';
    switch (operator) {
      case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case '-':
        $result.value = numOne - numTwo;
        break;
      case '/':
        if(numTwo === 0){
          alert('0으로 나눌 수 없습니다!');
          clearValue();
        }else{
          $result.value = numOne / numTwo;
        }
        $result.value = numOne / numTwo;
        break;
      case 'X':
        $result.value = numOne * numTwo;
        break;
      default:
        break;
    }
    numOne = $result.value;
    numTwo = '';
  }
  if(numOne){
    operator = op;
    $operator.value = op;
  }else{
    alert('숫자를 먼저 입력해주세요!');
  }

}

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click',onClickOperator('*'));
document.querySelector('#clear').addEventListener('click', clearValue);

function clearValue(){
  numOne = '';
  numTwo = '';
  operator = '';
  $operator.value = '';
  $result.value = '';
}

//= 을 입력했을 때
document.querySelector('#calculate').addEventListener('click', () => {
  if(numTwo){
    $operator.value = '=';
    switch (operator) {
      case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case '-':
        $result.value = numOne - numTwo;
        break;
      case '/':
        if(numTwo === 0){
          alert('0으로 나눌 수 없습니다!');
          clearValue();
        }else{
          $result.value = numOne / numTwo;
        }
        $result.value = numOne / numTwo;
        break;
      case 'X':
        $result.value = numOne * numTwo;
        break;
      default:
        break;
    }
    $operator.value = '';
    numOne = $result.value;
    operator = '';
    numTwo = '';
  }else{
    alert('숫자를 먼저 입력하세요');
  }
});