import { useEffect, useState } from 'react'
import './Gamearea.css'

const GameArea = () => {

    //game functional areas
    const [isPlayerX, setPlayerX] = useState(true)
    const [isPlayerO, setPlayerO] = useState(true)
    const [PlayerOData, setPlayerOData] = useState("O")
    const [PlayerXData, setPlayerXData] = useState("X")

    const [array_x_1, setArray_X_1] = useState([])
    const [move_status, setMoveStatus] = useState("Let's Start Moving")
    const [marking_status, setMarkingStatus] = useState("")

    const [marks_x, setMarks_X] = useState(0)
    const [marks_o, setMarks_O] = useState(0)


    const play_target_o = (e) => {

        if(isPlayerO){
            setPlayerOData(e.target.textContent)
            setPlayerO(false)
            setPlayerX(true)
        }

        
    }

    const play_target_x = (e) => {

        if(isPlayerX){

          setPlayerXData(e.target.textContent)
          setPlayerX(false)
          setPlayerO(true)

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

         

         if(!isPlayerO){
            e.target.textContent = PlayerOData
            array_x_1[0] = PlayerOData

            //array_x_1.push(PlayerOData)
            
            setArray_X_1(array_x_1)
            console.log(array_x_1)
            setMoveStatus("Player X Move")
            
            
            
         }else if(!isPlayerX){
            e.target.textContent = PlayerXData
            
            array_x_1[0] = PlayerXData
            //array_x_1.push(PlayerXData)
            
            setArray_X_1(array_x_1)
            console.log(array_x_1)
            setMoveStatus("Player O Move")

            
            

         }

         
         

         

         answers_checking()

         pattern_identifying(e)

         

         

    }

    const second_target = (e) => {

        e.target.value = number_2

        console.log(e.target.value)

        if(!isPlayerO){
           e.target.textContent = PlayerOData
           array_x_1[1] = PlayerOData
           setArray_X_1(array_x_1)
           console.log(array_x_1)
           setMoveStatus("Player X Move")

           
           
           
        }else if(!isPlayerX){
           e.target.textContent = PlayerXData
           array_x_1[1] = PlayerXData
           setArray_X_1(array_x_1)
           console.log(array_x_1)
           setMoveStatus("Player O Move")
           
        }

        

      answers_checking()

      pattern_identifying(e)

       


   }


   const third_target = (e) => {

         e.target.value = number_3

         console.log(e.target.value)

         if(!isPlayerO){
            e.target.textContent = PlayerOData
            array_x_1[2] = PlayerOData
            setArray_X_1(array_x_1)
            console.log(array_x_1)
            setMoveStatus("Player X Move")
            
            
         }else if(!isPlayerX){
            e.target.textContent = PlayerXData
            array_x_1[2] = PlayerXData
            setArray_X_1(array_x_1)
            console.log(array_x_1)
            setMoveStatus("Player O Move")
         }

         


         answers_checking()

         pattern_identifying(e)



    }


    const fourth_target = (e) => {

        e.target.value = number_4

        console.log(e.target.value)

        if(!isPlayerO){
           e.target.textContent = PlayerOData
           array_x_1[3] = PlayerOData
            //array_x_1.push(PlayerOData)
           setArray_X_1(array_x_1)
           console.log(array_x_1)
           
           
        }else if(!isPlayerX){
           e.target.textContent = PlayerXData
           array_x_1[3] = PlayerXData
            //array_x_1.push(PlayerXData)
           setArray_X_1(array_x_1)
           console.log(array_x_1)
        }

        

      pattern_identifying(e)

      answers_checking()


   }

   const fifth_target = (e) => {

         e.target.value = number_5

         console.log(e.target.value)

         if(!isPlayerO){
            e.target.textContent = PlayerOData
            array_x_1[4] = PlayerOData
            //array_x_1.push(PlayerOData)
            setArray_X_1(array_x_1)
            console.log(array_x_1)
            
            
         }else if(!isPlayerX){
            e.target.textContent = PlayerXData
            array_x_1[4] = PlayerXData
            //array_x_1.push(PlayerXData)
            setArray_X_1(array_x_1)
            console.log(array_x_1)
            
         }

         pattern_identifying(e)

         answers_checking()


    }


    const sixth_target = (e) => {

        e.target.value = number_6

        console.log(e.target.value)

        if(!isPlayerO){
           e.target.textContent = PlayerOData
           array_x_1[5] = PlayerOData
            //array_x_1.push(PlayerOData)
           setArray_X_1(array_x_1)
           console.log(array_x_1)
           
        }else if(!isPlayerX){
           e.target.textContent = PlayerXData
           array_x_1[5] = PlayerXData
            //array_x_1.push(PlayerXData)
           setArray_X_1(array_x_1)
           console.log(array_x_1)
           
        }

        pattern_identifying(e)

        answers_checking()


   }


   const seventh_target = (e) => {

         e.target.value = number_7

         console.log(e.target.value)

         if(!isPlayerO){
            e.target.textContent = PlayerOData
            array_x_1[6] = PlayerOData
            setArray_X_1(array_x_1)
            console.log(array_x_1)
            
         }else if(!isPlayerX){
            e.target.textContent = PlayerXData
            array_x_1[6] = PlayerXData
            setArray_X_1(array_x_1)
            console.log(array_x_1)
         }

         pattern_identifying(e)

         answers_checking()


    }


    const eight_target = (e) => {

        e.target.value = number_8

        console.log(e.target.value)

        if(!isPlayerO){
           e.target.textContent = PlayerOData
           array_x_1[7] = PlayerOData
           setArray_X_1(array_x_1)
           console.log(array_x_1)
           
        }else if(!isPlayerX){
           e.target.textContent = PlayerXData
           array_x_1[7] = PlayerXData
           setArray_X_1(array_x_1)
           console.log(array_x_1)
        }

        pattern_identifying(e)
        answers_checking()


   }



   const ninth_target = (e) => {

         e.target.value = number_9

         console.log(e.target.value)

         if(!isPlayerO){
            e.target.textContent = PlayerOData
            array_x_1[8] = PlayerOData
            setArray_X_1(array_x_1)
            console.log(array_x_1)
            
         }else if(!isPlayerX){
            e.target.textContent = PlayerXData
            array_x_1[8] = PlayerXData
            //array_x_1.push(PlayerXData)
            setArray_X_1(array_x_1)
            console.log(array_x_1)
         }

         pattern_identifying(e)

         answers_checking()

    }



    const pattern_identifying = (e) => {



      if(e.target.value == 1){

        console.log("First Pattern Checking..!!")

      }else if(e.target.value == 2){
        console.log("Second Pattern Checking..!!")

      }else if(e.target.value == 3){
         console.log("Third Pattern Checking..!!")


      }else if(e.target.value == 4){
         console.log("Fourth Pattern Checking..!!")

      }else if(e.target.value == 5){
         console.log("Fifth Pattern Checking..!!")
         
      }else if(e.target.value == 6){
         console.log("Sixth Pattern Checking..!!")

      }else if(e.target.value == 7){
         console.log("Seventh Pattern Checking..!!")


      }else if(e.target.value == 8){
         console.log("Eight Pattern Checking..!!")


      }else if(e.target.value == 9){
         console.log("Ninth Pattern Checking..!!")

      }else{
         console.log("Pattern Not found..!!")
      }
      
    }

   const answers_checking = () => {
      
      
      //match win patterns
      if(array_x_1[0] == "X" && array_x_1[1] == "X" && array_x_1[2] == "X"){
         
         console.log("Player X won at 1,2,3 Pattern or 3,2,1 pattern or 2,1,3")
         setMarkingStatus("Player X won..!!")
         setMarks_X(1)
       
         
      }else if(array_x_1[0] == "O" && array_x_1[1] == "O" && array_x_1[2] == "O"){
         
         console.log("Player O won at 1,2,3 Pattern or 3,2,1 pattern or 2,1,3")
         setMarkingStatus("Player O won..!!")
         setMarks_O(1)
      }
      else if(array_x_1[0] == "X" && array_x_1[3] == "X" && array_x_1[6] == "X"){
         
         console.log("Player X won at 1,4,7 Pattern or 7,4,1 pattern or 4,1,7")
         setMarkingStatus("Player X won..!!")
         setMarks_X(1)
         
         
      }
      else if(array_x_1[0] == "O" && array_x_1[3] == "O" && array_x_1[6] == "O"){
         
         console.log("Player O won at 1,4,7 Pattern or 7,4,1 pattern or 4,1,7")
         setMarkingStatus("Player O won..!!")
         setMarks_O(1)
         
      }
      else if(array_x_1[1] == "X" && array_x_1[4] == "X" && array_x_1[7] == "X"){
         
         console.log("Player X won at 2,5,8 Pattern or 8,5,2")
         setMarkingStatus("Player X won..!!")
         setMarks_X(1)
         
      }
      else if(array_x_1[1] == "O" && array_x_1[4] == "O" && array_x_1[7] == "O"){
         
         console.log("Player O won at 2,5,8 Pattern or 8,5,2")
         setMarkingStatus("Player O won..!!")
         setMarks_O(1)

         
         
      }
      else if(array_x_1[3] == "X" && array_x_1[4] == "X" && array_x_1[5] == "X"){
         
         console.log("Player X won at 4,5,6 Pattern or 6,5,4 or 5,4,6 Pattern")
         setMarkingStatus("Player X won..!!")
         setMarks_X(1)


         
         
      }else if(array_x_1[3] == "O" && array_x_1[4] == "O" && array_x_1[5] == "O"){
         console.log("Player O won at 4,5,6 Pattern or 6,5,4 or 5,4,6 Pattern")
         setMarkingStatus("Player O won..!!")
         setMarks_O(1)

         
      }

      else if(array_x_1[2] == "X" && array_x_1[5] == "X" && array_x_1[8] == "X"){
         console.log("Player X won at 3,6,9 Pattern or 9,6,3 Pattern or 6,3,9 Pattern")
         setMarkingStatus("Player X won..!!")
         setMarks_X(1)



      }else if(array_x_1[2] == "O" && array_x_1[5] == "O" && array_x_1[8] == "O"){
         console.log("Player O won at 3,6,9 Pattern or 9,6,3 Pattern or 6,3,9 Pattern")
         setMarkingStatus("Player O won..!!")
         setMarks_O(1)

      }

      else if(array_x_1[0] == "X" && array_x_1[4] == "X" && array_x_1[8] == "X"){
         console.log("Player X won at 1,5,9 Pattern or 9,5,1 Pattern or 5,1,9 Pattern")
         setMarkingStatus("Player X won..!!")
         setMarks_X(1)


      }

      else if(array_x_1[0] == "O" && array_x_1[4] == "O" && array_x_1[8] == "O"){
         console.log("Player O won at 1,5,9 Pattern or 9,5,1 Pattern or 5,1,9 Pattern")
         setMarkingStatus("Player O won..!!")
         setMarks_O(1)

      }

      else if(array_x_1[2] == "X" && array_x_1[4] == "X" && array_x_1[6] == "X"){
         console.log("Player X won at 3,5,7 Pattern or 7,5,3 Pattern or 5,3,7 Pattern")
         setMarkingStatus("Player X won..!!")
         setMarks_X(1)
      }

      else if(array_x_1[2] == "O" && array_x_1[4] == "O" && array_x_1[6] == "O"){
         console.log("Player O won at 3,5,7 Pattern or 7,5,3 Pattern or 5,3,7 Pattern")
         setMarkingStatus("Player O won..!!")
         setMarks_O(1)

      }

      else if(array_x_1[6] == "X" && array_x_1[7] == "X" && array_x_1[8] == "X"){
         console.log("Player X won at 7,8,9 Pattern or 9,8,7 Pattern or 8,7,9 Pattern")
         setMarkingStatus("Player X won..!!")
         setMarks_X(1)
      }

      else if(array_x_1[6] == "O" && array_x_1[7] == "O" && array_x_1[8] == "O"){
         console.log("Player O won at 7,8,9 Pattern or 9,8,7 Pattern or 8,7,9 Pattern")
         setMarkingStatus("Player O won..!!")
         setMarks_O(1)

      }


      //match draw patterns (1,2,3)
      if(array_x_1[0] == "X" && array_x_1[1] == "O" && array_x_1[2] == "X" || array_x_1[0] == "X" && array_x_1[3] == "O" && array_x_1[6] == "X"
      || array_x_1[1] == "X" && array_x_1[4] == "O" && array_x_1[7] == "X" || array_x_1[3] == "X" && array_x_1[4] == "O" && array_x_1[5] == "X"
      || array_x_1[2] == "X" && array_x_1[5] == "O" && array_x_1[8] == "X" || array_x_1[0] == "X" && array_x_1[4] == "O" && array_x_1[8] == "X"
      || array_x_1[2] == "X" && array_x_1[4] == "O" && array_x_1[6] == "X" || array_x_1[6] == "X" && array_x_1[7] == "O" && array_x_1[8] == "X"
      
      ){
         console.log("Match Drawn at 1,2,3 Pattern")
         setMarkingStatus("Match Drawn")

      }
      
      
      else if(array_x_1[0] == "O" && array_x_1[1] == "X" && array_x_1[2] == "O" || array_x_1[0] == "O" && array_x_1[3] == "X" && array_x_1[6] == "O"
      || array_x_1[1] == "O" && array_x_1[4] == "X" && array_x_1[7] == "O" || array_x_1[3] == "O" && array_x_1[4] == "X" && array_x_1[5] == "O"
      || array_x_1[2] == "O" && array_x_1[5] == "X" && array_x_1[8] == "O" || array_x_1[0] == "O" && array_x_1[4] == "X" && array_x_1[8] == "O"
      || array_x_1[2] == "O" && array_x_1[4] == "X" && array_x_1[6] == "O" || array_x_1[6] == "O" && array_x_1[7] == "X" && array_x_1[8] == "O"
      
      ){
         console.log("Match Drawn at 1,2,3 Pattern")
         setMarkingStatus("Match Drawn")

      }
      
      
      else if(array_x_1[0] == "X" && array_x_1[1] == "X" && array_x_1[2] == "O" || array_x_1[0] == "X" && array_x_1[3] == "X" && array_x_1[6] == "O"
      || array_x_1[1] == "X" && array_x_1[4] == "X" && array_x_1[7] == "O" || array_x_1[3] == "X" && array_x_1[4] == "X" && array_x_1[5] == "O"
      || array_x_1[2] == "X" && array_x_1[5] == "X" && array_x_1[8] == "O" || array_x_1[0] == "X" && array_x_1[4] == "X" && array_x_1[8] == "O"
      || array_x_1[2] == "X" && array_x_1[4] == "X" && array_x_1[6] == "O" || array_x_1[6] == "X" && array_x_1[7] == "X" && array_x_1[8] == "O"
      
      ){
         console.log("Match Drawn at 1,2,3 Pattern")
         setMarkingStatus("Match Drawn")


      }
      
      else if(array_x_1[0] == "O" && array_x_1[1] == "O" && array_x_1[2] == "X" || array_x_1[0] == "O" && array_x_1[3] == "O" && array_x_1[6] == "X"
      || array_x_1[1] == "O" && array_x_1[4] == "O" && array_x_1[7] == "X" || array_x_1[3] == "O" && array_x_1[4] == "O" && array_x_1[5] == "X"
      || array_x_1[2] == "O" && array_x_1[5] == "O" && array_x_1[8] == "X" || array_x_1[0] == "O" && array_x_1[4] == "O" && array_x_1[8] == "X"
      || array_x_1[2] == "O" && array_x_1[4] == "O" && array_x_1[6] == "X" || array_x_1[6] == "O" && array_x_1[7] == "O" && array_x_1[8] == "X"
      ){
         console.log("Match Drawn at 1,2,3 Pattern")
         setMarkingStatus("Match Drawn")


      }
      
      else if(array_x_1[0] == "X" && array_x_1[1] == "O" && array_x_1[2] == "O" || array_x_1[0] == "X" && array_x_1[3] == "O" && array_x_1[6] == "O"
      || array_x_1[1] == "X" && array_x_1[4] == "O" && array_x_1[7] == "O" || array_x_1[3] == "X" && array_x_1[4] == "O" && array_x_1[5] == "O"
      || array_x_1[2] == "X" && array_x_1[5] == "O" && array_x_1[8] == "O" || array_x_1[0] == "X" && array_x_1[4] == "O" && array_x_1[8] == "O"
      || array_x_1[2] == "X" && array_x_1[4] == "O" && array_x_1[6] == "O" || array_x_1[6] == "X" && array_x_1[7] == "O" && array_x_1[8] == "O"
      ){
         console.log("Match Drawn at 1,2,3 Pattern")
         setMarkingStatus("Match Drawn")


      }
      
      else if(array_x_1[0] == "O" && array_x_1[1] == "O" && array_x_1[2] == "X" || array_x_1[0] == "O" && array_x_1[3] == "O" && array_x_1[6] == "X"
      || array_x_1[1] == "O" && array_x_1[4] == "O" && array_x_1[7] == "X" || array_x_1[3] == "O" && array_x_1[4] == "O" && array_x_1[5] == "X"
      || array_x_1[2] == "O" && array_x_1[5] == "O" && array_x_1[8] == "X" || array_x_1[0] == "O" && array_x_1[4] == "O" && array_x_1[8] == "X"
      || array_x_1[2] == "O" && array_x_1[4] == "O" && array_x_1[6] == "X" || array_x_1[6] == "O" && array_x_1[7] == "O" && array_x_1[8] == "X"
      
      ){
         console.log("Match Drawn at 1,2,3 Pattern")
         setMarkingStatus("Match Drawn")
         
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