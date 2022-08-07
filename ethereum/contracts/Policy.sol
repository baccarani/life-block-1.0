pragma solidity ^0.4.17;

contract Policy {
    address public policyHolder;
    address[] public beneficiaries;
    
    function Policy() public {
        policyHolder = msg.sender;
        beneficiaries.push(0x519b72B7E5658dD236E1ed55a687D9f1118d1a60);
        beneficiaries.push(0x832D3Ae442ef5f027B0b15e0e9203Bc40CA89f24);
    }
    
    function enter() public payable {
        require(msg.value > .01 ether);
    }
    
    function payBeneficiaries() public restricted {
        beneficiaries[0].transfer(this.balance / 2);
        beneficiaries[1].transfer(this.balance);
    }
    
    modifier restricted() {
        require(msg.sender == policyHolder);
        _;
    }
    
    function getBeneficiaries() public view returns (address[]) {
        return beneficiaries;
    }

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}   