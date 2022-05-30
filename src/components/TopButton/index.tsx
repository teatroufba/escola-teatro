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
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Container>
      {scrolled && (
        <button className="goToTop" onClick={() => handleGoToTop()}>
          <IoIosArrowUp color="white" width={50} height={50} />
        </button>
      )}
    </Container>
  )
}

export default GoToTop
