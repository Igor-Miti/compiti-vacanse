const input=process.argv.slice(2)
let somma=0
for(let i=0;i<input.length;i++) {
    somma+=parseFloat(input[i])
}
console.log(somma)