/**
 * Toolkit JavaScript
 */


function ifradioCheck() {
  if (document.getElementById('where-do-you-live-1').checked) {
      document.getElementById('bath-ct').style.display = 'block';
  }
  else document.getElementById('bath-ct').style.display = 'none';

}