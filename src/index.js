// ---------------------------------------------------------- //
// do expressions

const a = 3;
let b = do {
  if (a > 10) {
    ("big");
  } else {
    ("small");
  }
};

console.log("b:", b);

// ---------------------------------------------------------- //
// numeric separator

const c = 1_000_000_000;
console.log("c:", c);

// ---------------------------------------------------------- //
// optional chaining

const d = {
  a: [1, 2, 3],
  b: true,
  c: {
    d: 1,
    e: "hello"
  }
};

const e = d?.a;
const f = d?.a?.b?.c;
console.log("e:", e);
console.log("f:", f);

// ---------------------------------------------------------- //
// partial application

function add(a, b) {
  return a + b;
}
console.log("add", add(3, 4));
const add10 = add(10, ?);
console.log("add10", add10(3));
const add20 = add(?, 20);
console.log("add20", add20(3));

// ---------------------------------------------------------- //
// pipeline operator

function root(x){
  return x ** 0.5;
}

const g = 64 |> root |> root;
console.log('g:', g);
