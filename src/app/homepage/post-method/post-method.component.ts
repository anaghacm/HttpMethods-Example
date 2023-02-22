import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post-method',
  templateUrl: './post-method.component.html',
  styleUrls: ['./post-method.component.scss']
})
export class PostMethodComponent implements OnInit {

  public username!:string;
  public email!:string;
  public phone!:string;
  public responseMessage!:any;

  constructor(private _api:ApiService) { }

  ngOnInit(): void {
  }

  postData(){
    let userDEtails={
      name:this.username,
      email:this.email,
      phone:this.phone
    }

    this._api.postData(userDEtails).subscribe((response:any)=>{
      this.responseMessage=response;
    })
  }
}
