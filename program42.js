//---------------------traditional way---------------
function startWith(str, str1) {
    if (str.split(' ').at(0) === str1) console.log(true);
}

startWith("hello worlds", "hello");
//predefined functions
function checks(str, str1) {
    console.log(str.startsWith(str1));
}
checks("hello worlds", "hello");