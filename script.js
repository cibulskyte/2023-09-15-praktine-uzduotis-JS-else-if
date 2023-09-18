console.groupCollapsed('pirma uzduotis password')

let password= 'kokokokfyftfyvyvvvyu'
console.log(password)
console.log(password.length)

if(password.length<16)
{alert('slaptazodis yra per trumpas. Jis privalo buti bent 16 simboliu ilgumo')}
else if (password.length>=15)
if(password.length>20)
console.log('slaptazodis tinkamas')
else {
    console.log('slaptazodis yra tinkamas. Taciau rekomenduojama, kad jis butu bent 21 simbolio ilgumo')
}
console.groupEnd()

console.groupCollapsed('antra uzduotis')
let years= prompt('iveskite amziu')
console.log(years)

if(years<0) {
    console.log('amzius netinkamas')
}
if(years<6){
    console.log('i mokykla neina')
}
if(years>=7 && years<=10) {
    console.log('eina i pradine klase')
}
if(years>=11 && years<=14) {
    console.log('eina i pagrindine mokykla')
}
if(years>=15 && years <=18) {
    console.log('eina i gimnazija')
}
if(years>=19) {
    console.log('mokykla baiges')
}
else {
    console.log ('netinkamai nurodytas amzius, amzius privalo buti skaicius')
}
console.groupEnd()