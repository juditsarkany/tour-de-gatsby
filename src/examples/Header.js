import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
    const {site} = useStaticQuery(graphql `
        {
            site {
                siteMetadata  {
                    data {
                        age
                    }
                    title
                    author
                }
            }
        }
    `)

    return (
        <div>
            <h1>title:{site.siteMetadata.title}</h1>
            <h2>author:{site.siteMetadata.author}</h2>
        </div>
    )
}

export default Header
