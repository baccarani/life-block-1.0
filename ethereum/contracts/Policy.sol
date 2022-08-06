pragma solidity ^0.4.17;

contract Policy {
    address public policyHolder;
    address[] public beneficiaries;
    
    function Policy() public {
        policyHolder = msg.sender;
        beneficiaries.push(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);
        beneficiaries.push(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2);
    }
    
    function enter() public payable {
        require(msg.value > .01 ether);
    }
    
    function payBeneficiaries() public restricted {
        for (uint i = 0; i < beneficiaries.length; i++) {
            beneficiaries[i].transfer(this.balance / beneficiaries.length);
        }
    }
    
    modifier restricted() {
        require(msg.sender == policyHolder);
        _;
    }
    
    function getBeneficiaries() public view returns (address[]) {
        return beneficiaries;
    }
}   