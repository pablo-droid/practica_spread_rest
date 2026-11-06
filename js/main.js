//1
const sumEveryOther = (...args) => {
    return args.reduce((acc, num) => {
        return acc += num;
    }, 0);
};
//console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
//console.log(sumEveryOther(11, 3, 12)); //26

//2
const addOnlyNums = (...args) => {
    return sumEveryOther(...args.filter((num) => !isNaN(num)));
};
//console.log(addOnlyNums(1, "perro", 2, 4)); //7

//3
const countTheArgs = (...args) => {
    return args.length;
};
//console.log(countTheArgs("gato", "perro")); //2
//console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4

//4
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combineTwoArrays = (a1, a2) => {
    return [...a1, ...a2];
};
//console.log(combineTwoArrays(array1, array2)); // [1, 2, 3, 4, 5, 6]

//5
const onlyUniques = (...args) => {
    return [...new Set(args)];
};
//console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); //['gato', 'pollo', 'cerdo']
//console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]

//6
const combineAllArrays = (...args) => {
    return args.flat();
};
//console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]
//console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

//7
const sumAndSquare = (...args) => {
    return args.reduce((acc, num) => {
        return acc += num * num;
    }, 0);
};
//console.log(sumAndSquare(1, 2, 3)); // 1^2 + 2^2 + 3^2 = 14
//console.log(sumAndSquare(4, 5)); // 4^2 + 5^2 = 41
//console.log(sumAndSquare(1, 2, 3, 4)); // 1^2 + 2^2 + 3^2 + 4^2 = 30