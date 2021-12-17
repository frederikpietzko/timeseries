import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AuthenticationModule } from '@timeseries/authentication';
import { BaseComponentsModule } from '@timeseries/base-components';
import { FeatureAuthModule } from '@timeseries/feature-auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { GraphQLModule } from './graphql.module';
import { PropertiesHttpLoader } from './i18n/properties.loader';
import { LoginModule } from './pages/login/login.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new PropertiesHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    GraphQLModule,
    BaseComponentsModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
