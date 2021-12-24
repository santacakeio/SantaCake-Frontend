import React from 'react'
import { useLocation } from 'react-router'
import { Menu as UikitMenu } from '@santacakeio/uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'

import useTheme from 'hooks/useTheme'


import config from './config/config'
import UserMenu from './UserMenu'
import GlobalSettings from './GlobalSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'


const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()

  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useLocation()
  

  const activeMenuItem = getActiveMenuItem({ menuConfig: config(t), pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  return (
    <UikitMenu
      userMenu={<UserMenu />}
      globalMenu={<GlobalSettings />}
      
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      
      links={config(t)}
      
    
      
      activeSubItem={activeSubMenuItem?.href}
      buyCakeLabel={t('Buy XCake')}
      {...props}
    />
  )
}

export default Menu
