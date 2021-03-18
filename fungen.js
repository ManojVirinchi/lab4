function *gen()
{
    yield 100;
    yield ;
    yield 200;
}

var my =gen();
console.log(my.next().done);
console.log(my.next().done);
console.log(my.next().done);
console.log(my.next().done);