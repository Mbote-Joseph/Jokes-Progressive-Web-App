import { Component, OnInit } from "@angular/core";
import { JokesService } from "./jokes.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [JokesService],
})
export class AppComponent implements OnInit {
  title = "PWA";
  jokes: any[];
  date = new Date().toDateString();

  constructor(private joke: JokesService) {}
  ngOnInit() {
    this.joke.getRandomJokes().subscribe(
      (data) => {
        this.jokes = data.value;
      },
      (error) => {
        console.warn(error);
      }
    );
  }
}
