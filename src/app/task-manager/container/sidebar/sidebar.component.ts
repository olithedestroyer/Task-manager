import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/models/app-state.model';
import { newlist } from '../../store/models/list.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  newlists$!: Observable<newlist[]>;

  constructor(private store: Store<AppState>, private router: Router) {

  }
  ngOnInit(): void {
    this.newlists$ = this.store.select(store => store.list);
  }
  onClick = () => {
    this.router.navigateByUrl('/list/new')
  }


};


