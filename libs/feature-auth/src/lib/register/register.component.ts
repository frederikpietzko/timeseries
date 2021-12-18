import { Component, OnDestroy, OnInit } from '@angular/core';
import { RegisterBloc } from './register.bloc';

@Component({
  selector: 'pie-register-form',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(readonly bloc: RegisterBloc) {}

  register() {
    this.bloc.register().subscribe();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.bloc.dispose();
  }
}
