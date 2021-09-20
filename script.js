function Contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (!i || !f || !p) {
        window.alert(`[ERRO] Não deixe campos em branco!`)
    } else if (i >= f) {
        window.alert(`[ERRO] O valor de inicio deve ser menor do que o do fim!`)
    } else if (p <= 0) {
        window.alert('[ERRO] O passo não pode ser menor que 0!')
    } else {
        res.innerHTML = `Contando 🧮:</br>`
        for (i; i <= f; i += p) {
            res.innerHTML += `${i} 👉 `
        }      
        res.innerHTML += `🏁`
    }

}