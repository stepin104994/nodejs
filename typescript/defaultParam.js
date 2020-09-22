var message = 'hello world';
console.log(message);
function welcomeuser(fname, city) {
    if (city === void 0) { city = 'mysore'; }
    console.log('welcome' + fname);
    console.log('are u from' + city);
}
welcomeuser('nithya');
