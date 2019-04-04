import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SigninComponent } from './components/signin/signin.component';
import { AboutComponent } from './components/about/about.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CourseComponent } from './components/course/course.component';
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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'course/:id', component: CourseComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'about', component: AboutComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'conditions', component: ConditionsComponent},
  {path: 'basic-concepts', component: BasicConceptsComponent},
  {path: 'dbFundamentals', component: DbfundamentalsComponent},
  {path: 'dbModels', component: DbModelsComponent},
  {path: 'dbms', component: DbDbmsComponent},
  {path: 'arquitecture', component: DbArquitectureComponent},
  {path: 'testOne', component: TestOneComponent},
  {path: 'result/:id', component: ResultComponent},
  {path: 'progress', component: ProgressComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
