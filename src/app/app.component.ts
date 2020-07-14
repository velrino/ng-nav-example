import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  active = 1;

  back() {
    this.active = this.active - 1;
  }

  next() {
    this.active = this.active + 1;
  }

  showBack() {
    return this.active > 1;
  }

  showNext() {
    return (this.active >= 1 && this.active < 3);
  }
}
