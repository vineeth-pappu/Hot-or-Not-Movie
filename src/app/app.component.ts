import { Component, OnInit } from "@angular/core";
import { AppService } from "./services/app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent implements OnInit {
  title = "hot-or-not-movie";

  constructor(private appService: AppService) { }

  ngOnInit(): void {

  }
}
