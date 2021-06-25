let options = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function SelectBox(element){
    var id = element.id;
    var box = document.getElementById(id);
    box.innerText = "X";
    deleteOption(id);//delete options from array
    checkLine("X");
    Enemy();
    checkLine("O");
    console.log(options);
}


function checkLine(letter){
    var arr = [];
    for(var i = 1; i <= 9; i++){
        arr.push(getElement(i));
    }
    var count = 0;
    var mat = [["1", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            mat[i][j] = arr[count];
            count += 1;
        }
    }
    if(letter == "X")
    {
        if(VerticalLines(mat, letter) || HorizontalLines(mat, letter) ||  CrossLine(mat, letter)){
            Winner();
        }
    }
    else{
        if(VerticalLines(mat, letter) || HorizontalLines(mat, letter) ||  CrossLine(mat, letter)){
            WinnerEnemy();
        }
    }
    
}


function Winner(){
    document.getElementById("etiqueta").style.display = "block";
    setTimeout(() =>{
        window.location.reload(1);
    }, 10000);
}



function deleteOption(n){
    for(var i = 0; i < options.length; i++){
        if(options[i] == n){
            options.splice(i, 1);
        }
    }
}

function Enemy(){
    var id = getRandomNum(options.length);
    document.getElementById(options[id]).innerText = "O";
    deleteOption(options[id]);
    console.log(options.length);
}


function WinnerEnemy(){
    document.getElementById("etiqueta2").style.display = "block";
    setTimeout(() =>{
        window.location.reload(1);
    }, 10000);
}


function getRandomNum(size){
    return Math.floor(Math.random() * size);
}


function VerticalLines(arr, letter){
    for(var i = 0; i < 3; i++){
        var count = 0;
        for(var j = 0; j < 3; j++){
            if(arr[j][i] == letter){
                count += 1;
            }
        }
        if(count == 3){
            return true;
        }
    }
    return false;
}

function HorizontalLines(arr, letter){
    for(var i = 0; i < 3; i++){
        var count = 0;
        for(var j = 0; j < 3; j++){
            if(arr[i][j] == letter){
                count += 1;
            }
        }
        if(count == 3){
            return true;
        }
    }
    return false;
}

function CrossLine(arr, letter){
    if(arr[0][0] == letter && arr[1][1] == letter && arr[2][2] == letter){
        return true;
    }
    
    if(arr[0][2] == letter && arr[1][1] == letter && arr[2][0] == letter){
        return true;
    }

    return false;
}



function getElement(id){
    return document.getElementById(id).innerText;
}


