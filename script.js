document.getElementById('college-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const score = parseInt(document.getElementById('score').value);
  fetch('data/colleges.json')
    .then(res => res.json())
    .then(data => {
      const results = data.filter(c => score <= c.cutoff);
      const resultDiv = document.getElementById('results');
      resultDiv.innerHTML = '<h2>Eligible Colleges:</h2>' +
        results.map(c => `<p>${c.name} - ${c.location}</p>`).join('');
    });
});