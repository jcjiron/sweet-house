import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/shared/models/file-item.class';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  estaSobreElemento = false;
  files: FileItem[] = [];
  
  constructor() { }

  loadPictures() {
    // this._cargaImagenes.cargarImagenesFirebase( this.files );
    console.log(this.files);
    
  }

  ngOnInit() {
  }

}
