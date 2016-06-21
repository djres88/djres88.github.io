// rnorm function uses Marsaglia's polar method to generate random normally-distributed numbers.
function rnorm(mean, stdev) {
  var u1, u2, v1, v2, s;
  if (rnorm.v2 === null) {
    do {
      u1 = Math.random();
      u2 = Math.random();

      v1 = 2 * u1 - 1;
      v2 = 2 * u2 - 1;
      s = v1 * v1 + v2 * v2;
    } while (s === 0 || s >= 1);

    rnorm.v2 = v2 * Math.sqrt(-2 * Math.log(s) / s);
    return stdev * v1 * Math.sqrt(-2 * Math.log(s) / s) + mean;
  }

  v2 = rnorm.v2;
  rnorm.v2 = null;
  return stdev * v2 + mean;
}


$(document).ready(function() {
  // Append horses to the table.
  for (var i = 1; i <= 20; i++) {
    var speed, variance;
    // Add 10 horses by default
    if (i <= 10) {
      speed = 90;
      variance = 10;
    } else {
      speed = "";
      variance = "";
    }
    $(".horse-table").append(
      '<div class="horse" id=horse-' + i + '><div class="horse-number">'+i+'</div><input class="predicted-speed" type="number" name="name" value="'+speed+'"><input class="predicted-var" type="number" name="name" value="'+variance+'"><div class="reset-horse">X</div></div>'
    );
  }

  // Reset function (can delete horses from race)
  var reset = function() {
    var id = $(this).parent().attr("id");
    if (!id) {
      return;
    }
    var idNum = id.split("");
    if (idNum.length == 8) {
      idNum = idNum[6] + idNum[7];
    } else {
      idNum = idNum[6];
    }
    $("#"+id).empty().append(
      '<div class="horse-number">' + idNum + '</div><input class="predicted-speed" type="number" name="name" value="'+speed+'"><input class="predicted-var" type="number" name="name" value="'+variance+'"><div class="reset-horse">X</div>'
    );
    $(".reset-horse").on('click', reset);
  };

  $(".reset-horse").on('click', reset);

  // Run the rnorm once before the data loads.
  function preloadSim() {
    $(".horse").each(function() {
      var num = this.children[0].innerHTML;
      var speed = Number(this.children[1].value);
      var stDev = Math.sqrt(this.children[2].value);
      rnorm(speed, stDev);
    });
  }
  preloadSim();

  function initialize() {
    var sims = {};
    $(".horse").each(function() {
      var num = Number(this.children[0].innerHTML);
      var speed = Number(this.children[1].value);
      var stDev = Math.sqrt(this.children[2].value);

      if (speed && stDev) {
        sims[num] = {};
        sims[num].speed = 0;
        sims[num].timesWon = 0;
      }

    });
    return sims;
  }

  //Run simulations a set number of times
  function runSimulation(num) {
    var sims = initialize();
    var i = 0;

    while (i < num) {
      var maxSpeed = 0;
      var winningHorseNumber = 0;

      $(".horse").each(function() {
        var num = Number(this.children[0].innerHTML);
        var speed = Number(this.children[1].value);
        var stDev = Math.sqrt(this.children[2].value);

        if (speed && stDev) {
          sampleSpeed = rnorm(speed, stDev);
          sims[num].speed += sampleSpeed;
        }
        if (sampleSpeed > maxSpeed) {
          winningHorseNumber = num;
          maxSpeed = sampleSpeed;
        }
      });
      sims[winningHorseNumber].timesWon += 1;

      i++;
    }

    Object.keys(sims).forEach(function(key) {
      // NOTE: Can add stats later:
      // sims[key].averageSpeed = Math.round(sims[key].speed/num);
      // sims[key].percentWon = 100*(sims[key].timesWon/num);
      var predictedOdds = (sims[key].timesWon/num);
      $("#ho-"+key).children()[1].innerHTML = ((1/predictedOdds) - 1).toFixed(1);
    });

    return sims;
  }

  // Kelly criterion determines the % of one's bankroll to bet, given odds received for winning ("board odds") and expected chance of winning ("true odds"). This limits the chance of going broke off a good but unlucky bet (e.g. losing on a 3/1 horse that should be 1/1, or a 10/1 horse that should be 2/1).
  function kelly(odds, prob) {
    return ((odds * prob) - (1 - prob)) / odds;
  }


  // JQUERY SELECTORS
  // Run Simulation
  $("#run-simulation").on('click', function() {
    $('.horse-odds').each(function() {
      this.children[1].innerHTML = "";
    });
    return runSimulation(100000);
  });

  // Update % Diff between expected/actual odds
  $(".actual-odds").find("input").each(function(i) {
    $(this).change(function() {
      var horseNum = i + 1;
      var horse = $("#ho-" + horseNum).children();
      var expectedOdds = Number($(horse[1]).html());
      var actualOdds = Number(this.value);
      var bankroll = $("#bankroll")[0].valueAsNumber;
      console.log(actualOdds, expectedOdds);


      horse[3].innerHTML = (100 * (actualOdds - expectedOdds) / expectedOdds).toFixed(0) + "%";
      horse[4].innerHTML = (bankroll * kelly(actualOdds, (expectedOdds + 1)/100)).toFixed(0);
    });
  });

});
