function greet() {
    console.log("Welcome");
}
function b(a,name)
{
    a();
    console.log("Welcome to b "+name);
    
}

b(greet,"manoj");