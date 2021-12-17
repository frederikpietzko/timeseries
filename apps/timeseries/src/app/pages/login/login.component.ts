import {
  Component,
  OnDestroy,
  OnInit,
  Injectable,
  Inject,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LoginBloc } from './login.bloc';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(readonly bloc: LoginBloc) {}

  ngOnInit(): void {
    this.bloc.password.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.bloc.dispose();
  }
}
