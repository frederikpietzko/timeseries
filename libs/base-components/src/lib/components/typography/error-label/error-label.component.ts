import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { concatAll, map, Observable, of } from 'rxjs';
import { StyleProvider } from '../../styling/styling.provider';

@Component({
  selector: 'pie-error-label',
  templateUrl: './error-label.component.html',
})
export class ErrorLabelComponent implements OnInit {
  @Input() error!:
    | Observable<true | string | null | undefined>
    | null
    | undefined;

  _error: Observable<string> = (this.error ?? of(true)).pipe(
    map((err) => {
      return !err || err === true ? of('') : this.translateService.get(err);
    }),
    concatAll(),
  );

  constructor(
    readonly styleProvider: StyleProvider,
    readonly translateService: TranslateService,
  ) {}

  ngOnInit(): void {}
}
