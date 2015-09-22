function save_options() {
  var low = document.getElementById('l').value;
  low = (low >= 0 && low <= 100)?low:-1;
  chrome.storage.sync.set({
    lowest: low
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = (low!=-1)?'Options Saved: ' + low + '!':'Error, incorrect value!';
    setTimeout(function() {
      status.textContent = '';
    }, 5000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
document.getElementById('save').addEventListener('click',
    save_options);
