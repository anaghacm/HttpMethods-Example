import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delete-method',
  templateUrl: './delete-method.component.html',
  styleUrls: ['./delete-method.component.scss']
})
export class DeleteMethodComponent implements OnInit {

  public id!:number;
  public status:string='No status available';

  constructor(private _api:ApiService) { }

  ngOnInit(): void {
  }

  deleteData(){
    let userDEtails={
      id:this.id
    }

    this._api.deleteData(userDEtails).subscribe((response:any)=>{
      this.status = 'Delete successful';
    })
  }
}
