import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChanelService {

  constructor(private httpclient:HttpClient) { }


  getAllChanelDetails():Observable<any>{
    return this.httpclient.get<any>("http://localhost:8000/getChanel",{responseType: 'text' as 'json'});
   
  }

}
