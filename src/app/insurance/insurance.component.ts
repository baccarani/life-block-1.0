import { Component, OnInit } from '@angular/core';
import web3 from '../web3';
import policy from '../policy';
import report from '../report';
import { BlockchainService } from '../blockchain.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  public beneficiaries = [];
  public reportStruct;
  public manager;
  public value;
  public balance;
  public isLoading = false;
  public isSuccess = false;

 
  constructor(private blockchainService: BlockchainService) { }

  async ngOnInit() {
    this.blockchainService.sharedMessage.subscribe(test => console.log(test));
    
    this.balance = await web3.eth.getBalance(policy.options.address);
    this.balance = web3.utils.fromWei(this.balance, 'ether');
    console.log('Function getBalance() works, balance = ' + this.balance);
    
  }


  async ngAfterContentInit() {

    this.manager = await report.methods.manager().call();
    console.log('This contract is managed by ' + this.manager);

    this.beneficiaries = await policy.methods.getBeneficiaries().call();
    console.log('Function getBeneficiaries() = ' + this.beneficiaries);


    this.reportStruct = await report.methods.getReports().call();
    console.log(this.blockchainService.nextMessage(this.reportStruct));

    console.log(this.reportStruct);
    console.log(this.reportStruct.length);
    console.log(this.reportStruct[0].recipient);


    
    this.balance = await web3.eth.getBalance(policy.options.address);
    this.balance = web3.utils.fromWei(this.balance, 'ether');
    console.log('Function getBalance() works, balance = ' + this.balance);



    



     



      // if (this.reportStruct[0].meansOfDeath != 'Undetermined') {
      //   console.log('if statement, payout')

      // } else {
      //   console.log('else statement working, do not pay out')
      // }
      
    }


    async onEnter(form: NgForm) {


      this.isLoading = true
      await policy.methods.enter().send({
        from: this.manager,
        value: web3.utils.toWei(form.value.amount, 'ether')
      });


      this.balance = await web3.eth.getBalance(policy.options.address);
      this.balance = web3.utils.fromWei(this.balance, 'ether');


      console.log('Function onEnter() complete, amount entered is = ' + web3.utils.toWei(form.value.amount, 'ether'));
      
      
      this.isLoading = false
      this.isSuccess = true

      setTimeout(function(){
        console.log("waited for: " + i + " seconds");
        repeat();
      }, 1000);





    }

    async payBeneficiaries() {
      this.isLoading = true

      for (let index = 0; index < 1; index++) {
        console.log(index)
       if (this.reportStruct[index].meansOfDeath != 'Undetermined') {
          console.log('if statement working')
          await policy.methods.payBeneficiaries().send({from : this.manager});
 
 
        } else {
          console.log('else statement working')
        }
       
      }

      this.isLoading = false



    }


    
    
  }




