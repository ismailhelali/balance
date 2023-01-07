<script>

// Array to store the submissions
var submissions = [];

// Function to create a submission object
function createSubmission(initialDate, resultDate, name, amount, mode) {
  var submission = {
    id: Math.random(),
    initialDate: initialDate,
    resultDate: resultDate,
    name: name,
    amount: amount,
    mode: mode
  };
  return submission;
}

// Function to calculate the resulting date and create a submission object
function calculateDate() {
  // Get the initial date, the number of days to add, the name, the amount, and the mode of payment from the form
  var initialDate = document.getElementById("date").value;
  var daysToAdd = document.getElementById("days").value;
  var name = document.getElementById("name").value;
  var amount = document.getElementById("amount").value;
  var mode = document.getElementById("mode").value;
  
  // Calculate the resulting date by adding the specified number of days to the initial date
  var resultDate = new Date(initialDate);
  resultDate.setDate(resultDate.getDate() + parseInt(daysToAdd));
  
  // Create a submission object with the initial date, the resulting date, the name, the amount, and the mode of payment
  var submission = createSubmission(initialDate, resultDate, name, amount, mode);
  
  // Add the submission object to the submissions array
  submissions.push(submission);
  
  // Display the resulting date
  document.getElementById("result").innerHTML = "Resulting date: " + resultDate.toDateString();
}

// Call the calculateDate function when the form is submitted
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  calculateDate();
});


</script>
