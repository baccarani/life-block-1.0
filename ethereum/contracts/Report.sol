pragma solidity ^0.4.17;
pragma experimental ABIEncoderV2;

contract Report {
    struct DeathReport {
        address recipient;
        string name;
        string dateOfDeath;
        string timeOfDeath;
        string placeOfDeath;
        string city;
        string postalCode;
        string country;
        string province;
        string medicalCauseOfDeath;
        string meansOfDeath;
    }
    
    
    DeathReport[] public reports;
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

    function getReports() public view returns (DeathReport[]) {
        return reports;
    }

    function createReport(address recipient, string name, string dateOfDeath, string timeOfDeath, string placeOfDeath, string city, string postalCode, string country, string province, string medicalCauseOfDeath, string meansOfDeath) {
        DeathReport memory newReport = DeathReport ({
            recipient: recipient,
            name: name,
            dateOfDeath: dateOfDeath,
            timeOfDeath: timeOfDeath,
            placeOfDeath: placeOfDeath,
            city: city,
            postalCode: postalCode,
            country: country,
            province: province,
            medicalCauseOfDeath: medicalCauseOfDeath,
            meansOfDeath: meansOfDeath
        });

        reports.push(newReport);
    }

    function getReportsCount() public view returns (uint) {
        return reports.length;
    }
}   