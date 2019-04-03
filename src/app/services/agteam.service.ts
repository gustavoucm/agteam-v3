import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AgteamService {
  user: AngularFireList<any[]>;
  // agteam_url = 'https://agteam-53ecb.firebaseio.com/courses';
  courses: AngularFireList<any[]>;
  constructor(private http: HttpClient, private db: AngularFireDatabase) {

  }

  getCourses() {
    return this.db.list('courses').valueChanges();
  }

  getCourse(id: string) {
    return this.db.list(`courses/${id}`).valueChanges();
  }

  setUser(user: User) {
    this.db.database.ref(`users/${user.id}`).set(user);
  }

  getUser(uidUser: string) {
    return this.db.list(`users/${uidUser}`).valueChanges();
  }

  enrollUser(userInfo: any){
    this.db.database.ref(`user_course/1/${userInfo.id}`).set(userInfo);
  }

  isEnrolled(uid: string) {
    return this.db.list(`user_course/1/${uid}`).valueChanges();
  }

  setDescription(description: string, uid: string){
    this.db.database.ref(`users/${uid}/description`).set(description);
  }
}
