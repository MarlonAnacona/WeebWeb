import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  home() {
    this.route.navigate(['../Home']);
  }

  /**
   * Login for the user
   * if login is success-> go to the Dashboard
   * else -> error
   */
  login() {
    this.route.navigate(['../Dashboard']);
  }
}
