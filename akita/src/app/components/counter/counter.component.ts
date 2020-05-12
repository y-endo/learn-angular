import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService, CounterQuery } from 'src/app/counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  readonly favorite$: Observable<number>;

  constructor(private counterService: CounterService, private counterQuery: CounterQuery) {
    this.favorite$ = this.counterQuery.select('favorite');
  }

  ngOnInit(): void {}

  increment() {
    this.counterService.increment();
  }
}
