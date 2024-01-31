// find max 1
function max() {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let max = 0
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i]
        if (num > max) {
            max = num
        }
    }
    return max
}
console.log(max(), "max");

// find min 2
function min() {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let min = arr1[0]
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i]
        if (num < min) {
            min = num
        }
    }
    return min
}
console.log(min(), "min");

// find second  max 3
function secondMax() {
    let arr1 = [1, 3442, 4566934, 563, 48, 544, 6, 37, 8, 10]
    let max = 0;
    let secondmax = 0;
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i]
        if (num > max) {
            max = num
        }
        else if (num > secondmax && max > secondmax) {
            secondmax = num
        }

    }
    let obj = {
        max: max,
        secondmax: secondmax
    }
    return obj
}
console.log(secondMax(), "secondmax xxxxxxxxx");

// repet number 4
function findRepet() {
    let arr1 = [1, 3442, 934, 6, 563, 48, 544, 6, 37, 544, 8, 10]
    let obj = {}
    let repetnum = []
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i]
        if (!obj[num]) {
            obj[num] = 1
        }
        else {
            obj[num] += 1
            if (obj[num] === 2) {
                repetnum.push(num)
            }
        }
    }
    return repetnum
}
console.log(findRepet(), "repeat number");

// get 2 number whose sum is number 5
function getTwoNumber(sum) {
    let arr1 = [1, 3442, 934, 6, 563, 48, 544, 6, 37, 544, 4, 8, 10]
    let getnum = []
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i]
        for (let j = 0; j < arr1.length; j++) {
            let num1 = arr1[j];
            if (i !== j && num + num1 == sum) {
                let num3 = [num, num1]
                getnum.push(num3)
            }
        }
    }
    return getnum
}
console.log(getTwoNumber(41), "getTwoNumber");

// add number in array 6
function addNumber1() {
    let arr1 = [1, 3442, 934, 6, 563, 48, 544, 6, 37, 544, 4, 8, 10]
    let d = [...arr1]
    let ind = 3;
    let element = 444;

    arr1.push("x")
    for (let i = ind; i < arr1.length; i++) {
        arr1[i] = d[i - 1]
    }
    arr1[ind] = element
    return arr1
}
console.log(addNumber1());


// add number in array 6
function addNumber() {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let ind = 3;
    let element = 444;
    for (let i = arr1.length; i > ind; i--) {
        arr1[i] = arr1[i - 1]
    }
    arr1[ind] = element
    return arr1
}
console.log(addNumber());

// remove element in array 7
function removeElement() {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let ind = 2;
    for (let i = ind; i < arr1.length; i++) {
        arr1[i] = arr1[i + 1]
    }
    arr1.length = arr1.length - 1
    return arr1

}
console.log(removeElement(), "remove");

// remove element 7
function removeelement2() {
    let arr = [2, 4, 6, 78, 8]
    let ind = 3;
    let arr2 = []
    for (i = 0; i < arr.length; i++) {
        if (i != ind) {
            arr2.push(arr[i])

        }
    }
    return arr2
}
console.log(removeelement2(), "remove2");

// which color repeat 3 times 8
function repeatcolor(num) {
    let colors = ["red", "blue", "pink", "white", "red", "black", "green", "green", "green", "gray", "yellow", "red", "orange"]
    let obj = {

    }
    let multiplecolors = []
    for (let i = 0; i < colors.length; i++) {
        let color = colors[i];
        if (!obj[color]) {
            obj[color] = 1
        }
        else {
            obj[color] += 1
            if (obj[color] == num) {
                multiplecolors.push(color)
            }
        }

    }
    return multiplecolors
}
console.log(repeatcolor(3));

//  how many times come 9
function getHowManyTimes(colors) {
    let colorsarr = ["red", "blue", "pink", "white", "red", "black", "green", "green", "green", "gray", "yellow", "red", "orange"]
    let obj = {}
    let count = 0
    // let colors = "green"
    for (let i = 0; i < colorsarr.length; i++) {
        let color = colorsarr[i]
        if (color === colors) {
            console.log(color, "color");
            count += 1
        }
    }
    return count
}
console.log(getHowManyTimes("green"), "greennnnnn");

// find colors whose come in e 10
function findcolor(char) {
    let colorsarr = ["red", "blue", "pink", "white", "red", "black", "green", "green", "green", "gray", "yellow", "red", "orange"]
    let arr = []
    for (let i = 0; i < colorsarr.length; i++) {
        let color = colorsarr[i];
        for (let j = 0; j < colorsarr.length; j++) {
            if (color[j] === char) {
                arr.push(color)
                console.log(color);
                console.log(color[j], "color[j]");
                break;
            }
        }
    }
    return arr
}
console.log(findcolor("d"), "dddddddd");

// push 2 elements in array 11
function pushTwoelEments() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // [0, 1, a, b, 2, 3, 4, 5, 6, 7, 8, 9]
    let ind = 2; // a, b
    for (let i = arr.length; i > ind; i--) {
        arr[i + 1] = arr[i - 1]
    }
    arr[ind] = "a"
    arr[ind + 1] = "b"
    return arr
}
console.log(pushTwoelEments(), "tow push");

// remove dublicat color 12
function removeDuplicateColor(colors) {
    let colorsarr = ["red", "blue", "pink", "white", "red", "black", "green", "green", "green", "gray", "yellow", "red", "orange"]
    let arr = []
    for (let i = 0; i < colorsarr.length; i++) {
        let color = colorsarr[i]
        if (!arr.includes(color)) {
            arr.push(color)
        }
    }
    return arr
}
console.log(removeDuplicateColor("red"), "removeDuplicateColor");

// words color 13
function countWords(colors) {
    let colorsarr = ["red", "blue", "pink", "white", "gra", "red", "black", "green", "green", "green", "gray", "yellow", "red", "orange"]
    let arr = []
    for (let i = 0; i < colorsarr.length; i++) {
        let color = colorsarr[i];
        if (color.length === colors) {
            arr.push(color)
        }
    }
    return arr
}
console.log(countWords(3));

// uppercase 14
function convertUppercase(colors) {
    let colorsarr = ["red", "blue", "pink", "white", "gra", "red", "black", "green", "green", "green", "gray", "yellow", "red", "orange"]
    for (let i = 0; i < colorsarr.length; i++) {
        let color = colorsarr[i]
        if (color === colors) {
            console.log(color, "color uppercase");
            colorsarr[i] = color.toUpperCase()
        }
    }
    return colorsarr
}
console.log(convertUppercase("black"));

// most times come 15
function mostCome() {
    let colorsarr = ["red", "blue", "red", "pink", "white", "white", "gra", "red", "black", "green", "green", "green", "gray", "yellow", "red", "orange"]
    let obj = {}
    let arr = []
    let max = 0
    for (let i = 0; i < colorsarr.length; i++) {
        let color = colorsarr[i]
        if (!obj[color]) {
            obj[color] = 1
        }
        else {
            obj[color] += 1
        }
        if (obj[color] > max) {
            max = obj[color]
        }
    }
    for (let color in obj) {
        if (obj[color] === max) {
            arr.push(color)
        }
    }
    return arr
}
console.log(mostCome(), "most come");

// is there
function istrue(color) {
    let colorsarr = ["red", "blue", "red", "pink", "white", "white", "gra", "red", "black", "green", "green", "green", "gray", "yellow", "red", "orange"]
    let istrue = false
    for (let i = 0; i < colorsarr.length; i++) {
        let colors = colorsarr[i]
        if (colors == color) {
            istrue = true
        }
    }
    return istrue
}
console.log(istrue("red"));


// change
function cahnge(which, change) {
    let colorsarr = ["red", "blue", "red", "pink", "white", "white", "gra", "red", "black", "green", "green", "green", "gray", "yellow", "red", "orange"]
    for (let i = 0; i < colorsarr.length; i++) {
        let color = colorsarr[i]
        if (color === which) {
            console.log(color, "color", "which", which, "change", change);
            colorsarr[i] = change
            console.log(color = change, ", color = change");
        }
    }
    return colorsarr
}
console.log(cahnge("red", "marun"));

// selection sort
function selection() {
    let arr = [32, 3, 5, 6, 78, 9, 24, 35, 7, 88, 998, 77, 665, 5]
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}
console.log(selection());

// bubble sort
function bubbole() {
    let arr = [32, 3, 5, 6, 78, 9, 24, 35, 7, 88, 998, 77, 665, 5]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
console.log(bubbole());
































































