import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})

export class UserList {
  private userService = inject(UserService);
  private searchTerm$ = new BehaviorSubject<string>('');

  users$ = this.userService.getUsers();

  filteredUsers$ = combineLatest([this.users$, this.searchTerm$]).pipe(
    map(([users, searchTerm]) =>
      users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  );

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm$.next(input.value);
  }
}
