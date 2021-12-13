let result;
let bieuThuc = "";

function themChuoi(themChuoi){
    bieuThuc += themChuoi;
    document.getElementById('result').innerText=bieuThuc;
}
//Tạo ra một function mới để khi bấm
// dấu bằng thì máy tính sẽ xử lý
// biểu thức dạng chuỗi trên màn hình
// thành dạng số//
function dispEqu() {
    xuLybieuthuc();
    bieuThuc=""; //tạo khoảng trống//
}
//Ấn nút C thì xóa chuỗi//
function dispC() {
    document.getElementById('result').innerText="";
}

//Cộng trừ nhân chia như bt//
function xuLybieuthuc(){
    result= eval(bieuThuc);
    document.getElementById("result").innerText=result;
}

//khi ấn vào nút nào thì màn hình sẽ hiện lên nút đó
function dispOne(){
    themChuoi('1');
}
function dispTwo(){
    themChuoi('2');
}
function dispThr(){
    themChuoi('3');
}
function dispFou(){
    themChuoi('4');
}
function dispFiv() {
    themChuoi('5');
}
function dispSix() {
    themChuoi('6');
}
function dispSev() {
    themChuoi('7');
}
function dispEig() {
    themChuoi('8');
}
function dispNin() {
    themChuoi('9');
}
function dispZer() {
    themChuoi('0');
}
function dispPlu() {
    themChuoi('+');
}
function dispMin() {
    themChuoi('-');
}
function dispMul() {
    themChuoi('*');
}
function dispDiv() {
    themChuoi('/');
}


