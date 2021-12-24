import { FooterLinkType } from '@santacakeio/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.santacake.io/contact-us',
      },
      
      
    ],
  },
  
]
