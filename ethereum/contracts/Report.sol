pragma solidity ^0.4.17;
pragma experimental ABIEncoderV2;

contract Report {
    struct DeathReport {
        address recipient;
        string firstName;
        string lastName;
        string sin;
        string dateOfDeath;
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

    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    } 


    function getReports() public view returns (DeathReport[]) {
        return reports;
    }


    function createReport(address recipient, string firstName, string lastName, string sin, string dateOfDeath, string city, string postalCode, string country, string province, string medicalCauseOfDeath, string meansOfDeath) {
        DeathReport memory newReport = DeathReport ({
            recipient: recipient,
            firstName: firstName,
            lastName: lastName,
            sin: sin,
            dateOfDeath: dateOfDeath,
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