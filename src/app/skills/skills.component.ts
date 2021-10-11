import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  techskills:Array<string>=["UI/UX Design","Responsive Design","Web Design" , "Mobile App Design"]
  
  constructor() { }

  ngOnInit(): void {
  }

}
