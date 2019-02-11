import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/helper/helper';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private toggleText: boolean;

  public content: string;

  constructor(public helper: Helper) { }

  ngOnInit() {
  }

  public toggle() {
    this.toggleText = !this.toggleText;
  }

  public getRequestExample() {
    this.helper.getRequest().subscribe((response) => {
      this.content = response.data;
    });
  }

  public putRequestExample() {
    this.helper.putRequest().subscribe((response) => {
      this.content = response;
    });
  }

  public postRequestExample() {
    this.helper.postRequest().subscribe((response) => {
      this.content = response;
    });
  }

  public deleteRequestExample() {
    this.helper.deleteRequest().subscribe((response) => {
      this.content = (response)?response.data:"Record Deleted";
    });
  }

  public clearResponse(){
    this.content=null;
  }

}
