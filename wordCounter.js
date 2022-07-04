// count total number of word of a string;

function wordCounter(getStr) {
    let count=0;

    for (let i of getStr){
        if (i == " " ) {
            count += 1;
        }
    }
    count += 1;
    return count;
}

console.log(wordCounter('Hello, I am Siam.'));
console.log(wordCounter('Bangladesh is a beautiful country'));
console.log(wordCounter('Intractive cares is careful of its all students. As if all students can set their future goal.'));