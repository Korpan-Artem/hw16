// let numInput = +prompt('Enter the number of fields');
// for(let i = 1; i <= numInput;i++) {
//     let input = document.createElement('input');
//     input.classList.add('input-item');
//     if (i === numInput) {
//         input.classList.add('margin-zero');
//     }
//     if(i % 2 != 0) {
//         input.classList.add('bcg');
//     }
//     input.value = `Index ${i}`;
//     if (i % 3 === 0) {
//         input.value = '';
//         input.placeholder = 'Some text';
//     }
//     document.querySelector('form').querySelector('div').before(input);
// }

let h2 = document.createElement('h2');
let btnStart = document.createElement('button');
let btnEnd = document.createElement('button');
let interval;


function go () {
    let day = new Date();
    let second = day.getSeconds();
    let minute = day.getMinutes();
    let hour = day.getHours();
    interval = setInterval(function () {
        if (minute === 59 && second === 59) {
            s = 0;
            m = 0;
            h++;
        }
        if(second === 59){
            second = 0;
            ++minute;
        }
        h2.innerHTML = `${(hour < 10) ? '0' + hour : hour}:${(minute < 10) ? '0' + minute : minute}:${(second < 10) ? '0' + second++ : second++}`;
    },1000);
}


function stop () {
    clearInterval(interval);
}

btnStart.addEventListener('click', go);

btnEnd.addEventListener('click', stop);


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

coffeeMachine.start();

let bindFunc = coffeeMachine.start.bind(teaPlease);

bindFunc();
