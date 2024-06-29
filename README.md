# RxJs_Zero_Scratch

This repo is the **Server part** of a group of 3 repos.

Links to the 3 repos

- [RxJs_Zero_Scratch](https://github.com/rblmdst/RxJs_Zero_Scratch)
- [RxJs_Zero_Angular](https://github.com/rblmdst/RxJs_Zero_Angular)
- [RxJs_Zero_Server](https://github.com/rblmdst/RxJs_Zero_Server)

**Purpose** : Showcase/demistifying RxJs during the live coding of my talk "**Reactive Programming & RxJS will no longer hold any secrets for you !!**" (La Programmation Réactive & RxJS n'auront plus de secrets pour vous !!).

This is simple TypeScript project which will serve as a Playground during live coding.

### Install dependencies

```
npm install
```

### Live Coding :

For the live coding we need at leadt two terminal (one for the build in watch mode, and one for what you want to Demo).

Before the live coding just run the build. It will watch the project and re-run the build everytime a file change is detected (watch mode).

**Note** : all the script are in watch mode (it is a live coding :) )

```
npm run build
```

- **Observable** (show basic concepts : create observable from zero, subscription, observer, unsubscribe, next, complete, error, etc.)

```
npm run start
```

- **Error Handling**

```
npm run start:e
```

- **Operators** (show the use of basic operators: of, from, map, filter, take, skip, etc.)

```
npm run start:o
```

**Note** : Demo of others operators (combineLastest, switchMap, mergeMap, concatMap, startWith, etc.) will be done using the Real App Repos (Angular + ExpressJs).

- **Nested Subscription** (antipattern : use high-order operators to solve this)

```
npm run start:ns
```

- **Subject**

```
npm run start:s
```

- **Behavior Subject**

```
npm run start:bs
```

- **Replay Subject**

```
npm run start:rs
```

- **Cold vs Hot Observable**

```
npm run start:cvh
```
