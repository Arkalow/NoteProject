jQuery(function($){
    var $main = $('main')
    var $loader = $('#loader')
    var $selected = null
    $.get('JSON.php')
        .done(function(data, textStatus, jqXHR){
            for(var i = 0; i < data.length; i++){
                var $section = $('<div>')
                $section.addClass('flow-text')
                $main.before($('<div>').addClass('divider'))
                $section.addClass('section').append($('<h5>').text(data[i].name))
                $section.addClass('section').append($('<p>').text(data[i].content))
                $main.before($section)

                

                $section.click(function(event){
                    let $note = $(this)
                    $note.toggleClass('red-text text-darken-2')

                    let $buttons = $('<div>')
                    let $bt_remove = $('<button>').addClass('btn waves-effect waves-light').text('delete')
                    let $bt_edit = $('<button>').addClass('btn waves-effect waves-light').text('edit')
                    $buttons.append($bt_remove)
                    $buttons.append($bt_edit)

                    if($selected !== null){
                        $selected.toggleClass('red-text text-darken-2')
                        $selected.children('div').remove()
                    }
                    $note.append($buttons)

                    $selected = $note
                })
            }
            
        })
        .fail(function(jqXHR, textStatus){
            console.log('Erreur 404')
        })
        .always(function(){
            $loader.remove()
        })
})