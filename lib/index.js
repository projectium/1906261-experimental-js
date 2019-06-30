var _d$a, _d$a$b, _add, _add2, _ref, _;

// ---------------------------------------------------------- //
// do expressions
const a = 3;
let b = a > 10 ? "big" : "small";
console.log("b:", b); // ---------------------------------------------------------- //
// numeric separator

const c = 1000000000;
console.log("c:", c); // ---------------------------------------------------------- //
// optional chaining

const d = {
  a: [1, 2, 3],
  b: true,
  c: {
    d: 1,
    e: "hello"
  }
};
const e = d === null || d === void 0 ? void 0 : d.a;
const f = d === null || d === void 0 ? void 0 : (_d$a = d.a) === null || _d$a === void 0 ? void 0 : (_d$a$b = _d$a.b) === null || _d$a$b === void 0 ? void 0 : _d$a$b.c;
console.log("e:", e);
console.log("f:", f); // ---------------------------------------------------------- //
// partial application

function add(a, b) {
  return a + b;
}

console.log("add", add(3, 4));
const add10 = (_add = add, function add(_argPlaceholder) {
  return _add(10, _argPlaceholder);
});
console.log("add10", add10(3));
const add20 = (_add2 = add, function add(_argPlaceholder2) {
  return _add2(_argPlaceholder2, 20);
});
console.log("add20", add20(3)); // ---------------------------------------------------------- //
// pipeline operator

function root(x) {
  return x ** 0.5;
}

const g = (_ref = (_ = 64, root(_)), root(_ref));
console.log('g:', g);