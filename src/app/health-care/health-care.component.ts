import { Component, OnInit } from '@angular/core';
import web3 from '../web3';
import report from '../report';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-health-care',
  templateUrl: './health-care.component.html',
  styleUrls: ['./health-care.component.css']
})
export class HealthCareComponent implements OnInit {

  public manager;
  public players;
  public balance;
  public reports;
  public reportCount;
  public reportList;
  public reportStruct;
  

    


  constructor() { }

  ngOnInit(): void {

    console.log('Web3 version = ' + web3.version);

    web3.eth.getAccounts().then(console.log);

  }

  async ngAfterContentInit() {
    this.manager = await report.methods.manager().call();
    console.log('This contract is managed by ' + this.manager);

    this.players = await report.methods.getPlayers().call();
    console.log('Function getPlayers() = ' + this.players)

    this.balance = await web3.eth.getBalance(report.options.address);
    this.balance = web3.utils.fromWei(this.balance, 'ether')
    console.log('Function getBalance() = ' + this.balance)

    console.log('Function getReportsCount() to display list array of  Reports = ' + this.reportList);

    
    this.reportStruct = await report.methods.getReports().call();
    console.log('Report struct = ' + this.reportStruct);

  }



  onSubmit = async (form: NgForm) => { 
    event.preventDefault();
    console.log(form);


    // import factory campaign

    const accounts = await web3.eth.getAccounts();
    console.log(accounts); 



    // await report.methods.createRequest()

    console.log(form.value.name)



    // return reports 

    this.reportCount =  await report.methods.getReportsCount().call();

    this.reportList =  Promise.all(
      Array(parseInt(this.reportCount))
        .fill(0, this.reportCount)
        .map((element, index) => {
          return report.methods.requests(index).call();
        })
    );

    this.reportCount =  await report.methods.getReportsCount().call();

    // prints the name and address for each report in the list
    for (let i = 0; i < this.reportList.length; i++) {
      console.log('name: ' + this.reportList[i].name);
      console.log('address: ' + this.reportList[i].address);
    }



    this.reports = await report.methods.createReport(form.value.name, this.manager).send({ from: this.manager });
    console.log('Function createReport is called and = ' + this.reports)
    console.log('Function getReportsCount() works, Type reportCount = ' + this.reportCount);



    
    this.reportStruct = await report.methods.getReports().call();
    console.log('Report struct = ' + this.reportStruct);



    



  }

}
