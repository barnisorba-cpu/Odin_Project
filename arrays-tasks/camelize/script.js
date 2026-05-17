function camelize(string){
    let array = string.split("-")
    for (let i = 1; i < array.length; i++){
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }
    return array.join("")
}
console.log(camelize("background-color"))