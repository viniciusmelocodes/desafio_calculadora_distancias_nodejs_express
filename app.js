const express = require("express")
const path = require('path')

const app = express();

__dirname = path.resolve(path.dirname(''));

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/css', express.static(path.join(__dirname, 'node_modules/font-awesome/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use('/fonts', express.static(path.join(__dirname, 'node_modules/font-awesome/fonts')))
app.use('/icon', express.static(path.join(__dirname, 'views/icon')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.listen(5000, () => {
  console.log('Listening on port ' + 5000);
});