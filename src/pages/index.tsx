import Header from '@/components/header'
import NavBar from '@/components/navbar'
import GoToTop from '@/components/TopButton'

import StyledDropdown from '../components/menumobile'

function Home() {
  return (
    <div>
      <GoToTop />
      <NavBar />
      <StyledDropdown />
      <Header />
    </div>
  )
}

export default Home
