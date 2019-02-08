import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private toggleText:boolean;

  constructor() { }

  ngOnInit() {
  }

  public toggle(){
    this.toggleText=!this.toggleText;
  }

}
