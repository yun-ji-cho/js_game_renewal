const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

//랜덤 사용하기
const answer = [];


while(answer.length < 4){
  const randomNum = Math.floor(Math.random() * 10);
  if(randomNum !== 0 && answer.find(element => element === randomNum) === undefined){
    answer.push(randomNum);
  }
}

console.log(answer);