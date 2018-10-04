$(function () {
    $('.top h1').text('Traversing is fun');
    $('#list').children().text('HEY!');
    $('.element').children().addClass('hidden');

    $('.change-show').click(function () {
        $('.show').toggleClass('hidden');
    });

    $('.add-item').click(function (){
        $('#list').append('<li class="Hello">Hello!</li>');
    });


});