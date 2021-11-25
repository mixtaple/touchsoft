function capitalize(str){
    console.log(str[0].toUpperCase() + str.substr(1).toLowerCase());
}


function sayHello(name){
    (name == 'Mark') ? console.log(`Hello, dear ${name}`) : console.log(`Hello, ${name}`)
}

function filterStrings(arr, l){
    newArr = [];
    arr.forEach((i)=>{
        // console.log(i + '--' + i.length);
        if (i.length <= l){
            newArr.push(i);
        }
    });
    console.log(newArr);
}



capitalize('пиТеР');
capitalize('jaVaScript');
console.log('---------------');
sayHello('Mark');
sayHello('Oleg');
sayHello('Victor');
filterStrings(['I love JS', 'some very long string', 'hell'], 9)
filterStrings(['a', 'ab', 'abc'], 2)