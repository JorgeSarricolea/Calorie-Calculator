$(document).ready(function() {

    $("#results").hide();

    /*Reset Button
    ---------------------*/

    $(".reset").click(function() {
        $("#calculator").reset();
    });

    /*Submit Button
    ---------------------*/

    $(".general-submit").click(function(event) {
        event.preventDefault();

        /*Scroll Effect
        ---------------------*/

        $('html, body').animate({
            scrollTop: $(document).height()
        }, 1000);

        /*Checking Fields
        ---------------------*/

        let errorMessages = "Complete all the fields!";

        if ($('#user-age').val() == "" ||
            $('#user-height').val() == "" ||
            $('#user-weight').val() == "" ||
            $(".gender input:radio:not(:checked)").length === 2) {
        $("#results").hide();
        $(".error").html(errorMessages);
        $(".error").show();
        setTimeout(function() {
            $(".error").hide();
        }, 3000);
        } else {
            $("#results").show();
            $(".error").hide();
        }

        /*Men Option Checked
        ---------------------*/

        if ($("#option-man").is(":checked")) {

            const age = parseInt($("#user-age").val());
            const height = parseFloat($("#user-height").val());
            const weight = parseFloat($("#user-weight").val());
            const maintainWeight = parseFloat((weight*10)+(height*6.25)-(age*5)+5).toFixed(2);
            const bmi = parseFloat(weight/((height*height)/10000)).toFixed(2);
            const water = parseFloat((weight/7)*250).toFixed(2);
            const scaleBMI = parseFloat((bmi*100)/40);

            $(".bmi").html(bmi);
            $(".water").html(water);

            /*Progress Bar BMI
            ---------------------*/

            const progressBar = $("#bmi-bar");
            progressBar.css("width", scaleBMI + "%");
            progressBar.css("max-width", "100%")
            progressBar.text(bmi + "%");

            if (bmi <= 18.5) {
                progressBar.css('background-color', '#d32300');
            }

            if (bmi > 18.5 && bmi < 25) {
                progressBar.css('background-color', '#89bf24');
            }

            if (bmi >= 25) {
                progressBar.css('background-color', '#ffd000');
            }

            /*Options
            ---------------------*/

            if ($("select").find(":selected").val() == "1.2") {
                let newCalories = parseFloat(maintainWeight*1.2).toFixed(2);
                let extra = parseFloat((newCalories*20)/100).toFixed(2);
                let moreCalories = (parseFloat(newCalories)+parseFloat(extra)).toFixed(2);
                let lessCalories = (parseFloat(newCalories)-parseFloat(extra)).toFixed(2);
                let protein = (weight*.8).toFixed(2);
                $(".extra-calories").html(extra);
                $(".maintain-weight").html(newCalories);
                $(".gain-weight").html(moreCalories);
                $(".lose-weight").html(lessCalories);
                $(".protein").html(protein);
            }
            if ($("select").find(":selected").val() == "1.55") {
                let newCalories = parseFloat(maintainWeight*1.55).toFixed(2);
                let extra = parseFloat((newCalories*20)/100).toFixed(2);
                let moreCalories = (parseFloat(newCalories)+parseFloat(extra)).toFixed(2);
                let lessCalories = (parseFloat(newCalories)-parseFloat(extra)).toFixed(2);
                let protein = (weight*1.2).toFixed(2);
                $(".extra-calories").html(extra);
                $(".maintain-weight").html(newCalories);
                $(".gain-weight").html(moreCalories);
                $(".lose-weight").html(lessCalories);
                $(".protein").html(protein);
            }
            if ($("select").find(":selected").val() == "1.725") {
                let newCalories = parseFloat(maintainWeight*1.125).toFixed(2);
                let extra = parseFloat((newCalories*20)/100).toFixed(2);
                let moreCalories = (parseFloat(newCalories)+parseFloat(extra)).toFixed(2);
                let lessCalories = (parseFloat(newCalories)-parseFloat(extra)).toFixed(2);
                let protein = (weight*1.6).toFixed(2);
                $(".extra-calories").html(extra);
                $(".maintain-weight").html(newCalories);
                $(".gain-weight").html(moreCalories);
                $(".lose-weight").html(lessCalories);
                $(".protein").html(protein);
            }
            if ($("select").find(":selected").val() == "2") {
                let newCalories = parseFloat(maintainWeight*2).toFixed(2);
                let extra = parseFloat((newCalories*20)/100).toFixed(2);
                let moreCalories = (parseFloat(newCalories)+parseFloat(extra)).toFixed(2);
                let lessCalories = (parseFloat(newCalories)-parseFloat(extra)).toFixed(2);
                let protein = (weight*2).toFixed(2);
                $(".extra-calories").html(extra);
                $(".maintain-weight").html(newCalories);
                $(".gain-weight").html(moreCalories);
                $(".lose-weight").html(lessCalories);
                $(".protein").html(protein);
            }

        /*Women Option Checked
        ---------------------*/

        } else if ($("#option-woman").is(":checked")) {

            const age = parseInt($("#user-age").val());
            const height = parseInt($("#user-height").val());
            const weight = parseInt($("#user-weight").val());
            const maintainWeight = parseFloat((weight*9.6)+(height*1.8)-(age*4.7)+655);
            const bmi = parseFloat(weight/((height*height)/10000)).toFixed(2);
            const water = parseFloat((weight/7)*250).toFixed(2);

            $(".bmi").html(bmi);
            $(".water").html(water);

            /*Progress Bar BMI
            ---------------------*/

            const progressBar = $("#bmi-bar");
            progressBar.css("width", bmi + "%");
            progressBar.css("max-width", "100%")
            progressBar.text(bmi + "%");

            if (bmi <= 18.5) {
                progressBar.css('background-color', '#d32300');
            }

            if (bmi > 18.5 && bmi < 25) {
                progressBar.css('background-color', '#89bf24');
            }

            if (bmi >= 25) {
                progressBar.css('background-color', '#ffd000');
            }

            /*Options
            ---------------------*/

            if ($("select").find(":selected").val() == "1.2") {
                let newCalories = parseFloat(maintainWeight*1.2).toFixed(2);
                let extra = parseFloat((newCalories*20)/100).toFixed(2);
                let moreCalories = (parseFloat(newCalories)+parseFloat(extra)).toFixed(2);
                let lessCalories = (parseFloat(newCalories)-parseFloat(extra)).toFixed(2);
                let protein = (weight*.8).toFixed(2);
                $(".extra-calories").html(extra);
                $(".maintain-weight").html(newCalories);
                $(".gain-weight").html(moreCalories);
                $(".lose-weight").html(lessCalories);
                $(".protein").html(protein);
            }
            if ($("select").find(":selected").val() == "1.55") {
                let newCalories = parseFloat(maintainWeight*1.55).toFixed(2);
                let extra = parseFloat((newCalories*20)/100).toFixed(2);
                let moreCalories = (parseFloat(newCalories)+parseFloat(extra)).toFixed(2);
                let lessCalories = (parseFloat(newCalories)-parseFloat(extra)).toFixed(2);
                let protein = (weight*1.2).toFixed(2);
                $(".extra-calories").html(extra);
                $(".maintain-weight").html(newCalories);
                $(".gain-weight").html(moreCalories);
                $(".lose-weight").html(lessCalories);
                $(".protein").html(protein);
            }
            if ($("select").find(":selected").val() == "1.725") {
                let newCalories = parseFloat(maintainWeight*1.125).toFixed(2);
                let extra = parseFloat((newCalories*20)/100).toFixed(2);
                let moreCalories = (parseFloat(newCalories)+parseFloat(extra)).toFixed(2);
                let lessCalories = (parseFloat(newCalories)-parseFloat(extra)).toFixed(2);
                let protein = (weight*1.6).toFixed(2);
                $(".extra-calories").html(extra);
                $(".maintain-weight").html(newCalories);
                $(".gain-weight").html(moreCalories);
                $(".lose-weight").html(lessCalories);
                $(".protein").html(protein);
            }
            if ($("select").find(":selected").val() == "2") {
                let newCalories = parseFloat(maintainWeight*2).toFixed(2);
                let extra = parseFloat((newCalories*20)/100).toFixed(2);
                let moreCalories = (parseFloat(newCalories)+parseFloat(extra)).toFixed(2);
                let lessCalories = (parseFloat(newCalories)-parseFloat(extra)).toFixed(2);
                let protein = (weight*2).toFixed(2);
                $(".extra-calories").html(extra);
                $(".maintain-weight").html(newCalories);
                $(".gain-weight").html(moreCalories);
                $(".lose-weight").html(lessCalories);
                $(".protein").html(protein);
            }
        }
    });
});
