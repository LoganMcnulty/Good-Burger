// ESSENTIALLY WE ARE PULLING INFORMATION FROM THE INDEX BODY, AND THEN SENDING THAT INFORMATION TO THE ROUTES 
// WHICH HANDLE THE INFORMATION
$( document ).ready(function() {
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // change eaten on click function
      $(".change-eaten").on("click", function(event) {
      // pull id from this "data-id"
        var id = $(this).data("id");
      // pull devour data from data-newdevour
        var newDevour = $(this).data("newdevour");
      
        // if newdevour = true, then this burger has not been eaten
        // so we pass the value of true to the database, thus udpating the devour state to true
        // this data-newdevour is handled by index handlebars
          var newDevourState = {
            devoured: newDevour
          };
  
        // Send the PUT request to burgers controller
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
  
  // create a new burger on click function
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      // create a new burger object pulling from the index body
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
  