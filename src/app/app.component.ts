import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  onPaste($event) {
    console.log("#01#", { eve: $event });
    throw new Error("on paste throws error!");
  }
}
