
import React from 'react'
import { AppbarContainer, AppbarHeader } from '../../styles/appbar'

const appbarMobile = ({matches}) => {

  return (
    (
      <AppbarContainer>
        <AppbarHeader>My Suki</AppbarHeader>
      </AppbarContainer>
    )
  )
}

export default appbarMobile