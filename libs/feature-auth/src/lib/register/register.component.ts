import { Component, OnInit } from '@angular/core';
import { RegisterBloc } from './register.bloc';

@Component({
  selector: 'pie-register-form',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  constructor(readonly bloc: RegisterBloc) {}

  register() {
    return this.bloc.register().subscribe();
  }

  ngOnInit(): void {
    this.bloc.dispose();
  }
}
