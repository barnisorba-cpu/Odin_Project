let arrayA = [5, 3, 8, 1];
function filterRange(arr, num1, num2){
    let filtered = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= num1 && arr[i] <= num2){
            filtered.push(arr[i])
        } 
    }
    return filtered
}
console.log(filterRange(arrayA, 1, 4))