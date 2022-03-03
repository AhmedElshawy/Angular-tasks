import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../servises/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userServive:UsersService) { }

  usersList:any;
  ngOnInit(): void {
    this.userServive.getUsers().subscribe((data)=>{
      this.usersList = data;
    })
  }

}
