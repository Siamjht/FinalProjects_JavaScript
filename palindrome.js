// check a string or number palindrome or not

function isPalindrome(getStr) {
    let putStr;
    if (String(getStr)) {
        putStr = getStr.toUpperCase();
    }
    let len = putStr.length;
    for (let i = 0; i <  len/ 2; i++){
        if (putStr[i] !== putStr[len - 1 - i]) {
            return false;
        }
        return true;
    }
    
    // reverseStr = getStr.split("").reverse().join("");
    // if (getStr != reverseStr) {
    //     return false;
    // }
    // else return true;
}

console.log(isPalindrome('Moana'));
console.log(isPalindrome('1234321'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('rotator'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('#**#'));