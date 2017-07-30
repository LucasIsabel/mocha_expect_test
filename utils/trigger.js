const sayHello = () => 'welcome';
const checkIfNumbersMatch = () => 12;
const containsAnObject = () => {
    return {name: "lucas"}
}
const splitName = (user, fullName) => {
    let names = fullName.split(' ');
    user.firstname = names[0];
    user.lastname = names[1];
    return user;
}
const assyncFcuntion = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000)
}
const assyncResult = () => {
    return new Promise((resolve, reject) => {
        try{
            resolve('welcome');
        }catch(e){
            reject(e);
        }
    })
}

module.exports = {
    sayHello,
    checkIfNumbersMatch,
    containsAnObject,
    splitName,
    assyncFcuntion,
    assyncResult
}