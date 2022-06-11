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
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae eaque animi autem eum? Voluptas libero ad corporis soluta? Est sapiente laborum ut repudiandae ea fugit nulla sunt quidem voluptatem mollitia.</p>
              <h2>TEXT PLACEHOLDER</h2>
            </div>
            <div>
              <h3>Related Events</h3>
              <div>
                <img src="" alt="" />
                <div></div>
              </div>
              <div>
                <img src="" alt="" />
                <div></div>
              </div>
              <div>
                <img src="" alt="" />
                <div></div>
              </div>
              <div>
                <img src="" alt="" />
                <div></div>
              </div>
              <div>
                <img src="" alt="" />
                <div></div>
              </div>
              <div>
                <img src="" alt="" />
                <div></div>
              </div>
            </div>
        </Layout>
    </div>
  )
}
