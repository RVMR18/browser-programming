// Format date nicely
function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString(); // e.g., "3/19/2026, 10:30:45 AM"
}

// Fetch message endpoint
function getMessage() {
  const output = document.getElementById("output");
  output.innerText = "Loading message...";

  fetch("http://localhost:3000/api/message")
    .then(response => response.json())
    .then(data => {
      output.innerHTML = 
        `<strong>Message:</strong> ${data.message}<br>
         <strong>Course:</strong> ${data.course}<br>
         <strong>Year:</strong> ${data.year}<br>
         <strong>Current Time:</strong> ${formatDate(data.time)}`;
    })
    .catch(error => {
      output.innerText = "Error fetching message!";
      console.error("Error:", error);
    });
}

// Fetch student endpoint
function getStudent() {
  const output = document.getElementById("output");
  output.innerText = "Loading student...";

  fetch("http://localhost:3000/api/student")
    .then(response => response.json())
    .then(data => {
      output.innerHTML = 
        `<strong>Name:</strong> ${data.name}<br>
         <strong>Role:</strong> ${data.role}`;
    })
    .catch(error => {
      output.innerText = "Error fetching student!";
      console.error("Error:", error);
    });
}