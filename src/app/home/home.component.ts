import { Component, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }




  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    this.router.navigate(['/insurance']);
  }

}
