const fibonacci = function(num) {
    if(num <= 0) return "OOPS";
    num = parseInt(num);
    a = 0;
    b = 1;
    for(let i=1; i<num; i++){
        let temp = b;
        b = a+b;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
