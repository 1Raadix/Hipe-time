function Raad_updateDateTime() {
  const now = new Date();
  
  // Update Date
  const dateOptions = { month: 'long', day: '2-digit', year: 'numeric' };
  const dateStr = now.toLocaleDateString('en-US', dateOptions).toUpperCase();
  document.getElementById('Raad-date').textContent = dateStr;

  // Update Time
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
  const timeStr = now.toLocaleTimeString('en-US', timeOptions);
  document.getElementById('Raad-time').textContent = timeStr;
}

if (!document.getElementById('Raad-date')) {
  console.error("DeeP UI Error: Missing elements!");
} else {
  setInterval(Raad_updateDateTime, 1000);
  Raad_updateDateTime();
}
