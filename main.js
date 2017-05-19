
/*jslint browser: true*/
/*global $, jQuery*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

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
                console.log(data[1][0]);
                console.log(data[2][0]);
                console.log(data[3][0]);
            },
            error: function (errorMessage) {
                alert("Error");
            }
        });
    });   
});