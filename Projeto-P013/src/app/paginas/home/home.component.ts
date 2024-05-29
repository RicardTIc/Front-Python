import { Component, OnInit } from '@angular/core';

import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http : WebService) { }

  ngOnInit() {

    
  }

}
