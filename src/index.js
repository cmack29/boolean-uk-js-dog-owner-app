console.log(data);

const mainDogEl = document.querySelector("section");


function selectedDog(doggie) {
    h2El = document.querySelector('h2');
    h2El.innerText = "const dogName";
    mainDogEl.append(h2El);

    const imgEl = document.createElement('img');
    imgEl.setAttribute('src','');
    imgEl.setAttribute('alt', 'picture of a dog');
    imgEl.setAttribute('height', '300');
    imgEl.setAttribute('width', '400');
    mainDogEl.append(imgEl);

    const divEl = document.createElement('div');
    divEl.setAttribute ('class', 'main__dog-section__desc');
    mainDogEl.append(divEl);

    const h3El = document.createElement('h3');
    h3El.innerText = "I am the coolest";
    const pEl = document.createElement('p');
    pEl.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima voluptates libero cumque rerum consequatur optio aliquid sint eum maxime illo laborum omnis quo ab rem cupiditate nulla perspiciatis ipsum!";
    divEl.append(h3El, pEl);

    const div2El = document.createElement('div');
    div2El.className = 'main__dog-section__btn';
    mainDogEl.append(div2El);


    const p2El = document.createElement('p2');
    p2El.innerHTML = "<em>Is naughty?</em> Yes!";
    buttonEl = document.createElement('button');
    buttonEl.innerText = "Good Dog!";

    div2El.append(p2El, buttonEl);



}

const renderedSelectedDog = selectedDog(data[4]);
console.log("renderedSelectedDog: ", renderedSelectedDog);

mainDogEl.append(renderedSelectedDog);
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