      var animals = ["dog", "cat", "bird", "mouse"];

     
      function displayAnimal() {
      var animal = $(this).attr("data-name");

      console.log(animal);

      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          console.log(response);



          var results = response.data;

        
          for (var i = 0; i < results.length; i++) {


        
          var animalDiv = $("<div class='animal'>");

        
          var rating = response.data[i].rating;

          
          var pOne = $("<p>").text("Rating: " + rating);

          
          animalDiv.append(pOne);

          var imgURL= response.data[i].images.fixed_height.url;


          var image = $("<img class= 'gif'>").attr("src", imgURL);

          

          
          animalDiv.append(image);

          
          $("#animals-view").prepend(animalDiv);

        }


    //   $('.gif').on("click", function() {
     
    //     var still= response.data[i].images.fixed_height_still.url;
    //     var move= response.data[i].images.fixed_height.url;

    //     var state = $(this).attr("src");

    //     if (state === still) {

    //     $(this).attr("src", $(this).attr(move));
    //   }

    //    else {

    //     $(this).attr("src", $(this).attr(still));
   
    //   }
    // }
        });

      }


      function renderButtons() {


        $("#buttons-view").empty();

      
        for (var i = 0; i < animals.length; i++) {

         
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("fuzzy");
          // Adding a data-attribute
          a.attr("data-name", animals[i]);
          // Providing the initial button text
          a.text(animals[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var animal = $("#animal-input").val().trim();

        // Adding movie from the textbox to our array
      animals.push(animal);

        renderButtons();

            // event.preventDefault();
            // $("#pics").empty();
      });



      // Adding a click event listener to all elements with a class of "m"
      $(document).on("click", ".fuzzy", displayAnimal);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();







