


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
    alert('wrong');
}

else if (!emailInput.includes("@")){
    alert("Please enter a valid email");
}

else if (predictionInput > 100) {
    alert("be realistic");
}



else {
    alert("Thank you for your prediction!");
  }

};



var teamStats = [
    {
      team: "Leicester City",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Aston Villa",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Burnley",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Newcastle United",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Norwich City",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Watford",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Wolverhampton Wanderers",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Liverpool",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Manchester City",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Tottenham Hotspur",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Chelsea",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Brighton & Hove Albion",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Crystal Palace",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Brentford",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Southampton",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Manchester United",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "West Ham United",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Arsenal",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Everton",
      totalG: 23,
      totalGA: 10
    },
    {
      team: "Leeds United",
      totalG: 23,
      totalGA: 10
    }
  ]


  let teamNames = []
  let totalGoals = []
  let totalGoalsAgainst = []

  teamStats.forEach((obj) => {
    teamNames.push(obj.team)
    totalGoals.push(obj.totalG)
    totalGoalsAgainst.push(obj.totalGA)
  })

  console.log(teamNames)

  let ctx = getElementById('totalGoals').getContext('2d');