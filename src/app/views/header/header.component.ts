import { Component, OnInit, ViewChild } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // menu = [] as Menu[];
  // @ViewChild('menuBurguer') menuBurguer;
  // @ViewChild('navList') navList;
  // @ViewChild('navLinks') navLinks;
  // activeClass: string;

  // constructor(menuBurguer: any, navList: any, navLinks: any) {
  //   this.menuBurguer = document.querySelector(menuBurguer);
  //   this.navList = document.querySelector(navList);
  //   this.navLinks = document.querySelectorAll(navLinks);
  //   this.activeClass = "active";

  //   this.handleClick = this.handleClick.bind(this);
  // }


  ngOnInit(): void {
    // this.menuBurguer.init();

  }

  // animateLinks() {
  //   this.navLinks.forEach((link, index) => {
  //     console.log(index / 7 + 0.3);
  //     link.style.animation
  //       ? (link.style.animation = "")
  //       : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s')
  //   })
  // }
  // handleClick() {
  //   console.log(this);
  //   this.navList.classList.toggle(this.activeClass);
  //   this.menuBurguer.classList.toggle(this.activeClass);
  //   this.animateLinks();
  // }
  //   this.activeClass.contains('active')
  //   this.currentTarget.setAttribute('aria-expanded', active);
  //   if (active) {
  //     this.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  //   } else {
  //     this.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  //   }    

  // addClickEvent() {
  //   this.menuBurguer.addEventListener("click", this.handleClick);
  // }
  // init() {
  //   if (this.menuBurguer) {
  //     this.addClickEvent();
  //   }
  //   return this;
  // }
}




