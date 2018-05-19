$(document).ready(function() {
    $("#search").on("click", function(){
        if($("#article").val().trim()===""){
            alert("Please fill out the requried fields");
        }
        else{
            var url, article, numArticle;
            article = $("#article").val().trim();
            numArticle = $("#numOfArticles").val();
            url = "" + article + "";
        }
    });
});