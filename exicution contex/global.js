// example how works exicution - note is in the google drive
let num1 = 20
let num2 = 16

function AddNum(arg1 , arg2){
    let total = arg1 + arg2
    return total
}

result1 = AddNum(num1, num2)
result2 = AddNum(11, 35)




function funcA(m,n) {
    return m * n;
}

function funcB(m,n) {
    return funcA(m,n);
}

function getResult(num1, num2) {
    return funcB(num1, num2)
}

var res = getResult(5,6);
