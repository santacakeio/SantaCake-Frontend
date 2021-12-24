import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SantaCake',
  description:
    'The most popular AMM on BSC by user count! Earn XCake through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by SantaCake), NFTs, and more, on a platform you can trust.',
  image: 'https://swap.santacake.io/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SantaCake')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('SantaCake')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SantaCake')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SantaCake')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SantaCake')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('SantaCake')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SantaCake')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SantaCake')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('SantaCake')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SantaCake')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('SantaCake')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SantaCake')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SantaCake')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SantaCake')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SantaCake')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('SantaCake')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('SantaCake')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('SantaCake')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('SantaCake Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('SantaCake Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('SantaCake Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('SantaCake')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('SantaCake')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('SantaCake')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('SantaCake')}`,
      }
    default:
      return null
  }
}
