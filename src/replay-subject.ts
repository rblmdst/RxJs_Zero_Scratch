import { ReplaySubject } from "rxjs";
console.clear();

const replaySubject$ = new ReplaySubject(2); // buffer 2 values for new subscribers

replaySubject$.subscribe({
  next: (val) => console.log("One : ", val),
});

replaySubject$.next(1);
replaySubject$.next(2);
replaySubject$.next(3);
replaySubject$.next(4);

replaySubject$.subscribe({
  next: (val) => console.log("Two : ", val),
});

replaySubject$.next(5);
