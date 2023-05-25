document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values 
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.getElementById("gender").value;
  var foods = document.getElementsByName("food");
  var selectedFoods = [];
  for (var i = 0; i < foods.length; i++) {
    if (foods[i].checked) {
      selectedFoods.push(foods[i].value);
    }
  }
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  
  // Create new table row
  var table = document.getElementById("dataTable");
  var newRow = table.insertRow(-1);
  
  // Add cells to the row
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = firstName;
  
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = lastName;
  
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = address;
  
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = pincode;
  
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = gender;
  
  var cell6 = newRow.insertCell(5);
  cell6.innerHTML = selectedFoods.join(", ");
  
  var cell7 = newRow.insertCell(6);
  cell7.innerHTML = state;
  
  var cell8 = newRow.insertCell(7);
  cell8.innerHTML = country;
  
  // Clear form fields
  document.getElementById("myForm").reset();
});

  

