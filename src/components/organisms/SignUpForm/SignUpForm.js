import React from 'react'
import { Input, Button, Typography } from 'antd'
import { Form, Field } from 'formik'
import { Link } from 'react-router-dom'

import { FormStyle } from './SignUpFormStyle'

const { Text } = Typography

function SigninForm() {
  return (
    <>
      <FormStyle>
        <Text>Registration</Text>
        <Form.Item label="Email">
          <Field as={Input} name="email" type="email" />
        </Form.Item>
        <Form.Item label="Password">
          <Field as={Input} name="password" type="password" />
        </Form.Item>
        <Button>Log In</Button>
      </FormStyle>
      <Link to="/signup">Sign Up</Link>
    </>
  )
}

export default SigninForm
