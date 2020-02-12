import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';

import { LoggerService, LogLevel } from 'src/shared/services/logger.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  public files: NgxFileDropEntry[] = [];
  public activeFileURL: string;
  public displayComplete: boolean;
  public displayError: boolean;

  @Input() tagName: string;
  @Output() updateFile = new EventEmitter<any>();

  private SUPPORTED_EXTENSIONS = [
    'apng', 'bmp', 'gif', 'ico', 'cur', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp',
    'png', 'svg', '	webp'
  ];
  private ICON_DELAY = 850;

  constructor(
    private sanitizer: DomSanitizer,
    private logger: LoggerService
  ) {
    this.activeFileURL = null;
    this.displayComplete = false;
    this.displayError = false;
  }

  public fileDropped(files: NgxFileDropEntry[]) {
    const droppedFile = files[0];

    if(droppedFile.fileEntry?.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      const fileExt = fileEntry.name.split('.').pop();

      if(this.SUPPORTED_EXTENSIONS.includes(fileExt)) {
        this.displayComplete = true;
        setTimeout(() => this.displayComplete = false, this.ICON_DELAY);

        fileEntry.file((file: File) => {
          this.logger.log(LogLevel.INFO, `Uploaded file ${fileEntry.name}`);

          URL.revokeObjectURL(this.activeFileURL);
          this.activeFileURL = URL.createObjectURL(file);

          const sanitizedURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.activeFileURL);
          this.updateFile.emit(sanitizedURL);
        });
      } else {
        this.displayError = true;
        setTimeout(() => this.displayError = false, this.ICON_DELAY);
      }
    }
  }
}
