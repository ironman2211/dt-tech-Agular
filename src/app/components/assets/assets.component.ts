import { Component, Input, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent implements OnInit {
  @Input() asset: any | undefined;

  panelOpenState = true;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '8rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
  };
  constructor(private sanitizer: DomSanitizer) {}
  getTrusted(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openId: number = 0;
  setOpenId(id: number) {
    if (this.openId == id) {
      this.openId = 0;
    } else {
      this.openId = id;
    }
  }

  ngOnInit(): void {}
}
