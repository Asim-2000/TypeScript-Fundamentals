
type Combinable = string | number;
type Description = 'as-number' | 'as-string';

function combine(input1:Combinable, input2:Combinable,resultConversion:Description ) {
    let result;
    

  if (resultConversion ==='as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedNumbers = combine(2, 3,'as-number');
console.log(combinedNumbers);

const combinedStrings = combine("2", "3",'as-string');
console.log(combinedStrings);
