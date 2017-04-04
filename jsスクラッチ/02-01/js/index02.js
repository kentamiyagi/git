$(function () {
      setInterval(function () {
          var num9 = "../images/number_9.png";
          var now = new Date();
          var h = now.getHours();
          var m = now.getMinutes();
          var s = now.getSeconds();
          var hours = ("0" + h).slice(-2);
          var minute = ("0" + m).slice(-2);
          var seconds = ("0" + s).slice(-2);
          var hoursTens = hours.slice(0, 1);
          var hoursOne = hours.slice(1);
          var minuteTens = minute.slice(0, 1);
          var minuteOne = minute.slice(1);
          var secondsTens = seconds.slice(0, 1);
          var secondsOne = seconds.slice(1);

          for (var i = 0; i <= 9; i++){
              //secondsOne
              if (secondsOne == "i") {
                $("#secondsOneplace").removeClass();
                $("#secondsOneplace").addClass("num+i");
              }
            }
            //hoursTens
            if (hoursTens == "0") {
              $("#hoursTensplace").removeClass();
              $("#hoursTensplace").addClass("num0");
            } else if (hoursTens == "1") {
              $("#hoursTensplace").removeClass();
              $("#hoursTensplace").addClass("num1");
            } else {
              $("#hoursTensplace").removeClass();
              $("#hoursTensplace").addClass("num2");
            }
            //hoursOne
            if (hoursOne == "0") {
              $("#hoursOneplace").removeClass();
              $("#hoursOneplace").addClass("num0");
            } else if (hoursOne == "1") {
              $("#hoursOneplace").removeClass();
              $("#hoursOneplace").addClass("num1");
            } else if (hoursOne == "2") {
              $("#hoursOneplace").removeClass();
              $("#hoursOneplace").addClass("num2");
            } else if (hoursOne == "3") {
              $("#hoursOneplace").removeClass();
              $("#hoursOneplace").addClass("num3");
            } else if (hoursOne == "4") {
              $("#hoursOneplace").removeClass();
              $("#hoursOneplace").addClass("num4");
            } else if (hoursOne == "5") {
              $("#hoursOneplace").removeClass();
              $("#hoursOneplace").addClass("num5");
            } else if (hoursOne == "6") {
              $("#hoursOneplace").removeClass();
              $("#hoursOneplace").addClass("num6");
            } else if (hoursOne == "7") {
              $("#hoursOneplace").removeClass();
              $("#hoursOneplace").addClass("num7");
            } else if (hoursOne == "8") {
              $("#hoursOneplace").removeClass();
              $("#hoursOneplace").addClass("num8");
            } else {
              $("#hoursOneplace").removeClass();
              $("#hoursOneplace").addClass("num9");
            }
            //minuteTens
            if (minuteTens == "0") {
              $("#minuteTensplace").removeClass();
              $("#minuteTensplace").addClass("num0");
            } else if (minuteTens == "1") {
              $("#minuteTensplace").removeClass();
              $("#minuteTensplace").addClass("num1");
            } else if (minuteTens == "2") {
              $("#minuteTensplace").removeClass();
              $("#minuteTensplace").addClass("num2");
            } else if (minuteTens == "3") {
              $("#minuteTensplace").removeClass();
              $("#minuteTensplace").addClass("num3");
            } else if (minuteTens == "4") {
              $("#minuteTensplace").removeClass();
              $("#minuteTensplace").addClass("num4");
            } else {
              $("#minuteTensplace").removeClass();
              $("#minuteTensplace").addClass("num5");
            }
            //minuteOne
            if (minuteOne == "0") {
              $("#minuteOneplace").removeClass();
              $("#minuteOneplace").addClass("num0");
            } else if (minuteOne == "1") {
              $("#minuteOneplace").removeClass();
              $("#minuteOneplace").addClass("num1");
            } else if (minuteOne == "2") {
              $("#minuteOneplace").removeClass();
              $("#minuteOneplace").addClass("num2");
            } else if (minuteOne == "3") {
              $("#minuteOneplace").removeClass();
              $("#minuteOneplace").addClass("num3");
            } else if (minuteOne == "4") {
              $("#minuteOneplace").removeClass();
              $("#minuteOneplace").addClass("num4");
            } else if (minuteOne == "5") {
              $("#minuteOneplace").removeClass();
              $("#minuteOneplace").addClass("num5");
            } else if (minuteOne == "6") {
              $("#minuteOneplace").removeClass();
              $("#minuteOneplace").addClass("num6");
            } else if (minuteOne == "7") {
              $("#minuteOneplace").removeClass();
              $("#minuteOneplace").addClass("num7");
            } else if (minuteOne == "8") {
              $("#minuteOneplace").removeClass();
              $("#minuteOneplace").addClass("num8");
            } else {
              $("#minuteOneplace").removeClass();
              $("#minuteOneplace").addClass("num9");
            }
            //secondsTens
            if (secondsTens == "0") {
              $("#secondsTensplace").removeClass();
              $("#secondsTensplace").addClass("num0");
            } else if (secondsTens == "1") {
              $("#secondsTensplace").removeClass();
              $("#secondsTensplace").addClass("num1");
            } else if (secondsTens == "2") {
              $("#secondsTensplace").removeClass();
              $("#secondsTensplace").addClass("num2");
            } else if (secondsTens == "3") {
              $("#secondsTensplace").removeClass();
              $("#secondsTensplace").addClass("num3");
            } else if (secondsTens == "4") {
              $("#secondsTensplace").removeClass();
              $("#secondsTensplace").addClass("num4");
            } else {
              $("#secondsTensplace").removeClass();
              $("#secondsTensplace").addClass("num5");
            }

          }, 1000);
      });