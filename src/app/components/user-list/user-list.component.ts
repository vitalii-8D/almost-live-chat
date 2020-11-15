import {Component, OnInit} from '@angular/core';
import {DataBaseService} from '../../services/data-base.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  isLoading = false;

  constructor(public db: DataBaseService) {
  }

  ngOnInit(): void {
  }
}
