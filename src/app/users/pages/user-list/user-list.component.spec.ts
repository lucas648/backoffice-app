import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  editUser(user: User): void {
    this.router.navigate(['/users/edit', user.id]);
  }

  deleteUser(user: User): void {
    if (confirm(`Deseja excluir ${user.name}?`)) {
      this.userService.deleteUser(user.id).subscribe(() => this.loadUsers());
    }
  }

  addUser(): void {
    this.router.navigate(['/users/new']);
  }
}
