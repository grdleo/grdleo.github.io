function uncheckAllExceptCurrent(clickedCheckbox) {
    // Select all checkboxes in the document
    const checkboxes = document.querySelectorAll('input.card-link');
  
    // Loop through each checkbox and uncheck it if it's not the clicked one
    checkboxes.forEach(checkbox => {
      if (checkbox !== clickedCheckbox) {
        checkbox.checked = false;
      }
    });
  }