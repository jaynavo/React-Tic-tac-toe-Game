import { useState } from 'react'
import './Gamearea.css'

const GameArea = () => {

    //game functional areas
    const [isPlayerX, setPlayerX] = useState()
    const [isPlayerO, setPlayerO] = useState()
    const [PlayerOData, setPlayerOData] = useState("O")
    const [PlayerXData, setPlayerXData] = useState("X")

    const [playing_array, setPlayingArray] = useState([
      "","","",
      "","","",
      "","",""
    ])

    const [move_status, setMoveStatus] = useState("Let's Start Moving")
    const [marking_status, setMarkingStatus] = useState("")

    const [marks_x, setMarks_X] = useState(0)
    const [marks_o, setMarks_O] = useState(0)


    const play_target_o = (e) => {

        setPlayerO(true)

        setPlayerX(false)

        if(isPlayerO){
            setPlayerOData(e.target.textContent)
        }

        
    }

    const play_target_x = (e) => {

        setPlayerX(true)

        setPlayerO(false)

        if(isPlayerX){
          setPlayerXData(e.target.textContent)
        }

        
    }
    const number_1 = 1
    const number_2 = 2
    const number_3 = 3
    const number_4 = 4
    const number_5 = 5
    const number_6 = 6
    const number_7 = 7
    const number_8 = 8
    const number_9 = 9


    const first_target = (e) => {

         e.target.value = number_1

         console.log(e.target.value)

         

         if(isPlayerO){
            e.target.textContent = PlayerOData
            playing_array[0] = PlayerOData
            playing_array(playing_array)
            console.log(playing_array)
            setMoveStatus("Player X Move")
            
            
            
         }else if(isPlayerX){
            e.target.textContent = PlayerXData
            
            playing_array[0] = PlayerXData
            setPlayingArray(playing_array)
            console.log(playing_array)
            setMoveStatus("Player O Move")

            
            

         }


         answers_checking()

         

         

    }

    const second_target = (e) => {

        e.target.value = number_2

        console.log(e.target.value)

        if(isPlayerO){
           e.target.textContent = PlayerOData
           playing_array[1] = PlayerOData
           setPlayingArray(playing_array)
           console.log(playing_array)
           setMoveStatus("Player X Move")

           
        }else if(isPlayerX){
           e.target.textContent = PlayerXData
           playing_array[1] = PlayerXData
           setPlayingArray(playing_array)
           console.log(playing_array)
           setMoveStatus("Player O Move")
           
        }

        

      answers_checking()

       


   }


   const third_target = (e) => {

         e.target.value = number_3

         console.log(e.target.value)

         if(isPlayerO){
            e.target.textContent = PlayerOData
            playing_array[2] = PlayerOData
            setPlayingArray(playing_array)
            console.log(playing_array)
            setMoveStatus("Player X Move")
            
            
         }else if(isPlayerX){
            e.target.textContent = PlayerXData
            playing_array[2] = PlayerXData
            setPlayingArray(playing_array)
            console.log(playing_array)
            setMoveStatus("Player O Move")
         }


         answers_checking()



    }


    const fourth_target = (e) => {

        e.target.value = number_4

        console.log(e.target.value)

        if(isPlayerO){
           e.target.textContent = PlayerOData
           playing_array[3] = PlayerOData
           setPlayingArray(playing_array)
           console.log(playing_array)
           setMoveStatus("Player X Move")

           
           
        }else if(isPlayerX){
           e.target.textContent = PlayerXData
           playing_array[3] = PlayerXData
           setPlayingArray(playing_array)
           console.log(playing_array)
           setMoveStatus("Player O Move")

        }


      answers_checking()


   }

   const fifth_target = (e) => {

         e.target.value = number_5

         console.log(e.target.value)

         if(isPlayerO){
            e.target.textContent = PlayerOData
            playing_array[4] = PlayerOData
            setPlayingArray(playing_array)
            console.log(playing_array)
            setMoveStatus("Player X Move")
            
            
         }else if(isPlayerX){
            e.target.textContent = PlayerXData
            playing_array[4] = PlayerXData
            setPlayingArray(playing_array)
            console.log(playing_array)
            setMoveStatus("Player O Move")
            
         }

         answers_checking()


    }


    const sixth_target = (e) => {

        e.target.value = number_6

        console.log(e.target.value)

        if(isPlayerO){
           e.target.textContent = PlayerOData
           playing_array[5] = PlayerOData
           setPlayingArray(playing_array)
           console.log(playing_array)
           setMoveStatus("Player X Move")
           
        }else if(isPlayerX){
           e.target.textContent = PlayerXData
           playing_array[5] = PlayerXData
           setPlayingArray(playing_array)
           console.log(playing_array)
           setMoveStatus("Player O Move")
           
        }


        answers_checking()


   }


   const seventh_target = (e) => {

         e.target.value = number_7

         console.log(e.target.value)

         if(isPlayerO){
            e.target.textContent = PlayerOData
            playing_array[6] = PlayerOData
            setPlayingArray(playing_array)
            console.log(playing_array)
            setMoveStatus("Player X Move")

            
         }else if(isPlayerX){
            e.target.textContent = PlayerXData
            playing_array[6] = PlayerXData
            setPlayingArray(playing_array)
            console.log(playing_array)
            setMoveStatus("Player O Move")

         }


         answers_checking()


    }


    const eight_target = (e) => {

        e.target.value = number_8

        console.log(e.target.value)

        if(isPlayerO){
           e.target.textContent = PlayerOData
           playing_array[7] = PlayerOData
           setPlayingArray(playing_array)
           console.log(playing_array)
           setMoveStatus("Player X Move")

           
        }else if(isPlayerX){
           e.target.textContent = PlayerXData
           playing_array[7] = PlayerXData
           setPlayingArray(playing_array)
           console.log(playing_array)
           setMoveStatus("Player O Move")

        }

        answers_checking()


   }



   const ninth_target = (e) => {

         e.target.value = number_9

         console.log(e.target.value)

         if(isPlayerO){
            e.target.textContent = PlayerOData
            playing_array[8] = PlayerOData
            setPlayingArray(playing_array)
            console.log(playing_array)
            setMoveStatus("Player X Move")

            
         }else if(isPlayerX){
            e.target.textContent = PlayerXData
            playing_array[8] = PlayerXData
            setPlayingArray(playing_array)
            console.log(playing_array)
            setMoveStatus("Player O Move")

         }

         answers_checking()

    }



   const answers_checking = () => {
      
      
      //match win patterns
      if (playing_array[0] == "X" && playing_array[1] == "X" && playing_array[2] == "X") {
         setMarkingStatus("X Player has won!")
         setMarks_X(1)
      } 

      else if(playing_array[0] == "O" && playing_array[1] == "O" && playing_array[2] == "O"){
         setMarkingStatus('O Player has won!')
         setMarks_O(1)
      }


      else if(playing_array[1] == "X" && playing_array[4] == "X" && playing_array[7] == "X"){
         setMarkingStatus("X Player has won!")
         setMarks_X(1)
      }

      else if(playing_array[1] == "O" && playing_array[4] == "O" && playing_array[7] == "O"){
         setMarkingStatus('O Player has won!')
         setMarks_O(1)
      }
      else if(playing_array[0] == "X" && playing_array[4] == "X" && playing_array[8] == "X"){
         setMarkingStatus("X Player has won!")
         setMarks_X(1)
      }

      else if(playing_array[0] == "O" && playing_array[4] == "O" && playing_array[8] == "O"){
         setMarkingStatus('O Player has won!')
         setMarks_O(1)
      }

      else if(playing_array[0] == "X" && playing_array[3] == "X" && playing_array[6] == "X"){
         setMarkingStatus("X Player has won!")
         setMarks_X(1)
      }

      else if(playing_array[0] == "O" && playing_array[3] == "O" && playing_array[6] == "O"){
         setMarkingStatus("O Player has won!")
         setMarks_O(1)
      }

      else if(playing_array[3] == "X" && playing_array[4] == "X" && playing_array[5] == "X"){
         setMarkingStatus("X Player has won!")
         setMarks_X(1)
      }

      else if(playing_array[3] == "O" && playing_array[4] == "O" && playing_array[5] == "O"){
         setMarkingStatus("O Player has won!")
         setMarks_O(1)
      }

      else if(playing_array[2] == "X" && playing_array[5] == "X" && playing_array[8] == "X"){
         setMarkingStatus("X Player has won!")
         setMarks_X(1)
      }


      else if(playing_array[2] == "O" && playing_array[5] == "O" && playing_array[8] == "O"){
         setMarkingStatus("O Player has won!")
         setMarks_O(1)
      }
      else if(playing_array[2] == "X" && playing_array[4] == "X" && playing_array[6] == "X"){
         setMarkingStatus("X Player has won!")
         setMarks_X(1)
      }

      else if(playing_array[2] == "O" && playing_array[4] == "O" && playing_array[6] == "O"){
         setMarkingStatus("O Player has won!")
         setMarks_O(1)
      }

      else if(playing_array[6] == "X" && playing_array[7] == "X" && playing_array[8] == "X"){
         setMarkingStatus("X Player has won!")
         setMarks_X(1)
      }

      else if(playing_array[6] == "O" && playing_array[7] == "O" && playing_array[8] == "O"){
         setMarkingStatus("O Player has won!")
         setMarks_O(1)
      }
      
      else if (!playing_array.includes("") && !playing_array.includes(undefined)) {
         console.log("Match Draw");
         setMarkingStatus("Match Drawn")
         setMarks_O(0)
         setMarks_X(0)
         
      } else {
         console.log("Not all boxes are filled yet.")
         
      }
      
      


   }



   
    return (

        <div>

        <div className="game-title">
           <h1>Play Tic-Tac-Toe</h1>
        </div>


        <div className="game-grid">

            <div className="grid" onClick={first_target}>

            </div>


            <div className="grid" onClick={second_target}>
                
            </div>

            <div className="grid" onClick={third_target}>
                
            </div>

            <div className="grid" onClick={fourth_target}>
                
            </div>


            <div className="grid" onClick={fifth_target}>
                
            </div>

            <div className="grid" onClick={sixth_target}>
                
            </div>


            <div className="grid" onClick={seventh_target}>
                
            </div>


            <div className="grid" onClick={eight_target}>
                
            </div>


            <div className="grid" onClick={ninth_target}>
                
            </div>

        </div>

        <div className="marking-status">
           <h2>{marking_status}</h2>
        </div>

        
           
        


        <div className="player-moves">

         

          <div className="play-areas">

          

            <div className="player-x-area">
         

               <div className="player-x" onClick={play_target_x}>
                 X
               </div>


               <div className="marks-area-x">
                <h3>{marks_x}</h3>
               </div>

            </div>


            <h3>{move_status}</h3>


           
               
           <div className="play-o-area">
              
             

             <div className="player-o" onClick={play_target_o}>
               O
             </div>

             <div className="marks-area-O">
               <h3>{marks_o}</h3>
             </div>

           </div>



         </div>

            
        </div>
        </div>
        
    )
}
export default GameArea;