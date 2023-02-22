import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  postData(userDetails:any){
    return this._http.post('https://jsonplaceholder.typicode.com/posts',userDetails);
  }

  putData(userDetails:any){
    return this._http.put('https://jsonplaceholder.typicode.com/posts/1',userDetails);
  }

  patchData(userDetails:any){
    return this._http.patch('https://jsonplaceholder.typicode.com/posts/1',userDetails);
  }

  deleteData(userDetails:any){
    return this._http.delete('https://jsonplaceholder.typicode.com/posts/1',userDetails);
  }
}
