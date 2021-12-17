import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StyleProvider {
  inputStyles: string =
    'w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500';
  selectStyle: string = `${this.inputStyles} bg-white`;
  labelStyles: string = 'block text-sm font-medium text-gray-700';
  errorLabelStyles: string = 'block text-sm font-medium  text-red-600';
  buttonStyles: string =
    'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
}
