import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageNo = 1;
  pageSize = 10;
  total = 50;

  getDataList(pageNo){
    this.pageNo = pageNo;
  }
}
