import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search:boolean = false;
  toggle:boolean = false;
  
  constructor() { }
  


  ngOnInit(): void {
  }

  showSearch(): void{
    this.search = !this.search;
  }
  showToggle(): void{
    this.toggle = !this.toggle;
  }
}
