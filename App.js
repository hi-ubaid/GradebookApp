//Getting Average
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

//Get Grade
function getGrade(score) {
    if(score==100){
      return "A++";
    }
    else if(score>=90){
      return "A";
    }
    else if(score>=80){
      return "B";
    }
    else if(score>=70){
      return "C";
    }
    else if(score>=60){
      return "D";
    }
    else{
      return "F";
    }
  }

  console.log(getGrade(96));

//check passing grade
function hasPassingGrade(score) {
    const grade = getGrade(score);
    if (grade=="F"){
      return "Not Yet";
    }
    else{
      return "Pass";
    }
  }
  
  
  console.log(hasPassingGrade(100));