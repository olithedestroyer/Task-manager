import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() value = '';
  @Input() placeholder = '';
  @Output() onChange = new EventEmitter<string>();
  
  change(event: any) {
    this.onChange.emit(event.target.value);
  }
}
