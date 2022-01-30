import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document. getElementsByClassName('navbar-links')[0];

   
    toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
    });
  }

}
