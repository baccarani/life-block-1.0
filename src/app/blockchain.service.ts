import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import web3 from './web3';
import report from './report';
import policy from './policy';
import { NgForm } from '@angular/forms';
import detectEthereumProvider from '@metamask/detect-provider';


@Injectable()
export class BlockchainService {

  private subject = new BehaviorSubject('First Message');
  sharedMessage = this.subject.asObservable();




  public manager;
  public players;
  public balance;
  public reports;
  public reportCount;
  public reportList;
  public reportStruct = this.subject.asObservable();
  





  constructor() { }







  


  nextMessage(reportStruct) {
    this.subject.next(reportStruct)
  }










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


    this.reportCount =  await report.methods.getReportsCount().call();
    console.log('Function getReportsCount() works, Type reportCount = ' + this.reportCount);

    
    this.reportStruct = await report.methods.getReports().call();
    console.log('Report struct = ' + this.reportStruct);
    console.log('Report struct one whole item = ' + this.reportStruct[0]);
    console.log('Report struct name = ' + this.reportStruct[0].name);


    console.log('Function createReport is called and = ' + this.reports);



    
  }





  onSubmit = async (form: NgForm) => { 
    event.preventDefault();
    console.log(form);


    // import factory campaign

    // const accounts = await web3.eth.getAccounts();
    // console.log(accounts); 



    // await report.methods.createRequest()

    // console.log(form.value.name)



    // return reports 


    this.reportList =  Promise.all(
      Array(parseInt(this.reportCount))
        .fill(0, this.reportCount)
        .map((element, index) => {
          return report.methods.requests(index).call();
        })
    );

    this.reportCount =  await report.methods.getReportsCount().call();

    // prints the name and address for each report in the list
    // for (let i = 0; i < this.reportStruct.length; i++) {
    //  console.log('name: ' + this.reportStruct[i].name);
    //  console.log('address: ' + this.reportStruct[i].address);
    // }



    this.reports = await report.methods.createReport(form.value.name, this.manager).send({ from: this.manager });
    console.log('Function createReport is called and = ' + this.reports)



    
    this.reportStruct = await report.methods.getReports().call();
    console.log('Function getReportsCount() works, Type reportCount = ' + this.reportCount);
    console.log('Report struct = ' + this.reportStruct);
    console.log('Report struct name = ' + this.reportStruct[0].name);



    



  }











  async getReportStruct() {
    this.reportStruct = await report.methods.getReports().call();
  }



  async payBeneficiaries(lastArrayItem) {
    
     if (this.reportStruct[lastArrayItem].meansOfDeaths != 'Undetermined') {
        await policy.methods.payBeneficiaries().send({from : this.manager});
        console.log('Beneficiaries paid-out');


      } else {
        console.log('Beneficiaries not paid-out')
      }
    
  }




  public signInWithMetaMask() {
    let ethereum: any;

  return from(detectEthereumProvider()).pipe()


  }




}
