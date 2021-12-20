import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { async, combineLatest, first, from, map, Observable, of } from 'rxjs';

@Directive()
export abstract class BaseButtonComponent {
  @Input() id!: string;
  @Input() label!: string;
  @Input() type: 'button' | 'submit' = 'button';
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Input() loading?: Observable<boolean>;
  @Input() enabled?: Observable<boolean>;

  public get _enabled(): Observable<boolean> {
    return combineLatest([this._loading, this.enabled ?? of(true)]).pipe(
      map(([loading, enabled]) => !loading && enabled),
    );
  }

  public get _loading(): Observable<boolean> {
    return this.loading ?? of(false);
  }

  _onClick(event: MouseEvent) {
    this._enabled.subscribe({
      next: (enabled) => enabled && this.onClick.emit(event),
    });
  }
}
