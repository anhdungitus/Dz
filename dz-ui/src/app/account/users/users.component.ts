import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [UserService],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName'];
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        console.log(users);
        return this.users = users;
      });
  }
}
