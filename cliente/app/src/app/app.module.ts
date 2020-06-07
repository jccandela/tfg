import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorComponent } from './components/sensor/sensor.component';
import { RouterModule } from '@angular/router';
import { SensorListComponent } from './components/sensor-list/sensor-list.component';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SensorComponent,
    SensorListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [{ 
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
