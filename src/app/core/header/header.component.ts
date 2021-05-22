import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuScroll: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll')
    handleScroll(): void {
      const windowScroll = window.pageYOffset;
      if(windowScroll >= 150){
        this.menuScroll = true;
      } else {
        this.menuScroll = false;
      }
  }

}
