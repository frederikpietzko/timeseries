import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { LoginBloc } from './login.bloc';

@Component({
  selector: 'pie-login-form',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(readonly bloc: LoginBloc) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.bloc.dispose();
  }

  login() {
    return this.bloc.login().subscribe();
  }
}
