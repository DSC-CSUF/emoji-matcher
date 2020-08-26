import React from 'react'
import * as S from './CardStyle';

const Card = (props) => {
  
  return (
    <>
      {
        !props.matched ? 
        <S.CardBody onClick={props.handleClick}>
        <S.CardInner animate={props.flipped}>
          <S.CardBack>
            {props.emoji}
          </S.CardBack>
          <S.CardFront>
            ?
          </S.CardFront>
        </S.CardInner>
      </S.CardBody>
      :
      <S.CardBody style={{opacity: .3}}>
      <S.CardInner>
        <S.CardBack>
          ?
        </S.CardBack>
        <S.CardFront>
        {props.emoji}
        </S.CardFront>
      </S.CardInner>
    </S.CardBody>
      
      }

    </>
  )
}

export default Card;
