function checkAge() {
    let age = prompt('Введіть свій вік');
    if (age == '') {
        throw new Error(alert('The field is empty! Please enter your age'));
    } else if (isNaN(age) == true) {
        throw new Error(alert('The value must be numeric'));
    } else if (age <= 14) {
        throw new Error(alert('Age restrictions'));
    } else {
        alert('Enjoy watching the movie');
    }
}

try {
    checkAge();
    } catch (exception) {
        console.log(exception.name + ': ' + exception.stack);
    }