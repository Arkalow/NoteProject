jQuery(function($){
    var $main = $('main')
    var $loader = $('<div>Loading...</div>').appendTo($main)
    
    $.get('JSON.php')
        .done(function(data, textStatus, jqXHR){
            for(var i = 0; i < data.length; i++){
                var $section = $('<div>')
                $main.append($('<div>').addClass('divider'))
                $section.addClass('section').append($('<h5>').text(data[i].name))
                $section.addClass('section').append($('<p>').text(data[i].content))
                $main.append($section)
            }
            
        })
        .fail(function(jqXHR, textStatus){
            console.log('Erreur 404')
        })
        .always(function(){
            $loader.remove()
        })
})