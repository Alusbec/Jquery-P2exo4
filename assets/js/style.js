$(document).ready(function(){

    $('#green').click(function(){ // cible id de ma div couleur, au clic une modification
        $('#text').css('color','#97c166') // cible id de mon text avec une fonction css je modifie la colo
    });

    $('#red').click(function(){
        $('#text').css('color','#b71f1f')
    });

    $('#blue').click(function(){
        $('#text').css('color','#5969e0')
    });
});