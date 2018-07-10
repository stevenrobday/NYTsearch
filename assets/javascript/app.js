
$("#form").on("submit", function(e) {
    e.preventDefault();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e67ed544510f47e98975b0d923ecfb5f";

    var search = $("#searchTerm").val();

    queryURL += "&q=" + search;

    var length = $("#number").val();

    var startYear = $("#startYear").val();
    if(startYear !== ""){
        startYear += "0101";
        queryURL += "&begin_date=" + startYear;
    }

    var endYear = $("#endYear").val();
    if(endYear !== ""){
        endYear += "1231";
        queryURL += "&end_date=" + endYear;
    }

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          for(var i=0; i < length; i++){
            var p = $("<p>");
            var headline = response.response.docs[i].headline.main;
            p.append(headline);
            $("#topArticles").append(p);
          }
    });
});

$("#clear").on("click", function() {
    $("#topArticles").empty();
});