document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // Create appointment object
  const appointment = {
    name,
    email,
    date,
    time,
  };

  // Save to local storage (or you can send to a server)
  saveAppointment(appointment);

  // Display the appointment
  displayAppointments();

  // Clear the form
  document.getElementById('bookingForm').reset();
});

function saveAppointment(appointment) {
  let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  appointments.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));
}

function displayAppointments() {
  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  const appointmentsList = document.getElementById('appointmentsList');
  appointmentsList.innerHTML = ''; // Clear the list

  appointments.forEach((appointment, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${appointment.name}</strong><br>
      ${appointment.email}<br>
      ${appointment.date} at ${appointment.time}
    `;
    appointmentsList.appendChild(li);
  });
}

// Display appointments when the page loads
displayAppointments();
