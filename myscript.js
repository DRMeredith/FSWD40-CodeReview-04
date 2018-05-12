		
		// ARRAY //

		var Persons = [
            {
			name: 'John',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/p1.jpeg",	
			likes: 0  
			},

			{
			name: 'Sally',
			surname: 'Dee',
			favoritePerformers: ["Mark Zuckerburg", "Bill Gates", "Kim Dotcom"],
			age: 27,
   			myPhoto: "img/p2.jpeg",	
			likes: 0  
			},

			{
			name: 'Horatio',
			surname: 'Parralax',
			favoritePerformers: ["Boris Johnson", "Jim Jeffries", "Bhad Bhabie"],
			age: 33,
   			myPhoto: "img/p3.jpeg",	
			likes: 0 
			},

			{
			name: 'Wendy',
			surname: 'Ooi',
			favoritePerformers: ["Travis Scott", "Migos", "Metro Boomin"],
			age: 25,
   			myPhoto: "img/p4.jpeg",	
			likes: 0  
			},
];

// FIRST ATTEMPT //

// var firstLikesCount = 0
// var secondLikesCount = 0
// var thirdLikesCount = 0
// var fourthLikesCount = 0

// function likesFirst() {
// 	firstLikesCount += 1;
// 	document.getElementById("likesOne").innerHTML = firstLikesCount
// };

// function likesSecond() {
// 	likesCount += 1;
// 	document.getElementById("likesTwo").innerHTML = secondLikesCount
// };

// function likesThird() {
// 	likesCount += 1;
// 	document.getElementById("likesThree").innerHTML = thirdLikesCount
// };

// function likesFourth() {
// 	likesCount += 1;
// 	document.getElementById("likesFour").innerHTML = fourthLikesCount
// };

// FINAL //

function likes(j) {
	var i = 0;
	i = parseInt(j);
	Persons[i].likes = Persons[i].likes +1;
	var x = document.getElementsByClassName("likesCount");
	x[i].innerHTML = Persons[i].likes;
	console.log(Persons[i].likes);
};

//     for (var p = 0; p < Persons.length - 1; p++) {
    
// 	var a = document.getElementsByClassName("firstName");
// 	a[p].innerHTML = Persons[p].name;

// 	var b = document.getElementsByClassName("secondName");
// 	b[p].innerHTML = Persons[p].name;

// 	var c = document.getElementsByClassName("ages");
// 	c[p].innerHTML = Persons[p].age;

// };


// IMAGES //

// for (var l = 0; l < Persons.length -1; l++) {
// this.img = document.createElement("img");
// this.img.src = Persons[l].myPhoto
// src = getElementsById("img1")
// src.appendChild(this.img)

function picsFunction() {
    var d = document.createElement("IMG");
    d.setAttribute("src", Persons[0].myPhoto);
    d.setAttribute("width", "150");
    d.setAttribute("height", "150");
    d.setAttribute("alt", "Lover One");
    document.getElementById("img1").appendChild(d);

    var f = document.createElement("IMG");
    f.setAttribute("src", Persons[1].myPhoto);
    f.setAttribute("width", "150");
    f.setAttribute("height", "150");
    f.setAttribute("alt", "Lover Two");
    document.getElementById("img2").appendChild(f);

    var g = document.createElement("IMG");
    g.setAttribute("src", Persons[2].myPhoto);
    g.setAttribute("width", "150");
    g.setAttribute("height", "150");
    g.setAttribute("alt", "Lover Three");
    document.getElementById("img3").appendChild(g);

    var h = document.createElement("IMG");
    h.setAttribute("src", Persons[3].myPhoto);
    h.setAttribute("width", "150");
    h.setAttribute("height", "150");
    h.setAttribute("alt", "Lover Four");
    document.getElementById("img2").appendChild(f);

    console.log("Working")
};









// document.getElementById("img1").innerHTML = Persons[0].myPhoto;
// document.getElementById("img2").innerHTML = Persons[1].myPhoto;
// document.getElementById("img3").innerHTML = Persons[2].myPhoto;
// document.getElementById("img4").innerHTML = Persons[3].myPhoto;









