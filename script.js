document.getElementById('fileInput').addEventListener('change', function() {
    var count = this.files.length;
    document.getElementById('count').innerText = count;
});

document.getElementById('writeBtn').addEventListener('click', function() {
    // Implemente a lógica para escrever em um arquivo usando o Native File System API
});
