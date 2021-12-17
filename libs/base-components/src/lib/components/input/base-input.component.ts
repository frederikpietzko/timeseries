import { Component, Directive, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StyleProvider } from '../styling/styling.provider';

@Directive()
export abstract class BaseInput {
  @Input() value!: BehaviorSubject<string>;
  @Input() id!: string;
  @Input() label!: string;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() required!: string;

  constructor() {}

  onChange(event?: Event) {
    this.value.next((event?.target as HTMLInputElement)?.value ?? '');
  }
}
