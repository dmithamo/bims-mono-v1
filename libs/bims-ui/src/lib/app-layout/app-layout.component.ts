import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  OnDestroy,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import {
  AppBottomNavComponent,
  AppNavItem,
} from '../app-bottom-nav/app-bottom-nav.component';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppSidebarComponent } from '../app-sidebar/app-sidebar.component';

@Component({
  selector: 'bims-app-layout',
  standalone: true,
  imports: [
    CommonModule,
    AppHeaderComponent,
    AppBottomNavComponent,
    AppSidebarComponent,
  ],
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent implements OnDestroy {
  @Input({ required: true }) appName: string = '';
  @Input({ required: true }) appNavItems: AppNavItem[] = [];

  prevScrollY = 5000;
  isScrollingDown: WritableSignal<boolean> = signal(false);
  isNavHidden: Signal<boolean> = computed(() => this.isScrollingDown());

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this._document.addEventListener('scroll', this.handleScrollEvent, true);
  }

  handleScrollEvent = () => {
    const currentScrollY = window.scrollY;
    this.isScrollingDown.set(currentScrollY > this.prevScrollY);
    console.log({ currentScrollY, p: this.prevScrollY });
    this.prevScrollY = currentScrollY > 200 ? currentScrollY : this.prevScrollY;
  };

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScrollEvent, true);
  }
}
