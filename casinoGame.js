// single line comments
            /* multiline comment */


            // this function will allow us to play our game
            function playCasinoGame()
            {
                //plays dice roll sound when button is clicked
                document.getElementById("diceSound").play();



                //you can display helpful messages in the console within the program
                console.log("playCasinoGame function called");

                // set up 4 variables to hold the 4 die rolls for the opponent (or the AI) that my game needs to do

                let AIdie1 = AIrollDie();
                let AIdie2 = AIrollDie();
                let AIdie3 = AIrollDie();
                let AIdie4 = AIrollDie();

                console.log("Enemy die1= " + AIdie1);
                console.log("Enemy die2= " + AIdie2);
                console.log("Enemy die3= " + AIdie3);
                console.log("Enemy die4= " + AIdie4);

                // set up 4 variables to hold the 4 die rolls for my player that my game needs to do

                let die1 = rollDie();
                let die2 = rollDie();
                let die3 = rollDie();
                let die4 = rollDie();

                console.log("die1= " + die1);
                console.log("die2= " + die2);
                console.log("die3= " + die3);
                console.log("die4= " + die4);


                // this will add up the sums of the dice rolls for both my player and opponent for the game

                let sum = die1 + die2 + die3 + die4;

                let AIsum = AIdie1 + AIdie2 + AIdie3 + AIdie4;

                console.log("sum= " + sum);

                console.log("Enemy sum= " + AIsum);


                // create a variable that holds a shortcut/nickname for the first dice roll
                let divDie1 = document.getElementById("divDie1");
                // create a variable that holds a shortcut/nickname for the second dice roll
                let divDie2 = document.getElementById("divDie2");
                // create a variable that holds a shortcut/nickname for the dice roll sum
                let divSum = document.getElementById("divSum");
                // create a variable that holds a shortcut/nickname for the dice roll results
                let divResults = document.getElementById("divResults");

                //change the text in the HTML elements
                divDie1.textContent = "Player Die 1: " + die1;
                // or you can use divDie1.innerHTML = die1;

                //change the text in the HTML elements
                divDie2.textContent = "Player Die 2: " + die2;

                //change the text in the HTML elements
                divDie3.textContent = "Player Die 3: " + die3;
                // or you can use divDie1.innerHTML = die1;

                //change the text in the HTML elements
                divDie4.textContent = "Player Die 4: " + die4;

                 //change the text in the HTML elements
                divAIDie1.textContent = "Opponent Die 1: " + AIdie1;
                // or you can use divDie1.innerHTML = die1;

                //change the text in the HTML elements
                divAIDie2.textContent = "Opponent Die 2: " + AIdie2;

                //change the text in the HTML elements
                divAIDie3.textContent = "Opponent Die 3: " + AIdie3;
                // or you can use divDie1.innerHTML = die1;

                //change the text in the HTML elements
                divAIDie4.textContent = "Opponent Die 4: " + AIdie4;

                //change the text in the HTML elements
                divSum.textContent = "Player's Sum is: " + sum;

                //change the text in the HTML elements
                divAISum.textContent = "Opponent's Sum is: " + AIsum;

                // if the sum is less than or equal to 10 or greater than or equal to 30, the user has busted; losing the game

                /* make sure to use == in the if statements - that is for equality
                if you use only =, that will change the value of the variables on the left
                hand side to the value on the right hand side */
                if (sum <= 10 || sum >= 30)
                {
                    // display message that user lost
                    console.log("Busted! You lost >:D");

                    // change result to losing game
                    divResults.textContent = "Busted! You lost >:D";

                    // play a sound for losing
                    document.getElementById("bustSound").play();

                }

            // next statement will check to see if we have won


            // if the sum is between 10 and 30, the user has a chance to win or lose
            // if the sum is equal to the AI's sum, it's a tie

            
            if (sum > 12 && sum < 30)
            {
                if (sum == AIsum)
                {
                    console.log("Darn, that's a tie!");

                    // change result to it's a tie
                    divResults.textContent = "Darn, that's a tie!";

                    // play a sound for tie
                    document.getElementById("bustSound").play();
                }

                else if (sum > AIsum)
                {
                    // if the sum is greater than the AI's sum, the user has won
                    console.log("You've won! :D");

                    // change result to winning game
                    divResults.textContent = "You've won! :D";

                    // play a sound for winning
                    document.getElementById("winSound").play();
                }

                else if ((AIsum <= 10 || AIsum >= 30) && AIsum > sum)
                {
                    console.log("The AI busted! You win! :D");
                    divResults.textContent = "Opponent busted! You win! :D";

                    // play a sound for winning
                    document.getElementById("winSound").play();
                }

                else if ((AIsum <= 10 || AIsum >= 30) && AIsum == sum)
                {
                    console.log("Both y'all busted! Nobody won! :'( ");
                    divResults.textContent = "Both busted! Y'all didn't won! :(";

                    // play a sound for winning
                    document.getElementById("bustSound").play();
                }

                else
                {
                    console.log("You lost >:D");
                    

                    // change result to losing game
                    divResults.textContent = "You lost >:D";

                    // play a sound for losing
                    document.getElementById("lostSound").play();
                }
            }
            

            // function to simulate the rolling of a 6-sided die
            function rollDie()
            {
                // multiply random number between 0 and 1 by 6 to get the random roll dice roll
                let randomNumber = Math.random() * 10;

                // round the number up to the next whole number
                randomNumber = Math.ceil(randomNumber);

                // return the random number that was generated
                return randomNumber;
            }

            function AIrollDie()
            {
                // multiply random number between 0 and 1 by 6 to get the random roll dice roll
                let AIrandomNumber = Math.random() * 10;

                // round the number up to the next whole number
                AIrandomNumber = Math.ceil(AIrandomNumber);

                // return the random number that was generated
                return AIrandomNumber;
            }
        }