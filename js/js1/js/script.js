let x = 0;
let mainCounter = document.querySelector('.counter__value');
let buttonResetAll = document.querySelector('.button__reset-counters');
let buttonAdd = document.querySelector('.button__add');
let counterValue = 0;    
let q = 0;
newCounter = '<div class="counter__value">0</div><button class="button__up">up</button><button class="button__down">down</button><button class="button__reset">reset</button><button class="button__delete">delete</button>';

buttonAdd.addEventListener('click', () =>{
    let div = document.createElement('div');
    div.className = "counter__item";
    document.querySelector('.counter').append(div);
    document.querySelector('.counter__item:last-child').insertAdjacentHTML('afterbegin', newCounter);
    let buttonUp = document.querySelectorAll('.button__up');
    let buttonDown = document.querySelectorAll('.button__down');
    let buttonReset = document.querySelectorAll('.button__reset');
    let buttonDelete = document.querySelectorAll('.button__delete');
    document.querySelectorAll('.counter__item .button__up').forEach((i)=>{
        i.removeEventListener('click', countUp);
        i.removeEventListener('click', countDown);
        i.removeEventListener('click', countReset);
    });

    buttonUp.forEach((i)=> {
        i.addEventListener('click', countUp);

    });
    buttonDown.forEach((i)=> {
        i.addEventListener('click', countDown);
    });
    buttonReset.forEach((i)=> {
        i.addEventListener('click', countReset);
    });

    buttonDelete.forEach((i, index) =>{
        i.addEventListener('click', () => {
                console.log(i.parentElement);
                i.parentElement.remove();
                checkNotEven();
                checkNumber();
                checkSumm();
        });
    });
    checkEven();
    checkNumber();
    checkSumm();
});

buttonResetAll.addEventListener('click', () =>{
    document.querySelector('.counter').innerHTML = '';
    checkNumber();
    checkSumm();
});

function checkEven(){
    document.querySelectorAll('.counter__item .counter__value').forEach((i)=>{
        console.log(i);
        if (+i.textContent % 2 == 0 && i.textContent != 0){
            i.textContent = +i.textContent + 1;
        };
    });
}

function checkNotEven(){
    document.querySelectorAll('.counter__item .counter__value').forEach((i)=>{
        console.log(i);
        if (+i.textContent % 2 != 0 && i.textContent != 0){
            i.textContent = +i.textContent - 1;
        };
    });
}

function countUp(){  
    counterValue = this.parentElement.firstElementChild.textContent;
    counterValue++;
    changeValue(counterValue, this);
    checkSumm();
}
function countDown(){  
    counterValue = this.parentElement.firstElementChild.textContent;
    if (counterValue > 0){
        counterValue--;
    }
    changeValue(counterValue, this);
    checkSumm();
}
function countReset(){  
    counterValue = 0;
    changeValue(counterValue, this);
    checkSumm();
}

function changeValue(counterValue, elem){  
    elem.parentElement.firstElementChild.textContent = counterValue;
}

function checkNumber(){
    let count = document.querySelectorAll('.counter__item').length;
    document.querySelector('.counter__number').innerHTML = `Количество счётчиков : ${count}`;
}

function checkSumm(){
    let summ = 0;
    document.querySelectorAll('.counter__item .counter__value').forEach((i)=>{
        summ += +i.textContent;
    });
    document.querySelector('.counter__summ').innerHTML = `Сумма значений : ${summ}`;
}