import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private _registerUrl = "http://user.ulake.sontg.net/api/user";
  private _loginUrl = "http://user.ulake.sontg.net/api/auth/login";

  private _searchFileUrl = "http://folder.ulake.sontg.net/api/file/search"
  private _searchUserUrl = "http://user.ulake.sontg.net/api/user/search"


  
  private options = new HttpHeaders(
    {
      'Content-type':'application/json',
      'Accept':'*/*'
    }
  )
    private options_search = {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      'Accept':'*/*'
    }
  
  
  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user, {headers: this.options})
  }

  loginUser(user:any) {
    return this.http.post<any>(this._loginUrl, user, {headers: this.options})
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
    
  }

  //if token exist, return true
  loggedIn() {
    return !!localStorage.getItem('token')
      
  }

  searchUser(search_data:any){
    return this.http.post<any>(this._searchUserUrl, search_data, {headers: this.options_search})
  }

  searchFile(search_data:any){
    return this.http.post<any>(this._searchFileUrl, search_data, {headers: this.options_search})

  }
  
}
