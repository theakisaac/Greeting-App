
// Greeting App based on 24-Hour Time Format

function greet(name, time) {


    if (time >= 1 && time < 12) {
        return (`Good Morning ${name}!`);

    } else if (time >= 12 && time < 16) {
        return (`Good Afternoon ${name}!`);

    } else {
        return (`Good Evening ${name}!`);

    }
}

console.log(greet('Isaac', 10)); // Good Morning Isaac!