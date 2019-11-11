import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SigninComponent } from './components/signin/signin.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutComponent } from './components/about/about.component';

//Services
import { AgteamService } from './services/agteam.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { CourseComponent } from './components/course/course.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LoadingComponent } from './components/loading/loading.component';

import { TopicsPipe } from './pipes/topics.pipe';

import { QuestionsComponent } from './components/questions/questions.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { BasicConceptsComponent } from './components/dbfundamentals/basic-concepts/basic-concepts.component';
import { DbfundamentalsComponent } from './components/dbfundamentals/dbfundamentals/dbfundamentals.component';
import { DbModelsComponent } from './components/dbfundamentals/db-models/db-models.component';
import { DbDbmsComponent } from './components/dbfundamentals/db-dbms/db-dbms.component';
import { DbArquitectureComponent } from './components/dbfundamentals/db-arquitecture/db-arquitecture.component';
import { TestOneComponent } from './components/dbfundamentals/test-one/test-one.component';
import { ResultComponent } from './components/dbfundamentals/result/result.component';
import { ProgressComponent } from './components/dbfundamentals/progress/progress.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SigninComponent,
    CreateAccountComponent,
    CoursesComponent,
    AboutComponent,
    ProfileComponent,
    CourseComponent,
    LoadingComponent,
    TopicsPipe,
    QuestionsComponent,
    ConditionsComponent,
    BasicConceptsComponent,
    DbfundamentalsComponent,
    DbModelsComponent,
    DbDbmsComponent,
    DbArquitectureComponent,
    TestOneComponent,
    ResultComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireStorageModule
  ],
  providers: [
    AgteamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
