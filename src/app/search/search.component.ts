import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SearchForm } from './models/search-form';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  
  public searchData:any = {}


  
  

  search(){

    let search_FileData:any  = {
      keyword: this.searchData.filename,

    }
    let search_UserData:any  = {


      keywords: [this.searchData.user]
    }
    console.log(search_UserData)

    this.authService.searchFile(search_FileData).subscribe(data => console.log(data))

    this.authService.searchUser(search_UserData).subscribe(data => console.log(data))

  }
  
  

  isLogged(){
    // return this.authService.loggedIn();
    return true;
  }
}
