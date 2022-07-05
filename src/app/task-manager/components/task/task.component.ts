import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() name = '';
  @Output() onEdit = new EventEmitter();
  @Output() onClick = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onEditClick() {
    this.onEdit.emit();
  }

  onTextClick() {
    this.onClick.emit();
  }

  onDeleteClick() {
    this.onDelete.emit();
  }
}
