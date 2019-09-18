import {
  Directive, EventEmitter,
  HostListener, Input, Output, ViewChild
} from '@angular/core';
import { FileItem } from '../models/file-item.class';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  /**
   * Files array
   */
  @Input() files: FileItem[] = [];
  /**
   * Mouse listener
   */
  @Output() onMouseOver: EventEmitter<boolean> = new EventEmitter();
  /**
   * File inut reference
   */
  @ViewChild('fileInput') fileInput: any


  /**
   * Creates NgDropFilesDirective
   */
  constructor() { }

  /**
   * Listens for clicks and trigger file format events
   * @param event 
   */
  @HostListener('click', ['$event'])
  public onClick(event: any) {

    document.getElementById('fileInput').addEventListener('change', () => {

      if (!event.target.files) {
        return;
      }

      this._extractFiles(event.target.files);


      this._preventEvents(event);
      this.onMouseOver.emit(false);

    });
    document.getElementById('fileInput').click();

  }

  /**
   * Stops events and triger when mouse is over
   * @param event 
   */
  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.onMouseOver.emit(true);
    this._preventEvents(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.onMouseOver.emit(false);
  }

  /**
   * Triggers when user drops files
   * @param event 
   */
  @HostListener('drop', ['$event'])
  public onDrop(event: any) {

    const transfer = this._getTransfer(event);

    if (!transfer) {
      return;
    }

    this._extractFiles(transfer.files);

    this._preventEvents(event);
    this.onMouseOver.emit(false);

  }

  /**
   * Valids if dataTransfer object exist in event
   * @param event 
   */
  private _getTransfer(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  /**
   * Formats files dropped
   * @param filesList list of files to be formated
   */
  private _extractFiles(filesList: FileList) {

    for (const property in Object.getOwnPropertyNames(filesList)) {

      const file = filesList[property];

      if (this._isValidFile(file)) {

        const nuevoArchivo = new FileItem(file);
        this.files.push(nuevoArchivo);

      }
    }

    console.log(this.files);
  }


  /**
   * Valid if file has not been dropped and if is is an image
   * @param file 
   */
  private _isValidFile(file: File): boolean {

    return !this._isFileDropped(file.name) && this._isImage(file.type);

  }

  /**
   * Prevents events
   * @param event 
   */
  private _preventEvents(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Valid if file has not been dropped yet
   * @param fileName 
   */
  private _isFileDropped(fileName: string): boolean {

    for (const archivo of this.files) {

      if (archivo.fileName === fileName) {
        return true;
      }

    }

    return false;
  }

  /**
   * Valid if file is an image
   * @param fileName 
   */
  private _isImage(fileType: string): boolean {
    return (fileType === '' || fileType === undefined) ? false : fileType.startsWith('image');
  }


}
