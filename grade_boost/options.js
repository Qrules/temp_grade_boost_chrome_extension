function save_options() {
  var low = document.getElementById('l').value;
  low = (low >= 0 && low <= 100)?low:-1;
  configBool = 0;
  chrome.storage.sync.set({
  configured: configBool  
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

// Restores score stored in chrome.storage.
function restore_options() {
  // Use default value color of 100.
  chrome.storage.sync.get({
    lowest: 100
  }, function(items) {
    document.getElementById('save').value = items.lowest;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
