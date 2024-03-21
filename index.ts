import * as wasm from "rust-wasm"

const fib = (n:number) => {
    if(n < 2){
        return 1
    }
    return fib(n-1) + fib(n-2)
}

let now = Date.now();
console.log(fib(50))
console.log(`time running in js: ${Date.now() - now}ms`)
now = Date.now()
console.log(wasm.fibonacci(40))
console.log(`time running in rust wasm: ${Date.now() - now}ms`)