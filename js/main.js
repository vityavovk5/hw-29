 
function summTwoNumbers() {
    var summa = 0;
    let firstNumber = document.getElementById("first").value;
    let secondNumber = document.getElementById("second").value;
    let ansver = document.getElementById("summ");
    if (firstNumber != "" && secondNumber != "") {
       if (firstNumber > -1 && secondNumber > -1) {
        if (Number(firstNumber) < Number(secondNumber)) {
            let i = Number(firstNumber);
            let j = Number(secondNumber);
            for (i; i <= j; i++) {
                summa = summa + Number(i);
            }
            cleanSumm();
            ansver.insertAdjacentHTML('beforeend', `<p>${summa}</p>`);
        } else {
            cleanSumm();
            ansver.insertAdjacentHTML('beforeend', `<p>левая циферка должна быть меньше а правая больше</p>`);
        }
       } else {
        cleanSumm();
        ansver.insertAdjacentHTML('beforeend', `<p>мне лень сравнивать отрицательные циферки</p>`);
       }
    } else {
        cleanSumm();
        ansver.insertAdjacentHTML('beforeend', `<p>поля не должны быть пустые</p>`);
    }
}

function commonDivisor(){
    let oneNumber = document.getElementById("numberOne").value;
    let twoNumber = document.getElementById("numberTwo").value;
    let ansver = document.getElementById("divisor");
    if (oneNumber != "" && twoNumber != "") {
        if (oneNumber > 0 && twoNumber > 0){
            let firstDivisor = Number(oneNumber);
            let secondDivisor = Number(twoNumber);
            while (firstDivisor != 0 && secondDivisor != 0) {
                if (firstDivisor > secondDivisor) {
                    firstDivisor = firstDivisor % secondDivisor;
                } else (
                    secondDivisor = secondDivisor % firstDivisor
                )
            }
            cleanDivisor();
            let summDivisor = firstDivisor + secondDivisor;
            ansver.insertAdjacentHTML('beforeend', `<p>${summDivisor}</p>`);

        }   else {
            cleanDivisor();
            ansver.insertAdjacentHTML('beforeend', `<p>мне лень сравнивать отрицательные циферки или ноль</p>`);
           }

    }   else {
        cleanDivisor();
        ansver.insertAdjacentHTML('beforeend', `<p>поля не должны быть пустые</p>`);
    }
}

function allDivisors() {
    let divisorsNumber = document.getElementById("numberDivisors").value;
    let ansver = document.getElementById("ansverDivisors");
    cleanDivisors()
    if (divisorsNumber != "") {
        if (divisorsNumber > 0) {
           let numberdivisors = Number(divisorsNumber);
           let i = 1;
           for (i; i <= numberdivisors; i++) {
          
            if (numberdivisors%i==0) {                
            ansver.insertAdjacentHTML('beforeend', `<p>${i}</p>`);
              }
           }
        }   else {
            cleanDivisors()
            ansver.insertAdjacentHTML('beforeend', `<p>циферка должна быть больше 0</p>`);
        }
    }   else {
        cleanDivisors()
        ansver.insertAdjacentHTML('beforeend', `<p>поле не должны быть пустые</p>`);
    }
}

function quantityNumbers() {
    let quantityNumber = document.getElementById("numberInput").value;
    let ansver = document.getElementById("ansverQuantity");
    if (quantityNumber != "") {
        if (quantityNumber > 0) {
            let numQuantity = Number(quantityNumber);
            for(var i = 0; numQuantity > 1; i++) {
                numQuantity /= 10;
             }
             cleanQuantity()
             ansver.insertAdjacentHTML('beforeend', `<p>${i}</p>`);
        } else {
                cleanQuantity()
                ansver.insertAdjacentHTML('beforeend', `<p>циферка должна быть больше 0</p>`);
        }

    } else {
        cleanQuantity()
        ansver.insertAdjacentHTML('beforeend', `<p>поле не должны быть пустые</p>`);
    }
}


function cleanSumm() {
    var averagClean = document.getElementById("summ");
    while (averagClean.firstChild) {
        averagClean.removeChild(averagClean.firstChild);
    }
}
function cleanDivisor() {
    var averagClean = document.getElementById("divisor");
    while (averagClean.firstChild) {
        averagClean.removeChild(averagClean.firstChild);
    }
}
function cleanDivisors() {
    var averagClean = document.getElementById("ansverDivisors");
    while (averagClean.firstChild) {
        averagClean.removeChild(averagClean.firstChild);
    }
}
function cleanQuantity() {
    var averagClean = document.getElementById("ansverQuantity");
    while (averagClean.firstChild) {
        averagClean.removeChild(averagClean.firstChild);
    }
}