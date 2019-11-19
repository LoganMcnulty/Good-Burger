

// ESSENTIALLY WE ARE PULLING INFORMATION FROM THE INDEX BODY, AND THEN SENDING THAT INFORMATION TO THE ROUTES 
// WHICH HANDLE THE INFORMATION
$( document ).ready(function() {
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    
    const refEl = $("#reviewBurger")
    const popEl = $("#pop")
    new Popper(refEl, popEl, {
      placement:'right'
    });

    // change sleep on click function
      $(".change-eaten").on("click", function(event) {
      // pull id from this "data-id"
        var id = $(this).data("id");
      // pull sleep data from data-newsleep
        var newDevour = $(this).data("newdevour");
      
        // for example, if newSleep = true, then this cat is not sleepy. 
        // so we pass the value of true to the database, thus udpating the sleep state to true
        // this data-newsleep is handled by index handlebars
          var newDevourState = {
            devoured: newDevour
          };
  
        // Send the PUT request to cats controller
          $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
          }).then(
            function() {
              console.log("changed devoured to", newDevour);
              // Reload the page to get the updated list
              location.reload();
            }
          );
      });
  
  // create a new cat on click function
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      // create a new cat object pulling from the index body
        var newBurger = {
          name: $("#burg").val().trim(),
        };
  
      // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
  });

})
  