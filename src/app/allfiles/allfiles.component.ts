import { Component, OnInit } from '@angular/core';
import { AllfilesService } from '../allfiles.service';
import { MIME_TYPES } from './mime_types';
import { saveAs } from 'file-saver';
//npm install @types/file-saver --save-dev
@Component({
  selector: 'app-allfiles',
  templateUrl: './allfiles.component.html',
  styleUrls: ['./allfiles.component.css']
})
export class AllfilesComponent implements OnInit {
  
  constructor(private allfilesservice:AllfilesService) { }

  ngOnInit(): void {
    this.listAllFiles();
  }

  allFiles!: File[];
  listAllFiles(){
    this.allfilesservice.getAllFiles().subscribe(
      data => this.allFiles = data
    )
  }
  downloadFile(fileName:any){
    const EXT = fileName.substr(fileName.lastIndexOf('.') + 1);
    return this.allfilesservice.downloadFile({ 'fileName': fileName})
    .subscribe(data => {
      //save file on client machine
      saveAs(new Blob([data], {type: MIME_TYPES[EXT]}), fileName);
    })
  }

}
