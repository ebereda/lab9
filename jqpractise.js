$(function(){

    $('#bookingForm').submit(function(){
        var errorDiv = $('#error');
        var seats = $('#seats').val();
        var taxi = $("input[name='taxi']:checked").val();
        var extras = [];
        $("input[name='extras']:checked").each(function() {
            extras.push($(this).val());
        });
        var noErrors = 0;
        errorDiv.html('');
        if(isNaN(seats)){
            noErrors++;
            errorDiv.append($('<p>').text('Seats Must be a Number'));
        }
        else{
            if(seats <= 0 ){
                noErrors++
                errorDiv.append($('<p>').text('Seats must be 1 to 100'));
            }
            else{
                if(seats > 200){
                    noErrors++;
                    errorDiv.append($('<p>').text('Seats cannot be more than 200'));
                }

            }
        }
        if(!taxi){
            noErrors++;
            errorDiv.append($('<p>').text('You Must select Seat type'));
        }
        if(extras.length == 0){
            noErrors++;
            errorDiv.append($('<p>').text('You Must Select Atleast one Extra'));
        }
        if(noErrors > 0){
            errorDiv.prepend($('<p>').text('Errors Found ' + noErrors));
            return false;
        }
    });
});