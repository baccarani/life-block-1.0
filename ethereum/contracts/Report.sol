pragma solidity ^0.4.17;

contract Report {
    struct CoronerReport {
        string name;
        address recipient;
    }
    
    
    CoronerReport[] public reports;
    address public manager;
    address[] public players;
    
    function Report() public {
        manager = msg.sender;
    }
    
    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
    
    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }
    
    function pickWinner() public restricted {
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function getPlayers() public view returns (address[]) {
        return players;
    }

    function createReport(string name, address recipient) {
        CoronerReport memory newReport = CoronerReport ({
            name: name,
            recipient: recipient
        });

        reports.push(newReport);
    }
}   