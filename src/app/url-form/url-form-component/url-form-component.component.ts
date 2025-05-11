import { Component } from '@angular/core';
import { UrlServiceService } from '../../services/url-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-url-form-component',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './url-form-component.component.html',
  styleUrl: './url-form-component.component.css'
})
export class UrlFormComponentComponent {
  originalUrl = '';
  shortUrl: string | null = null;
  errorMessage = '';

  constructor(private urlService: UrlServiceService) { }

  onSubmit() {
    if (!this.originalUrl) {
      this.errorMessage = 'Por favor, ingresa una URL';
      return;
    }

    this.urlService.shortenUrl(this.originalUrl).subscribe({
      next: (response) => {
        this.shortUrl = response;
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'URL inválida o error del servidor';
        this.shortUrl = null;
      }
    });
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.shortUrl || '');
  }

}
