import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileItem } from '../../models/file-item.class';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.scss']
})
export class PhotoPreviewComponent implements OnInit {

  @Input() photo: FileItem 
  @Output() deletePhoto: EventEmitter<number> = new EventEmitter(); 


  constructor() { }

  ngOnInit() {
  }

  delete(index:number){
    this.deletePhoto.emit(index);
  }
}
