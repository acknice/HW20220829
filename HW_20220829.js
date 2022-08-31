function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    return num1 / num2;
}

function math(num1, num2, fn) 
{
    let result = fn(num1, num2)
    console.log(result);
}

math(1, 8, add);
math(36, 15, subtract);
math(2, 3, multiply);
math(15, 5, divide);