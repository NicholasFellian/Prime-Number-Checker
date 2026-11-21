function buttonOnClick(){
    number = document.getElementById("InputNumber")
    const number2 = number.valueAsNumber
    let x = 3
    let y = number2 - 2
    if(number2 == 1){
        window.alert(number2 + ' is not a prime number')
        document.getElementById("InputLabel").innerText = (number2 + ' is not a prime number')
        return
    }
    if(number2 == 2 || number2 == 3 || number2 == 5){
        window.alert(number2 + ' is a prime number')
        document.getElementById("InputLabel").innerText = (number2 + ' is a prime number')
        return
    }
    while(x < y){

        if(number2 % 2 == 0){
            window.alert(number2 + ' is not a prime number\n' + 'Is even Number')
            document.getElementById("InputLabel").innerText = (number2 + ' is not a prime number')
            break;
        }
        if(number2 % x == 0){
            window.alert(number2 + ' is not a prime number\n' + 'divisible by ' + x)
            document.getElementById("InputLabel").innerText = (number2 + ' is not a prime number')
            break;
            
            
        }else if(number2 % y == 0){
            window.alert(number2 + ' is not a prime number\n' + 'divisible by ' + y)
            document.getElementById("InputLabel").innerText = (number2 + ' is not a prime number')
            break;
        }
        x += 2;
        y -= 2;
        if(x >= y){
            window.alert(number2 + ' is a prime number')
            document.getElementById("InputLabel").innerText = (number2 + ' is a prime number')
        }
    }
}