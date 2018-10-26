$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();

        let userScores = [];
        userScores = $('.question-select').map(function() {
            return $(this).val().charAt(0);
        }).get();

        let newUser = {
            name: $('#name').val().trim(),
            photo: $('#photo').val().trim(),
            scores: userScores
        }

        $.post('/api/friends', newUser, function(data) {
            $('.modal-body').html('<img src="' + data.photo + '" alt="Your Match" width="400"> <p>' + data.name + '</p>');
            $('#user-match-modal').modal('show');
        });
    });
});
    