import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TaskManagerModule } from '../task-manager/task-manager.module';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    EmptyStateComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, EmptyStateComponent,InputComponent]
})
export class SharedModule { }
