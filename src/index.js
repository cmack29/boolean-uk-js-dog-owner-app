console.log(data);

const ulE1 = document.querySelector("ul")

function dogCard(data) {
    
    

    let dogList = {}

    for (let i = 0; i < data.length; i++) {
        const dog = data[i]
        const name = dog.name
        const ID = dog.ID
        const image = dog.image
        

        const gridEl = document.createElement('main')
        document.body.append(gridEl)
        gridE1.innerText = name

        const imgEl = document.createElement('img')
        document.body.append(imgEl)
        imgEl.setAttribute("src", image)


        
    }

    return dogCard;

}
// WRITE YOUR CODE BELOW!
// 1.0 bridge: <ul class="dogs-list"></ul>

// 2.0 createDogListItem():
// - create lisItemElem - <li>
// -- className = "dogs-list__button"
// -- innerText = dogName
// -- each listItem.addEventListener("click", appearOnTheMainCard)
// -- create appearOnTheMainCard()

// 3.0 createCardElement():
// -create mainCardElem - <section>
// --className = "main__dog-section"

// 3.1 inside mainCardElem:
// *h2Elem: innerText = dogName

// *imgElem:
// ---addAttribute(height)
// ---addAttribute(width)
// ---addAttribute(src)

// *divElem:
// ---className = "main__dog-section__desc"

// **inside divElem:
// ---h3Elem: innerText = bio
// ---pElem: innerText = lorem

// *divBtnElem:
// **inside divBtnElem:
// ---pElem
// ----inside pElem: 
// -----emElem: innetText = Is naughty?
// ----pElem.append(emElem): innerText = Yes!/No!

// ---buttonElem: innerText = Good dog/Bad dog
// = contionals isNaughty? Yes! : No!
// = buttonElem.addEventListener("click", checkIfNaughty())
// == create checkIfNaughty()
// == onClick changeInnerText()(edit later)