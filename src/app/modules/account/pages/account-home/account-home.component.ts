import { Component, inject } from '@angular/core';
import { User } from '../../../../models/user.model';
import { Userservice } from '../../../../user.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrl: './account-home.component.css',
})
export class AccountHomeComponent {
  users: User[] = [];
  randomUser!: User;
  private userService = inject(Userservice);

  ngOnInit(): void {
    this.userService.getUsers().subscribe((usersFromJsonFile) => {
      this.users = usersFromJsonFile;
      this.selectRandomUser();
    });
  }
  // génère un index aléatoire
  selectRandomUser() {
    // randomIndex : stocke l'index aléatoire généré
    const randomIndex = Math.floor(Math.random() * this.users.length);
    this.randomUser = this.users[randomIndex];
  }
}
