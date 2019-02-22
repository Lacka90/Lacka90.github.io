import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideInfoComponent } from './components/side-info/side-info.component';
import { CvContentComponent } from './components/cv-content/cv-content.component';
import { SkillComponent } from './components/side-info/skill/skill.component';
import { CvBlockComponent } from './components/cv-content/cv-block/cv-block.component';
import { WorkRowComponent } from './components/cv-content/work-row/work-row.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideInfoComponent,
    CvContentComponent,
    SkillComponent,
    CvBlockComponent,
    WorkRowComponent,
    ProfilePictureComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
