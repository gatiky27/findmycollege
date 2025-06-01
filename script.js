
document.getElementById('college-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const score = parseInt(document.getElementById('score').value);

  fetch('data/colleges.json')
    .then(res => res.json())
    .then(data => {
      const results = data.filter(c => score <= c.cutoff);
      const resultDiv = document.getElementById('results');
      if(results.length === 0) {
        resultDiv.innerHTML = '<p>No colleges found for this score.</p>';
      } else {
        resultDiv.innerHTML = '<h2>Eligible Colleges:</h2>' +
          results.map(c => `<p>${c.name} - ${c.location}</p>`).join('');
      }
    })
    .catch(err => {
      console.error("Error loading college data:", err);
      document.getElementById('results').innerHTML = '<p>Error loading data.</p>';
    });
});
