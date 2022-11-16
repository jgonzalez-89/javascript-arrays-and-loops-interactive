let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    //your code here
    let newArray2 = chunk_one.concat(chunk_two);
    return newArray2
}

console.log(mergeArrays(chunk_one, chunk_two));