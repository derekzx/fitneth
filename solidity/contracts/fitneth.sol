pragma solidity 0.4.19;

contract Fitneth {
    /* Constructor function, where owner and outcomes are set */
    function Fitneth() public {
      owner = msg.sender;
    }

    function() public payable {
        revert();
    }

    struct Promise {
        //GPS address of each gym
        string gymLocation;
        bool attendance;
    }

    modifier ownerOnly() {
      require(owner == msg.sender);
      _;
    }

    modifier oracleOnly() {
      require(oracle == msg.sender);
      _;
    }

    modifier singleGPSLog() {
      require(promises[msg.sender].attendance == false);
      _;
    }

    modifier constantBetSize() {
      require(msg.value == 20);
      _;
    }

    address public owner;
    address public oracle;
    uint public numWinners = 0;
    uint public numPromisers = 0;
    uint public totalWinnings = 0;
    address[] promisers;
    address[] winners;

    /*mainnet address is 0xe109ecb193841af9da3110c80fdd365d1c23be2a */
    //address constant scheduler = SchedulerAPI(0xb8da699d7fb01289d4ef718a55c3174971092bef);
    // uint public blockNumber;
    // uint public firstPromiseBlock;
    
    mapping (address => Promise) promises;
    mapping (address => uint) winnings;

    function chooseOracle(address _oracle) public ownerOnly() returns (address) {
        oracle = _oracle;
        return oracle;
    }

    //Making promise to exercise. Can only bet constant size of 20.
    function makePromise(string _gpsLocation) public constantBetSize() payable {
        if (promises[msg.sender].attendance) {
            revert();
        }
        Promise memory newPromise = Promise(_gpsLocation, false);
        promises[msg.sender] = newPromise;
        totalWinnings += msg.value;
        //Below code is to help cleanup every week and views
        promisers[numPromisers] = msg.sender;
        numPromisers++;
    }

    //Logging exercise
    function fulfilPromise(string _gpsLocation) singleGPSLog() public returns (bool) {
        if (keccak256(_gpsLocation) == keccak256(promises[msg.sender].gymLocation)) {
            winners[numWinners] = msg.sender;
            numWinners++;
            promises[msg.sender].attendance = true;

        }
            
        return promises[msg.sender].attendance;   
    }

    //The oracle calls this function once a week
    function timeIsUp() public oracleOnly() returns (uint) {
        uint eachWinning = totalWinnings / winners.length;
        for (uint i = 0; i < winners.length; i++) {
            winnings[winners[i]] += eachWinning;
        }
        contractReset();
        return eachWinning;
    }

    //Withdraw winnings
    function withdraw(uint withdrawAmount) public returns (uint) {
        if (withdrawAmount <= winnings[msg.sender]) {
            winnings[msg.sender] -= withdrawAmount;
            msg.sender.transfer(withdrawAmount);
        }
        return winnings[msg.sender];
    }

    //Allows users to check the location they promised to exercise
    function checkGymLocation() public view returns (string) {
        return promises[msg.sender].gymLocation;
    }

    //Allows users to check whether they have fulfilled their promise yet
    function checkOwnPromiseStatus() public view returns (bool) {
        return promises[msg.sender].attendance;
    }

    //Allows users to see how many people have fulfilled their promise
    function checkAllPromiseStatus() public view returns (uint, uint) {
        return (numWinners, numPromisers);
    }
    
    //Allows users to check winnings
    function checkWinnings() public view returns(uint) {
        return winnings[msg.sender];
    }

    function contractReset() public oracleOnly() {
        for (uint i = 0; i < promisers.length; i++) {
            delete promises[promisers[i]];
            delete promisers[i];
        }
        numWinners = 0;
        totalWinnings = 0;
        numPromisers = 0;
    }
}
