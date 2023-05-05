import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from 'src/store/user.reducer';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoComponent } from './Components/video/video.component';
import { FilesComponent } from './Components/files/files.component';
import { EncdecComponent } from './Components/encdec/encdec.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideoComponent,
    FilesComponent,
    EncdecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({user:userReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
