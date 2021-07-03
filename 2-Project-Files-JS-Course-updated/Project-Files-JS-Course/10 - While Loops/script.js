function sendSignal(){
    console.log('HELP!');
}

let i = 0;

/* we havent run this 1000 times */
while(i < 1000){
    sendSignal();
    //i = i + 1;
    //i += 1;
    i++;
}

let result = 0;

let j = 1;

while(j <= 10) {
    result = result + j;
    console.log(result);
    j++;
}

console.log(result);