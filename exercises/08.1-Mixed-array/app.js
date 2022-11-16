let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let hola = [];

//your code here
for (let index = 0; index < mix.length; index++) {
     tipo = mix[index];
    hola.push(typeof tipo);

    
}

console.log(hola);


let newArray = [];
for (let i = 0; i < mix.length; i++) {
    const item = mix[i];
    newArray.push(typeof item)
    
}
console.log(newArray)