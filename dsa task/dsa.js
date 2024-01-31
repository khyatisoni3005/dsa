function bubbleSort() {
    let arr = [12, 3, 2, 6, 8, 5, 43432, 765, 67887, 23, 456, 78, 99, 564]
    let arr2 = [23, 66, 7, 87, 54, 35, 78, 4, 24, 5, 8, 64, 3]
    let merge = arr.length + arr2.length
    let newarr = new Array(merge)
    for (let i = 0; i < arr.length; i++) {
        newarr[i] = arr[i]
    }
    for (let j = 0; j < arr2.length; j++) {
        newarr[arr.length + j] = arr2[j]
    }
    for (let i = 0; i < newarr.length; i++) {
        for (let j = i + 1; j < newarr.length; j++) {
            if (newarr[i] > newarr[j]) {
                let temp = newarr[i]
                newarr[i] = newarr[j]
                newarr[j] = temp
            }
        }
    }
    // find
    let min = newarr[0];
    let max = 0;
    let secondmax = 0;
    for (let i = 0; i < newarr.length; i++) {
        // find min
        let num = newarr[i]
        if (num < min) {
            min = num
        }
        // find max
        if (num > max) {
            max = num
        }
    }
    for (let i = 0; i < newarr.length; i++) {
        let num = newarr[i]
        if (num > secondmax && num < max) {
            secondmax = num
        }
    }
    let obj = {
        max: max,
        min: min,
        secondmax: secondmax,
        newarr: newarr,
    }
    return obj
}
console.log(bubbleSort());
