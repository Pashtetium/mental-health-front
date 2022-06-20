import React from 'react'

import { ReactComponent as Logo } from 'common/assets/welcome.svg'
import { SigninForm } from 'components/organisms'

import { CardStyle } from './LoginCardStyle'

function LoginCard() {
  return (
    <CardStyle>
      <Logo style={{ marginRight: 40 }} width="250px" />
      <SigninForm />
    </CardStyle>
  )
}

export default LoginCard
