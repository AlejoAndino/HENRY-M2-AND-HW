$('img').hide();

$('#boton').click(function() {
    $("#lista").empty();

    $.get('http://localhost:5000/amigos', function(data) {
        data.forEach(el => {
            let listItem = document.createElement("li");
            listItem.className = "listItem";
            listItem.innerHTML = `${el.name}` + " X";
            $("#lista").append(listItem);
        });
    });
});


$("#search").click(function() {
    const inputValue = $('#input').val();
    $('#input').val("");

    $.get('http://localhost:5000/amigos/' + inputValue, function(data) {
        $("#amigo").text(data.name);
    });
});

$("#delete").click(function() {
    const inputValue = $('#inputDelete').val();
    $('#inputDelete').val("");

    $.ajax({
        url: 'http://localhost:5000/amigos/' + inputValue,
        type: 'DELETE',
        success: () => {
            $('#success').text(`Se elimino correctamente al amigo con el id ${inputValue}`);
        }
    });
})