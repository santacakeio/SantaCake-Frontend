import { MenuItemsType, DropdownMenuItemType, menuStatus  } from '@santacakeio/uikit'
import { ContextApi } from 'contexts/Localization/types'


export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }


const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },

  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  
  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
    
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Game'),
        href: 'https://game.santacake.io/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
        
      },
      {
        label: t('Docs'),
        href: 'https://docs.santacake.io/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
