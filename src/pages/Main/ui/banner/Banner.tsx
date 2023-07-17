import React from 'react'
import cs from './Banner.module.scss'
import { Wrapper } from '../../../../shared/UI/wrapper/Wrapper'
import { TextContent } from '../../../../shared/UI/textcontent/TextContent'

interface BannerProps {
   mode: 'more' | 'subscribe'
}

export const Banner = ({ mode }: BannerProps) => {
   return (
      <div className={cs.root}>
         <Wrapper width='sm'>
            <TextContent side='right' content={mode === 'more' ? moreBannerContent : descriptionBannerContent} />
         </Wrapper>
      </div>
   )
}

const moreBannerContent = {
   title: 'Встречайте весну вместе с нами',
   text: 'Попробуйте новую коллекцию ухаживающих средств для лица с SPF защитой',
   buttonText: 'Подробнее',
   onClick: () => {},
}

const descriptionBannerContent = {
   title: 'Присоединяйтесь к нам',
   text: 'Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях первыми',
   buttonText: 'Подписаться',
   onClick: () => {},
}

const questionnaireBannerContent = {
   title: 'Индивидуальный уход',
   text: 'Не всегда очевидно, какие элементы и минералы необходимы коже,         а многочисленные эксперименты     с разными средствами только ухудшают ее качество.Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы. ',
   buttonText: 'Заполнить анкету',
   onClick: () => {},
}
