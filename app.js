
//Global App Controller

var controller = (function () {

    //App Controller

    //Data
    var userData = {
        panel1: [0, 1, 2, 3, 4, 5],
        panel2: [6, 7]
    };


    console.log(userData);

    var index, shiftingFromPanel;

    //panel1: [0, 1, 2, 3, 4, 5],
    //panel2: [6, 7]

    var assignShifting = function (panel1, panel2) {
        index = userData.panel1[0];
        userData.panel2.push(userData.panel1[0]);
        userData.panel1.shift();
        return index;
    }

    var revokeShifting = function (panel1, panel2) {
        index = userData.panel2[0];
        userData.panel1.push(userData.panel2[0]);
        userData.panel2.shift();
        return index;
    };

    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    //UI Controller

    var domStrings = {
        assignBtn: '.btn-assign',
        revokeBtn: '.btn-revoke',
        leftPanel: '.panel-0',
        rightPanel: '.panel-1'
    };

    var usernameArray = ['Rajat Jain', 'Aasiya Mansoori', 'Gargi Kulshrestha', 'Aditya Kumawat', 'Meghan S. Patel', 'Yash Thakur', 'Priya Ajaniya', 'Vaishnavi Singh'];

    var addListItem = function (element, panelID) {

        var html, newHtml;

        // create HTML string

        html = '<div class="item clearfix" id="user-%change%"> <div class="picture"> <img src="user-' + '%change%' + '.png" /> </div >  <div class="right clearfix"> <div class="username">' + '%name%' + '</div>  </div> </div >'

        //Replace the text 

        newHtml = html.replace('%change%', element);
        newHtml = newHtml.replace('%change%', element);
        newHtml = newHtml.replace('%name%', usernameArray[element]);

        //Insert the HTML into the DOM
        if (panelID === 1) {
            document.querySelector(domStrings.rightPanel).insertAdjacentHTML('beforeend', newHtml);
            document.querySelector('#user-' + index).remove();
        } else if (panelID === 2) {
            document.querySelector('#user-' + index).remove();
            document.querySelector(domStrings.leftPanel).insertAdjacentHTML('beforeend', newHtml);
        }

    };

    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


    //Setting up Event listners

    var setupEventListeners = function () {


        //1. Assign button event listener

        document.querySelector(domStrings.assignBtn).addEventListener('click', function () {

            if (userData.panel1.length > 0) {
                //1. Add user to panel-2 and remove that user from panel-1
                var shifting1 = assignShifting();
                shiftingFromPanel = 1;

                //2. Update the UI
                addListItem(index, shiftingFromPanel);
            }

        });



        //2. Revoke button event listener

        document.querySelector(domStrings.revokeBtn).addEventListener('click', function () {

            if (userData.panel2.length > 0) {
                //1. Add user to panel-1 and remove that user from panel-2
                var shifting2 = revokeShifting();
                shiftingFromPanel = 2;

                //2. Update the UI
                addListItem(index, shiftingFromPanel);
            };
        });


        //3. Dark Mode - Toggle button

        document.querySelector('#switch').addEventListener('click', function () {
            document.querySelector('.wrapper').classList.toggle('dark');
            document.body.classList.toggle('dark');
            document.querySelector('.item').classList.toggle('dark');
            document.querySelector('.app-title').classList.toggle('dark');
            document.querySelector('.total-cloud').classList.toggle('dark');
            document.querySelector('.panel-0').classList.toggle('dark');
            document.querySelector('.panel-1').classList.toggle('dark');
            document.querySelector('.switch-label-container').classList.toggle('dark');

        });


    }

    return {
        init: function () {
            console.log('Application has started.');
            setupEventListeners();
        },

    }
})();

//Initialization function-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


controller.init();
