let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below

let deletePerson = ( ) => {
    let newArray = people.filter((element) => element === 'lucy');
    return newArray;

}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
