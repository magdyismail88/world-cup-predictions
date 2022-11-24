const TOKEN = '297c083672af6147308b87ac5bd57b383dfb8617b75cad8342184ee003ca917c'

// Get first two indexses
function $$$(cls) {
    const children = document.querySelector(`#${cls}`).children;
    const teams = [];

    for(const child of children) {
        teams.push(child.getAttribute('data-id'));
    }

    return teams.slice(0, 2);

}

function $(id) {
    return document.querySelector(`#${id}`);
}

function $$$$(name) {
    var radios = document.getElementsByName(name);

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            return radios[i].value

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}

function $$(cls) {
    return document.querySelectorAll(`.${cls}`);
}

// Sixteen Round

function generateSixteenRoundHTML() {
    
    const data = JSON.parse(localStorage.getItem(TOKEN));
    const teams = data['teams'];

    const groupA = $$$('group-a');
    const groupB = $$$('group-b');
    const groupC = $$$('group-c');
    const groupD = $$$('group-d');
    const groupE = $$$('group-e');
    const groupF = $$$('group-f');
    const groupG = $$$('group-g');
    const groupH = $$$('group-h');

    const html = 
    `
    <div class="row" style="height: 600px;">

        <h2 class="text-center mt-4">Round of 16</h2>

        <br>
        <br>
        <br>
        <br>

        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4">

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[groupA[0]]['flag']  }" /></td>
                            <td><img src="${ teams[groupB[1]]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[groupA[0]]['title']  }</td>
                            <td>${ teams[groupB[1]]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match11" value="${ teams[groupA[0]]['id']  }" 
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                            <td><input type="radio" name="match11" value="${ teams[groupB[1]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

    <!-- -->

        <div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[groupB[0]]['flag']  }" /></td>
                            <td><img src="${ teams[groupA[1]]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[groupB[0]]['title']  }</td>
                            <td>${ teams[groupA[1]]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match12" value="${ teams[groupB[0]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                            <td><input type="radio" name="match12" value="${ teams[groupA[1]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

    <!---->

        <div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[groupC[0]]['flag']  }" /></td>
                            <td><img src="${ teams[groupD[1]]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[groupC[0]]['title']  }</td>
                            <td>${ teams[groupD[1]]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match13" value="${ teams[groupC[0]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                            <td><input type="radio" name="match13" value="${ teams[groupD[1]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

    <!---->

        <div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[groupD[0]]['flag']  }" /></td>
                            <td><img src="${ teams[groupC[1]]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[groupD[0]]['title']  }</td>
                            <td>${ teams[groupC[1]]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match14" value="${ teams[groupD[0]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                            <td><input type="radio" name="match14" value="${ teams[groupC[1]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

    <!---->

        <div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[groupE[0]]['flag']  }" /></td>
                            <td><img src="${ teams[groupF[1]]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[groupE[0]]['title']  }</td>
                            <td>${ teams[groupF[1]]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match15" value="${ teams[groupE[0]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                            <td><input type="radio" name="match15" value="${ teams[groupF[1]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

    <!---->

        <div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[groupF[0]]['flag']  }" /></td>
                            <td><img src="${ teams[groupE[1]]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[groupF[0]]['title']  }</td>
                            <td>${ teams[groupE[1]]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match16" value="${ teams[groupF[0]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                            <td><input type="radio" name="match16" value="${ teams[groupE[1]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

    <!---->

        <div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[groupG[0]]['flag']  }" /></td>
                            <td><img src="${ teams[groupH[1]]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[groupG[0]]['title']  }</td>
                            <td>${ teams[groupH[1]]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match17" value="${ teams[groupG[0]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                            <td><input type="radio" name="match17" value="${ teams[groupH[1]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

    <!---->

        <div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[groupH[0]]['flag']  }" /></td>
                            <td><img src="${ teams[groupG[1]]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[groupH[0]]['title']  }</td>
                            <td>${ teams[groupG[1]]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match18" value="${ teams[groupH[0]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                            <td><input type="radio" name="match18" value="${ teams[groupG[1]]['id']  }"
                                onchange="checkValidation('matches1', 'btnQuarterFinalsRound')" class="matches1"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    </div>

    <br>

    <center><button class="btn btn-info next mt-4" id="btnQuarterFinalsRound"
        onclick="goToQuarterFinals()"
        role="button"
        style="width: 60px; height: 60px; border-radius: 50%" disabled="disabled">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="arrow-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        </svg>


    </button></center>
    <br>

    <hr>
    `

    return html
}

function goToSixteenRound() {
    const html = generateSixteenRoundHTML();

    const dynamic = document.querySelector('#dynamic');

    const sixteenRoundDiv = document.createElement('div');
    sixteenRoundDiv.setAttribute('id', 'sixteenRound');
    sixteenRoundDiv.style.marginTop = '40px';
    sixteenRoundDiv.innerHTML = html;

    // 
    // Check previos sections
    if( document.querySelector('#winner') != null ) {
        try {
            dynamic.removeChild($('winner'));
        }catch(error) {
            console.error(error)
        }
    }

    if( document.querySelector('#finalRound') != null ) {
        try {
            dynamic.removeChild($('finalRound'));
        }catch(error) {
            console.error(error)
        }
    }

    if( document.querySelector('#semiFinalRound') != null ) {
        try {
            dynamic.removeChild($('semiFinalRound'));
        }catch(error) {
            console.error(error)
        }
    }

    if( document.querySelector('#quarterFinalRound') != null ) {
        try {
            dynamic.removeChild($('quarterFinalRound'));
        }catch(error) {
            console.error(error)
        }
    }
    // 

    if( document.querySelector('#sixteenRound') != null ) {
        try {
            dynamic.removeChild($('sixteenRound'));
        }catch(error) {
            console.error(error)
        }
    }

    dynamic.appendChild(sixteenRoundDiv);
    window.location.href = '#sixteenRound';
    return true;
}

// Quarter Finals Round

function generateQuarterFinalsHTML() {

    const data = JSON.parse(localStorage.getItem(TOKEN));
    const teams = data['teams'];
    
    const match1 = $$$$('match11');
    const match2 = $$$$('match12');

    const match3 = $$$$('match13');
    const match4 = $$$$('match14');

    const match5 = $$$$('match15');
    const match6 = $$$$('match16');

    const match7 = $$$$('match17');
    const match8 = $$$$('match18');

    // console.log(match3)
    // console.log(match4)

    // 

    const html = 
    `
    <div class="row" style="height: 600px;">

        <h2 class="text-center mt-4">Quarter-finals</h2>

        <br>
        <br>
        <br>
        <br>

        <div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[match1]['flag']  }" /></td>
                            <td><img src="${ teams[match3]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[match1]['title']  }</td>
                            <td>${ teams[match3]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match21" value="${teams[match1]['id']}"
                                onchange="checkValidation('matches2', 'btnSemiFinalsRound')" class="matches2"></td>
                            <td><input type="radio" name="match21" value="${teams[match3]['id']}"
                                onchange="checkValidation('matches2', 'btnSemiFinalsRound')" class="matches2"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

        <!---->

        <div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[match2]['flag']  }" /></td>
                            <td><img src="${ teams[match4]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[match2]['title']  }</td>
                            <td>${ teams[match4]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match22" value="${teams[match2]['id']}"
                                onchange="checkValidation('matches2', 'btnSemiFinalsRound')" class="matches2"></td>
                            <td><input type="radio" name="match22" value="${teams[match4]['id']}"
                                onchange="checkValidation('matches2', 'btnSemiFinalsRound')" class="matches2"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

        <!---->

        <div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[match5]['flag']  }" /></td>
                            <td><img src="${ teams[match7]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[match5]['title']  }</td>
                            <td>${ teams[match7]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match23" value="${teams[match5]['id']}"
                                onchange="checkValidation('matches2', 'btnSemiFinalsRound')" class="matches2"></td>
                            <td><input type="radio" name="match23" value="${teams[match7]['id']}"
                                onchange="checkValidation('matches2', 'btnSemiFinalsRound')" class="matches2"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

        <!---->

        <div class='col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[match6]['flag']  }" /></td>
                            <td><img src="${ teams[match8]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[match6]['title']  }</td>
                            <td>${ teams[match8]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match24" value="${teams[match6]['id']}"
                                onchange="checkValidation('matches2', 'btnSemiFinalsRound')" class="matches2"></td>
                            <td><input type="radio" name="match24" value="${teams[match8]['id']}"
                                onchange="checkValidation('matches2', 'btnSemiFinalsRound')" class="matches2"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    </div>

    <center>
    <button class="btn btn-info next" id="btnSemiFinalsRound"
        onclick="goToSemiFinals()"
        role="button"
        style="width: 60px; height: 60px; border-radius: 50%;" disabled="disabled">
            

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="arrow-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        </svg>


    </button>
    </center>

    <hr>

    `;

    return html;
}


function goToQuarterFinals() {
    const html = generateQuarterFinalsHTML();
    const dynamic = document.querySelector('#dynamic');

    const quarterFinalRoundDiv = document.createElement('div');
    quarterFinalRoundDiv.setAttribute('id', 'quarterFinalRound');

    quarterFinalRoundDiv.innerHTML = html;

    // Check previos sections
    if( document.querySelector('#winner') != null ) {
        try {
            dynamic.removeChild($('winner'));
        }catch(error) {
            console.error(error)
        }
    }

    if( document.querySelector('#finalRound') != null ) {
        try {
            dynamic.removeChild($('finalRound'));
        }catch(error) {
            console.error(error)
        }
    }

    if( document.querySelector('#semiFinalRound') != null ) {
        try {
            dynamic.removeChild($('semiFinalRound'));
        }catch(error) {
            console.error(error)
        }
    }
    // 

    if( document.querySelector('#quarterFinalRound') != null ) {
        try {
            dynamic.removeChild($('quarterFinalRound'))
        }catch(error) {
            console.log(error)
        }
    }

    dynamic.appendChild(quarterFinalRoundDiv);
    window.location.href = '#quarterFinalRound';
    return true;
}


// Semi finals round

function generateSemiFinalsHTML() {

    const data = JSON.parse(localStorage.getItem(TOKEN));
    const teams = data['teams'];
    
    const match1 = $$$$('match21');
    const match2 = $$$$('match22');

    const match3 = $$$$('match23');
    const match4 = $$$$('match24');

    const html = 
    `
    <div class="row" style="height: 600px;">
        
        <h2 class="text-center mt-4">Semi-finals</h2>

        <br>
        <br>
        <br>
        <br>


        <div class='col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[match1]['flag']  }" /></td>
                            <td><img src="${ teams[match3]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[match1]['title']  }</td>
                            <td>${ teams[match3]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match31" value="${teams[match1]['id']}"
                                onchange="checkValidation('matches3', 'btnFinal')" class="matches3"></td>
                            <td><input type="radio" name="match31" value="${teams[match3]['id']}"
                                onchange="checkValidation('matches3', 'btnFinal')" class="matches3"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

        <div class='col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[match2]['flag']  }" /></td>
                            <td><img src="${ teams[match4]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[match2]['title']  }</td>
                            <td>${ teams[match4]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match32" value="${teams[match2]['id']}"
                                onchange="checkValidation('matches3', 'btnFinal')" class="matches3"></td>
                            <td><input type="radio" name="match32" value="${teams[match4]['id']}"
                                onchange="checkValidation('matches3', 'btnFinal')" class="matches3"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    </div>

    <center><button class="btn btn-info next" id="btnFinal"
        onclick="goToFinal()"
        role="button"
        style="width: 60px; height: 60px; border-radius: 50%" disabled="disabled">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="arrow-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        </svg>

    </button></center>

    <hr>
    `;

    return html;
}


function goToSemiFinals() {
    const html = generateSemiFinalsHTML();
    const dynamic = document.querySelector('#dynamic');

    const semiFinalRoundDiv = document.createElement('div');
    semiFinalRoundDiv.setAttribute('id', 'semiFinalRound');

    semiFinalRoundDiv.innerHTML = html;

    // Check previos sections
    if( document.querySelector('#winner') != null ) {
        try {
            dynamic.removeChild($('winner'));
        }catch(error) {
            console.error(error)
        }
    }

    if( document.querySelector('#finalRound') != null ) {
        try {
            dynamic.removeChild($('finalRound'));
        }catch(error) {
            console.error(error)
        }
    }
    // 

    if( document.querySelector('#semiFinalRound') != null ) {
        try {
            dynamic.removeChild($('semiFinalRound'))
        }catch(error) {
            console.log(error)
        }
    }

    dynamic.appendChild(semiFinalRoundDiv);
    window.location.href = '#semiFinalRound';
    return true;
}



// Final round
function generateFinalHTML() {

    const data = JSON.parse(localStorage.getItem(TOKEN));
    const teams = data['teams'];
    
    const match1 = $$$$('match31');
    const match2 = $$$$('match32');

    const html = 
    `
    <div class="row" style="height: 600px;">

        <h2 class="text-center mt-4">Final</h2>

        <br>
        <br>
        <br>
        <br>


        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[match1]['flag']  }" /></td>
                            <td><img src="${ teams[match2]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[match1]['title']  }</td>
                            <td>${ teams[match2]['title']  }</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="match41" value="${teams[match1]['id']}"
                                onchange="checkValidation('matches4', 'btnWinner')" class="matches4"></td>
                            <td><input type="radio" name="match41" value="${teams[match2]['id']}"
                                onchange="checkValidation('matches4', 'btnWinner')" class="matches4"></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    </div>

    <center>
    <button class="btn btn-info next" id="btnWinner"
        onclick="getWinner()"
        role="button"
        style="width: 60px; height: 60px; border-radius: 50%" disabled="disabled">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="arrow-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        </svg>

    </button>
    </center>


    <hr>

    `;

    return html;
}


function goToFinal() {
    const html = generateFinalHTML();
    const dynamic = document.querySelector('#dynamic');

    const finalRoundDiv = document.createElement('div');
    finalRoundDiv.setAttribute('id', 'finalRound');

    finalRoundDiv.innerHTML = html;

    // Check previos sections
    if( document.querySelector('#winner') != null ) {
        try {
            dynamic.removeChild($('winner'));
        }catch(error) {
            console.error(error)
        }
    }
    // 

    if( document.querySelector('#finalRound') != null ) {
        try {
            dynamic.removeChild($('finalRound'))
        }catch(error) {
            console.log(error)
        }
    }

    dynamic.appendChild(finalRoundDiv);
    window.location.href = '#finalRound';
    return true;
}

// 

function generateWinnerHTML() {
    const data = JSON.parse(localStorage.getItem(TOKEN));
    const teams = data['teams'];
    
    const match = $$$$('match41');

    const html = 
    `
    <div class="row" style="height: 600px;">

        <h2 class="text-center mt-4">Winner</h2>

        <br>
        <br>
        <br>
        <br>

        <div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-4'>

            <div class="card">
                <div class="card-body">
                    <table class="table text-center">
                        <tr>
                            <td><img src="${ teams[match]['flag']  }" /></td>
                        </tr>
                        <tr>
                            <td>${ teams[match]['title']  }</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>

    </div>
    
    `;

    return html;
}


function getWinner() {
    const html = generateWinnerHTML();
    const dynamic = document.querySelector('#dynamic');

    const winnerDiv = document.createElement('div');
    winnerDiv.setAttribute('id', 'winner');

    winnerDiv.innerHTML = html;

    if( document.querySelector('#winner') != null ) {
        try {
            dynamic.removeChild($('winner'))
        }catch(error) {
            console.log(error)
        }
    }

    dynamic.appendChild(winnerDiv);
    window.location.href = '#winner';
    return true;
}


// 

function checkRadioChecked(cls) {
    
    const radios = document.getElementsByClassName(cls);

    for(const radio of radios) {
        const radioGroup = document.getElementsByName(radio.name)
        if(radioGroup[0].checked === false && radioGroup[1].checked === false) {
            return false
        }
    }

    return true;
}


function checkValidation(cls, btnID) {

    if(checkRadioChecked(cls)) {
        document.querySelector(`#${btnID}`).disabled = false;
        document.querySelector(`#${btnID}`).removeAttribute('disabled')
    }

    return

}


function capture () {
    html2canvas(document.querySelector('#app')).then((canvas) => {
        let a = document.createElement("a");
        a.download = "screenshot.png";
        a.href = canvas.toDataURL("image/png");
        a.click(); // MAY NOT ALWAYS WORK!
    });
}


// data = JSON.parse(
//     localStorage.getItem('297c083672af6147308b87ac5bd57b383dfb8617b75cad8342184ee003ca917c')
// )

// teams = data['teams']

// netherlands = teams['netherlands']


// console.log(netherlands);