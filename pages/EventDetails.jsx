import React from 'react'
import Layout from './components/Layout'
import Link from 'next/link'

export default function EventDetails(props) {
  return (
    <div>
        <Layout>
            <Link href='/ApiCall'>
                <p>Search Results</p> 
            </Link>
            <input type="text" placeholder='Search' />

        </Layout>
    </div>
  )
}
