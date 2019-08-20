import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  goToNextStep(){
    this.router.navigate(['new-suite/address'])
  }
}
