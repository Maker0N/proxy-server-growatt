const express = require("express")
const config = require('config')
const path = require('path')
const cors = require("cors");
const chalk = require("chalk")
const routes = require('./routes')

const server = express();
const PORT = config.get('port') || 8080

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }))
server.use("/api/v1", routes)

if (process.env.NODE_ENV === 'production') {
  // server.use('/', express.static(path.join(__dirname, 'build')))
  // const indexPath = path.join(__dirname, 'build', 'index.html')
  // server.get('*', (req, res) => {
  //   res.sendFile(indexPath)
  // })
  console.log(chalk.red('Production'))
} else {
  console.log(chalk.blue('Development'))
}

async function start() {
  try {
    server.listen(PORT, () =>
      console.log(chalk.green.inverse(`Server start on port: ${PORT}...`))
    );
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
}

start()
