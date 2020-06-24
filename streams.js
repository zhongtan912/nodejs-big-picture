//stream to read file from disk abd send to web server

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Encoding', 'gzip');
    fs.createReadStream(path.join(__dirname, 'lorem.txt'))
        .pipe(zlib.createGzip())
        .pipe(res);
})