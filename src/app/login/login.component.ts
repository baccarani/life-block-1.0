import { Component, OnInit } from '@angular/core';
import web3 from '../web3';
import detectEthereumProvider from '@metamask/detect-provider'
import { BlockchainService } from '../blockchain.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit(): void {
  }

  async onConnectMetamask() {
    console.log('Web3 version = ' + web3.version);
    web3.eth.getAccounts().then(console.log);

    const provider = await detectEthereumProvider()
    console.log("detectEthereumProvider() is working, and = " + provider);
    console.log(window.ethereum)

    await detectEthereumProvider() 


    // return await ethereum.request({ method: 'eth_requestAccounts' });



    


  }

}
