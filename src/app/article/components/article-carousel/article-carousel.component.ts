import { Component, OnInit, Input } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { ArticleCarouselParams } from './article-carousel-params.model';
import { ArticlePreview } from '../../../core/models/article.model';

@Component({
  selector: 'app-article-carousel',
  templateUrl: './article-carousel.component.html',
  styleUrls: ['./article-carousel.component.css']
})
export class ArticleCarouselComponent implements OnInit {
  @Input() carouselData: ArticleCarouselParams;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId: number = Math.round(Math.random() * 100);
  carouselItemWidth: number = 150;

  constructor(
    private extensionMethodService: ExtensionMethodService
  ) { }

  ngOnInit(): void {
  }
}
