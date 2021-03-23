function add(num1: number, num2: number,showResult:boolean,phrase:string) {
  
  const result = num1 + num2;
  if (showResult) {
    console.log(phrase+result);    
  }
  else {
    return result;
  }

  return (num1 + num2);
}

const firsnum = 51;
const secondnum = 7;
const printResult = true;
const resultPhrase = "Result is: ";

add(firsnum, secondnum,printResult,resultPhrase);

