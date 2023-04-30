import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin';
import { HelperService } from './core/services/common/helper.service';
import { AuthGuard } from './core/services/auth-guard/auth-guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { CacheInterceptor } from './core/interceptors/cache.interceptor';
import { MessageService } from 'primeng/api';
import { SharedModule } from './shared';
import { CoreModule } from './core';
import { AuthModule } from './auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule,
    CoreModule,
    SharedModule,
    AuthModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    AuthGuard,
    MessageService,
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
