import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private appService: AppService) { }



  ngOnInit() {
    this.appService.homeRoute().subscribe(
      (data: any) => {
        // Handle the response data here
        console.log(data);
      },
      (error: any) => {
        // Handle any errors that occurred
        console.error(error);
      }
    );
  }



  onClickButton() {
    this.appService.send().subscribe(
      (data: any) => {
        // Handle the response data here
        console.log(data);
      },
      (error: any) => {
        // Handle any errors that occurred
        console.error(error);
      }
    );
  }

  onClickWrongButton() {
    this.appService.wrongSend().subscribe(
      (data: any) => {
        // Handle the response data here
        console.log(data);
      },
      (error: any) => {
        // Handle any errors that occurred
        console.error(error);
      }
    );
  }

}
