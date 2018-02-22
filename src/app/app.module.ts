import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';
import { CoursesComponent } from './courses/courses.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { MoreComponent } from './more/more.component';
import { DevopsComponent } from './devops/devops.component';
import { DevopsdetailsComponent } from './devopsdetails/devopsdetails.component';


const appRoutes: Routes = [
    { path: '',redirectTo: '/home',pathMatch: 'full'},
    {path:'home' , component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact' ,component:ContactComponent},
    {path:'clients' ,component:ClientsComponent},
    { path:'courses' ,
      component:CoursesComponent,
      children:[
      {path:'devops' ,component:DevopsComponent,children:[ {path:'devopssdetails',component:DevopsdetailsComponent} ]},
      {path:'fullstack' ,component:CourselistComponent},
      {path:'datascience' ,component:CourselistComponent},
      {path:'bigdata' ,component:CourselistComponent},
      {path:'dataanalysis' ,component:CourselistComponent},
      {path:'python' ,component:CourselistComponent},
      {path:'cloudcomputing' ,component:CourselistComponent},
      {path:'blockchain' ,component:CourselistComponent},
      {path:'mobiledevelopment' ,component:CourselistComponent},
      {path:'register' ,component:RegisterComponent},
      {path:'students' ,component:StudentsComponent}
    ]
  },
  {path:'more' ,component:MoreComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ClientsComponent,
    CoursesComponent,
    PageNotFoundComponentComponent,
    CourselistComponent,
    CoursedetailsComponent,
    RegisterComponent,
    StudentsComponent,
    MoreComponent,
    DevopsComponent,
    DevopsdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
