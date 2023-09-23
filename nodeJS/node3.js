const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function circleArea(radius) {
    return Math.PI * radius * radius;
}

function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}

readline.question('Yarı Çap giriniz: ', (answer) => {
    const radius = parseFloat(answer);

    if (isNaN(radius)) {
        console.log('Lütfen geçerli bir sayı giriniz.');
    } else {
        console.log('Alan:', circleArea(radius));
        console.log('Çevre:', circleCircumference(radius));
    }

    readline.close();
});

module.exports = {
    node3
};