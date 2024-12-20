import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule],
  providers: [NewsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fake-news';
  newsText: string = '';

  constructor(private newsService: NewsService) {}

  public analyzeNews() {
    if (this.newsText) {
    //   this.newsService.analyzeNews(this.newsText).subscribe({
    //     next: (response) => {
    //       console.log('Response from backend:', response);
    //     },
    //     error: (error) => {
    //       console.error('Error:', error);
    //     },
    //   });
    
    }
  }
}
