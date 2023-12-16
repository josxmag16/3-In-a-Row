$(document).ready(() => {

    const start = $('#startbutton');
    const turn = $('#turn');
    starterPlayer = random();

    start.on("click", () => {

        $('#startText').addClass('hide');
        $('#game').removeClass('hide');

        if (starterPlayer === 1) {

            turn.html('  <div class="text-center" style="color: red;">Player X turn</div> <br> <br>');

        }else {

            turn.html('  <div class="text-center" style="color: blue;">Player O turn</div> <br> <br>');

        }

    });

});

let xCountRow1 = 0;
let xCountRow2 = 0;
let xCountRow3 = 0;

let xCountCol1 = 0;
let xCountCol2 = 0;
let xCountCol3 = 0;

let oCountRow1 = 0;
let oCountRow2 = 0;
let oCountRow3 = 0;

let oCountCol1 = 0;
let oCountCol2 = 0;
let oCountCol3 = 0;


function handleClick(buttonId) {
    
    const turn = $('#turn');

    switch (buttonId) {
        case '1':
        
            if(starterPlayer === 1) {

                $('#1').html('<div class="text-center" style="font-size: 50px;">X</div>').css('color', 'red');
                starterPlayer = 2;
                turn.html('  <div class="text-center" style="color: blue;">Player O turn</div> <br> <br>');
                xCountCol1++;
                xCountRow1++;
            } 
            else {
                $('#1').html('<div class="text-center" style="font-size: 50px;">O</div>').css('color', 'blue');
                starterPlayer = 1;
                turn.html('  <div class="text-center" style="color: red;">Player X turn</div> <br> <br>');
            
                oCountCol1++;
                oCountRow1++;
            }

            break;
        case '2':

            if(starterPlayer === 1) {

            $('#2').html('<div class="text-center" style="font-size: 50px;">X</div>').css('color', 'red');
            starterPlayer = 2;
            turn.html('  <div class="text-center" style="color: blue;">Player O turn</div> <br> <br>');
            xCountCol2++;
            xCountRow1++;
            } 
            else {
            $('#2').html('<div class="text-center" style="font-size: 50px;">O</div>').css('color', 'blue');
            starterPlayer = 1;
            turn.html('  <div class="text-center" style="color: red;">Player X turn</div> <br> <br>');
        
            oCountCol2++;
            oCountRow1++;
            
        }   

            break;
        
        case '3':
        
            if(starterPlayer === 1) {

            $('#3').html('<div class="text-center" style="font-size: 50px;">X</div>').css('color', 'red');
            starterPlayer = 2;
            turn.html('  <div class="text-center" style="color: blue;">Player O turn</div> <br> <br>');

            xCountCol3++;
            xCountRow1++;
            } 
            else {
            $('#3').html('<div class="text-center" style="font-size: 50px;">O</div>').css('color', 'blue');
            starterPlayer = 1;
            turn.html('  <div class="text-center" style="color: red;">Player X turn</div> <br> <br>');
            
            oCountCol3++;
            oCountRow1++;
                
            } 

            break;

        case '4':
            
            if(starterPlayer === 1) {

                $('#4').html('<div class="text-center" style="font-size: 50px;">X</div>').css('color', 'red');
                starterPlayer = 2;
                turn.html('  <div class="text-center" style="color: blue;">Player O turn</div> <br> <br>');
                
                xCountCol1++;
                xCountRow2++;
            } 
            else {
                $('#4').html('<div class="text-center" style="font-size: 50px;">O</div>').css('color', 'blue');
                starterPlayer = 1;
                turn.html('  <div class="text-center" style="color: red;">Player X turn</div> <br> <br>');
                
                oCountCol1++;
                oCountRow2++;
            } 

                    
            break;

        case '5':
        
            if(starterPlayer === 1) {

            $('#5').html('<div class="text-center" style="font-size: 50px;">X</div>').css('color', 'red');
            starterPlayer = 2;
            turn.html('  <div class="text-center" style="color: blue;">Player O turn</div> <br> <br>');
                
            xCountCol2++;
            xCountRow2++;
            } 
            else {
            $('#5').html('<div class="text-center" style="font-size: 50px;">O</div>').css('color', 'blue');
            starterPlayer = 1;
            turn.html('  <div class="text-center" style="color: red;">Player X turn</div> <br> <br>');
        
            oCountCol2++;
            oCountRow2++;
        } 
        
            break;

        case '6':

            if(starterPlayer === 1) {

            $('#6').html('<div class="text-center" style="font-size: 50px;">X</div>').css('color', 'red');
            starterPlayer = 2;
            turn.html('  <div class="text-center" style="color: blue;">Player O turn</div> <br> <br>');

            xCountCol3++;
            xCountRow2++;

         } 
            else {
            $('#6').html('<div class="text-center" style="font-size: 50px;">O</div>').css('color', 'blue');
            starterPlayer = 1;
            turn.html('  <div class="text-center" style="color: red;">Player X turn</div> <br> <br>');
        
            oCountCol3++;
            oCountRow2++;
        } 
                            
            break;

        case '7':

            if(starterPlayer === 1) {

            $('#7').html('<div class="text-center" style="font-size: 50px;">X</div>').css('color', 'red');
            starterPlayer = 2;
            turn.html('  <div class="text-center" style="color: blue;">Player O turn</div> <br> <br>');
            xCountCol1++;
            xCountRow3++;
            } 
            else {
            $('#7').html('<div class="text-center" style="font-size: 50px;">O</div>').css('color', 'blue');
            starterPlayer = 1;
            turn.html('  <div class="text-center" style="color: red;">Player X turn</div> <br> <br>');
        
            oCountCol1++;
            oCountRow3++;
        } 
                                
            break;

        case '8':
                  
            if(starterPlayer === 1) {

            $('#8').html('<div class="text-center" style="font-size: 50px;">X</div>').css('color', 'red');
            starterPlayer = 2;
            turn.html('  <div class="text-center" style="color: blue;">Player O turn</div> <br> <br>');
            xCountCol2++;
            xCountRow3++;
            } 
            else {
            $('#8').html('<div class="text-center" style="font-size: 50px;">O</div>').css('color', 'blue');
            starterPlayer = 1;
            turn.html('  <div class="text-center" style="color: red;">Player X turn</div> <br> <br>');
        
            oCountCol2++;
            oCountRow3++;
        } 
            break;

        case '9':

            if(starterPlayer === 1) {

            $('#9').html('<div class="text-center" style="font-size: 50px;">X</div>').css('color', 'red');
            starterPlayer = 2;
            turn.html('  <div class="text-center" style="color: blue;">Player O turn</div> <br> <br>');
            xCountCol3++;
            xCountRow3++;
            } 
            else {
            $('#9').html('<div class="text-center" style="font-size: 50px;">O</div>').css('color', 'blue');
            starterPlayer = 1;
            turn.html('  <div class="text-center" style="color: red;">Player X turn</div> <br> <br>');
        
            oCountCol3++;
            oCountRow3++;
        } 
                                        
            break;

        default:
    }
   
    isWinner();

}

function isWinner(){

    const turn = $('#turn');


    if(xCountCol1 === 3 || xCountCol2 === 3 || xCountCol3 === 3 || xCountRow1 === 3 || xCountRow2 === 3 || xCountRow3 === 3) {

        turn.html('  <div class="text-center" style="color: red; font-size:30px;">Player X Won</div> <br> <br>');
        alert('Player X Won');
        location.reload();

    }else if(oCountCol1 === 3 || oCountCol2 === 3 || oCountCol3 === 3 || oCountRow1 === 3 || oCountRow2 === 3 || oCountRow3 === 3) {
       
        turn.html('<div class="text-center" style="color: blue; font-size:30px;">Player O Won</div> <br> <br>');
        alert('Player O Won');
        location.reload();

    }else if($('#9').html() == '<div class="text-center" style="font-size: 50px;">X</div>' && $('#1').html() == '<div class="text-center" style="font-size: 50px;">X</div>' && $('#5').html() == '<div class="text-center" style="font-size: 50px;">X</div>'){

        turn.html('<div class="text-center" style="color: red; font-size:30px;">Player X Won</div> <br> <br>');
        alert('Player X Won');
        location.reload();

    }else if($('#9').html() == '<div class="text-center" style="font-size: 50px;">O</div>' && $('#1').html() == '<div class="text-center" style="font-size: 50px;">O</div>' && $('#5').html() == '<div class="text-center" style="font-size: 50px;">O</div>'){
 
        turn.html('  <div class="text-center" style="color: blue; font-size:30px;">Player O Won</div> <br> <br>');
        alert('Player O Won');
        location.reload();

    }else if($('#7').html() == '<div class="text-center" style="font-size: 50px;">X</div>' && $('#3').html() == '<div class="text-center" style="font-size: 50px;">X</div>' && $('#5').html() == '<div class="text-center" style="font-size: 50px;">X</div>'){

        turn.html('<div class="text-center" style="color: red; font-size:30px;">Player X Won</div> <br> <br>');
        alert('Player X Won');
        location.reload();

    }else if($('#7').html() == '<div class="text-center" style="font-size: 50px;">O</div>' && $('#3').html() == '<div class="text-center" style="font-size: 50px;">O</div>' && $('#5').html() == '<div class="text-center" style="font-size: 50px;">O</div>'){
 
        turn.html('  <div class="text-center" style="color: blue; font-size:30px;">Player O Won</div> <br> <br>');
        alert('Player O Won');
        location.reload();

    }else if($('table button').length == 0){

        turn.html('  <div class="text-center" style="color: blue; font-size:30px;">Draw</div> <br> <br>');
        alert('Draw');
        location.reload();
    }

}



function random() {
    return Math.floor(Math.random() * 2) + 1;
}
