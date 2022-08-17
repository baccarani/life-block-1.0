import { Component, OnInit } from '@angular/core';
import web3 from '../web3';
import report from '../report';
import policy from '../policy';
import { NgForm } from '@angular/forms';
import { BlockchainService } from '../blockchain.service';


@Component({
  selector: 'app-health-care',
  templateUrl: './health-care.component.html',
  styleUrls: ['./health-care.component.css'],
  providers: [BlockchainService]
})
export class HealthCareComponent implements OnInit {

  public manager;
  public players;
  public balance;
  public reports;
  public reportCount;
  public reportList;
  public reportStruct;
  public medicalCauses = ['Heart Disease', 'Cancer', 'COVID-19', 'Accidents', 'Drowning'];
  public meansOfDeaths = ['Natural Cause', 'Accident', 'Homicide', 'Suicide', 'Undetermined'];
  public beneficiaries = [];
  public isLoading = false;
  public isSuccess = false;
  public isError = false;

  

    


  constructor(private blockchainService: BlockchainService) { }

  async ngOnInit() {

    // console.log('Web3 version = ' + web3.version);

    // web3.eth.getAccounts().then(console.log);

    // this.balance = await web3.eth.getBalance(policy.options.address);
    // this.balance = web3.utils.fromWei(this.balance, 'ether');
    // console.log('Function getBalance() works, balance = ' + this.balance);

    // this.beneficiaries = await policy.methods.getBeneficiaries().call();
    // console.log('Function getBeneficiaries() = ' + this.beneficiaries);

  }

  async ngAfterContentInit() {
    // this.manager = await report.methods.manager().call();
    // console.log('This contract is managed by = ' + this.manager);
    // console.log('This contract is managed by (BlockchainService) = ' + this.blockchainService.manager);

    // this.players = await report.methods.getPlayers().call();
    // console.log('Function getPlayers() = ' + this.players)


    // console.log('Function getReportsCount() to display list array of  Reports = ' + this.reportList);


    // this.reportCount =  await report.methods.getReportsCount().call();
    // console.log('Function getReportsCount() works, Type reportCount = ' + this.reportCount);

    
    // this.reportStruct = await report.methods.getReports().call();
    // this.blockchainService.nextMessage(this.reportStruct);
    // console.log('Report struct from BlockchainService = ' + this.blockchainService.getReportStruct()); 
    // console.log('Report struct = ' + this.reportStruct); 
    // console.log('Report struct one whole item = ' + this.reportStruct[0]);


    // console.log('Function createReport is called and = ' + this.reports);


    // this.reportCount =  await report.methods.getReportsCount().call();
    // console.log(this.reportCount - 1)
    // console.log('Report struct meansofDeath = ' + this.reportStruct[this.reportCount - 1].meansOfDeath);

    
    
  }



  onSubmit = async (form: NgForm) => { 
    this.isLoading = true

    console.log("onSubmit function called")
    console.log(form);


    // import factory campaign

    // const accounts = await web3.eth.getAccounts();
    // console.log(accounts); 



    // await report.methods.createRequest()

    // console.log(form.value.name)



    // return reports 


    // this.reportList =  Promise.all(
    //   Array(parseInt(this.reportCount))
    //     .fill(0, this.reportCount)
    //     .map((element, index) => {
    //       return report.methods.requests(index).call();
    //     })
    // );



    // prints the name and address for each report in the list
    // for (let i = 0; i < this.reportStruct.length; i++) {
    //   console.log('name: ' + this.reportStruct[i].name);
    //   console.log('address: ' + this.reportStruct[i].address);
    // }



    console.log(this.manager);
    console.log(form.value.name);
    console.log(form.value.dateOfDeath);
    console.log(form.value.timeOfDeath);
    console.log(form.value.placeOfDeath);
    console.log(form.value.city);
    console.log(form.value.postalCode);
    console.log(form.value.country);
    console.log(form.value.province);
    console.log(form.value.medicalCauseOfDeaths);
    console.log(form.value.meansOfDeaths);
    
    await report.methods.createReport(this.manager, form.value.name, form.value.dateOfDeath, form.value.timeOfDeath, form.value.placeOfDeath, form.value.city, form.value.postalCode, form.value.country, form.value.province, form.value.medicalCauseOfDeaths, form.value.meansOfDeaths).send({ from: this.manager });


    this.reportCount =  await report.methods.getReportsCount().call();
    console.log('Report Count = ' + this.reportCount)
    
    this.reportStruct = await report.methods.getReports().call();
    console.log('Function getReportsCount() works, Type reportCount = ' + this.reportCount);
    console.log('Report struct = ' + this.reportStruct);
    console.log('Report struct name = ' + this.reportStruct[this.reportCount - 1].meansOfDeath);

    for (let index = 0; index < this.reportStruct.length; index++) {
      console.log(this.reportStruct[index]);
    }




    
    if (this.reportStruct[this.reportCount - 1].meansOfDeath != 'Undetermined') {
      await policy.methods.payBeneficiaries().send({from : this.manager});
      console.log('Beneficiaries paid-out');
      this.balance = await web3.eth.getBalance(policy.options.address);
      this.balance = web3.utils.fromWei(this.balance, 'ether');
      console.log('Function getBalance() works, balance = ' + this.balance);
      
      this.isSuccess = true
      setTimeout(() => {
        this.isSuccess = false
      }, 10000);

    } else {
      console.log('Beneficiaries not paid-out')
      this.balance = await web3.eth.getBalance(policy.options.address);
      this.balance = web3.utils.fromWei(this.balance, 'ether');
      console.log('Function getBalance() works, balance = ' + this.balance);

      this.isError = true
      setTimeout(() => {
        this.isError = false
      }, 10000);
    }

    this.isLoading = false

  }


}
