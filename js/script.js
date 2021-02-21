/*Nisam uradio random postavu prilikom reload-a, jer ako ubacim random(), koliko puta ce se izvrteti petlja dok
dok ne ubaci 11 razlicitih igraca...tacnije koja je verovatnoca da ce funkcija za koliko vremena izvrsiti popunu... */

var teamData = {
  name: "",
  logo: "images/1200px-Manchester_United_FC_crest.jpg",
  players: [
    {
      name: "David",
      lastName: "De Gea",
      number: 1,
      position: "Goalkeeper",
      age: 30,
    },
    {
      name: "Victor",
      lastName: "Lindelof",
      number: 2,
      position: "Defender",
      age: 26,
    },
    {
      name: "Eric",
      lastName: "Bailly",
      number: 3,
      position: "Defender",
      age: 26,
    },
    {
      name: "Phil",
      lastName: "Jones",
      number: 4,
      position: "Defender",
      age: 28,
    },
    {
      name: "Harry",
      lastName: "Maguire",
      number: 5,
      position: "Defender",
      age: 27,
    },
    {
      name: "Luke",
      lastName: "Shaw",
      number: 23,
      position: "Defender",
      age: 25,
    },
    {
      name: "Aaron",
      lastName: "Wan-Bissaka",
      number: 29,
      position: "Defender",
      age: 23,
    },
    {
      name: "Paul",
      lastName: "Pogba",
      number: 6,
      position: "Midfielder",
      age: 27,
    },
    {
      name: "Juan",
      lastName: "Mata",
      number: 8,
      position: "Midfielder",
      age: 32,
    },
    {
      name: "Jesse",
      lastName: "Lingard",
      number: 14,
      position: "Midfielder",
      age: 28,
    },
    {
      name: "Adreas",
      lastName: "Pereira",
      number: 15,
      position: "Midfielder",
      age: 25,
    },
    {
      name: "Fred",
      lastName: "#",
      number: 17,
      position: "Goalkeeper",
      age: 27,
    },
    {
      name: "Edison",
      lastName: "Cavani",
      number: 7,
      position: "Forward",
      age: 34,
    },
    {
      name: "Anthony",
      lastName: "Martial",
      number: 9,
      position: "Forward",
      age: 25,
    },
    {
      name: "Marcus",
      lastName: "Rashford",
      number: 10,
      position: "Forward",
      age: 23,
    },
  ],
};

var headerImg;
var newElementplayer;
var newElementPlayerCard;
var newElementPlayerName;

var arrayPlayer = [];
var arrayPlayerCard = [];
var arrayPlayerPicture = [];
var arrayPlayerPictureImg = [];
var arrayPlayerPictureImgSrc = [
  "images/players/david_de_gea.jpg",
  "images/players/victor_lindelof.png",
  "images/players/eric_baily.png",
  "images/players/phil_jones.png",
  "images/players/harry_maquire.png",
  "images/players/luke_shaw.png",
  "images/players/aaron_wan-bissaka.png",
  "images/players/paul_pogba.png",
  "images/players/huan_mata.png",
  "images/players/jesse_lingard.png",
  "images/players/andreas_perreira.png",
  "images/players/fred.png",
  "images/players/edison_cavanni.png",
  "images/players/anthony_martial.png",
  "images/players/marcus_rashford.png",
];
var arrayPlayerName = [];
var arrayPlayerLastName = [];
var arrayPlayerAge = [];
var arrayPlayerNumber = [];
var arrayPlayerPosition = [];

var pitchPlayers;
var subPlayers;

var nameIDpitch;
var nameIDsub;
var randomIDpitch;

var players = function (team) {
  headerImg = document.createElement("img");
  headerImg.setAttribute("src", teamData.logo);
  document.querySelector("header").appendChild(headerImg);

  pitchPlayers = document.createElement("div");
  pitchPlayers.classList.add("pitch-players");
  document.querySelector("main").appendChild(pitchPlayers);

  subPlayers = document.createElement("div");
  subPlayers.classList.add("substitution-players");
  document.querySelector("main").appendChild(subPlayers);

  for (var i = 0; i < 11; i++) {
    arrayPlayer[i] = document.createElement("div");
    arrayPlayer[i].classList.add("player");
    document.querySelector(".pitch-players").appendChild(arrayPlayer[i]);

    arrayPlayerCard[i] = document.createElement("div");
    arrayPlayerCard[i].classList.add("player__card");
    arrayPlayer[i].appendChild(arrayPlayerCard[i]);

    arrayPlayerPicture[i] = document.createElement("div");
    arrayPlayerPicture[i].classList.add("player__card-img");
    arrayPlayerCard[i].appendChild(arrayPlayerPicture[i]);

    arrayPlayerPictureImg[i] = document.createElement("img");
    arrayPlayerPicture[i].appendChild(arrayPlayerPictureImg[i]);
    arrayPlayerPictureImg[i].setAttribute("src", arrayPlayerPictureImgSrc[i]);

    arrayPlayerName[i] = document.createElement("p");
    arrayPlayerName[i].classList.add("name");
    arrayPlayerCard[i].appendChild(arrayPlayerName[i]);

    arrayPlayerLastName[i] = document.createElement("p");
    arrayPlayerLastName[i].classList.add("lastName");
    arrayPlayerCard[i].appendChild(arrayPlayerLastName[i]);

    arrayPlayerNumber[i] = document.createElement("p");
    arrayPlayerNumber[i].classList.add("number");
    arrayPlayerCard[i].appendChild(arrayPlayerNumber[i]);

    arrayPlayerPosition[i] = document.createElement("p");
    arrayPlayerPosition[i].classList.add("position");
    arrayPlayerCard[i].appendChild(arrayPlayerPosition[i]);

    arrayPlayerAge[i] = document.createElement("p");
    arrayPlayerAge[i].classList.add("age");
    arrayPlayerCard[i].appendChild(arrayPlayerAge[i]);

    arrayPlayerName[i].textContent = "Name:" + " " + team.players[i].name;
    arrayPlayerLastName[i].textContent =
      "Last Name:" + " " + team.players[i].lastName;
    arrayPlayerNumber[i].textContent = "Number:" + " " + team.players[i].number;
    arrayPlayerPosition[i].textContent =
      "Position:" + " " + team.players[i].position;
    arrayPlayerAge[i].textContent = "Age:" + " " + team.players[i].age;
  }

  for (var i = 11; i < 15; i++) {
    arrayPlayer[i] = document.createElement("div");
    arrayPlayer[i].classList.add("player");
    document.querySelector(".substitution-players").appendChild(arrayPlayer[i]);

    arrayPlayerCard[i] = document.createElement("div");
    arrayPlayerCard[i].classList.add("player__card");
    arrayPlayer[i].appendChild(arrayPlayerCard[i]);

    arrayPlayerPicture[i] = document.createElement("div");
    arrayPlayerPicture[i].classList.add("player__card-img");
    arrayPlayerCard[i].appendChild(arrayPlayerPicture[i]);

    arrayPlayerPictureImg[i] = document.createElement("img");
    arrayPlayerPicture[i].appendChild(arrayPlayerPictureImg[i]);
    arrayPlayerPictureImg[i].setAttribute("src", arrayPlayerPictureImgSrc[i]);

    arrayPlayerName[i] = document.createElement("p");
    arrayPlayerName[i].classList.add("name");
    arrayPlayerCard[i].appendChild(arrayPlayerName[i]);

    arrayPlayerLastName[i] = document.createElement("p");
    arrayPlayerLastName[i].classList.add("lastName");
    arrayPlayerCard[i].appendChild(arrayPlayerLastName[i]);

    arrayPlayerNumber[i] = document.createElement("p");
    arrayPlayerNumber[i].classList.add("number");
    arrayPlayerCard[i].appendChild(arrayPlayerNumber[i]);

    arrayPlayerPosition[i] = document.createElement("p");
    arrayPlayerPosition[i].classList.add("position");
    arrayPlayerCard[i].appendChild(arrayPlayerPosition[i]);

    arrayPlayerAge[i] = document.createElement("p");
    arrayPlayerAge[i].classList.add("age");
    arrayPlayerCard[i].appendChild(arrayPlayerAge[i]);

    arrayPlayerName[i].textContent = "Name:" + " " + team.players[i].name;
    arrayPlayerLastName[i].textContent =
      "Last Name:" + " " + team.players[i].lastName;
    arrayPlayerNumber[i].textContent = "Number:" + " " + team.players[i].number;
    arrayPlayerPosition[i].textContent =
      "Position:" + " " + team.players[i].position;
    arrayPlayerAge[i].textContent = "Age:" + " " + team.players[i].age;
  }

  function getRndInteger() {
    return Math.floor(Math.random() * (15 - 11)) + 11;
  }

  function swapNodes() {
    nameIDpitch = Math.floor(Math.random() * 11);
    nameIDsub = getRndInteger();

    var n1 = arrayPlayerCard[nameIDpitch];
    var n2 = arrayPlayerCard[nameIDsub];

    var p1 = n1.parentNode;
    var p2 = n2.parentNode;

    var i1, i2;

    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;

    for (var i = 0; i < p1.children.length; i++) {
      if (p1.children[i].isEqualNode(n1)) {
        i1 = i;
      }
    }
    for (var i = 0; i < p2.children.length; i++) {
      if (p2.children[i].isEqualNode(n2)) {
        i2 = i;
      }
    }

    if (p1.isEqualNode(p2) && i1 < i2) {
      i2++;
    }
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);

    let temp = arrayPlayerCard[nameIDpitch];
    arrayPlayerCard[nameIDpitch] = arrayPlayerCard[nameIDsub];
    arrayPlayerCard[nameIDsub] = temp;
  }

  setInterval(() => {
    swapNodes();
  }, 60000);
};

players(teamData);
