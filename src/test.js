const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

await ssh.connect({
  host: HOST,
  username: USERNAME,
  privateKey: PRIVATE_KEY,
  passphrase: PASSPHRASE,
  port: PORT
});
