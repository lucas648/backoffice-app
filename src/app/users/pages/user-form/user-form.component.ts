import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;
  userId!: number | null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.userId = this.route.snapshot.params['id'] ? +this.route.snapshot.params['id'] : null;

    if (this.userId) {
      this.userService.getUser(this.userId).subscribe(user => this.form.patchValue(user));
    }
  }

  save(): void {
    if (this.form.invalid) return;

    const user: User = { id: this.userId ?? 0, ...this.form.value };

    if (this.userId) {
      this.userService.updateUser(user).subscribe(() => this.router.navigate(['/users']));
    } else {
      this.userService.addUser(this.form.value).subscribe(() => this.router.navigate(['/users']));
    }
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}

