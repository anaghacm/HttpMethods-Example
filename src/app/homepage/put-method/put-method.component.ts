import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-put-method',
  templateUrl: './put-method.component.html',
  styleUrls: ['./put-method.component.scss']
})
export class PutMethodComponent implements OnInit {

  public username!:string;
  public email!:string;
  public phone!:string;
  public responseMessage!:any;

  constructor(private _api:ApiService) { }

  ngOnInit(): void {
  }

  putData(){
    let userDEtails={
      name:this.username,
      email:this.email,
      phone:this.phone
    }

    this._api.putData(userDEtails).subscribe((response:any)=>{
      this.responseMessage=response;
    })
  }
}
