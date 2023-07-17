import { Button } from '../button/Button'
import { Ptag } from '../ptag/Ptag'

import cn from 'classnames'
import cs from './TextContent.module.scss'

interface Content {
   title: string
   text: string
   buttonText: string
   onClick: () => void
}

interface TextContentProps {
   content: Content
   side: 'right' | 'left'
}

export const TextContent = ({ content, side }: TextContentProps) => {
   const { buttonText, onClick, text, title } = content

   return (
      <div
         className={cn(cs.root, {
            [cs.left]: side === 'left',
            [cs.right]: side === 'right',
         })}
      >
         <div className={cs.content}>
            <h2 className={cs.title}>{title}</h2>
            <Ptag>{text}</Ptag>
            <Button onClick={onClick}>{buttonText}</Button>
         </div>
      </div>
   )
}
