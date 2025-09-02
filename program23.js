function removeCharacter(string, chars) {
    console.log(string, chars);
    let strings = "";
    for (let character of string) {
        if (character !== chars) {
            strings += character;
        }
    }
    console.log(strings);
}
removeCharacter("hello", 'l')