const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });

readline.question('Yarıçap giriniz: ', (answer) => {
    console.log(`Alan: ${Math.PI * answer * answer}`);
    readline.close();
});