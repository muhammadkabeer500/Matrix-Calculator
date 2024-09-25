function generateMatrices() {
    let size = Number(document.getElementById('matrix-size').value);
    let container = document.getElementById('matrix-container');
    container.innerHTML = ''; 

    for (let i = 0; i < 2; i++) {
        let matrixDiv = document.createElement('div');
        matrixDiv.classList.add('matrix-input');
        matrixDiv.innerHTML = `<h3>Matrix ${i === 0 ? '1' : '2'}</h3>`;
        
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                let input = document.createElement('input');
                input.type = 'number';
                input.id = `${i === 0 ? 'a' : 'b'}${row}${col}`;
                input.placeholder = `0`;
                matrixDiv.appendChild(input);
            }
            matrixDiv.appendChild(document.createElement('br'));
        }

        container.appendChild(matrixDiv);
    }
}

function getMatrix(idPrefix, size) {
    let matrix = [];
    for (let row = 0; row < size; row++) {
        let matrixRow = [];
        for (let col = 0; col < size; col++) {
            let value = Number(document.getElementById(`${idPrefix}${row}${col}`).value);
            matrixRow.push(value);
        }
        matrix.push(matrixRow);
    }
    return matrix;
}

function displayResult(result) {
    let resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '<h3>Result:</h3>';
    let resultDiv = document.createElement('div');

    result.forEach(row => {
        row.forEach(value => {
            let input = document.createElement('input');
            input.type = 'text';
            input.value = value;
            input.classList.add('result');
            resultDiv.appendChild(input);
        });
        resultDiv.appendChild(document.createElement('br'));
    });

    resultContainer.appendChild(resultDiv);
}

function performAddition() {
    let size = Number(document.getElementById('matrix-size').value);
    let matrixA = getMatrix('a', size);
    let matrixB = getMatrix('b', size);
    let result = addMatrices(matrixA, matrixB, size);
    displayResult(result);
}

function addMatrices(A, B, size) {
    let result = [];
    for (let row = 0; row < size; row++) {
        let resultRow = [];
        for (let col = 0; col < size; col++) {
            resultRow.push(A[row][col] + B[row][col]);
        }
        result.push(resultRow);
    }
    return result;
}