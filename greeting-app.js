
        function greet(time) {


            if (time >= 1 && time < 12) {
                return ('Good Morning');

            } else if (time >= 12 && time < 16) {
                return ('Good Afternoon');

            } else {
                return ('Good Evening');

            }
        }

        console.log(greet(20));