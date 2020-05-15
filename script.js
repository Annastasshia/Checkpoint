



$(document).ready(function(){
  

    // RAWG API
    $("#searchbtn").on("click", function(event){
        event.preventDefault();

        var title = $("#titleInput").val().trim().replace(/ /g,"-");
        

        console.log(title);

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://rawg-video-games-database.p.rapidapi.com/games/"+title,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "56967c5012mshefae2d0c353bc84p1b80c2jsnad5515b32ae3"
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);

            var mainDiv = $(".main-div");
            gameDiv = $("<div>").addClass("columns medium-9");
            detailsDiv = $("<div>").addClass("columns medium-12 border");
            
            var titleH3 = $("<h3>").text(response.name);
            var platH5 = $("<h5>").text("Game Platforms:");
            var rating = $("<h5>").text("ESRB Rating: "+ response.esrb_rating.name);
            var detailsH5 = $("<h5>").text("Details:");
            var details =$("<p>").text(response.description_raw);
            var gameImg = $("<img>").attr('src', response.background_image).addClass("columns medium-3");
            gameImg.addClass("work-feature-block-image");
            var platUl = $("<ul>");

            
        
            mainDiv.prepend(detailsDiv);
            detailsDiv.prepend(details);
            gameDiv.prepend(detailsH5)
            mainDiv.prepend(gameDiv);
            mainDiv.prepend(gameImg);
            gameDiv.prepend(rating);
            gameDiv.prepend(platUl);
            gameDiv.prepend(platH5);
            gameDiv.prepend(titleH3);

            if (response.esrb_rating.name === "Teen"){
                $(rating).addClass("teen-rating");

            }

            else if (response.esrb_rating.name === "Mature"){
                $(rating).addClass("mature-rating");
            }

            else if (response.esrb_rating.name === "Everyone"){
                $(rating).addClass("everyone-rating");
            }

        


            for (let i = 0; i < response.parent_platforms.length; i ++) {
            var platLi =$("<li>").text(response.parent_platforms[i].platform.name);

            platUl.append(platLi);
            };

    
        
            

        });

    // End RAWG API



 });
    // Whatoplay API

        $("#customDropdown2").on("change", getSelectValue)
        // rawg
        function getSelectValue(){
            var platformValue= $("#customDropdown2").val();
            console.log(platformValue);
        
        var settings2 = {
            "async": true,
            "crossDomain": true,
            "url": "https://whatoplay.p.rapidapi.com/games/?limit=5&sort_order=desc&sort_by=playscore&platform_url=" + platformValue ,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "whatoplay.p.rapidapi.com",
                "x-rapidapi-key": "56967c5012mshefae2d0c353bc84p1b80c2jsnad5515b32ae3"
            }
        }

    $.ajax(settings2).done(function (response2) {
        console.log(response2);
        var rightDiv = $(".platform-pull")
        $(rightDiv).empty();

        

        
        
        for (let i = 0; i < response2.games.length; i ++){
            var game = response2.games[i];
            var gameName = $("<a>").text(game.game_name).attr("href", game.game_url).attr("target", "_blank");
            var playScore = $("<p>").text("Player Rating: " + game.playscore);

            rightDiv.append(gameName);
            rightDiv.append(playScore);
        }
    });
    // end Whatoplay API
}
});

