function getAverage(scores){
    let sum = 0; //variable initialized
    let average; //variable declared
    
    for(let i = 0; i<scores.length; i++){
        sum += scores[i];
    }

    average = sum/scores.length;
    return average;
}

console.log(getAverage([25,45,30,20,29]))