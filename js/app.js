


const countdown = () => {
    const datecounter = new Date("November 20, 2021 07:30:00").getTime();
    const ahora = new Date().getTime();
    const difference = datecounter - ahora;
    


//time calculated in milliseconds, so need to convert them
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
//calculate how long until gameweek
const daysLeft = Math.floor(difference/day);
const hoursLeft = Math.floor((difference % day) / hour);
const minutesLeft = Math.floor((difference % hour) / minute);
const secondsLeft = Math.floor((difference % minute)/second);

document.querySelector(".day").innerText = daysLeft;
document.querySelector(".hour").innerText = hoursLeft;
document.querySelector(".minute").innerText = minutesLeft;
document.querySelector(".second").innerText = secondsLeft;

};

setInterval(countdown, 1000);

const validatePredictions = () => {

const nameInput = document.getElementById('name').value;
const emailInput = document.getElementById('email').value;
const predictionInput = document.getElementById('prediction').value;

if (nameInput.length < 2) 
{
    alert('Please enter your full name');
}

else if (!emailInput.includes("@")){
    alert("Please enter a valid email");
}

else if (predictionInput < 0) {
    alert("Please enter a number greater than or equal to zero");
}


else {
    alert("Thank you for your prediction!");
  }

};



var teamStats = [
  {
    team: "Stoke City",
    totalG: 17,
    totalGA: 16,
    mp: 14
  },
  {
    team: "West Bromwich Albion",
    totalG: 25,
    totalGA: 11,
    mp: 14
  },
  {
    team: "Middlesbrough",
    totalG: 17,
    totalGA: 13,
    mp: 14
  },
  {
    team: "AFC Bournemouth",
    totalG: 24,
    totalGA: 8,
    mp: 14
  },
  {
    team: "Hull City",
    totalG: 9,
    totalGA: 20,
    mp: 14
  },
  {
    team: "Swansea City",
    totalG: 15,
    totalGA: 17,
    mp: 14
  },
  {
    team: "Queens Park Rangers",
    totalG: 25,
    totalGA: 22,
    mp: 14
  },
  {
    team: "Cardiff City",
    totalG: 12,
    totalGA: 26,
    mp: 14
  },
  {
    team: "Fulham",
    totalG: 33,
    totalGA: 14,
    mp: 14
  },
  {
    team: "Birmingham City",
    totalG: 12,
    totalGA: 17,
    mp: 14
  },
  {
    team: "Bristol City",
    totalG: 15,
    totalGA: 20,
    mp: 14
  },
  {
    team: "Preston North End",
    totalG: 14,
    totalGA: 18,
    mp: 14
  },
  {
    team: "Nottingham Forest",
    totalG: 18,
    totalGA: 20,
    mp: 14
  },
  {
    team: "Derby County",
    totalG: 10,
    totalGA: 11,
    mp: 14
  },
  {
    team: "Barnsley",
    totalG: 9,
    totalGA: 20,
    mp: 14
  },
  {
    team: "Blackburn Rovers",
    totalG: 23,
    totalGA: 17,
    mp: 14
  },
  {
    team: "Huddersfield Town",
    totalG: 18,
    totalGA: 17,
    mp: 14
  },
  {
    team: "Reading",
    totalG: 20,
    totalGA: 24,
    mp: 14
  },
  {
    team: "Blackpool",
    totalG: 17,
    totalGA: 18,
    mp: 14
  },
  {
    team: "Millwall",
    totalG: 15,
    totalGA: 15,
    mp: 14
  },
  {
    team: "Coventry City",
    totalG: 20,
    totalGA: 17,
    mp: 14
  },
  {
    team: "Peterborough United",
    totalG: 16,
    totalGA: 27,
    mp: 14
  },
  {
    team: "Sheffield United",
    totalG: 20,
    totalGA: 21,
    mp: 14
  },
  {
    team: "Luton Town",
    totalG: 23,
    totalGA: 18,
    mp: 14
  }
]


  let teamNames = []
  let totalGoals = []
  let totalGoalsAgainst = []
  let totalMP = []

  let teamAvgGoals = []

  teamStats.forEach((obj) => {
    teamNames.push(obj.team)
    totalGoals.push(obj.totalG)
    totalGoalsAgainst.push(obj.totalGA)
    totalMP.push(obj.mp)
  })


  function getAvgGoals(goals,mp) {

    var avgGoals = goals / mp

    teamAvgGoals.push(avgGoals)
  }

  totalGoals.forEach((goals, index) => getAvgGoals(goals, totalMP[index]))
 
  
  //Could write a loop for this to clean it up a bit once I add MP so not running it so many times
 

  

  

