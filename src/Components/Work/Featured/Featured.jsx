import React from 'react'
import "./Featured.css"
import fe1 from  "../../../assets/Rectangle30.png"
import fe2 from  "../../../assets/Rectangle32.png"
import fe4 from  "../../../assets/Rectangle34.png"


const Featured = () => {
  return (
    <div className='featured container'>

      <p>Featured works</p>
      <section className='featured__works'>

        <article className="featured__work">
            <div className='featured__image'>
                <img src={fe1} alt="dsjh" />
            </div>
            <div className='featured__details'>
                <h4>Designing Boards</h4>
                <div className='featured__time'>
                    <div>2020</div>
                    <p>Dashboard</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </article>
            <hr/>
        
        <article className="featured__work">
            <div className='featured__image'>
                <img src={fe2} alt="djs" />
            </div>
            <div className='featured__details'>
                <h4>Vibrant Portraits of 2020</h4>
                <div className='featured__time'>
                    <div>2018</div>
                    <p>Illustration</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </article>
            <hr/>

        <article className="featured__work">
            <div className='featured__image'>
                <img src={fe4} alt="kjbs" />
            </div>
            <div className='featured__details'>
                <h4>36 Days of Malayalam type</h4>
                <div className='featured__time'>
                    <div>2018</div>
                    <p>Typography</p>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </article>
            <hr />

      </section>

    </div>
  )
}

export default Featured
