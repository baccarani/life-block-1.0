import { Component, OnInit } from '@angular/core';
import web3 from '../web3';
import lottery from '../lottery';
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

  constructor() { }

  ngOnInit(): void {

    console.log('Web3 version = ' + web3.version);

    web3.eth.getAccounts().then(console.log);

  }

  async ngAfterContentInit() {
    this.manager = await lottery.methods.manager().call();
    console.log('This contract is managed by ' + this.manager);

    this.players = await lottery.methods.getPlayers().call();
    console.log(this.players)

    this.balance = await web3.eth.getBalance(lottery.options.address);
    this.balance = web3.utils.fromWei(this.balance, 'ether')
    console.log(this.balance)

  }



  onSubmit = async (form: NgForm) => {
    event.preventDefault();
    console.log(form);


    // import factory campaign

    const accounts = await web3.eth.getAccounts();
    console.log(accounts); 

    // await report.methods.createRequest()

  }

}
