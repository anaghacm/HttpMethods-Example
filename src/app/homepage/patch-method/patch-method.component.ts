import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-patch-method',
  templateUrl: './patch-method.component.html',
  styleUrls: ['./patch-method.component.scss']
})
export class PatchMethodComponent implements OnInit {

  public id!:number;
  public username!:string;
  public email!:string;
  public phone!:string;
  public responseMessage!:any;

  constructor(private _api:ApiService) { }

  ngOnInit(): void {
  }

  patchData(){
    let userDEtails={
      id:this.id,
      name:this.username,
      email:this.email,
      phone:this.phone
    }

    this._api.patchData(userDEtails).subscribe((response:any)=>{
      this.responseMessage=response;
    })
  }

}
