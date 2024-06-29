import { Observable } from "rxjs";
console.clear();

const source$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.error(new Error("# ERROR #"));
  subscriber.next(2);
});

source$.subscribe({
  next: (val) => console.log("One : ", val),
  // error: (err) => console.log("One Error : ", err),
});
