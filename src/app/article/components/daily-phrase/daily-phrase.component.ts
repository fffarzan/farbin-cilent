import { Component, Input } from '@angular/core';

import { DictionaryWord } from 'src/app/core/models/dictionary-word.model';
import { detectMobile } from '../../../core/utils/common-utils';


@Component({
  selector: 'app-daily-phrase',
  templateUrl: './daily-phrase.component.html',
  styleUrls: ['./daily-phrase.component.css']
})
export class DailyPhraseComponent {
  @Input() phrase: DictionaryWord;
  isMobile: boolean = detectMobile();
}
