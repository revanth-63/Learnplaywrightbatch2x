const birthYear = 1980;
console.log(birthYear)
//birthYear = 2004;

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}