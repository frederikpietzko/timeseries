import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Directive()
export abstract class BaseButtonComponent {
  @Input() id!: string;
  @Input() label!: string;
  @Input() type: 'button' | 'submit' = 'button';
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Input() loading: boolean = false;

  _onClick(event: MouseEvent) {
    this.onClick.emit(event);
  }
}
