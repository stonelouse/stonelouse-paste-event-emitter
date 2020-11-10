import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-part",
  templateUrl: "./part.component.html",
  styleUrls: ["./part.component.css"]
})
export class PartComponent implements OnInit {
  @Output() paste = new EventEmitter<void>();
  @ViewChild("textarea", { static: false }) textarea: ElementRef;

  constructor() {}

  ngOnInit() {}

  pasteFromClipboard(event: ClipboardEvent) {
    console.log(
      "#02#",
      { eve: event },
      { textarea: this.textarea.nativeElement },
      event.clipboardData.getData("text")
    );

    this.textarea.nativeElement.innerText = event.clipboardData.getData("text");
  }

  pasteFromClipboardStopPropagation(event: ClipboardEvent) {
    event.stopPropagation();
    console.log(
      "#03#",
      { eve: event },
      { textarea: this.textarea.nativeElement },
      event.clipboardData.getData("text")
    );

    this.textarea.nativeElement.innerText = event.clipboardData.getData("text");
  }
}
