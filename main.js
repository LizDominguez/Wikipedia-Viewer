
/*jslint browser: true*/
'use strict';

var submitBtn = document.querySelector('#submit'),
    searchBar = document.querySelector('#search');

function displaySearch() {
    
  var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
             var results = document.querySelector("#results");
             results.innerHTML = '';
             var data = JSON.parse(xmlhttp.responseText);
             
//             console.log(data);
             
             for (var i = 0; i < data[1].length; i++) {
                results.innerHTML += '<li><a href=' + data[3][i] + ' class="search-links">' + data[1][i] + '</a><p>' + data[2][i] + '</p></li>';
              }
                
           }
           else if (xmlhttp.status == 400) {
              console.log('There was an error 400');
           }
           else {
               console.log('something else other than 200 was returned');
           }
        }
    };

    var url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchBar.value + "&format=json";

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

submitBtn.addEventListener('click', function() {
  displaySearch();
});

searchBar.addEventListener('keypress', function(e) { 
  var key = e.which;
  if(key == 13) {
    displaySearch();  
  }
});
