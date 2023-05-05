import { Component, OnInit } from '@angular/core';
import * as CryptoJs from 'crypto-js';
@Component({
  selector: 'app-encdec',
  templateUrl: './encdec.component.html',
  styleUrls: ['./encdec.component.scss']
})
export class EncdecComponent implements OnInit{

  SECRET:string = "bye";

  res:string = 'Result';
  enc:string ='';
  dec:string ='';

  constructor(){}

  ngOnInit(): void {
    
      
  }

  encrypt():void{
    const msg = JSON.stringify(this.enc);
    this.res =  CryptoJs.DES.encrypt(msg, this.SECRET).toString();
  }

  decrypt():void{
    const dec =  CryptoJs.DES.decrypt(this.dec, this.SECRET).toString(CryptoJs.enc.Utf8);
    this.res = JSON.parse(dec);
  }


}
