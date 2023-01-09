const month = Math.ceil(Math.random()*12);
switch(month){
    case (12 || 1 || 2) : document.write(`<p>${month}월은 겨울입니다.</p>`);
    break;
    case (3 || 4 || 5) : document.write(`<p>${month}월은 봄입니다.</p>`);
    break;
    case (6 || 7 || 8) : document.write(`<p>${month}월은 여름입니다.</p>`);
    break;
    case (9 || 10 || 11) : document.write(`<p>${month}월은 가을입니다.</p>`);
    break;
}

switch(month){
    case 1:
    case 2:
    case 12:
        console.log(month+'월', '겨울');
        break;
    case 3:
    case 4:
    case 5:
        console.log(month+'월', '봄');
        break;
    case 6:
    case 7:
    case 8:
        console.log(month+'월', '여름');
        break;
    case 9:
    case 10:
    case 11:
        console.log(month+'월', '가을');
        break;
    
}