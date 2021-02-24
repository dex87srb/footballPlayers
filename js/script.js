var teamData = {
  name: "",
  logo: "images/1200px-Manchester_United_FC_crest.jpg",
  players: [
    {
      image: "images/players/david_de_gea.jpg",
      name: "David",
      lastName: "De Gea",
      number: 1,
      position: "Goalkeeper",
      age: 30,
    },
    {
      image: "images/players/victor_lindelof.png",
      name: "Victor",
      lastName: "Lindelof",
      number: 2,
      position: "Defender",
      age: 26,
    },
    {
      image: "images/players/eric_baily.png",
      name: "Eric",
      lastName: "Bailly",
      number: 3,
      position: "Defender",
      age: 26,
    },
    {
      image: "images/players/phil_jones.png",
      name: "Phil",
      lastName: "Jones",
      number: 4,
      position: "Defender",
      age: 28,
    },
    {
      image: "images/players/harry_maquire.png",
      name: "Harry",
      lastName: "Maguire",
      number: 5,
      position: "Defender",
      age: 27,
    },
    {
      image: "images/players/luke_shaw.png",
      name: "Luke",
      lastName: "Shaw",
      number: 23,
      position: "Defender",
      age: 25,
    },
    {
      image: "images/players/aaron_wan-bissaka.png",
      name: "Aaron",
      lastName: "Wan-Bissaka",
      number: 29,
      position: "Defender",
      age: 23,
    },
    {
      image: "images/players/paul_pogba.png",
      name: "Paul",
      lastName: "Pogba",
      number: 6,
      position: "Midfielder",
      age: 27,
    },
    {
      image: "images/players/huan_mata.png",
      name: "Juan",
      lastName: "Mata",
      number: 8,
      position: "Midfielder",
      age: 32,
    },
    {
      image: "images/players/jesse_lingard.png",
      name: "Jesse",
      lastName: "Lingard",
      number: 14,
      position: "Midfielder",
      age: 28,
    },
    {
      image: "images/players/andreas_perreira.png",
      name: "Adreas",
      lastName: "Pereira",
      number: 15,
      position: "Midfielder",
      age: 25,
    },
    {
      image: "images/players/fred.png",
      name: "Fred",
      lastName: "#",
      number: 17,
      position: "Goalkeeper",
      age: 27,
    },
    {
      image: "images/players/edison_cavanni.png",
      name: "Edison",
      lastName: "Cavani",
      number: 7,
      position: "Forward",
      age: 34,
    },
    {
      image: "images/players/anthony_martial.png",
      name: "Anthony",
      lastName: "Martial",
      number: 9,
      position: "Forward",
      age: 25,
    },
    {
      image: "images/players/marcus_rashford.png",
      name: "Marcus",
      lastName: "Rashford",
      number: 10,
      position: "Forward",
      age: 23,
    },
  ],
};

var headerImg;

var arrayPlayer;
var arrayPlayerCard;
var arrayPlayerPicture;
var arrayPlayerPictureImg;
var arrayPlayerName;
var arrayPlayerLastName;
var arrayPlayerAge;
var arrayPlayerNumber;
var arrayPlayerPosition;

var pitchPlayers = [];
var subPlayers = [];

var nameIDpitch;
var nameIDsub;

function getRandom(arr) {
  return Math.round(Math.random() * (arr.length - 1));
}

function swapNodes() {
  var firstSquadPlayers = pitchPlayers.querySelectorAll(".player");
  var substitutePlayers = subPlayers.querySelectorAll(".player");

  var firstPlayer = firstSquadPlayers[getRandom(firstSquadPlayers)];
  var substitutePlayer = substitutePlayers[getRandom(substitutePlayers)];

  var n1 = firstPlayer;
  var n2 = substitutePlayer;

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

function addPlayers() {
  headerImg = document.createElement("img");
  headerImg.setAttribute("src", teamData.logo);
  document.querySelector("header").appendChild(headerImg);

  pitchPlayers = document.createElement("div");
  pitchPlayers.setAttribute("id", "pitch-players");
  document.querySelector("main").appendChild(pitchPlayers);

  subPlayers = document.createElement("div");
  subPlayers.setAttribute("id", "substitution-players");
  document.querySelector("main").appendChild(subPlayers);

  while (teamData.players.length) {
    var randomPlayer = getRandom(teamData.players);

    var player = createPlayer(teamData.players[randomPlayer]);
    var container = teamData.players.length > 4 ? pitchPlayers : subPlayers;

    if (!pitchPlayers.hasChildNodes() || pitchPlayers.childNodes.length < 12)
      container.appendChild(player);
    else container.appendChild(player);

    teamData.players.splice(randomPlayer, 1);
  }
}

function createPlayer(playerData) {
  arrayPlayer = document.createElement("div");
  arrayPlayer.classList.add("player");

  arrayPlayerCard = document.createElement("div");
  arrayPlayerCard.classList.add("player__card");
  arrayPlayer.appendChild(arrayPlayerCard);

  arrayPlayerPicture = document.createElement("div");
  arrayPlayerPicture.classList.add("player__card-img");
  arrayPlayerCard.appendChild(arrayPlayerPicture);

  arrayPlayerPictureImg = document.createElement("img");
  arrayPlayerPicture.appendChild(arrayPlayerPictureImg);
  arrayPlayerPictureImg.setAttribute("src", playerData.image);

  arrayPlayerName = document.createElement("p");
  arrayPlayerName.classList.add("name");
  arrayPlayerCard.appendChild(arrayPlayerName);

  arrayPlayerLastName = document.createElement("p");
  arrayPlayerLastName.classList.add("lastName");
  arrayPlayerCard.appendChild(arrayPlayerLastName);

  arrayPlayerNumber = document.createElement("p");
  arrayPlayerNumber.classList.add("number");
  arrayPlayerCard.appendChild(arrayPlayerNumber);

  arrayPlayerPosition = document.createElement("p");
  arrayPlayerPosition.classList.add("position");
  arrayPlayerCard.appendChild(arrayPlayerPosition);

  arrayPlayerAge = document.createElement("p");
  arrayPlayerAge.classList.add("age");
  arrayPlayerCard.appendChild(arrayPlayerAge);

  arrayPlayerName.textContent = "Name:" + " " + playerData.name;
  arrayPlayerLastName.textContent = "Last Name:" + " " + playerData.lastName;
  arrayPlayerNumber.textContent = "Number:" + " " + playerData.number;
  arrayPlayerPosition.textContent = "Position:" + " " + playerData.position;
  arrayPlayerAge.textContent = "Age:" + " " + playerData.age;

  return arrayPlayer;
}

addPlayers();
setInterval(() => {
  swapNodes();
}, 60000);
