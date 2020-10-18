import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import Home from '../components/icons/Home'
import TitleBold from '../components/title-bold'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Save</Button>

export const NavButton = () => (
  <NavigationButton>
      <Home />
      <TitleBold>Twiter</TitleBold>
    </NavigationButton>
)


export const Nav = () => <Navigation selectedKey="home" />
