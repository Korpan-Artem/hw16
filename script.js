let numInput = +prompt('Enter the number of fields');
for(let i = 1; i <= numInput;i++) {
    let kol = numInput;
    let input = document.createElement('input');
    input.classList.add('input-item');
    if (i === kol) {
        input.classList.add('margin-zero');
    }
    if(i % 2 != 0) {
        input.classList.add('bcg');
    }
    input.value = `Index ${i}`;
    if (i % 3 === 0) {
        input.value = '';
        input.placeholder = 'Some text';
    }
    document.querySelector('form').querySelector('div').before(input);
}

let h2 = document.createElement('h2');
let btnStart = document.createElement('button');
let btnEnd = document.createElement('button');
let interval;


function go () {
    let s =56;
    let m = 59;
    let h = 0;
    interval = setInterval(function () {
        if (m === 59 && s === 59) {
            s = 0;
            m = 0;
            h++;
        }
        if(s === 59){
            s = 0;
            ++m;
        }
        h2.innerHTML = `${(h < 10) ? '0' + h : h}:${(m < 10) ? '0' + m : m}:${(s < 10) ? '0' + s++ : s++}`;
       
    },1000);
}


function stop () {
    clearInterval(interval);
}

btnStart.addEventListener('click', function () {
    go();
});

btnEnd.addEventListener('click', function () {
    stop();
});


btnStart.innerHTML = 'Start';
btnEnd.innerHTML = 'End';


document.querySelector('form').querySelector('div').after(h2);
document.querySelector('form').querySelector('div').after(btnEnd);
document.querySelector('form').querySelector('div').after(btnStart);



let coffeeMachine = { 
    message: 'Your coffee is ready!',
    start: function() {
        setTimeout(() => {
            console.log(this.message);
        }, 3000);
    },
 }

let teaPlease = {
    message: 'Wanna some tea instead of coffee?',
};

function showTea () {
    setTimeout(() => {
        console.log(this.message);
    }, 4000);
}

coffeeMachine.start();

let st = showTea.bind(teaPlease);
st();
