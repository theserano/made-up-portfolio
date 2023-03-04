import React from 'react'
import "./Blog.css"

const Blog = () => {
  return (
    <div>
      <h3 className='container header__blog'>Blog</h3>
      <Compact />
      <Compact />
      <Compact />
      <Compact />
      <Compact />
      <Compact />
    </div>
  )
}

const Compact = () => {
  return (
    <div className='container blog__post'>
      <h4>UI Interactions of the week</h4>
      <p>12 Feb 2020 | <span className='express'>Express, Handlers</span></p>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <hr />
    </div>
  )
}

export default Blog
