jQuery(function($){
    var $main = $('main')
    var $loader = $('#loader')
    var $selected = null

    //fetch notes as JSON
    $.get('JSON.php')
        .done(function(data, textStatus, jqXHR){
            for(var i = 0; i < data.length; i++){

                // creation of section note 
                var $section = $('<div>')
                $section.addClass('flow-text')
                $main.before($('<div>').addClass('divider'))
                $section.addClass('section').append($('<h5>').text(data[i].name))
                $section.addClass('section').append($('<p>').text(data[i].content))
                $main.before($section)

                // creation of div buttons
                var $buttons = $('<div>')
                var $bt_remove = $('<button>').addClass('btn waves-effect waves-light').text('delete')
                var $bt_edit = $('<button>').addClass('btn waves-effect waves-light').text('edit')
                $buttons.append($bt_remove)
                $buttons.append($bt_edit)
                
                // listener click on section note
                $section.click(function(event){
                    /**
                     * Change the color of the new selected note and unselect old note
                     */
                    let $note = $(this)
                    $note.toggleClass('red-text text-darken-2')

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