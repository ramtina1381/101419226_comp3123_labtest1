// Function to filter and lowercase words in an array

function lowerCaseWords(inputArray) {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(inputArray)) {
            reject("Input is not an array");
            return;
        }

        
        const result = inputArray
            .filter(item => typeof item === 'string')  
            .map(word => word.toLowerCase());          

        resolve(result);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log("Error: ", error)
    })