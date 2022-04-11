const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');
const $trial = document.querySelector('#trial');
const $outCount = document.querySelector('#outCount');
const tries = [];
let outCount = 0;

//정답
let answer;

//패배시
function defeated(){
  $logs.appendChild(document.createTextNode(` 패배! 정답은 ${answer.join('')}`));
  $form.removeEventListener('submit', formSubmit);
}

//게임 시작, 초기화
function gameStart(){
  //랜덤 사용하기
  alert('게임시작!!');
  const numbers = [];
  for(let n = 0; n < 9; n+= 1){
    numbers.push(n + 1);
  }
  answer = [];
  //스트라이크,볼 표시 비우기
  document.querySelector('#logs').textContent = '';
  $trial.textContent = 0;
  for(let n = 0; n < 4; n+=1){
    const index = Math.floor(Math.random() * (numbers.length - n)); //0-8 정수
    answer.push(numbers[index]);
    numbers.splice(index, 1); //뽑았으니까 배열에서는 빼준다.
  }
  console.log(answer);
}

gameStart();


//addEventListener 의 두번째 인수는 '함수' 자리라는 것을 꼭 기억하자.
$form.addEventListener('submit', formSubmit);

function formSubmit (event){
  event.preventDefault(); //기본동작막기(새로고침 안됨)
  const value = $input.value;
  $input.value = '';
  if(!checkInput(value)){ 
    return;
  }
  //입력값 문제 없음
  if(value === answer.join('')){
    $logs.textContent = '홈런!';
    return;
  }
  matching(value);
}

function checkInput(input){
  //1)시도했던 조합인가
  //2) 4자리 인가
  //3) 중복되는 숫자가 없는가
  if(input.length !== 4 ){
    return alert('4자리 숫자를 입력해주세요');
  }
  if(new Set(input).size !== 4){ //Set 은 중복을 허용하지 않는 특수한 배열이다.
    return alert('중복되지 않게 입력해주세요');
  }
  if(tries.includes(input)){ //includes : 배열에 () 안의 값이 들어있는가
    return alert('이미 시도한 값입니다');
  }
  return true;
}

//스트라이크 & 볼인지 검사
function matching(input){
  let ball = 0;
  let strike = 0;
  let anserArray = input.split(''); //문자열
  for(let i = 0; i < 4; i++){
    if(input[i] === String(answer[i])){
      strike++;
    }
    if(answer.includes(Number(anserArray[i]))){
      ball++;
    }
  }
  //아웃일경우
  tries.push(input);
  $trial.textContent = tries.length;
  if(strike === 0 && ball === 0){
    outCount++;
    $logs.textContent = `${input} : 아웃 입니다.`;
    $outCount.textContent = outCount;
    if(outCount === 3){
      defeated();
      return;
    }
  }else{
    $logs.textContent = `${input}: ${strike}스트라이크, ${ball}볼`;
  }
  if(tries.length >= 10){
    defeated();
    return;
  }
}


