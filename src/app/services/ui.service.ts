import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showTAddask: boolean = true; 
  private subjet = new Subject<any>();

  constructor() { }

  toggleAddTask():void {
    this.showTAddask = !this.showTAddask;
    this.subjet.next(this.showTAddask);
  }

  onToggle(): Observable<any>{
    return this.subjet.asObservable();
  }

}
