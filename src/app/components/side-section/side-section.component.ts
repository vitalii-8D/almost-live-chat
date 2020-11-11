import {Component, OnInit} from '@angular/core';
import {IUser, IChat} from '../../models/indes';
import {AuthService} from '../../services/auth.service';
import {DataBaseService} from '../../services/data-base.service';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-side-section',
  templateUrl: './side-section.component.html',
  styleUrls: ['./side-section.component.scss']
})
export class SideSectionComponent implements OnInit {

  constructor(public authService: AuthService,
              private dataService: DataBaseService,
              private stateService: StateService) {
  }

  ngOnInit(): void {
    this.dataService.getAllUsers().subscribe(items => {
      this.stateService.users = items;
    });
  }
}
