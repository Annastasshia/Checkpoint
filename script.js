
// rawg

$(document).ready(function(){


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
            gameDiv = $("<div>").addClass("columns medium-9")
            
            var titleH3 = $("<h3>").text(response.name);
            var platH5 = $("<h5>").text("Game Platforms:");
            var rating = $("<h5>").text("ESRB Rating: "+ response.esrb_rating.name);
            var details =$("<p>").text("Details: " + response.description_raw)
            var gameImg = $("<img>").attr('src', response.background_image).addClass("columns medium-3 gameImg");
            gameImg.addClass("work-feature-block-image");
            var platUl = $("<ul>");

            mainDiv.prepend(gameDiv);
            mainDiv.prepend(gameImg);
            gameDiv.prepend(platUl);
            gameDiv.prepend(platH5);
            gameDiv.prepend(titleH3);


            for (let i = 0; i < response.parent_platforms.length; i ++) {
            var platLi =$("<li>").text(response.parent_platforms[i].platform.name);

            platUl.append(platLi);
            };

    
            gameDiv.append(rating);
            gameDiv.append(details);
            

        });

    // End RARG API

// Twitch API
// var settings2 = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://146.148.98.174/:8080null",
// 	"method": "POST",
// 	"headers": {
// 		"x-rapidapi-host": "146.148.98.174:8080",
// 		"x-rapidapi-key": "11260c9019msh8864ed8d947ccf6p17416cjsn70d177e334a6",
// 		"content-type": "application/x-www-form-urlencoded"
// 	},
// 	"data": {
//         "clientId": "mlzhd68jnlbbz0d227s0ulahlk10nc",
//         "query": "tomb raider"
// 	}
// }

// $.ajax(settings2).done(function (response) {
// 	console.log(response);






// });
// End Twitch API


});

// Twitch top games API
$.ajax({
    url:"https://api.twitch.tv/helix/games/top",
    method:"GET",
    headers:{
        "Client-ID": "mlzhd68jnlbbz0d227s0ulahlk10nc",
        "Authorization": "Bearer dwqyvhsjtd24p2g97hic8b2yywqboz"

    }
})
// regenerate token for Auth code: https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=mlzhd68jnlbbz0d227s0ulahlk10nc&redirect_uri=http://localhost&scope=viewing_activity_read
// curl -H 'Client-ID: mlzhd68jnlbbz0d227s0ulahlk10nc' \
// -H 'Authorization: Bearer r25g4nytjmptcmvommgzr2ac3azewe' \
// -X GET 'https://api.twitch.tv/helix/games/top'



});
