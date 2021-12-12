import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'calculadora-doces-lacos';

  ngOnInit() {
    $(document).ready(function() {

      // Check for click events on the navbar burger icon
      $(".navbar-burger").click(function() {
    
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $(".navbar-burger").toggleClass("is-active");
          $(".navbar-menu").toggleClass("is-active");
    
      });
    });
  }
}
