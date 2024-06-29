import { Observable, Subject } from "rxjs";
console.clear();

const hot$ = new Subject();

const cold$ = new Observable((subscriber) => {
  console.log("#Cold#");
  let i = 0;
  setInterval(() => {
    subscriber.next(i++);
  }, 1000);
});

const source$ = hot$;
source$.subscribe((val) => console.log("One :", val));

setTimeout(() => {
  source$.subscribe((val) => console.log("Two :", val));
}, 3000);
