class Cook {
    constructor(title,meal,ingredients) {
        this.title=title;//string
        this.meal=meal;//number
        this.ingredients=ingredients;//array
    }
    getTitle=function (){
        return this.title;
    }
    getMeal=function (){
        return this.meal;
    }
    getIngredients=function (){
        let arr=[];
        for(let i=0; i<this.ingredients.length;i++){
            arr.push(this.ingredients[i]);
        }console.log(arr);
    }
}

let cook=new Cook('Sườn xào chua ngọt',2,['400 g sườn thăn','4 tbsp nước mắm',
'5 tsp đường','5 tsp nước cốt chanh','1/3 bát nước sôi','Hành khô, tỏi, ớt, hành lá',
'2 quả cà chua','Hành tây (ớt chuông)'])

console.log('Tên món ăn ' + cook.getTitle());
console.log('Số người ăn ' + cook.getMeal());
console.log('Thành phần ' + cook.getIngredients());