let data = [
  {
    title: "Work",
    timeframes:{
        daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
      previous: 128
      },
    }
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      },
    }
  },
  {
    title: "Study",
    timeframe: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      },
    }
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      },
    }
  },
  {
    title: "Social",
    timeframes:{
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      },
    }
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      },
    }
  }
]





function Daily(){
  //console.log()
  document.getElementById("workcurrent").innerHTML = data[0].timeframes.daily.current + "hrs"
  document.getElementById("exercisecurrent").innerHTML= data[3].timeframes.daily.current +"hrs"
  document.getElementById("playcurrent").innerHTML= data[1].timeframes.daily.current + "hrs"
  document.getElementById("socialcurrent").innerHTML= data[4].timeframes.daily.current +"hrs"
  document.getElementById("studycurrent").innerHTML= data[2].timeframe.daily.current +'hrs'
  document.getElementById("selfcarecurrent").innerHTML= data[5].timeframes.daily.current + "hrs"
}

function Weekly(){
  //console.log()
  document.getElementById("workcurrent").innerHTML=data[0].timeframes.weekly.current + "hrs"
  document.getElementById("playcurrent").innerHTML=data[1].timeframes.weekly.current + "hrs"
  document.getElementById("studycurrent").innerHTML=data[2].timeframe.weekly.current + "hrs"
  document.getElementById("exercisecurrent").innerHTML=data[3].timeframes.weekly.current + "hrs"
  document.getElementById("socialcurrent").innerHTML=data[4].timeframes.weekly.current + "hrs"
  document.getElementById("selfcarecurrent").innerHTML=data[5].timeframes.weekly.current + "hrs"
}

function Monthly(){
  //console.log()
  document.getElementById("workcurrent").innerHTML=data[0].timeframes.monthly.current + "hrs"
  document.getElementById("playcurrent").innerHTML=data[1].timeframes.monthly.current + "hrs"
  document.getElementById("studycurrent").innerHTML=data[2].timeframe.monthly.current + "hrs"
  document.getElementById("exercisecurrent").innerHTML=data[3].timeframes.monthly.current + "hrs"
  document.getElementById("socialcurrent").innerHTML=data[4].timeframes.monthly.current + "hrs"
  document.getElementById("selfcarecurrent").innerHTML=data[5].timeframes.monthly.current + "hrs"
}

