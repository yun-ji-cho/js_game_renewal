let numOne;
let numTwo;
let operator;

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

document.querySelector('#num-7').addEventListener('click', clickNumber);
document.querySelector('#num-8').addEventListener('click', clickNumber);
document.querySelector('#num-9').addEventListener('click', clickNumber);
document.querySelector('#num-4').addEventListener('click', clickNumber);
document.querySelector('#num-5').addEventListener('click', clickNumber);
document.querySelector('#num-6').addEventListener('click', clickNumber);
document.querySelector('#num-1').addEventListener('click', clickNumber);
document.querySelector('#num-2').addEventListener('click', clickNumber);
document.querySelector('#num-3').addEventListener('click', clickNumber);
document.querySelector('#num-0').addEventListener('click', clickNumber);

//숫자를 입력했을 때
function clickNumber(e){
  const character = e.target.textContent;
  const setNumberVariable = function(numTarget){
    numTarget = (numTarget) ? numTarget + character : character;
    return numTarget;
  }
  console.log(numOne, numTwo);
  if(operator){ 
    numTwo = setNumberVariable(numTwo);
    $result.value = numTwo;
  }else{ 
    numOne = setNumberVariable(numOne);
    $result.value = numOne;
  }
}

//연산자를 입력했을 때 
function clickOperator(e){
  const character = e.target.textContent;
  //한번 계산하고 이어서 연산자로 계산할 때
  if($operator.value === '='){
    numOne = $result.value;
    numTwo = '';
  }
  if(numOne){
    operator = character;
    $operator.value = operator;
  }else{
    alert('숫자를 먼저 입력해주세요!');
  }
}

document.querySelector('#plus').addEventListener('click', clickOperator);
document.querySelector('#minus').addEventListener('click', clickOperator);
document.querySelector('#divide').addEventListener('click', clickOperator);
document.querySelector('#multiply').addEventListener('click',clickOperator);

//clear 했을 때
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
    const NumberOne = Number(numOne);
    const NumberTwo = Number(numTwo);
    $operator.value = '=';
    switch (operator) {
      case '+':
        $result.value = NumberOne + NumberTwo;
        break;
      case '-':
        $result.value = NumberOne - NumberTwo;
        break;
      case '/':
        
        if(NumberTwo === 0){
          alert('0으로 나눌 수 없습니다!');
          clearValue();
        }else{
          $result.value = NumberOne / NumberTwo;
        }
        break;
      case 'X':
        $result.value = NumberOne * NumberTwo;
    }
  }else{
    alert('올바르지 않은 연산입니다');
  }
});


