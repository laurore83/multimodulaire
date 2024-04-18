import { Component, inject } from '@angular/core';
import { User } from '../../../models/user.model';
import { Userservice } from '../../../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  users: User[] = [];
  private userService = inject(Userservice);

  ngOnInit(): void {
    this.userService.getUsers().subscribe((usersFromJsonFile) => {
      this.users = usersFromJsonFile;
      console.log(this.users);
    });
  }
}
