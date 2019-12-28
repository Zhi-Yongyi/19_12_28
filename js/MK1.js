var li = document.getElementsByTagName("li");
var num=5;//一组放最多放5个
var Arrh=[0,0,0,0,0];//记录每一列的高
var number = 0;//计数器
var left = 0;//每一行的左边距
var listH = 0;//高度标准
for(var index=0;index<li.length;index++){
    if(listH>(Arrh[number]+li[index].offsetHeight)){
        listH=(Arrh[number]+li[index].offsetHeight);
    }
    if(Arrh[number]<=listH){
    li[index].style.top=Arrh[number]+"px";
    li[index].style.left=parseFloat(number)*19.9+"%";
    Arrh[number]+=(li[index].offsetHeight+10);
    }
    else{
        index--
    }
    console.log(Arrh[index]);
    number++;
    if(number==num){
        number=0;
        listH=(li[index+1].offsetHeight+Arrh[0]);
    }
}
console.log(Arrh);