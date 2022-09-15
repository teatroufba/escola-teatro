import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

import { Container } from './styles'

function GoToTop() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY > 20
      if (isTop !== scrolled) {
        setScrolled(isTop)
      }
    })
  })

  function handleGoToTop() {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  return (
    <Container>
      {scrolled && (
        <button className="goToTop" onClick={() => handleGoToTop()}>
          <IoIosArrowUp color="white" height={50} width={50} />
        </button>
      )}
    </Container>
  )
}

export default GoToTop
