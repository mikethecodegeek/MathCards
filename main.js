document.addEventListener('DOMContentLoaded',init);
function init() {
addEvents();
genNumbers();
getSign();
score();
}
function genNumbers() {
  var a= Math.floor(Math.random()*50);
  var b= Math.floor(Math.random()*50);
  var op = Math.floor(Math.random()*3);
  var opid = document.getElementById('operator');
  var theanswer;
   if (op === 0){
   theanswer = a+b;
   opid.textContent = '+';
   }
   else if(op === 1) {
     theanswer= a-b;
     opid.textContent = '-';
   }
   else if(op === 2) {
     theanswer= a*b;
     opid.textContent = 'x';
   }

  answer = function() {

    return theanswer;
  };
  document.getElementById('num1').textContent=a;
  document.getElementById('num2').textContent=b;

}
function addEvents() {
  var buttons = document.querySelectorAll('#buttons button');
  for (var i =0; i<buttons.length; i++) {
     buttons[i].addEventListener('click',returnNum);
    }
    document.getElementById('next').addEventListener('click', function() {
      lose();
      document.getElementById('correct').textContent="Sorry but the correct answer was " + answer();
      setTimeout(function() {reset()}, 2000);
      //reset();
    })
  }
function reset() {
  clearAnswer();
  getSign();
  genNumbers();
  document.getElementById('correct').textContent = '';
}

  function score() {
    var play = 0;
    var tot = 0;
    win = function() {
        play++;
        tot++;
        var myscore = 'Score: '+play+'/'+tot;
        document.getElementById('score').textContent = myscore;
    }
    lose = function() {
      tot++;
      var myscore = 'Score: '+play+'/'+tot;
      document.getElementById('score').textContent = myscore;
    }
  //  var myscore = 'Score: '+play+'/'+tot;
  //  document.getElementById('score').textContent = myscore;
  }
function returnNum() {
  var answerkey = document.getElementById('answer').textContent;

  if (this.textContent === '=') {
    evaluate();
    return;
  }
  else if (this.textContent === 'Clr') {
    clearAnswer();
    return;
  }
  else if (this.textContent === "'-'") {
    document.getElementById('sign').textContent = '-';
    changeSigns();
    return;
  }
  else {
  answerkey = answerkey+ this.textContent;
  document.getElementById('answer').textContent=answerkey;

  return this.textContent;
}

}

function getSign() {
  var minus = false;
  changeSigns = function() {
    minus = true;
  }
  returnMinus = function() {
    return minus;
  }

}

function evaluate() {
  myanswer=parseInt(document.getElementById('answer').textContent);
  if (returnMinus() === true) {
    myanswer = myanswer - (myanswer*2);
  }
  if (myanswer === answer()) {
    document.getElementById('correct').textContent ="That is correct";
    win();
    setTimeout(function(){ reset() }, 2000);
    //reset();
  }
  else {
    document.getElementById('correct').textContent="Sorry but the correct answer was " + answer();
    lose();
    setTimeout(function(){reset() }, 2000);
    //reset();
  }


}

function clearAnswer() {
  document.getElementById('answer').textContent = ' ';
}
