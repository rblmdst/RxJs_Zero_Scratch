import { Subject, from } from "rxjs";
console.clear();

const alpha$ = from(["A", "B", "C"]);

// Subscribe to the subject
const subject$ = new Subject<string>();
subject$.subscribe({
  next: (val) => console.log("One : ", val),
});
subject$.subscribe({
  next: (val) => console.log("Two : ", val),
});

subject$.next("Reactive");
subject$.next("Programming");

// alpha$.subscribe(subject$); // proxy
