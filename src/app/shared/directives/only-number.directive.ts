import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * directive to allow just number caracters in a input
 */
@Directive({
  selector: '[appDigitOnly]'
})
export class OnlyNumberDirective {

  @Input() limit: number = null;

  /**
   * Allowed types
   */
  private navigationKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste'
  ];
  /**
   * Input html element
   */
  inputElement: HTMLElement;

  /**
   * Generate OnlyNumberDirective
   * @param el html input element object
   */
  constructor(public el: ElementRef) {
    this.inputElement = el.nativeElement;
  }

  /**
   * Process any event in the input and allow just numbers
   * @param e any event that happens in the input
   */
  @HostListener('input', ['$event'])
  onKeyDown(e: any) {

    if (this.navigationKeys.indexOf(e.key) > -1 || this.validateCommands(e) || this.validateMacCommands(e)) {
      /* let it happen, don't do anything */
      return;
    }
    /* Ensure that it is a number and stop the keypress */
    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }

    e.target.value = e.target.value.replace(/\D/g, '');

    if (this.validateSize(e)) {
      e.target.value = e.target.value.match(/^\d{1,5}/) ? e.target.value.match(/^\d{1,5}/)[0] : e.target.value;
    }
  }

  private validateMacCommands(e) {
    return (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
      (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
      (e.key === 'x' && e.metaKey === true) // Allow: Cmd+X (Mac)
  }

  private validateCommands(e) {
    return (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.key === 'x' && e.ctrlKey === true) // Allow: Ctrl+X
  }

  private validateSize(e) {
    return this.limit !== null;
  }

}

