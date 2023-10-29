import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>Salspot Software - Customer Software Development</title>
                <meta name="description" content="Salspot Software - Customer Software Development" />
                <meta name="og:title" property="og:title" content="Salspot Software - Customer Software Development"></meta>
                <meta name="twitter:card" content="Salspot Software -Customer Software Development"></meta>
                <link rel="canonical" href="https://salspot-software.com"></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Helmet>
        </div>
    )
}

export default SEO
