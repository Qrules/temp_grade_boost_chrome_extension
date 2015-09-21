function save_options() {
  var low = 100.0;
  var temp = document.getElementById('l').value;
  if (temp >= 0 && temp <= 100)
    low = temp;
  chrome.storage.sync.set({
    lowest: low
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options Saved!';
    setTimeout(function() {
      status.textContent = '';
    }, 5000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
document.getElementById('save').addEventListener('click',
    save_options);
