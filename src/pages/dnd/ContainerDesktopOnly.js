import { memo } from 'react'
import { Box } from './Box.js'
import { Dustbin } from './Dustbin.js'

import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from './Card.js'

const style = {
  width: 400,
}
export const ContainerDesktopOnly = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Write a cool JS library',
      },
      {
        id: 2,
        text: 'Make it generic enough',
      },
      {
        id: 3,
        text: 'Write README',
      },
      {
        id: 4,
        text: 'Create some examples',
      },
      {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      },
      {
        id: 6,
        text: '???',
      },
      {
        id: 7,
        text: 'PROFIT',
      },
    ])
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
    }, [])
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      )
    }, [])
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}

// USED FOR DRAG AND DROP INTO A BOX
// export const Container = memo(function Container() {
//   return (
//     <div>
//       <div style={{ overflow: 'hidden', clear: 'both' }}>
//         <Dustbin />
//       </div>
//       <div style={{ overflow: 'hidden', clear: 'both' }}>
//         <Box name="Glass" />
//         <Box name="Banana" />
//         <Box name="Paper" />
//       </div>
//     </div>
//   )
// })

