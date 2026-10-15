import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPage } from '../pages/main-page/main-page';
import { NavigationBar } from '../components/navigation-bar/navigation-bar';

@Component({
  imports: [MainPage, NavigationBar, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  @Input() page: string = 'main-page';
  protected readonly title = signal('mila-ui');

}
