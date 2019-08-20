import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  goToNextStep(){
    this.router.navigate(['new-suite/location'])
  }

}
