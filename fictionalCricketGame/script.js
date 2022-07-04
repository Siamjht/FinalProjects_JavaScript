
// let arrowPos = arrow.getBoundingClientRect();
// console.log(arrowPos.x);
// console.log(arrowPos.y);
// let elem = document.querySelector('.zero');
// let rect = elem.getBoundingClientRect();
// console.log("x: ", rect.x);
// console.log("y: "+ rect.y);

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (0 !== currentIndex) {
        let randomNum = Math.random();
        randomIndex = Math.floor( randomNum * currentIndex);
        currentIndex--;
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
        // [array[currentIndex], array[randomIndex]] = [
        //     array[currentIndex],
        //     array[currentIndex],
        // ];
    }
    return array;
}    

function spin() {
    const container = document.querySelector(".container");
    const element = document.querySelector(".mainbox");
    let arrow = document.querySelector(".arrow");
    let SelectedItem = "";

    let zero = shuffle([Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000)]);
    let one = shuffle([Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000)]);
    let two = shuffle([Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000)]);
    let three = shuffle([Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000)]);
    let four = shuffle([Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000)]);
    let five = shuffle([Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000)]);
    let six = shuffle([Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000)]);
    let catchO = shuffle([Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000)]);
    let bold = shuffle([Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000), Math.floor((Math.random()+1) * 1000)]);

    // let zero = shuffle([1890, 2250, 2610]);
    // let one = shuffle([1850, 2210, 2570]);
    // let two = shuffle([1770, 2130, 2490]);
    // let three = shuffle([1810, 2170, 2530]);
    // let four = shuffle([1750, 2110, 2470]);
    // let five = shuffle([1630, 1990, 2350]);
    // let six = shuffle([1570, 1930, 2290]);
    // let catchO = shuffle([1510, 1870, 2230]);
    // let bold = shuffle([1450, 1810, 2170]);

    let results = shuffle([
        zero[0],
        one[0],
        two[0],
        three[0],
        four[0],
        five[0],
        six[0],
        catchO[0],
        bold[0],
    ]);

    container.style.setProperty("transition", "all ease 5s");
    container.style.transform = "rotate(" + results[0]*10 + "deg)";
    element.classList.remove("animate");

    let runCount = Number(document.querySelector(".run span").innerHTML);
    let runSpan = document.querySelector(".run span");

    let ballCount = Number(document.querySelector(".ball span").innerHTML);
    let ballSpan = document.querySelector(".ball span");

    let wicketCount = Number(document.querySelector(".wicket span").innerHTML);
    let wicketSpan = document.querySelector(".wicket span");

    if (ballCount == 6 || wicketCount==5) {
        let runCount2 = Number(document.querySelector(".p2-result .run span").innerHTML);
        let runSpan2 = document.querySelector(".p2-result .run span");

        let ballCount2 = Number(document.querySelector(".p2-result .ball span").innerHTML);
        let ballSpan2 = document.querySelector(".p2-result .ball span");

        let wicketCount2 = Number(document.querySelector(".p2-result .wicket span").innerHTML);
        let wicketSpan2 = document.querySelector(".p2-result .wicket span");

        if (ballCount2 == 6 || wicketCount2 == 5 || runCount < runCount2) {
            if (runCount > runCount2) {
                alert(`Player-1 is Winner!`);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
            else if (runCount < runCount2) {
                alert(`Player-2 is Winner!`);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
            else
                alert(`Match is Draw!`);
                setTimeout(() => {
                    window.location.reload();
                },1000);
        }
        arrow.style.top = '150px';
        arrow.style.left = '76%';

        setTimeout(function () {
            element.classList.add("animate");
            if (zero.includes(results[0])) { 
                SelectedItem = "no run";
                ballCount2 += 1;
                ballSpan2.innerHTML = ballCount2;
            }
            else if (one.includes(results[0])) {
                SelectedItem = "1 run";
                ballCount2 += 1;
                ballSpan2.innerHTML = ballCount2;
                runCount2 += 1;
                runSpan2.innerHTML = runCount2;
            }
            else if (two.includes(results[0])) {
                SelectedItem = "2 runs";
                ballCount2 += 1;
                ballSpan2.innerHTML = ballCount2;
                runCount2 += 2;
                runSpan2.innerHTML = runCount2;
            }
            else if (three.includes(results[0])) {
                SelectedItem = "3 runs";
                ballCount2 += 1;
                ballSpan2.innerHTML = ballCount2;
                runCount2 += 3;
                runSpan2.innerHTML = runCount2;
            }
            else if (four.includes(results[0])) {
                SelectedItem = "4 runs";
                ballCount2 += 1;
                ballSpan2.innerHTML = ballCount2;
                runCount2 += 4;
                runSpan2.innerHTML = runCount2;
            }
            else if (five.includes(results[0])) {
                SelectedItem = "Extra Runs(Wide + Four): 5";
                runCount2 += 5;
                runSpan2.innerHTML = runCount2;
            }
            else if (six.includes(results[0])) {
                SelectedItem = "6 runs";
                ballCount2 += 1;
                ballSpan2.innerHTML = ballCount2;
                runCount2 += 6;
                runSpan2.innerHTML = runCount2;
            }
            else if (catchO.includes(results[0])) {
                SelectedItem = "Catch Out";
                ballCount2 += 1;
                ballSpan2.innerHTML = ballCount2;
                wicketCount2 += 1;
                wicketSpan2.innerHTML = wicketCount2;
            }
            else if (bold.includes(results[0])) {
                SelectedItem = "Bold Out";
                ballCount2 += 1;
                ballSpan2.innerHTML = ballCount2;
                wicketCount2 += 1;
                wicketSpan2.innerHTML = wicketCount2;
            }

            alert(`${SelectedItem}`);
            
        }, 5000);

    }
    else {

        arrow.style.top = '150px';
        arrow.style.left = '25%';

        setTimeout(function () {
            element.classList.add("animate");
            if (zero.includes(results[0])) { 
                SelectedItem = "no run";
                ballCount += 1;
                ballSpan.innerHTML = ballCount;
            }
            else if (one.includes(results[0])) {
                SelectedItem = "1 run";
                ballCount += 1;
                ballSpan.innerHTML = ballCount;
                runCount += 1;
                runSpan.innerHTML = runCount;
            }
            else if (two.includes(results[0])) {
                SelectedItem = "2 runs";
                ballCount += 1;
                ballSpan.innerHTML = ballCount;
                runCount += 2;
                runSpan.innerHTML = runCount;
            }
            else if (three.includes(results[0])) {
                SelectedItem = "3 runs";
                ballCount += 1;
                ballSpan.innerHTML = ballCount;
                runCount += 3;
                runSpan.innerHTML = runCount;
            }
            else if (four.includes(results[0])) {
                SelectedItem = "4 runs";
                ballCount += 1;
                ballSpan.innerHTML = ballCount;
                runCount += 4;
                runSpan.innerHTML = runCount;
            }
            else if (five.includes(results[0])) {
                SelectedItem = "Extra Runs(Wide + Four): 5";
                runCount += 5;
                runSpan.innerHTML = runCount;
            }
            else if (six.includes(results[0])) {
                SelectedItem = "6 runs";
                ballCount += 1;
                ballSpan.innerHTML = ballCount;
                runCount += 6;
                runSpan.innerHTML = runCount;
            }
            else if (catchO.includes(results[0])) {
                SelectedItem = "Catch Out";
                ballCount += 1;
                ballSpan.innerHTML = ballCount;
                wicketCount += 1;
                wicketSpan.innerHTML = wicketCount;
            }
            else if (bold.includes(results[0])) {
                SelectedItem = "Bold Out";
                ballCount += 1;
                ballSpan.innerHTML = ballCount;
                wicketCount += 1;
                wicketSpan.innerHTML = wicketCount;
            }

            alert(`${SelectedItem}`);
            
        }, 5000);

    }

}

