import React from 'react'
import Headeritems from '../components/Headeritems'
import { HomeIcon, LightningBoltIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto '>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <Headeritems  title="HOME" Icon={HomeIcon}/>
            <Headeritems  title="TRENDING" Icon={LightningBoltIcon}/>
            <Headeritems  title="VERIFIED" Icon={BadgeCheckIcon}/>
            <Headeritems  title="COLLECTIONS" Icon={CollectionIcon}/>
            <Headeritems  title="SEARCH" Icon={SearchIcon}/>
            <Headeritems  title="ACCOUNT" Icon={UserIcon}/>
        </div>
        <Image src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        width={200}
        height={100}
        />

    </header>
  )
}

export default Header