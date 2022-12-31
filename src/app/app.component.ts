import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe((item) => console.log(item));

    from([20, 10, 5, 2]).subscribe({
      next: (item) => console.log(`reulting item ... ${item}`),
      error: (err) => console.log(`error .. ${err}`),
      complete: () => console.log(`complete`),
    });

    from(['Apple1', 'Apple2', 'Apple3']).subscribe({
      next: (item) => console.log(`apple item ... ${item}`),
      error: (err) => console.log(`apple error .. ${err}`),
      complete: () => console.log(`apple complete`),
    });
  }
}
