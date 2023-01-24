//Create Modals
var developerMode = true;

document.getElementById("allmodals").innerHTML =
  `
<!-- The Modal -->
  <div class="modal fade" id="myModalA">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header l-bg-orange-dark">
          <h4 id="modaltitleA" class="modal-title">Modal Heading</h4>
          <button type="button" class="btn btn-secondary" onclick="closeModalA()" style="background: #2d2e2e;">X</button>
          
        </div>
        
        <!-- Modal body -->
        <div id="modalmessageA" class="modal-body">
          Modal body..
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModalA()">Close</button>
        </div>
        
      </div>
    </div>
  </div>

  <!-- The Modal -->
  <div class="modal fade" id="myModalB">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
        
          <!-- Modal Header -->
          <div class="modal-header l-bg-green-dark">
            <h4 id="modaltitleB" class="modal-title">Modal Heading</h4>
            <button type="button" class="btn btn-secondary" onclick="closeModalB()" style="background: #2d2e2e;">X</button>
          </div>
          
          <!-- Modal body -->
          <div id="modalmessageB" class="modal-body">
            Modal body..
          </div>
          
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="closeModalB()">Close</button>
          </div>
          
        </div>
      </div>
    </div>

    <!-- Modal Welcome and Ending -->
<div class="modal fade " role="dialog" id="modalwelcome" data-backdrop="false" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
      <div class="modal-header bg-white l-bg-blue-dark">
        <h5 id="modalwelcomeTitle" class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn btn-secondary" onclick="forceCloseModal()" style="background: #2d2e2e;">X</button>
      </div>
      <div  class="modal-body d-flex align-items-center">
      <div id="modalwelcomeText" class="col-8">One of three columns</div>
      <div id="modalwelcomeImage" class="col-4">One of three columns</div>
      </div>
      <div class="modal-footer">
        <button id="welcomebutton" type="button" class="btn btn-secondary" style="font-size:16px" onclick="forceCloseModal();">` +
  introButton +
  `</button>
      </div>
    </div>
  </div>
</div>
`;

var htmlTransfer = "";
var score = 0;
var modeGlobal = 1;
var oppositepwtext0 = "";
var oppositepwtext1 = "";

function createNumberCard(mode) {
  if (score < 50) {
    modeGlobal = mode;
    var rndPW = "";
    var rndCardPW = randomInteger(0, 1);

    for (let i = 0; i < 2; i++) {
      let cardNumber = i + 1;

      htmlTransfer +=
        `
  <div class="carda roll-in-left">
    <div class="box">
      <div class="content">
        <h2>0` +
        cardNumber +
        `</h2>
        <h3></h3>
        <p id="pwtext` +
        i +
        `">`;

      if (mode === 1) {
        if (rndCardPW === 0) {
          rndPW = randomInteger(0, dbNumber.length - 1);
          let result = getIndexOfK(dbNumber, dbNumber[rndPW][0]);
          oppositepwtext0 = dbNumber[rndPW][0];
          htmlTransfer +=
            `</p>
      <button onclick="answer(` +
            result[0] +
            `,` +
            mode +
            `,0)">` +
            dbNumber[rndPW][0] +
            `</button>`;
          rndCardPW = 1;
        } else if (rndCardPW === 1) {
          rndPW = randomInteger(0, dbLetter.length - 1);
          let result = getIndexOfK(dbLetter, dbLetter[rndPW][0]);
          oppositepwtext1 = dbLetter[rndPW][0];
          htmlTransfer +=
            `</p>
      <button onclick="answer(` +
            result[0] +
            `,` +
            mode +
            `,1)">` +
            dbLetter[rndPW][0] +
            `</button>`;
          rndCardPW = 0;
        }
      } else if (mode === 2) {
        if (rndCardPW === 0) {
          rndPW = randomInteger(0, dbLeet.length - 1);
          let result = getIndexOfK(dbLeet, dbLeet[rndPW][0]);
          oppositepwtext0 = dbLeet[rndPW][0];
          htmlTransfer +=
            `</p>
      <button onclick="answer(` +
            result[0] +
            `,` +
            mode +
            `,0)">` +
            dbLeet[rndPW][0] +
            `</button>`;
          rndCardPW = 1;
        } else if (rndCardPW === 1) {
          rndPW = randomInteger(0, dbLetterV2.length - 1);
          let result = getIndexOfK(dbLetterV2, dbLetterV2[rndPW][0]);
          oppositepwtext1 = dbLetterV2[rndPW][0];
          htmlTransfer +=
            `</p>
      <button onclick="answer(` +
            result[0] +
            `,` +
            mode +
            `,1)">` +
            dbLetterV2[rndPW][0] +
            `</button>`;
          rndCardPW = 0;
        }
      } else if (mode === 3) {
        if (rndCardPW === 0) {
          rndPW = randomInteger(0, dbAlphanumeric.length - 1);
          let result = getIndexOfK(dbAlphanumeric, dbAlphanumeric[rndPW][0]);
          oppositepwtext0 = dbAlphanumeric[rndPW][0];
          htmlTransfer +=
            `</p>
      <button onclick="answer(` +
            result[0] +
            `,` +
            mode +
            `,0)">` +
            dbAlphanumeric[rndPW][0] +
            `</button>`;
          rndCardPW = 1;
        } else if (rndCardPW === 1) {
          rndPW = randomInteger(0, dbPassphrase.length - 1);
          let result = getIndexOfK(dbPassphrase, dbPassphrase[rndPW][0]);
          oppositepwtext1 = dbPassphrase[rndPW][0];
          htmlTransfer +=
            `</p>
      <button onclick="answer(` +
            result[0] +
            `,` +
            mode +
            `,1)">` +
            dbPassphrase[rndPW][0] +
            `</button>`;
          rndCardPW = 0;
        }
      } else if (mode === 4) {
        if (rndCardPW === 0) {
          rndPW = randomInteger(0, dbLeetMovies.length - 1);
          let result = getIndexOfK(dbLeetMovies, dbLeetMovies[rndPW][0]);
          oppositepwtext0 = dbLeetMovies[rndPW][0];
          htmlTransfer +=
            `</p>
      <button onclick="answer(` +
            result[0] +
            `,` +
            mode +
            `,0)">` +
            dbLeetMovies[rndPW][0] +
            `</button>`;
          rndCardPW = 1;
        } else if (rndCardPW === 1) {
          rndPW = randomInteger(0, dbLeetUncommon.length - 1);
          let result = getIndexOfK(dbLeetUncommon, dbLeetUncommon[rndPW][0]);
          oppositepwtext1 = dbLeetUncommon[rndPW][0];
          htmlTransfer +=
            `</p>
      <button onclick="answer(` +
            result[0] +
            `,` +
            mode +
            `,1)">` +
            dbLeetUncommon[rndPW][0] +
            `</button>`;
          rndCardPW = 0;
        }
      } else if (mode === 5) {
        if (rndCardPW === 0) {
          rndPW = randomInteger(0, dbLeetPassword.length - 1);
          let result = getIndexOfK(dbLeetPassword, dbLeetPassword[rndPW][0]);
          oppositepwtext0 = dbLeetPassword[rndPW][0];
          htmlTransfer +=
            `</p>
      <button onclick="answer(` +
            result[0] +
            `,` +
            mode +
            `,0)">` +
            dbLeetPassword[rndPW][0] +
            `</button>`;
          rndCardPW = 1;
        } else if (rndCardPW === 1) {
          rndPW = randomInteger(0, dbLettersPassword.length - 1);
          let result = getIndexOfK(
            dbLettersPassword,
            dbLettersPassword[rndPW][0]
          );
          oppositepwtext1 = dbLettersPassword[rndPW][0];
          htmlTransfer +=
            `</p>
      <button onclick="answer(` +
            result[0] +
            `,` +
            mode +
            `,1)">` +
            dbLettersPassword[rndPW][0] +
            `</button>`;
          rndCardPW = 0;
        }
      }

      htmlTransfer += `
      </div>
    </div>
  </div>
  `;
    }

    setTimeout(() => {
      document.getElementById("app").innerHTML =
        `
  <div id="thescore" class="containera" style="height: 10px"><h2 >SCORE:&nbsp;<h2 class="flip-horizontal-bottom">` +
        score +
        `</h2></h2></div><div style="justify-content: center;align-items: center;display:flex;padding:20px">Which password is stronger?</div><div class="containera">` +
        htmlTransfer +
        `</div>`;
    }, 100);
  } else {
    ending();
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomPassword(type) {
  const result = dbContent.filter(function (item) {
    return item[1] === type;
  });
  alert(result.length);
  var rndNumber = randomInteger(0, result.length);
  alert(rndNumber);
  return result[rndNumber][1];
}

function filterPasswordType0(typeToFilter) {
  return (typeToFilter = dbContent.filter((word) => word.length > 6));
}

function answer(dbIndex, mode, answer) {
  if (mode == 1) {
    document.getElementById("modaltitleA").innerHTML = dbNumber[dbIndex][1];
    document.getElementById("modalmessageA").innerHTML = dbNumber[dbIndex][2];
    document.getElementById("modaltitleB").innerHTML = dbLetter[dbIndex][1];
    document.getElementById("modalmessageB").innerHTML = dbLetter[dbIndex][2];
  } else if (mode == 2) {
    document.getElementById("modaltitleA").innerHTML = dbLeet[dbIndex][1];
    document.getElementById("modalmessageA").innerHTML = dbLeet[dbIndex][2];
    document.getElementById("modaltitleB").innerHTML = dbLetterV2[dbIndex][1];
    document.getElementById("modalmessageB").innerHTML = dbLetterV2[dbIndex][2];
  } else if (mode == 3) {
    document.getElementById("modaltitleA").innerHTML =
      dbAlphanumeric[dbIndex][1];
    document.getElementById("modalmessageA").innerHTML =
      dbAlphanumeric[dbIndex][2];
    document.getElementById("modaltitleB").innerHTML = dbPassphrase[dbIndex][1];
    document.getElementById("modalmessageB").innerHTML =
      dbPassphrase[dbIndex][2];
  } else if (mode == 4) {
    document.getElementById("modaltitleA").innerHTML = dbLeetMovies[dbIndex][1];
    document.getElementById("modalmessageA").innerHTML =
      dbLeetMovies[dbIndex][2];
    document.getElementById("modaltitleB").innerHTML =
      dbLeetUncommon[dbIndex][1];
    document.getElementById("modalmessageB").innerHTML =
      dbLeetUncommon[dbIndex][2];
  } else if (mode == 5) {
    document.getElementById("modaltitleA").innerHTML =
      dbLeetPassword[dbIndex][1];
    document.getElementById("modalmessageA").innerHTML =
      dbLeetPassword[dbIndex][2];
    document.getElementById("modaltitleB").innerHTML =
      dbLettersPassword[dbIndex][1];
    document.getElementById("modalmessageB").innerHTML =
      dbLettersPassword[dbIndex][2];
  }
  if (answer == 0) {
    $("#myModalA").modal({ backdrop: "static" });
    playSound("wrong");
  } else {
    score = score + 10;
    $("#myModalB").modal({ backdrop: "static" });
    playSound("bleep");
  }

  playSound("bleep");
}
/*
$("#myModalA").on("hide.bs.modal", function () {
  htmlTransfer = "";
  modeGlobal++;

  if (modeGlobal >= 4) {
    createNumberCard(1);
  } else {
    createNumberCard(modeGlobal);
  }
  document.getElementById("myModalA").style.display = "none";
});

$("#myModalB").on("hide.bs.modal", function () {
  htmlTransfer = "";
  modeGlobal++;
  if (modeGlobal >= 4) {
    createNumberCard(1);
  } else {
    createNumberCard(modeGlobal);
  }
  document.getElementById("myModalB").style.display = "none";
});
*/
var sound1 = document.getElementById("sound_click");
var sound2 = document.getElementById("sound_bleep");
var sound3 = document.getElementById("sound_welcome");
var sound4 = document.getElementById("sound_fanfare");
var sound5 = document.getElementById("sound_wrong");

function playSound(x) {
  if (x === "click") {
    sound1.play();
  } else if (x === "bleep") {
    sound2.play();
  } else if (x === "welcome") {
    sound3.play();
  } else if (x === "fanfare") {
    sound4.play();
  } else if (x === "wrong") {
    sound5.play();
  }
}

function getIndexOfK(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i].indexOf(k);
    if (index > -1) {
      return [i, index];
    }
  }
}

function welcome() {
  playSound("welcome");

  //var bla = window.parent.document.getElementById("ed-next-btn");
  if (developerMode == false) {
    $("#ed-next-btn", window.parent.document).hide();
  }

  document.getElementById("modalwelcomeTitle").innerHTML = introTitle;
  document.getElementById("modalwelcomeText").innerHTML = introMessage;
  document.getElementById("modalwelcomeImage").innerHTML =
    "<img src='" +
    welcomeImage +
    "' class='img-thumbnail flip-horizontal-bottom_delay'>";
  $("#modalwelcome").modal({
    backdrop: false,
    keyboard: false
  });
  $("#modalwelcome").modal("show");
}

function ending() {
  document.getElementById("modalwelcomeTitle").innerHTML = outroTitle;
  document.getElementById("modalwelcomeText").innerHTML = outroMessage;
  document.getElementById("modalwelcomeImage").innerHTML =
    "<img src='" + endingImage + "' class='img-thumbnail'>";
  //document.getElementById("welcomebutton").innerHTML = outroButton;
  document.getElementById("welcomebutton").style.display = "none";
  document.getElementById("thescore").innerHTML =
    `
  <h2 >SCORE:&nbsp;<h2 class="flip-horizontal-bottom">` +
    score +
    `</h2></h2>
  `;
  $("#modalwelcome").modal("show");

  playSound("fanfare");
  //window.top.edInterface.nextEnabled();

  if (developerMode == false) {
    $("#ed-next-btn", window.parent.document).show();
  }
}

window.forceCloseModal = function () {
  $("#modalwelcome").modal("hide");
  createNumberCard(1);
};

function closeModalA() {
  htmlTransfer = "";
  modeGlobal++;

  if (modeGlobal >= 6) {
    createNumberCard(1);
  } else {
    createNumberCard(modeGlobal);
  }

  $("#myModalA").modal("hide");
}

function closeModalB() {
  htmlTransfer = "";
  modeGlobal++;

  if (modeGlobal >= 6) {
    createNumberCard(1);
  } else {
    createNumberCard(modeGlobal);
  }

  $("#myModalB").modal("hide");
}

const myTimeout = setTimeout(welcome, 500);
