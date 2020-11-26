import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypageRoutingModule } from './mypage-routing.module';
import { MypageComponent } from './mypage/mypage.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponent } from './profile/profile.component';
import { BodyImageComponent } from './body-image/body-image.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    MypageComponent,
    ProfileComponent,
    BodyImageComponent,
    NoteComponent,
  ],
  imports: [CommonModule, MypageRoutingModule, MatTabsModule],
})
export class MypageModule {}