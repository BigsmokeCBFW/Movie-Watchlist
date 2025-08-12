document.getElementById('search-movie').addEventListener('click', () => {
  console.log('test')
  fetch('http://www.omdbapi.com/?s=bahubali&apikey=61a7abae')
    .then(res => res.json())
      .then(data => {
        console.log(data)
      })
})