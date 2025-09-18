import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule
  ],
})
export class UserListComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'city', 'age', 'actions'];
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addUser(): void {
    this.router.navigate(['/users/new']);
  }

  editUser(user: any): void {
    this.router.navigate(['/users/edit', user.id]);
  }

  deleteUser(user: any): void {
    if (confirm(`Deseja excluir o usuário ${user.name}?`)) {
      this.userService.deleteUser(user.id).subscribe(() => {
        this.loadUsers(); // Recarrega a lista após a exclusão
      });
    }
  }
}
