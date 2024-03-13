$(document).ready(function () {
  var attemptNo = 1;
  let btnStart = document.getElementById("btnStart");
  let btnTalkToNPC = document.getElementById("btnTalkToNPC");
  let btnRestart = document.getElementById("btnRestart");

  var items = ['scroll', 'medal', 'wine', 'food']
  // answers
  var a1 = items[Math.floor(Math.random() * 4)];
  var a2 = items[Math.floor(Math.random() * 4)];
  var a3 = items[Math.floor(Math.random() * 4)];
  var a4 = items[Math.floor(Math.random() * 4)];
  var answer = [a1, a2, a3, a4];

  var scrollACount = 0;
  var medalACount = 0;
  var wineACount = 0;
  var foodACount = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == 'scroll') {
      scrollACount += 1;
    } else if (answer[i] == 'medal') {
      medalACount += 1;
    } else if (answer[i] == 'wine') {
      wineACount += 1;
    } else if (answer[i] == 'food') {
      foodACount += 1;
    }
  }
  var answerCountArray = [scrollACount, medalACount, wineACount, foodACount];

// btnStart
$('#btnStart').click(function () {
  btnStart.style.display = "none";
  btnTalkToNPC.style.display = "block";
  btnRestart.style.display = "block";
  $("#instructionTitle").remove();
  $("#instructionDesc").remove();
  $("#instructionMobile").remove();

  $('.table-responsive').append(`
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" style="width: 5%">Attempt No.</th>
                        <th scope="col" style="width: 15%">Statue 1</th>
                        <th scope="col" style="width: 15%">Statue 2</th>
                        <th scope="col" style="width: 15%">Statue 3</th>
                        <th scope="col" style="width: 15%">Statue 4</th>
                        <th scope="col" style="width: 40%">NPC Feedback</th>
                    </tr>
                </thead>
                <tbody id="appender">
                    <tr>
                        <td>${attemptNo}</td>
                        <td>
                            <select id="statue1${attemptNo}" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue2${attemptNo}" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue3${attemptNo}" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>
                        </td>
                        <td>
                            <select id="statue4${attemptNo}" class="form-select">
                            <option value="scroll" selected>Scroll</option>
                            <option value="medal">Medal</option>
                            <option value="wine">Wine</option>
                            <option value="food">Food</option>
                            </select>    
                        </td>
                        <td>
                            <textarea class="npcFB form-control" id="npcFB${attemptNo}" rows="3" readonly></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
        `);
});

// btnTalkToNPC
$('#btnTalkToNPC').click(function () {
  // guesses
  var g1 = $(`#statue1${attemptNo} option:selected`).val();
  var g2 = $(`#statue2${attemptNo} option:selected`).val();
  var g3 = $(`#statue3${attemptNo} option:selected`).val();
  var g4 = $(`#statue4${attemptNo} option:selected`).val();
  var guesses = [g1, g2, g3, g4];

  var scrollGCount = 0;
  var medalGCount = 0;
  var wineGCount = 0;
  var foodGCount = 0;
  for (let i = 0; i < guesses.length; i++) {
    if (guesses[i] == 'scroll') {
      scrollGCount += 1;
    } else if (guesses[i] == 'medal') {
      medalGCount += 1;
    } else if (guesses[i] == 'wine') {
      wineGCount += 1;
    } else if (guesses[i] == 'food') {
      foodGCount += 1;
    }
  }
  var guessCountArray = [scrollGCount, medalGCount, wineGCount, foodGCount]

  var correctPcorrectI = 0;
  var incorrectPcorrectI = 0;
  var unknown = 0;
  for (let i = 0; i < guesses.length; i++) {
    if (guesses[i] == answer[i]) {
      correctPcorrectI += 1;
    } else if (JSON.stringify(guessCountArray) == JSON.stringify(answerCountArray)) {
      incorrectPcorrectI += 1;
    } else {
      unknown += 1;
    }
  }

  if ((unknown >= 0 && unknown <= 4) && (correctPcorrectI >= 0 && correctPcorrectI < 4) && (incorrectPcorrectI >= 0 && incorrectPcorrectI <= 4)) {
    $(`#npcFB${attemptNo}`).append(correctPcorrectI + " vassal(s) is/are pleased with their offering(s)\n" + incorrectPcorrectI + " vassal(s) have received the incorrect offering(s)\n" + unknown + " vassal(s) have received unknown offering(s)")
  }
  else if (correctPcorrectI === 4) {
    $(`#npcFB${attemptNo}`).append("CLEAR!");
  }

  // if max attempts reached, show answer and restart button
  if (attemptNo == 7 && $(`#npcFB${attemptNo}`).val() != "CLEAR!") {
    btnStart.style.display = "none";
    btnTalkToNPC.style.display = "none";
    btnRestart.style.display = "block";
    $(`#results`).append(`<p class="h5">Aww, so close! The answer was ${a1}, ${a2}, ${a3}, ${a4}. Try Again!</p>`)
  }
  // if player clears 
  else if ($(`#npcFB${attemptNo}`).val() == "CLEAR!") {
    btnStart.style.display = "none";
    btnTalkToNPC.style.display = "none";
    btnRestart.style.display = "block";
    $(`#results`).append(`<p class="h5">Good Job!</p>`)
  }
  // else continues the game
  else {
    // lock previous choices
    for (let i = 0; i <= 4; i++) {
      $(`#statue${[i]}${attemptNo}`).attr("disabled", true);
    }
    attemptNo++;
    $('#appender').append(`
            <tr>
                <td>${attemptNo}</td>
                <td>
                    <select id="statue1${attemptNo}" class="form-select">
                    <option value="scroll" selected>Scroll</option>
                    <option value="medal">Medal</option>
                    <option value="wine">Wine</option>
                    <option value="food">Food</option>
                    </select>
                </td>
                <td>
                    <select id="statue2${attemptNo}" class="form-select">
                    <option value="scroll" selected>Scroll</option>
                    <option value="medal">Medal</option>
                    <option value="wine">Wine</option>
                    <option value="food">Food</option>
                    </select>
                </td>
                <td>
                    <select id="statue3${attemptNo}" class="form-select">
                    <option value="scroll" selected>Scroll</option>
                    <option value="medal">Medal</option>
                    <option value="wine">Wine</option>
                    <option value="food">Food</option>
                    </select>
                </td>
                <td>
                    <select id="statue4${attemptNo}" class="form-select">
                    <option value="scroll" selected>Scroll</option>
                    <option value="medal">Medal</option>
                    <option value="wine">Wine</option>
                    <option value="food">Food</option>
                    </select>    
                </td>
                <td>
                    <textarea class="npcFB form-control" id="npcFB${attemptNo}" rows="3" readonly></textarea >
                </td >
            </tr>
            `);
  }
});

// btnRestart
$('#btnRestart').click(function () {
  window.location.reload();
});

// ingredient drop down toggle
$(document).ready(function () {
  $(".dropdown-toggle").dropdown();
});
});