import { Component, OnInit } from '@angular/core';
import web3 from '../web3';
import policy from '../policy';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  public beneficiaries;

  constructor() { }

  ngOnInit(): void {
  }


  async ngAfterContentInit() {

    this.beneficiaries = await policy.methods.getBeneficiaries().call();
    console.log('Function getBeneficiaries() = ' + this.beneficiaries)
  }

}
