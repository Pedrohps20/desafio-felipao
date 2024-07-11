let nome = "Pedro"
let xp = 5000
let lvl

if (xp >= 0 && xp <= 1000){
    lvl = "Ferro"
}
else if (xp <= 2000){
    lvl = "Bronze"
}
else if (xp <= 5000){
    lvl = "Prata"
}
else if (xp <= 7000){
    lvl = "Ouro"
}
else if (xp <= 8000){
    lvl = "Platina"
}
else if (xp <= 9000){
    lvl = "Ascendente"
}
else if (xp <= 1000){
    lvl = "Imortal"
}
else lvl = Radiante

console.log("O heroi " + nome + " está no nível " + lvl)