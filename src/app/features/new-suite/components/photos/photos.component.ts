import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/shared/models/file-item.class';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { NewSuiteFourthStepAction } from 'src/app/redux/new-suite/actions/new-suite.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  estaSobreElemento = false;
  files: FileItem[] = [];
  
  constructor(
    private store:Store<AppState>,
    private router:Router
  ) { }

  loadPictures() {
    // this._cargaImagenes.cargarImagenesFirebase( this.files );
    console.log(this.files);
    
  }

  ngOnInit() {
  }

  delete(index:number){
    this.files.splice(index,1);
  }

  goToNextStep() {
    this.store.dispatch(new NewSuiteFourthStepAction({photos: this.files}));
    this.router.navigate(['new-suite/resume'])
  }

  goToBackStep() {

    this.router.navigate(['new-suite/location']);
  }
}
