import React from 'react'
import "./Recent.css"

const Recent = () => {
  return (
    <div className='recent'>
        <div className='container'>
        <div className='top__tag'>
            <p>Recent Posts</p>
             <small>View all</small>
        </div>

        <div className='posts'>
            <article className="post">
                <h5>Making a design system from scratch</h5>
                <p>12 Feb 2020 | Design, Pattern</p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </article>

            <article className="post">
                <h5>Creating pixel perfect icons in Figma</h5>
                <p>12 Feb 2020 | Figma, Icon Design</p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </article>

        </div>

        </div>
        
    </div>
  )
}

export default Recent
