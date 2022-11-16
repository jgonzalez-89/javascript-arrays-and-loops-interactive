let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];
let waka = []
//your code here

let check = (value) => {
    for (let i = 0; i < theBools.length; i++) {
        if (value == 1) {
            return "wiki"
        } else return "woko"
    }
}
waka.push(theBools.map(check));

console.log(waka);