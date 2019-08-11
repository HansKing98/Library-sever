$(document).ready(function() {

    $('form').on('submit', function(event) {
        event.preventDefault();
        var msg = $('form input');
        var todo = { msg: msg.val().trim() };
        
        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });

        return false;

    });

    $('li').on('click', function() {
        var msg = $(this).text().trim().replace(/ /g, "-");
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + msg,
            success: function(data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});