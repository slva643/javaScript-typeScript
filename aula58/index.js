// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const max = 1;
const min = 50;
let rand = 10;

while(rand !== 10) {
   
    console.log(rand);
};

console.log('############');

do {
    rand = random(min,max);
}while(rand !== 10);
