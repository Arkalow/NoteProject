jQuery(function($){
    $.get('JSON.php')
        .done(function(data, textStatus, jqXHR){
            console.log(data)
        })
        .fail(function(jqXHR, ){
            console.log('Erreur 404')
        })
})