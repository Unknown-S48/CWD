document.addEventListener('DOMContentLoaded', function () {
    fetch('get_files.php')
        .then(response => response.json())
        .then(data => {
            const fileList = document.getElementById('fileList');
            data.forEach(file => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <input type="checkbox" id="file${file.id}" name="files[]" value="${file.id}">
                    <label for="file${file.id}">${file.filename} (${file.category})</label>
                `;
                fileList.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
});