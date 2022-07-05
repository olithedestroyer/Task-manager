import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddactivelistAction } from '../../store/actions/task-manager.actions';
import { AppState } from '../../store/models/app-state.model';
import { List } from '../../store/models/list.model';
import { getLists } from '../../store/selectors/task-manager.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  newlists$!: Observable<List[]>;

  constructor(private store: Store<AppState>, private router: Router) {

  }
  ngOnInit(): void {
    this.newlists$ = this.store.select(getLists);
    console.log(this.newlists$);
  }
  onClick = () => {
    this.router.navigateByUrl('/list/new')  

  }

clickList(id: string){
  this.store.dispatch(new AddactivelistAction(id));

}
}
