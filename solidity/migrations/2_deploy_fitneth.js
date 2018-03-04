//http://truffleframework.com/docs/getting_started/migrations
//artifacts.require returns a contract abstraction that we can use within the rest of the deployment script
//argument within .require can be a directory or a contract. This time is a directory
var fitneth = artifacts.require("./Fitneth");

//Exports script will require object deployer
//If accounts are required we can add other objects as well (eg. function(deployer))
module.exports = function(deployer) {

    //takes in input, needs to be in order
    //If there are multiple inputs, type in (Greeter, "I am alive", input 2, input 3 etc.)
    deployer.deploy(fitneth);
}