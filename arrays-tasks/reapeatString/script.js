function repeatString(str, num){
    let resultStr = ""
    for (let i = 0; i < num; i++){
        resultStr += str
    }
    return resultStr
}
console.log(repeatString("hey", 3))