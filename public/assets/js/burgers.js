$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
        burger_name: $("#burger-order").val().trim(),
        devoured: 0
        };

        // Send the POST request using ajax.
        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
        success: function() {
          location.reload();
        }
        }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            // location.reload();
        }
        );
    });

    //Click event to delete burger.
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request using ajax.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE",
          success: function() {
            location.reload();
          }
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            // location.reload();
          }
        );
      });

    //Click event for "Devour it" button.
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");
    
        var newDevourState = {
          devoured: "true"
        };
    
        // Send the PUT request using ajax.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevourState,
          success: function() {
            location.reload();
          }
        }).then(
          function() {
            console.log("changed devour to", newDevour);
            // Reload the page to get the updated list
            // location.reload();
          }
        );
      });   
});