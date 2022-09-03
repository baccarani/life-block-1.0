import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  mobile = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    if (window.screen.width < 400) { // 768px portrait
      this.mobile = true;
    }
  }


}
