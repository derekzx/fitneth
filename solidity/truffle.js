module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  networks: {
    development: {
      host: "localhost",
      //run ganache-cli
      port: 8545,
      network_id: "*"
    }
  }

};
