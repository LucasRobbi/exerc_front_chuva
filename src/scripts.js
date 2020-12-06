/*Scripts*/
function clicarAddComentario(){
    var comentar = document.getElementById('comentar');
    var discussoes_fixo = document.getElementById('discussoes_fixo');
    var escrita_comentario = document.getElementById('escrita_comentario');
    var pos_comentario = document.getElementById("pos_comentario");

    comentar.style.display = "none";
    discussoes_fixo.style.display = "none";
    escrita_comentario.style.display = "block";
    pos_comentario.style.display = "none";
}
function clicarEnviar(){
    var escrita_comentario = document.getElementById('escrita_comentario');
    var pos_comentario = document.getElementById("pos_comentario");
    
    escrita_comentario.style.display = "none";
    pos_comentario.style.display = "block";
}
/* Não esta perfeitamente funcional */
function transformaInputEmTag(){
    var texto = document.getElementById("assunto").value;
    var texto2 = document.getElementById("conteudo_comentario").value;
    var heading2 = document.getElementById("heading2");

    document.getElementById("titulo_comentario").innerHTML = texto;
    document.getElementById("cont_comentario").innerHTML = texto2;
    heading2.style.display = "block";
    
}