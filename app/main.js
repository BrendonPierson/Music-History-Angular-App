 $("#info").on('mouseover', "#sortable", function(){  
      $("#sortable").sortable({
        placeholder: "ui-state-highlight",
        // opacity: 1,
        revert: true,
        axis: "y",
      });
      $( "#sortable" ).disableSelection();
    });