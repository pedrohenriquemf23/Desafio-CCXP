const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento= "17 feb 2023"

function countdown(){
    const datalanc = new Date (lancamento)
    const hoje = new Date()

    const segTotal = (datalanc - hoje)/ 1000;

    const finalDias = Math.floor(segTotal/60/60/24);
    const finalHoras = Math.floor(segTotal /60/60) %24 ;
    const finalMinutos = Math.floor(segTotal /60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60 ;

    dia.innerHTML= formatoTempod(formatoTempo(finalDias))
    hora.innerHTML = formatoTempoh(formatoTempo(finalHoras))
    minuto.innerHTML = formatoTempom(formatoTempo(finalMinutos))
    segundo.innerHTML = formatoTempos(formatoTempo(finalSegundos))

}
function formatoTempo(tempo){
    return tempo <10? `0${tempo}`:tempo;
}
function formatoTempod(tempo){
    return tempo >0? `${tempo}D`:tempo;
}
function formatoTempoh(tempo){
    return tempo >0? `${tempo}H`:tempo;
}
function formatoTempom(tempo){
    return tempo >0? `${tempo}M`:tempo;
}
function formatoTempos(tempo){
    return tempo >0? `${tempo}S`:tempo;
}
countdown();
setInterval(countdown,1000)