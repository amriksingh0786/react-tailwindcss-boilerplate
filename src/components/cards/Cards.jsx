import React, { useState, useMemo ,useEffect} from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import "../../styles/cards.css"
const db = [
    {
        name: "One",
        url: "http://getdrawings.com/free-icon-bw/one-icon-3.png",
    },
    {
        name: "Two",
        url: "http://getdrawings.com/free-icon-bw/free-shirt-icon-9.png",
    },
    {
        name: "Three",
        url: "http://getdrawings.com/free-icon-bw/serial-number-icon-19.png",
    },
    {
        name: "Four",
        url: "http://getdrawings.com/free-icon-bw/serial-number-icon-18.png",
    },
    {
        name: "Five",
        url: "http://getdrawings.com/free-icon-bw/number-one-icon-17.png",
    },
]

const alreadyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

export default function SwipeCards () {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()
  useEffect(() => {
    setCharacters(JSON.parse(localStorage.getItem('char')));
  }, []);

  useEffect(() => {
    localStorage.setItem('char', characters);
  }, [characters]);  
  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      <div className='buttons'>
        <button onClick={() => swipe('left')}>Swipe left!</button>
        <button onClick={() => swipe('right')}>Swipe right!</button>
      </div>
      {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
      {/* getUserMessage() */}
    </div>
  )
}

