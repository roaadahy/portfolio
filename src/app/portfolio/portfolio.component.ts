import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: Array<any> = [
    { name: 'Web Design'},
    { name: 'Mobile Design'},
    { name: 'Logo Design'},
    { name: 'Web Application Development'},
    { name: 'Mobile Application Development'},
    { name: 'PWA Development'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
