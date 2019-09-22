var input = document.querySelector(".in");
var result = document.querySelector(".result");
var keys = document.querySelector(".keys");
var button = document.querySelector(".keys");
let bool = true;


var regNum = /\d+/g;
var regLet = /^([^0-9]*)$/;

function insert(target) {

  var regNum = /\d+/g;
  var regLet = /^([^0-9]*)$/;
  if (target.innerHTML.length < 4) {
    switch (true) {
      case regNum.test(target.innerHTML):
      if (bool) {
        result.innerHTML = " ";
        bool=false;
      }
        input.insertAdjacentHTML('beforeend', target.innerHTML);

        break;
      case regLet.test(target.innerHTML):
      bool=false;
        operationSwitch(target);
        break;
      case /1/:
        console.log("zahlen");
        break;
      default:

    }
  }
}


function event() {
  keys.addEventListener('click', function(e) {
    insert(e.target);
  }, false);
}




function operationSwitch(target) {


  switch (target.innerHTML) {
    case "C":
      input.innerHTML = " ";
      if (input.innerHTML = " ") {
        result.innerHTML = " ";
        console.log("baba");
      }
      break;
  case "DEL":

  if (input.innerHTML.substring(input.innerHTML.length - 1, input.innerHTML.length) == ".") {
    document.querySelector(".point").disabled = false;
  }
  input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);


  if (input.innerHTML.length == 0) {
    input.innerHTML = result.innerHTML;
    result.innerHTML = ""
  }


  break;
  case ".":
  input.insertAdjacentHTML('beforeend', target.innerHTML);
  target.disabled = false;

  break;
  case "=":
  resultCalc();
  break;
  default:

  input.insertAdjacentHTML('beforeend', target.innerHTML)
  result.insertAdjacentHTML('beforeend', input.innerHTML)

  input.innerHTML = "";
  document.querySelector(".point").disabled = false;

document.querySelector(".resultButton").disabled=false;;

}
}

function resultCalc() {


  result.insertAdjacentHTML('beforeend', input.innerHTML);


  input.innerHTML = "";
  var result2;
  document.querySelector(".resultButton").disabled=true;
  bool=true;
  try {
    result2 = eval(result.textContent + " ");

    return result.innerHTML = result2;


  } catch (e) {
    result.innerHTML = "INPUT INVALID"
    setTimeout(function() {
      result.innerHTML = "";
    }, 1000);
  }



}
event();
