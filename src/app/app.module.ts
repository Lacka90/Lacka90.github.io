import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CvBlockComponent } from './components/cv-content/cv-block/cv-block.component';
import { CvContentComponent } from './components/cv-content/cv-content.component';
import { WorkRowComponent } from './components/cv-content/work-row/work-row.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { SideInfoComponent } from './components/side-info/side-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideInfoComponent,
    CvContentComponent,
    CvBlockComponent,
    WorkRowComponent,
    ProfilePictureComponent,
    ProfileDetailsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
