function save_options() {
  var low = document.getElementById('l').value;
  var onBool = document.getElementById('myonoffswitch').checked;
  low = (low >= 0 && low <= 100)?low:-1;
  chrome.storage.sync.set({
    configured: onBool, 
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

 //Restores score stored in chrome.storage.
function restore_options() {
  // Use default grade minimum of 100.
  chrome.storage.sync.get({
    lowest: 100,
    configured: false
  }, function(items) {
    document.getElementById('l').value = items.lowest;
    document.getElementById('myonoffswitch').checked = items.configured;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

