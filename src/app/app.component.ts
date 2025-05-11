import { Component } from '@angular/core';
import { UrlFormComponentComponent } from "./url-form/url-form-component/url-form-component.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [UrlFormComponentComponent, HttpClientModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'url-shortener-frontend';
}
