var prev = document.getElementById("dartarus-prev");          //上一張按鈕
var next = document.getElementById("dartarus-next");          //下一張按鈕
var items = document.getElementsByClassName("dartarus-item"); //所有項目
var index = 0 ;                                               //標號

//按鈕函式：下一張
function btnNext() {
    index++;                                 //編號遞增
    
    if (index == items.length) index = 0;      //如果編號超出範圍 編號歸零

    showItem();
    reset();
}

//按鈕函式：上一張
function btnPrev() {
    index--;                                 //編號遞減  

    if (index == -1) index = items.length -1; //如果編號超出範圍 編號等於 長度-1 
    
    showItem();
    reset();
}

next.onclick = btnNext;                      //點擊函式
prev.onclick = btnPrev;                      //點擊函式

//顯示項目函式
function showItem(){
    //迴圈執行：將每張項目的類別 dartarus-active 移除
    for(var i = 0; i < items.length; i++){
        items[i].classList.remove("dartarus-active");
    }

    //將目前要顯示的項目添加 dartarus-active 類別
    items[index].classList.add("dartarus-active");
}

// getAttribute("data-slider-duration") 取得屬性("屬性名稱")
var duration = document.getElementById("dartarus-slider").getAttribute("data-slider-duration");

//設定間隔呼叫函式(函式名稱,時間)
var auto = setInterval(btnNext,duration);

//重新設定自動播放時間
function reset() {
    clearInterval(auto);                    //清除時間
    auto = setInterval(btnNext, duration);  //重新自動播放
}