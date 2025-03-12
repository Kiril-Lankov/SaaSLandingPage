import React from 'react'

const Testimonials = () => {
    return (
        <section className='relative z-2 py-24 md:py-28 lg:py-40'>
            <div className='container block lg:flex'>
                <div className='testimonials_head-res relative z-2 mr-20 flex-300'>
                    <p className='caption mb-5 max-md:mb-2.5'>Wall of Love</p>
                    <h3 className='h3 max-md:h5 text-p4'>Words from our fans</h3>
                </div>

                <div className='testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block'>
                    <div className='testimonials_group-after flex-50'></div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
