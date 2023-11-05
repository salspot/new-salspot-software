import React from 'react'
import { RecoilRoot } from 'recoil'
import GoTop from './GoTop'
import SEO from './SEO'

const Layout = ({ children }) => {
    return (
        <RecoilRoot>
            <SEO />
            {children}
        </RecoilRoot>
    )
}

export default Layout
