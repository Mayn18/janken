/**
 * Question
    # Declare the the function to store the value from the user
    # create function to take the value from the user
    # create a function to decide a random value from "rock", "paper", "scissors"
    # compare the value from the user and the random value we generated
    # display the result
    # the game will be played in rounds
    # there will be a total of 5 rounds the one which has the most point wins


    * Pseudo Code

        Start
        DECLARE function getComputerChoice()
            use random() to generate a random number
            multiply the number with 100
            IF number is less than or equal to 33
            THEN return the value "rock"
            ELSE IF the value is less than equal to 66
            THEN return the value "paper"
            ELSE return "scissors"

        DECLARE function getHumanChoice()
            use prompt() to get a string input from the user
            tell the user to input either "rock", "paper", "scissors"
            return the value inputed by the user

        DECLARE variable humanScore and computerScore
        INITIALIZE humanScore and computerScore as 0

        DECLARE function playRound(humanChoice, computerChoice)
            convert the humanChoice to lowercase
            IF humanChoice is equal to computerChoice
            THEN increment both humanChoice and computerChoice by 1 And return "TIE"

            ELSE IF humanChoice is "rock" && computerChoice "paper"
            THEN computerScore increment by 1 and return "You lose" along with both score
            ELSE IF humanChoice is "scissor" && computerChoice "rock"
            THEN computerScore increment by 1 and return "You lose" along with both score
            ELSE IF humanChoice is "paper" && computerChoice "scissor"
            THEN computerScore increment by 1 and return "You lose" along with both score
            
            IF humanChoice is "paper" && computerChoice "rock"
            THEN humanScore increment by 1 and return "You Win" along with both score
            ELSE IF humanChoice is "rock" && computerChoice "scissor"
            THEN humanScore increment by 1 and return "You Win" along with both score
            ELSE IF humanChoice is "scissor" && computerChoice "paper"
            THEN humanScore increment by 1 and return "You Win" along with both score

        DECLARE function playGame()
            DECLARE variable gameCounter = 0,  humanChoice, computerChoice
            FOR gameCounter is less than 5
                INITIALIZE humanChoice with the value of getHumanChoice and computerChoice with getComputerChoice
                run playRound(humanScore,computerScore)
            IF humanScore is equal to computerScore
            THEN return "Game is a tie"
            ELSE IF humanScore is greater than computerScore
            THEN return "Human wins"
            ELSE return "Computer wins"

        RUN playGame()
        Display the value returned by playGame

        END


**/

// console.log(Math.floor(Math.random() * 99 ) + 1)

