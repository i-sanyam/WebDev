console.log(typeof (new class f() {
    [f]() { },
    f: { }
}))
[${f}]