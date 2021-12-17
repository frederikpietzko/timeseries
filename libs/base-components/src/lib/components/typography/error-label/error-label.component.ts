import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  constructor(readonly styleProvider: StyleProvider) {}

  ngOnInit(): void {}
}
