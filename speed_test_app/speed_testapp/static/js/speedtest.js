document.getElementById('run-test').addEventListener('click', function() {
    fetch('/speedtest/run-speedtest/')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Error running speed test: ' + data.error);
            } else {
                document.getElementById('download').innerText = 'Download Speed: ' + data.download_speed;
                document.getElementById('upload').innerText = 'Upload Speed: ' + data.upload_speed;
                document.getElementById('ping').innerText = 'Ping: ' + data.ping;
                document.getElementById('results').style.display = 'block';
            }
        })
        .catch(error => console.error('Error:', error));
});
