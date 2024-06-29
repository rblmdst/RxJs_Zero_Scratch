import { BehaviorSubject } from "rxjs";
console.clear();

const behaviorSubject$ = new BehaviorSubject(0); // 0 is the initial value

behaviorSubject$.subscribe({
  next: (val) => console.log("One : ", val),
});

behaviorSubject$.next(1);
behaviorSubject$.next(2);

behaviorSubject$.subscribe({
  next: (val) => console.log("Two : ", val),
});

behaviorSubject$.next(3);
