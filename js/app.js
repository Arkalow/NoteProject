jQuery(function($){
    $.get('http://localhost/NoteProject/NoteProject/JSON.php')
        .done(function(data, textStatus, jqXHR){
            console.log(data)
        })
        .fail(function(jqXHR, textStatus){
            console.log('Erreur 404')
        })
})