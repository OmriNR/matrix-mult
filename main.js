const prompt = require('prompt-sync')();

console.log("Hello,");
console.log("Please enter the width and height of the first matrix:");
let width1 = parseInt(prompt('Width: '));
let height1 = parseInt(prompt('Height: '));


console.log("Please enter the width and height of the second matrix:");
let width2 = parseInt(prompt('Width: '));
let height2 = parseInt(prompt('Height: '));

if (height1 !== width2) {
    console.log("Height of the first matrix must be equal to the width of the second matrix");
}
else {
    let accepted = false;
    let answer;
    let matrix1;
    let matrix2;
    while (!accepted)
    {
        console.log(`Generating the first matrix: width=${width1}, height=${height1}`);
        matrix1 = createMatrix(width1, height1);

        printMatrix(matrix1);
        answer = prompt('Do you want to accept matrix?');

        if (answer === 'y')
            accepted = true;
    }

    accepted = false;

    while (!accepted)
    {
        console.log(`Generating the second matrix: width=${width2}, height=${height2}`);
        matrix2 = createMatrix(width2, height2);

        printMatrix(matrix2);
        answer = prompt('Do you want to accept matrix?');

        if (answer === 'y')
            accepted = true;
    }

    console.log('Multiplying the both matrixes:')

    let multMatrix = multiplyMatrixes(matrix1, matrix2);

    console.log('result:')
    printMatrix(multMatrix);
}

console.log('Goodbye :)');




function createMatrix(width, height) {
    let matrix = [];

    for (let i = 0; i < height; i++) {
        let row = [];

        for (let j = 0; j < width; j++) {
            row.push(Math.floor(Math.random() * 10));
        }

        matrix.push(row);
    }

    return matrix;
}

function multiplyMatrixes(matrix1, matrix2) {

    let result = [];
    let multHeight = matrix1.length;
    let multWidth = matrix2[0].length;

    for (let i = 0; i < multHeight; i++) {
        let row = [];
        for (let j = 0; j < multWidth; j++) {
            let sum = 0;
            for (let k = 0; k < matrix2.length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let rowString = "";
        for (let j = 0; j < matrix[i].length; j++) {
            rowString += matrix[i][j] + "\t";
        }
        console.log(rowString);
    }
}
