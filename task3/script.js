class MonthException {
    constructor(message) {
        this.message = 'Incorrect month number';
        this.name = 'MonthException';
    }
}

const mon = new MonthException();

function showMonthName(month) {
    if (month == 1)
    return 'January';
    if (month == 2)
    return 'February';
    if (month == 3)
    return 'March';
    if (month == 4)
    return 'April';
    if (month == 5)
    return 'May';
    if (month == 6)
    return 'June';
    if (month == 7)
    return 'July';
    if (month == 8)
    return 'August';
    if (month == 9)
    return 'September';
    if (month == 10)
    return 'October';
    if (month == 11)
    return 'November';
    if (month == 12)
    return 'December';
    else {
        throw new Error(mon.name + ': ' + mon.message);
    }
}

try {
    console.log(showMonthName(7));
}
catch (exception) {
    console.log(exception.message);
}