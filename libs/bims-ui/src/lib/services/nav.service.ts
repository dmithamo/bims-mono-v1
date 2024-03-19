import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  constructor() {}

  public navIsVisible: WritableSignal<boolean> = signal(false);
  public toggleNavIsVisible({ isOpen }: { isOpen: boolean }) {
    this.navIsVisible.set(!isOpen);
  }
}
