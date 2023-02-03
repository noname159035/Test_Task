function err(block_txt, block, txt){
    block_txt.innerHTML = txt;
    block.style.boxShadow =  "0px 0px 1px 0px red inset";
    block.style.border = "solid red 1px";
    global_flag = false;
    log_in.addEventListener("keydown", get_val);
}

function clear(block_txt, block){
    block_txt.innerHTML = "";
    block.style.boxShadow =  "0px 0px 1px 0px green inset";
    block.style.border = "solid green 1px";
}


function get_val(){
    let log = log_in.value;
    let phone = phone_in.value;
    let pass = pass_in.value;
    var result1 = check_log(log);
    if (result1[0]){
        clear(document.getElementById("txt1"), log_in);
    }
    else{
        err(document.getElementById("txt1"), log_in, result1[1]);
    }

    var result2 = check_phone(phone);

    if (result2[0]){
        clear(document.getElementById("txt2"), phone_in);
    }
    else{
        err(document.getElementById("txt2"), phone_in, result2[1]);
    }

    var result3 = check_pass(pass);

    if (result3[0]){
        clear(document.getElementById("txt3"), pass_in);
    }
    else{
        err(document.getElementById("txt3"), pass_in, result3[1]);
    }

    return [result1, result2, result3]
}

function send(){
    let ans = get_val();
    if (ans[0][0] && ans[1][0] && ans[2][0]){
        alert("Успешно!")
    }
}

function check_log(log){
    if (log == ""){
        return [false, "Обязательное поле"];
    }
    else if (log.length <= 5){
        return [false, "Введите более 5 символов"];
    }
    for (let i = 0; i < log.length; i++){
        if (!(data_num.includes(log[i]) || data_chr.includes(log[i]))){
            return [false, "Неверные символы"];
        }
    }
    return [true];
}

function check_phone(phone){
    if (phone == ""){

    }
    for (let i = 0; i < phone.length; i++){
        if (!(data_num.includes(phone[i]))){
            return [false, "Неверные символы"];
        }
    }
    if (phone.length < 11){
        return [false, "Введите 11 символов"];
    }
    return [true];
}

function check_pass(pass){
    if (pass == ""){
        return [false, "Обязательное поле"];
    }
    else if (pass.length <= 6){
        return [false, "Введите более 6 символов"];
    }
    return [true];
}

var global_flag = true;
var log_in = document.getElementById("login");
var phone_in = document.getElementById("phone");
var pass_in = document.getElementById("pass");
document.getElementById("button").onclick = send;


var data_chr = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', "_"]
var data_num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']



