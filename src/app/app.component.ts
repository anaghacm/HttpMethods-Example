import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'httpmethods-example';
  isLoading: Subject<boolean> = this._loader.isLoading;

  constructor(private _loader: LoaderService) { }
}
