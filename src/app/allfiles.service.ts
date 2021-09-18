import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllfilesService {

  private baseUrl = "http://localhost:8080/getfiles"
  constructor(private http:HttpClient) { }

  getAllFiles(): Observable<File[]>{
    return this.http.get<File[]>(this.baseUrl);
  }
  downloadFile(data:any): Observable<any>{
    //call spring boot service
    const REQUEST_PARAMS = new HttpParams().set('fileName', data.fileName);
    const REQUEST_URI = 'http://localhost:8080/download';

    return this.http.get(REQUEST_URI,{
      params: REQUEST_PARAMS,
      responseType:'arraybuffer'
    })
  }
}
