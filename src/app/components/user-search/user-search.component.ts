import { Component, OnInit } from '@angular/core';
import {DataBaseService} from '../../services/data-base.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  constructor(public db: DataBaseService) { }

  ngOnInit(): void {
  }
}
