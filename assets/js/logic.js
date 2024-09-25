document.getElementById('toggle-mode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

document.body.classList.contains('dark-mode') ?
    document.body.style.backgroundColor = '#333' :
    document.body.style.backgroundColor = '#f5f5f5';
