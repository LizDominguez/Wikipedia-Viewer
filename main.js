
/*jslint browser: true*/
/*global $, jQuery*/
//credit: Coding Tutorials 360

$(document).ready(function () {  
    "use strict";
  
    //when the submit button is clicked, run 
    $('#submit').click(function () {
      //gets search input and calls wiki API
        var search = $('#search').val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&format=json&callback=?";
    
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function (data) {
            // heading console.log(data[1][0]);
            //description console.log(data[2][0]);
            //link console.log(data[3][0]);
              
            $('#results').html('');
              
            for(var i=0; i < data[1].length; i++){
              
             $('#results').append("<li><a href="+data[3][i]+" class ='search-links'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
               
            }
            },
            error: function (errorMessage) {
                alert("Error");
            }
        });
    });   
});