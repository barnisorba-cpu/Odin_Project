function removeFromArray(array, ...toRemove) {
    return array.filter(elem => !toRemove.includes(elem));
}