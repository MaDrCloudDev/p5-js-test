const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

    const startCmd = process.platform === 'win32' ? 'start' :
        process.platform === 'darwin' ? 'open' :
            'xdg-open';
    exec(`${startCmd} http://localhost:${PORT}`);
});
