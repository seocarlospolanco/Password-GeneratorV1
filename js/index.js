const characters =["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passWordOne = document.getElementById("stageone")
let passWordTwo = document.getElementById("stagetwo")


/*generatePasswords.addEventListener("click", function(){
    let input = document.getElementById("myrange")
    input = parseInt(myrange.value)
        if (input > 8){
            generator()
         } else {
            console.log("At least 8 Characters")
        }
})*/

function generator(){
    let wordIndexOne = Math.floor( Math.random() * characters.length ) 
    let wordIndexTwo = Math.floor( Math.random() * characters.length ) 
    let wordIndexThree = Math.floor( Math.random() * characters.length ) 
    let wordIndexFour = Math.floor( Math.random() * characters.length ) 
    let wordIndexFive = Math.floor( Math.random() * characters.length ) 
    let wordIndexSix = Math.floor( Math.random() * characters.length ) 
    let wordIndexSeven = Math.floor( Math.random() * characters.length ) 
    let wordIndexEight = Math.floor( Math.random() * characters.length )
    let wordIndexNine = Math.floor( Math.random() * characters.length )
    let wordIndexTen = Math.floor( Math.random() * characters.length )
    let wordIndexEleven = Math.floor( Math.random() * characters.length )
    let wordIndexTwelve = Math.floor( Math.random() * characters.length )
    let wordIndexTrece = Math.floor( Math.random() * characters.length )
    let wordIndexFourteen = Math.floor( Math.random() * characters.length )
    let wordIndexFiveTeen = Math.floor( Math.random() * characters.length )
    let wordIndexSixTeen = Math.floor( Math.random() * characters.length )
    let wordIndexSevenTeen = Math.floor( Math.random() * characters.length )
    let wordIndexEightTeen = Math.floor( Math.random() * characters.length )

    // v2
    let wordIndxOne = Math.floor( Math.random() * characters.length ) 
    let wordIndxTwo = Math.floor( Math.random() * characters.length ) 
    let wordIndxThree = Math.floor( Math.random() * characters.length ) 
    let wordIndxFour = Math.floor( Math.random() * characters.length ) 
    let wordIndxFive = Math.floor( Math.random() * characters.length ) 
    let wordIndxSix = Math.floor( Math.random() * characters.length ) 
    let wordIndxSeven = Math.floor( Math.random() * characters.length ) 
    let wordIndxEight = Math.floor( Math.random() * characters.length )
    let wordIndxNine = Math.floor( Math.random() * characters.length )  
    let wordIndxTen = Math.floor( Math.random() * characters.length )
    let wordIndxEleven = Math.floor( Math.random() * characters.length )
    let wordIndxTwelve = Math.floor( Math.random() * characters.length )
    let wordIndxTrece = Math.floor( Math.random() * characters.length )
    let wordIndxFourteen = Math.floor( Math.random() * characters.length )
    let wordIndxFiveTeen = Math.floor( Math.random() * characters.length )
    let wordIndxSixTeen = Math.floor( Math.random() * characters.length )
    let wordIndxSevenTeen = Math.floor( Math.random() * characters.length )
    let wordIndxEightTeen = Math.floor( Math.random() * characters.length )

    /* input box to control slider */

    let input = document.getElementById("range").value;
    input = parseInt(range.value)
        if (input === 8){         
            let eror = document.getElementById("notcool")
                                                    eror.textContent =""   
        passWordTwo.textContent = characters[wordIndexOne]+characters[wordIndexTwo]+characters[wordIndexThree]+characters[wordIndexFour]+characters[wordIndexFive]+characters[wordIndexSix]+characters[wordIndexSeven]+characters[wordIndexEight]
        passWordOne.textContent = characters[wordIndxOne]+characters[wordIndxTwo]+characters[wordIndxThree]+characters[wordIndxFour]+characters[wordIndxFive]+characters[wordIndxSix]+characters[wordIndxSeven]+characters[wordIndxEight]
         }else if (input === 9) {
            let eror = document.getElementById("notcool")
                                                    eror.textContent =""
        passWordTwo.textContent = characters[wordIndexOne]+characters[wordIndexTwo]+characters[wordIndexThree]+characters[wordIndexFour]+characters[wordIndexFive]+characters[wordIndexSix]+characters[wordIndexSeven]+characters[wordIndexEight]+characters[wordIndexNine]
        passWordOne.textContent = characters[wordIndxOne]+characters[wordIndxTwo]+characters[wordIndxThree]+characters[wordIndxFour]+characters[wordIndxFive]+characters[wordIndxSix]+characters[wordIndxSeven]+characters[wordIndxEight]+characters[wordIndxNine]
        }
        else if (input === 10) {
            let eror = document.getElementById("notcool")
                                                    eror.textContent =""
            passWordTwo.textContent = characters[wordIndexOne]+characters[wordIndexTwo]+characters[wordIndexThree]+characters[wordIndexFour]+characters[wordIndexFive]+characters[wordIndexSix]+characters[wordIndexSeven]+characters[wordIndexEight]+characters[wordIndexNine]+characters[wordIndexTen]
            passWordOne.textContent = characters[wordIndxOne]+characters[wordIndxTwo]+characters[wordIndxThree]+characters[wordIndxFour]+characters[wordIndxFive]+characters[wordIndxSix]+characters[wordIndxSeven]+characters[wordIndxEight]+characters[wordIndxNine]+characters[wordIndxTen]
            }
            else if (input === 11) {
                let eror = document.getElementById("notcool")
                                                    eror.textContent =""
                passWordTwo.textContent = characters[wordIndexOne]+characters[wordIndexTwo]+characters[wordIndexThree]+characters[wordIndexFour]+characters[wordIndexFive]+characters[wordIndexSix]+characters[wordIndexSeven]+characters[wordIndexEight]+characters[wordIndexNine]+characters[wordIndexTen]+characters[wordIndexEleven]
            passWordOne.textContent = characters[wordIndxOne]+characters[wordIndxTwo]+characters[wordIndxThree]+characters[wordIndxFour]+characters[wordIndxFive]+characters[wordIndxSix]+characters[wordIndxSeven]+characters[wordIndxEight]+characters[wordIndxNine]+characters[wordIndxTen]+characters[wordIndxEleven]
            }
                else if (input === 12) {
                    let eror = document.getElementById("notcool")
                                                    eror.textContent =""
                    passWordTwo.textContent = characters[wordIndexOne]+characters[wordIndexTwo]+characters[wordIndexThree]+characters[wordIndexFour]+characters[wordIndexFive]+characters[wordIndexSix]+characters[wordIndexSeven]+characters[wordIndexEight]+characters[wordIndexNine]+characters[wordIndexTen]+characters[wordIndexEleven]+characters[wordIndexTwelve]
            passWordOne.textContent = characters[wordIndxOne]+characters[wordIndxTwo]+characters[wordIndxThree]+characters[wordIndxFour]+characters[wordIndxFive]+characters[wordIndxSix]+characters[wordIndxSeven]+characters[wordIndxEight]+characters[wordIndxNine]+characters[wordIndxTen]+characters[wordIndxEleven]+characters[wordIndxTwelve]
             }else if (input === 13) {
                let eror = document.getElementById("notcool")
                                                    eror.textContent =""
                passWordTwo.textContent = characters[wordIndexOne]+characters[wordIndexTwo]+characters[wordIndexThree]+characters[wordIndexFour]+characters[wordIndexFive]+characters[wordIndexSix]+characters[wordIndexSeven]+characters[wordIndexEight]+characters[wordIndexNine]+characters[wordIndexTen]+characters[wordIndexEleven]+characters[wordIndexTwelve]+characters[wordIndexTrece]
                passWordOne.textContent = characters[wordIndxOne]+characters[wordIndxTwo]+characters[wordIndxThree]+characters[wordIndxFour]+characters[wordIndxFive]+characters[wordIndxSix]+characters[wordIndxSeven]+characters[wordIndxEight]+characters[wordIndxNine]+characters[wordIndxTen]+characters[wordIndxEleven]+characters[wordIndxTwelve]+characters[wordIndxTrece]
                }else if (input === 14) {
                    let eror = document.getElementById("notcool")
                                                    eror.textContent =""
                    passWordTwo.textContent = characters[wordIndexOne]+characters[wordIndexTwo]+characters[wordIndexThree]+characters[wordIndexFour]+characters[wordIndexFive]+characters[wordIndexSix]+characters[wordIndexSeven]+characters[wordIndexEight]+characters[wordIndexNine]+characters[wordIndexTen]+characters[wordIndexEleven]+characters[wordIndexTwelve]+characters[wordIndexTrece]+characters[wordIndexFourteen]
                    passWordOne.textContent = characters[wordIndxOne]+characters[wordIndxTwo]+characters[wordIndxThree]+characters[wordIndxFour]+characters[wordIndxFive]+characters[wordIndxSix]+characters[wordIndxSeven]+characters[wordIndxEight]+characters[wordIndxNine]+characters[wordIndxTen]+characters[wordIndxEleven]+characters[wordIndxTwelve]+characters[wordIndxTrece]+characters[wordIndxFourteen]
                   }else if (input === 15) {
                    let eror = document.getElementById("notcool")
                                                    eror.textContent =""
                    passWordTwo.textContent = characters[wordIndexOne]+characters[wordIndexTwo]+characters[wordIndexThree]+characters[wordIndexFour]+characters[wordIndexFive]+characters[wordIndexSix]+characters[wordIndexSeven]+characters[wordIndexEight]+characters[wordIndexNine]+characters[wordIndexTen]+characters[wordIndexEleven]+characters[wordIndexTwelve]+characters[wordIndexTrece]+characters[wordIndexFourteen]+characters[wordIndexFiveTeen]
                    passWordOne.textContent = characters[wordIndxOne]+characters[wordIndxTwo]+characters[wordIndxThree]+characters[wordIndxFour]+characters[wordIndxFive]+characters[wordIndxSix]+characters[wordIndxSeven]+characters[wordIndxEight]+characters[wordIndxNine]+characters[wordIndxTen]+characters[wordIndxEleven]+characters[wordIndxTwelve]+characters[wordIndxTrece]+characters[wordIndxFourteen]+characters[wordIndxFiveTeen]
                        }else if (input === 16) {
                            let eror = document.getElementById("notcool")
                                                    eror.textContent =""
                            passWordTwo.textContent = characters[wordIndexOne]+characters[wordIndexTwo]+characters[wordIndexThree]+characters[wordIndexFour]+characters[wordIndexFive]+characters[wordIndexSix]+characters[wordIndexSeven]+characters[wordIndexEight]+characters[wordIndexNine]+characters[wordIndexTen]+characters[wordIndexEleven]+characters[wordIndexTwelve]+characters[wordIndexTrece]+characters[wordIndexFourteen]+characters[wordIndexFiveTeen]+characters[wordIndexSixTeen]
                            passWordOne.textContent = characters[wordIndxOne]+characters[wordIndxTwo]+characters[wordIndxThree]+characters[wordIndxFour]+characters[wordIndxFive]+characters[wordIndxSix]+characters[wordIndxSeven]+characters[wordIndxEight]+characters[wordIndxNine]+characters[wordIndxTen]+characters[wordIndxEleven]+characters[wordIndxTwelve]+characters[wordIndxTrece]+characters[wordIndxFourteen]+characters[wordIndxFiveTeen]+characters[wordIndxSixTeen]
                                   }else if (input === 17) {
                                    let eror = document.getElementById("notcool")
                                                    eror.textContent =""
                                    passWordTwo.textContent = characters[wordIndexOne]+characters[wordIndexTwo]+characters[wordIndexThree]+characters[wordIndexFour]+characters[wordIndexFive]+characters[wordIndexSix]+characters[wordIndexSeven]+characters[wordIndexEight]+characters[wordIndexNine]+characters[wordIndexTen]+characters[wordIndexEleven]+characters[wordIndexTwelve]+characters[wordIndexTrece]+characters[wordIndexFourteen]+characters[wordIndexFiveTeen]+characters[wordIndexSixTeen]+characters[wordIndexSevenTeen]
                                    passWordOne.textContent = characters[wordIndxOne]+characters[wordIndxTwo]+characters[wordIndxThree]+characters[wordIndxFour]+characters[wordIndxFive]+characters[wordIndxSix]+characters[wordIndxSeven]+characters[wordIndxEight]+characters[wordIndxNine]+characters[wordIndxTen]+characters[wordIndxEleven]+characters[wordIndxTwelve]+characters[wordIndxTrece]+characters[wordIndxFourteen]+characters[wordIndxFiveTeen]+characters[wordIndxSixTeen]+characters[wordIndxSevenTeen]
                                              }else if (input === 18) {
                                                let eror = document.getElementById("notcool")
                                                    eror.textContent =""
                                                passWordTwo.textContent = characters[wordIndexOne]+characters[wordIndexTwo]+characters[wordIndexThree]+characters[wordIndexFour]+characters[wordIndexFive]+characters[wordIndexSix]+characters[wordIndexSeven]+characters[wordIndexEight]+characters[wordIndexNine]+characters[wordIndexTen]+characters[wordIndexEleven]+characters[wordIndexTwelve]+characters[wordIndexTrece]+characters[wordIndexFourteen]+characters[wordIndexFiveTeen]+characters[wordIndexSixTeen]+characters[wordIndexSevenTeen]+characters[wordIndexEightTeen]
                                                passWordOne.textContent = characters[wordIndxOne]+characters[wordIndxTwo]+characters[wordIndxThree]+characters[wordIndxFour]+characters[wordIndxFive]+characters[wordIndxSix]+characters[wordIndxSeven]+characters[wordIndxEight]+characters[wordIndxNine]+characters[wordIndxTen]+characters[wordIndxEleven]+characters[wordIndxTwelve]+characters[wordIndxTrece]+characters[wordIndxFourteen]+characters[wordIndxFiveTeen]+characters[wordIndxSixTeen]+characters[wordIndxSevenTeen]+characters[wordIndxEightTeen]
                                                   } else if (input > 18 || input < 8) {
                                                    let eror = document.getElementById("notcool")
                                                    eror.textContent ="Only Passwords from 8-18 characters 🔏"
                                                   } else {
                                                    passWordTwo.textContent = characters[wordIndexOne]+characters[wordIndexTwo]+characters[wordIndexThree]+characters[wordIndexFour]+characters[wordIndexFive]+characters[wordIndexSix]+characters[wordIndexSeven]+characters[wordIndexEight]+characters[wordIndexNine]+characters[wordIndexTen]+characters[wordIndexEleven]+characters[wordIndexTwelve]+characters[wordIndexTrece]+characters[wordIndexFourteen]
                                                    passWordOne.textContent = characters[wordIndxOne]+characters[wordIndxTwo]+characters[wordIndxThree]+characters[wordIndxFour]+characters[wordIndxFive]+characters[wordIndxSix]+characters[wordIndxSeven]+characters[wordIndxEight]+characters[wordIndxNine]+characters[wordIndxTen]+characters[wordIndxEleven]+characters[wordIndxTwelve]+characters[wordIndxTrece]+characters[wordIndxFourteen]
                   
                                                   }


    
}

/* Copy Function */

let text = document.getElementById("stageone");
const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text.innerText);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

let textTwo = document.getElementById("stagetwo");
const copyContentTwo = async () => {
    try {
      await navigator.clipboard.writeText(textTwo.innerText);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  /* End */

  /* Input Script */

  const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)
