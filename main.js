$(document).ready(function() {

    $(".general-submit").click(function(event) {
        event.preventDefault();

        let age = parseInt($("#userAge").val());
        let height = parseInt($("#userHeight").val());
        let weight = parseInt($("#userWeight").val());

        let maintainWeight = ((weight*10)+(height*6.25)-(age*5)+5);

        if($("#option").val() == 0.25) {
            $(".maintainWeight").html(maintainWeight*0.25);
        }
        if ($("#option").val() == 0.5) {
            $(".maintainWeight").html(maintainWeight*0.5);
        }
    });
});
