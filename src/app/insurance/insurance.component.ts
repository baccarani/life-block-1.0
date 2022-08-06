import { Component, OnInit } from '@angular/core';
import web3 from '../web3';
import policy from '../policy';
import { BlockchainService } from '../blockchain.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  public beneficiaries;

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit(): void {
    this.blockchainService.sharedMessage.subscribe(reportStruct => console.log(reportStruct));
  }


  async ngAfterContentInit() {

    this.beneficiaries = await policy.methods.getBeneficiaries().call();
    console.log('Function getBeneficiaries() = ' + this.beneficiaries)
  }

}
