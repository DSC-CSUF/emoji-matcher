import React, {useState, useEffect} from 'react';
import * as S from './GamePageStyle';
import Card from '../../components/card/Card';
import shuffle from '../../utils/shuffle';

const GamePage = () => {

  const emojis = ["🐆", "🐳", "🦎", "🐈", "🐞", "🦓", "🐭", "🦅", "🐏", "🦀"];
  const [cardData, setCardData] = useState(null);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  const initializeCards = () => {
    var emojiSet = emojis.flatMap(i => [i,i]);
    shuffle(emojiSet);

    var deck = [];
    var id = 0;
    for(var e in emojiSet){
      deck.push({
        emoji: emojiSet[e],
        id
      })
      id++;
    }
    setCardData(deck);
  }

  const cardClicked = (id) => {

    if(!flipped.includes(id)){
      if(flipped.length < 2){
        setFlipped([...flipped, id]);
        if(flipped.length === 1){
          if(cardData[flipped[0]].emoji === cardData[id].emoji){
            setMatched([...matched, flipped[0], id]);
          }
          setTimeout(async function(){
            setFlipped([]);
          }, 900)
        }
      }
    }
  }

  const resetBoard = () => {
    setFlipped([])
    setMatched([])
    initializeCards();
  }

  useEffect(() => {
    initializeCards();
  }, [])

  return (
    <S.Page>
      <S.Reset onClick={resetBoard}>
        reset
      </S.Reset>
      <S.Header>
        Score: {matched.length/2}
      </S.Header>
      <S.GameGrid>
        {cardData != null && cardData.map((data) => (
          <Card emoji={data.emoji} id={data.id} flipped={flipped.includes(data.id)} handleClick={ () => {cardClicked(data.id)}} matched={matched.includes(data.id)}/>
        ))}
      </S.GameGrid>
    </S.Page>
  )
}

export default GamePage;