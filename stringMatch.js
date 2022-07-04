// String printing except 'a' ,'c' & 'z';

function matchString(getStr) {

    let storeStr = getStr.split("");
    for (let i = 0; i < storeStr.length; i++){
        if (storeStr[i] == 'a' || storeStr[i] == 'A') {
            storeStr[i] = "";
        }
        else if (storeStr[i] == 'c' || storeStr[i] == 'C') {
            storeStr[i] = "";
        }
        else if (storeStr[i] == 'z' || storeStr[i] == 'Z') {
            storeStr[i] = "";
        }
    }
    return storeStr.join("");
}

console.log(matchString('Bangladeshicoz'));
console.log(matchString('ajke current zabe'));
console.log(matchString('African Crocodile & Zebra is world famous'));

