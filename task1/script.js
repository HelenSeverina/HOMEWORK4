function calcRectangleArea(width, height) {
    let sq = width * height;
    if(isNaN(width) == true || isNaN(height) == true) {
        throw new Error('Incorrect data! Довжина має бути цифрою');
    }
    return sq;
}

try {
    let result = calcRectangleArea(12, 2);
    console.log(result);
    } catch (exception) {
        console.log(exception.message);
    }