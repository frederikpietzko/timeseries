import { Directive, Input } from '@angular/core';
import { from, of } from 'rxjs';

@Directive()
export abstract class BaseButtonComponent {
  @Input() id!: string;
  @Input() label!: string;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() onClick?: (event: MouseEvent) => any | Promise<any>;
  protected loading: boolean = false;

  _onClick(event: MouseEvent) {
    if (this.onClick) {
      this.loading = true;
      from(this.onClick(event)).subscribe({
        complete: () => (this.loading = false),
      });
    }
  }
}
