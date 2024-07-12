function aplhabte(a){
var arr = [
"Ant","Apple","Aeroplane","Ambulance","Angry",
"Balloon","Basket","Ball","Bread","Black",
"Candle","Cat","Cow","Camel","Cup",
"Duck","Dolphin","Dice","Diamond","Dress",
"Elephent","Eye","Earth","Eagle","Egg",
"Frog","Fish","Flower","Flag","Fox",
"Gorilla","Gift","Garlic","Gold","Gym",
"House","Heart","Hockey","Horse","Hot",
"Jellyfish","Jackal","Jar","Juice","Jeans",
"Kite","Key","Kangaroo","Kettel","Keyboard",
"Lamp","Lemon","Loin","Life","Love",
"Ice cream", "Iron","Idea","Injection","Igloo",
"Monkey","Mlik","Mouse","Mango","Mother",
"Nose","Notebook",'Needle',"Newspaper",
"Orange","Octopus","Owl","Onion","Omelette",
"Paper","Pencil","Panda","Peacock","Pineapple",
"Queen","Quail",'Quiz',"Quack","Question",
"Rose","Rite","Rainbow","Rain","Rocket",
"Star","Sun","Snoweman","Soap","Sheep",
"Tiger","Tree","Turtle","Tomato","Train",
"Umbrella","uniform","Uncle","Unzip","Unicorn",
"Van","Vowels",'Vegetables',"Volleyball","Volcano",
"Wave","Watermelon","Window","Whalefish","White",
"X-ray","Xenopus","Xylophone",
"Yummy","You","Youth","Yak","Yellow",
"Zoo","Zebra","Zero","Zebra crossing","Zipper" 
];

let valueGet = document.getElementById("valueGet")

let addValue = []
for(let i = 0; i < arr.length; i++){
    if(arr[i][0].toLowerCase() == a.toLowerCase()){
       addValue.push(arr[i])
    }
}if(addValue.length > 0){
    let masg1 = Math.floor(Math.random()*addValue.length)
    valueGet.innerText = addValue[masg1]
}



}




