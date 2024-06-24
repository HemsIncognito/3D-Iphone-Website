import { navLists } from '../content'
import { appleImg, bagImg, searchImg } from '../utils'

const Navbar = () => {
  return <>
    <header className='w-full py-3 px-5 flex justify-center items-center sm:px-10'>
      <nav className='flex justify-center w-full screen-max-width max-md:justify-between'>
        <img src={appleImg} alt="Apple" width={14} height={18}/>

        <div className='flex mx-7 justify-center max-md:hidden'>  
          {navLists.map((nav) => (
            <div className='px-4 text-sm cursor-pointer text-gray hover:text-white transition-all' key={nav}>
              {nav}
            </div>
          ))}
        </div>

        <div className='flex justify-center items-center gap-7 max-sm:justify-end max-sm:flex-1'>
          <img className='text-gray cursor-pointer brightness-50 hover:scale-90 hover:brightness-100' src={searchImg} alt="search" width={18} height={18} />
          <img className='text-gray cursor-pointer brightness-50 hover:scale-90 hover:brightness-100' src={bagImg} alt="shopping_bag" width={18} height={18}/>
        </div>


      </nav>
    </header>
  </>
}

export default Navbar
