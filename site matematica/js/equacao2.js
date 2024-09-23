function resolver() {
    const x2 = document.getElementById('numx2')
    const x = document.getElementById('numx')
    const num = document.getElementById('num')
    const res = document.getElementById('res')

    let a = Number(x2.value)
    let b = Number(x.value)
    let c = Number(num.value)

    const delta = (b**2) - 4 * a * c
    const zeroDelta = (-b) / (2 * a)

    const X1 = (-b + Math.sqrt(delta)) / (2 * a)
    const X2 = (-b - Math.sqrt(delta)) / (2 * a )

    // Using that for no double minus(-) at bhaskara
    const replaceB = x.value.replace("-", "") 

    if (a == 0){
        res.innerHTML = "Preencha: x²"
        return
    }
    if(!c){
        res.innerHTML = "Preencha: c "
        return
    }

    if(delta < 0){
        res.innerHTML = `
            &Delta; = b&sup2; - 4.a.c <br>
            &Delta; = ${b}&sup2 - 4.${a}.${c} <br>
            &Delta; = ${delta}  <br>

            Não existem raizes reais. 
        `
    }else if(delta == 0){
        res.innerHTML = `
        &Delta; = b&sup2; - 4ac <br>
        &Delta; = ${b}&sup2 - 4x${a}x${c} <br>
        &Delta; = ${delta} <br>
        `
        res.innerHTML += `
        x = <table style="display:inline;">
                <tr>
                    <td style="border-bottom:1px solid black;">-${replaceB} &plusmn; &radic;${delta}</td>
                </tr>
                <tr>
                    <td style="text-align:center;">2.${a}</td>
                </tr>
            </table>    <br>
 
        `
        res.innerHTML += `<strong>X1:</strong> ${zeroDelta}`
        console.log(zeroDelta)
        
        
    }else{
        res.innerHTML = `
            &Delta; = b&sup2; - 4.a.c <br>
            &Delta; = ${b}&sup2 - 4.${a}.${c} <br>
            &Delta; = ${delta} <br>
        `
        res.innerHTML += `
                x = <table style="display:inline;">
                <tr>
                    <td style="border-bottom:1px solid white;">-${replaceB} &plusmn; &radic;${delta};</td>
                </tr>
                <tr>
                    <td style="text-align:center;">2.${a}</td>
                </tr>
            </table>    <br>
        `
        res.innerHTML += `
            <strong>X1:</strong> ${X1.toFixed(2)} <br>
            <strong>X2:</strong> ${X2.toFixed(2)}    
        `
    }
    

}

let calc;
function calculadora(n1,op,n2){
    let calc;
    switch(op){
        case "+":
             res = n1 + n2
            break
        case "-":
            res = a - b
            break
        case "/":
            res = n1 / n2
            res2 = res
            break
        case "*":
            res = n1 * n2
            res2 = res
            break
        case "**":
            res = n1 ** 2
            break
        default:
    }
    console.log(res)
}

calculadora(5, "+", 1)

console.log(calc)
0