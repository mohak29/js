// alert("Who are you?");



// var person = {
//     name: "Raaaaa",
//     age : 20,
//     isEngineer : true
// };

// alert("Hi " + person.name);
// alert("You are "+ person.age + " years old.");

// var personName = getName(person);
// alert("Hi " + personName);

// function getName(p) {
//     return p.name;    
// }


var numbers = [10,20,30,40,50,60];

showSum(numbers);

showMax(numbers);

function showSum(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];        
    }
    alert("Sum is "+sum);
}

function showMax(numbers){
    var max = 0;
    for (var i = 0; i < numbers.length; i++) {
        if(numbers[i]>max){
            max = numbers[i];
        }        
    }
    alert("Maximum Number is "+max);
}
