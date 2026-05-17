let array = [5, 3, 8, 1]
function filterRangeInPlace(arr, num1, num2){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < num1 || arr[i] > num2){
            arr.splice(i, 1)
        }
    }
    console.log(arr)
}
filterRangeInPlace(array, 1, 4)