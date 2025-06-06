 console.log("Hello, World!"); // This is a simple output

        var a; //declaration
        a=5; //initialization
        console.log("The value of a is: " + a); //output the value of a
        var b = 10; //declaration and initialization
        //
        console.log("The sum of " + a + " and " + b + " is: " + (a + b));
        console.log("the subtraction of " + a + " and " + b + " is: " + (a - b));
        console.log("the multiplication of " + a + " and " + b + " is: " + (a * b));
        console.log("the division of " + a + " and " + b + " is: " + (a / b));
        console.log("the modulus of " + a + " and " + b + " is: " + (a % b));

        
       //example for array
        var arr = [1, 2, 3, 4, 5];
        console.log( arr);

        //example of spread array
        var arr2 = [...arr, 6, 7, 8];
        console.log(arr2);


        //destrtucturing array
        var marks = [10, 20, 30, 40, 50];
        var [a1, a2, a3, a4, a5] = marks;
        console.log(a1, a2, a3, a4, a5);
        
        //template string
        var a= 5;
        var b= 10;  
        var sum = a + b;
        console.log(a,"+", b , "=", sum);
        console.log(`${a} + ${b} = ${sum}`); // Using template literals for string interpolation

