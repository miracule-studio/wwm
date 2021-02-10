import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
//import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    //AppRoutingModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
