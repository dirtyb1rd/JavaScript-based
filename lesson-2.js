'use strict';

// var userAnswer = prompt('Enter some text')
// console.log(userAnswer);

// var goodsCount = 12;
// if (goodsCount > 0) {
//     console.log('Количество товара', goodsCount);
// } else {
//     console.log('Путо');
// }

// goodsCount > 10
//     ? console.log('OK')
//     : console.log('NOPE'); // - тернарный оператор

// const count = goodsCount > 10
//     ? 'Корзина пуста' + count
//     : 'Корзина пуста' + count;

// console.log(count);


// if (good === 'Apples') {
//     console.log('Apples const 100$');
// } else {
//     if (good === 'Mango') {
//         console.log('Mango const 120$');
//     } else {
//         if (good === 'Apples' || good === 'Strawberrys') {
//             console.log('Apples and Strawberrys conts 30$');
//         } else {
//             console.log('Unknown fruit');
//         }
//     }
// }


// if (good === 'Bananas') {
//     console.log('Bananas const 30$');
// } else if (good === 'Mango') {
//     console.log('Mango const 34$');
// } else if (good === 'Apples') {
//     console.log('Apples const 20$');
// } else {
//     console.log('Unknown fruit');
// }

// const good = 'Apples';
// switch (good) {
//     case 'Apples': console.log('Apples const 100$'); break;
//     case 'Mango': console.log('Mango const 120$'); break;
//     case 'Bananas': console.log('Bananas const 130$'); break;
//     default: console.log('Unknown fruit');
// }



// function sayPrice(good) {
//     switch (good) {
//         case 'Apples': console.log('Apples const 100$'); break;
//         case 'Mango': console.log('Mango const 120$'); break;
//         case 'Bananas': console.log('Bananas const 130$'); break;
//         default: console.log('Unknown fruit');
//     }
// }

// sayPrice('Mango');
// sayPrice(good);

// const good = 'Apples';

// function getPrice(good) {
//     switch (good) {
//         case 'Apples': return 96;
//         case 'Mango': return 120;
//         case 'Bananas': return 130;
//         default: return null;
//     }
// }

// function getInfoByCount(good, count = 1) {
//     const price = getPrice(good);

//     if (price == null) return null;

//     return price * count;
// }

// console.log(getInfoByCount(good, 50));
// console.log(getInfoByCount('Bananas', 50));
// console.log(getInfoByCount('asdad', 50));
// console.log(getInfoByCount(good));


// const foo = function () {
//     console.log(123);
// }

// foo();


// function recursion(x) {
//     if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое число больще 0!';
//     if (x == 1) return '1';
//     return recursion(x - 1) + ' ' + x;
// }

// console.log(recursion(1000));


let number;
let attemps;
function resetGame() {
    attemps = 0;
    number = Math.floor(Math.random() * 100)
    console.log(number);
}


function tryGuessNumber() {
    const userAnswer = prompt('Enter number from 1 to 100');

    if (userAnswer === -1) return alert('Game Over!')

    if (isNaN(userAnswer)) {
        alert('Enter number from 1 to 100');
        tryGuessNumber();
        return;
    }

    attemps++;

    if (userAnswer > number) {
        alert('Try low number')
    } else if (userAnswer < number) {
        alert('Try many number')
    } else {
        alert('Congratulation! Count attemps: ' + attemps);
        if (!confirm('Do u want play again?')) return alert('Game Over');
        resetGame();
    }
    tryGuessNumber();
}

resetGame();
tryGuessNumber();

