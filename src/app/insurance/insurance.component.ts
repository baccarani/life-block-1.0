import { Component, OnInit } from '@angular/core';
import web3 from '../web3';
import policy from '../policy';
import report from '../report';
import { BlockchainService } from '../blockchain.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  public beneficiaries;
  public reportStruct;

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit(): void {
    this.blockchainService.sharedMessage.subscribe(test => console.log(test));

    
  }


  async ngAfterContentInit() {

    this.beneficiaries = await policy.methods.getBeneficiaries().call();
    console.log('Function getBeneficiaries() = ' + this.beneficiaries);


    this.reportStruct = await report.methods.getReports().call();
    this.blockchainService.nextMessage(this.reportStruct);
  }


  

}
