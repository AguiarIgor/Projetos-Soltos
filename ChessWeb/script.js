const th = document.querySelectorAll("th");
var count = 0;
var change = 0;

for (let i = 0; i < th.length; ++i) {
    ++count;
    if(change % 2 == 0){
        if(i % 2 == 1){
            th[i].style.backgroundColor = "green";
        }
    }
    if(change % 2 == 1){
        if(i % 2 == 0){
            th[i].style.backgroundColor = "green";
        }
    }
    if(count == 8){
        count = 0;
        ++change;
    }
}