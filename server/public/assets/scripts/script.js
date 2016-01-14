$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"/artist/grab",
        success: function(data){
            console.log(data);
            appendArtistToDom(data);
        }
    })



        $("button").on('click', function() {
            var degreesToRotate = Math.random() * 360 * 10;
            $("#image-to-spin").css("transform", "rotate(" + degreesToRotate + "deg)");
        });
    $( "button" ).on('click', function() {
        $("#artistContainer").delay(8000).fadeIn(4000);
    });
    });

function showdiv(){
    document.getElementById("artistContainer").style.display = "block";
}

//function appendArtistToDom(array){
//    for(var i= 0; i < array.length; i++){
//        var object = array[i];
//        $("#artistContainer").append(
//            "<div class='artist'>" +
//            "<p>" + object.name + "</p>" +
//            "<p>" + object.descript + "</p>" +
//            "</div>"
//        )
//    }
//
//}

