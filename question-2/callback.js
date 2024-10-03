
const resolvedPromise = () =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve({'message' : 'message resolved'})
        }, 500)
    })
}

const rejectedPromise = () =>{
    return new Promise((_ , reject)=>{
        setTimeout(()=>{
            reject({'error': 'delayed exception!'})
        }, 500)
    })
}

resolvedPromise()
    .then((result) => {
        console.log(result);  
    })
    .catch((error) => {
        console.error(error);
    });

// Handle the rejectedPromise
rejectedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);  
    });