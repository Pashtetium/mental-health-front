import React from 'react'

import { FormStyle } from './SigninFormStyle'

function SigninForm() {
  return (
    <FormStyle>
      <form>
        <input type="email" />
        <input type="password" />
      </form>
    </FormStyle>
  )
}

export default SigninForm
