
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        /* var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }    
        return array; */
    }

    var values = [];

    function __gcd(a, b) {
        
        // Everything divides 0
        if (a == 0 || b == 0)
            return 0;
        
        // Base case
        if (a == b)
            return a;
        
        // a is greater
        if (a > b)
            return __gcd(a - b, b);
                
        return __gcd(a, b - a);
    }
    
    // Function to check and print if
    // two numbers are co-prime or not
    function coprime(a, b)
    {
        if (__gcd(a, b) == 1) {
            var sum = text[0] + text[1];

            $('.current').addClass('prime');
            $(".bottom").append('<span>' + text[0] + '+' + text[1] + '=' + sum + '</span>');  
            $('.prime').remove();
            
        } else {
            var sum = text[0] + text[1];

            $('.current').addClass('no-prime');
            $(".right").append('<span>' + text[0] + '+' + text[1] + '=' + sum + '</span>');  
           
        }
    }

    var text = [];

    $(function () {
        var $select = $(".left");
        for (i = 1; i <= 100; i++) {
            values.push(i);
        }
        shuffle(values);
        for (var i = 0; i < values.length; i++) {
            $select.append($('<input type="button"></input>').val(values[i]).html(values[i]));
        }

        var timesClicked = 0;
        $("input").click(function () {
            timesClicked++;
            if (timesClicked == 1) {
                $(this).addClass('current');
                text.push(parseFloat(this.value));
            } 
            if (timesClicked == 2) {
                $(this).addClass('current');
                text.push(parseFloat(this.value));
                coprime(text[0], text[1]);  
            } 
            
           console.log(text);
        });



    });
