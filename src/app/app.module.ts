import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { PagesModule } from './presentation/core/pages/pages.module';
import { HttpProxyInterceptorService } from './presentation/shared/services/http-proxy-interceptor.service';
import { SharedComponentsModule } from './presentation/shared/components/shared-components.module';
import { configReducer } from './data/state/reducers/config.reducer';
import { reducer } from './data/state/store.types';


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({config: reducer}, {}),
    PagesModule,
    SharedComponentsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpProxyInterceptorService, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
