import React from 'react'
import { Accordion} from 'rsuite';

const titles = [
  {id: 0, title: "How flexible are Cowork's membership plans?"},
  {id: 1,title: "What kind of events and networking opportunities does Cowork provide?"},
  {id: 2,title: "Can I tour the Cowork space before committing to a membership?"},
  {id: 3,title: "Is Cowork suitable for remote teams and distributed workforces?"},
  {id: 4,title: "What measures does Cowork take for environmental sustainability?"},
  {id: 5,title: "Still has questions?"}
]

function AccordionCard() {
  return (
    <Accordion>
      {titles.map(el =>(
            <Accordion.Panel header={<span className='accordion'>{el.title}</span>} defaultExpanded={el.id === 0} key={el.id}  >
            <p className='w-[391px] paragraph'>Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
          </Accordion.Panel>
      ))}
  </Accordion>
  )
}

export default AccordionCard