let supervillains = require ('supervillains');
console.log(supervillains.random());

supervillains.all.forEach(supervillain=> {
    console.log(supervillain);
});
console.log(supervillains.all);



let superheroes = require('superheroes');
console.log(superheroes.random());

superheroes.all.forEach(hero => {
    console.log(hero);
});
console.log(superheroes.all);



console.log(`${superheroes.random()} fights ${supervillains.random()}`);