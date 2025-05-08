function formatString(input:string, toUpper?:boolean):string{
    if(toUpper === true || toUpper === undefined) return  input.toUpperCase()

    else return input.toLowerCase()
}

const result1 = formatString("Hello", false);
console.log(result1)