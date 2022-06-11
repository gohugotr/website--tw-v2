import React from 'react'
import ImageOne from '../images/yumurta.jpg'
import ImageTwo from '../images/yumurta1.jpg'

const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={ImageOne} alt='Yumurta' className='h-full mb-20 rounded shadow' />
        <div className='center-content'>
          <h2 className='mb-2 text-2xl'>Tane Tane Yumurta</h2>
          <p className='mb-2'>Doğal, organik ve taptaze yumurtalar</p>
          <strong>16₺</strong>
        </div>
      </div>
      <div className='menu-card'>
        <img src={ImageTwo} alt='Yumurta2' className='h-full mb-20 rounded shadow' />
        <div className='center-content'>
          <h2 className='mb-2 text-2xl'>Çift Sarılı Yumurta</h2>
          <p className='mb-2'>Doğal, organik ve taptaze yumurtalar</p>
          <strong>22₺</strong>
        </div>
      </div>
    </>
  )
}

export default Content
