import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import _ from 'lodash';

export class PropertiesHttpLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private prefix: string = '/assets/i18n/',
    private suffix: string = '.properties',
  ) {}

  getTranslation(lang: string): Observable<object> {
    return this.http
      .get(`${this.prefix}${lang}${this.suffix}`, { responseType: 'text' })
      .pipe(map(this.mapProperties));
  }

  mapProperties(text: string): object {
    const lines = text.split('\n');
    const properties = {};
    for (const line of lines) {
      const trimmed = line.trim().split('=');
      if (trimmed.length != 2) {
        throw new Error(`Invalid Translation Property: "${line}"`);
      }
      const [key, value] = trimmed;
      _.set(properties, key, value);
    }
    return properties;
  }
}
