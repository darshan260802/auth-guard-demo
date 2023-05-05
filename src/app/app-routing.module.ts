import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Shared/auth.guard';
import { LoginComponent } from './Components/login/login.component';
import { VideoComponent } from './Components/video/video.component';
import { FilesComponent } from './Components/files/files.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'video',
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    component: LoginComponent,
  },
  {
    path: 'video',
    canActivate: [AuthGuard],
    component: VideoComponent,
  },
  {
    path: 'file-upload',
    canActivate: [AuthGuard],
    component: FilesComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'video',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
