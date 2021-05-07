import React from 'react'
import { Link } from 'react-router-dom'
import { PathUrl } from '../../constants/path-url'
import Button from '../core/button'
import Container from '../core/container'
import Icons from '../core/icon'
import Wrapper from '../core/wrapper'

const Header = () => (
  <Wrapper className="bg-gray-800 text-white">
    <Container>
      <div className="w-full py-2 text-lg flex justify-between items-center flex-wrap">
        <Link to={PathUrl.HOME}>
          <span className="flex items-center">
            <Icons.Home className="pr-1" />
            React & Tailwindcss
          </span>
        </Link>
        <Link to={PathUrl.LOGIN}>
          <Button className="hover:bg-gray-600 ring-1 ring-gray-500 ring-opacity-60">
            Login
          </Button>
        </Link>
      </div>
    </Container>
  </Wrapper>
)

export default Header
