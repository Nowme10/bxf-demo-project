import React from 'react'
import '../css/GoodService.css'

function GoodService() {
  return (
    <>
    <div className='hero-container'>
        <div className='top-bar'>
            <div className='logo-text'>
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_7377_3349)"><path d="M18.7979 8.5961C18.7161 8.58282 18.6332 8.57669 18.5504 8.57776H4.44077L4.74844 8.43466C5.04917 8.29233 5.32276 8.09861 5.55695 7.86227L9.51363 3.90558C10.0347 3.40814 10.1223 2.6079 9.72112 2.00952C9.25422 1.37188 8.35882 1.23343 7.72114 1.70034C7.66962 1.73808 7.62066 1.77922 7.57464 1.82349L0.419694 8.97844C-0.139465 9.53697 -0.139957 10.443 0.418576 11.0022C0.418934 11.0025 0.419336 11.0029 0.419694 11.0033L7.57464 18.1582C8.13425 18.7163 9.04029 18.715 9.59837 18.1554C9.64229 18.1114 9.68329 18.0645 9.72112 18.0151C10.1223 17.4168 10.0347 16.6165 9.51363 16.1191L5.5641 12.1552C5.35415 11.9451 5.11276 11.7688 4.84861 11.6329L4.41931 11.4397H18.4716C19.2026 11.4669 19.844 10.9562 19.9813 10.2377C20.1078 9.4576 19.578 8.72265 18.7979 8.5961Z" fill="white"></path></g><defs><clipPath id="clip0_7377_3349"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                </div>
                
            
            <div className='pay'>Pay for Goods & services </div>
            </div>
            <div className='text-btn'>
            <div>Back To Dashboard </div>
            <button>LOAD FUNDS</button>
            </div>
        </div>
        <div className='text-bar'>
            <p>Hi <b> Nara </b> You Have <b style={{textDecoration:"underline", color: "#064278"}}> $0.00</b> left in your account.</p>
        </div>
        <div className='main-body'>
            <form action="" >
                <div className='account'>
                    <label htmlFor="">Account Number</label>
                    <input type="number" />
                </div>
                <div className='amount'>
                    <label htmlFor="">Amount</label>
                    <div className='usd'>
                        <p>Enter Amount</p>
                        <p className='text'>USD</p>
                    </div>

                    <div className='bar'></div>
                </div>


            </form>
        </div>
    </div>
 
    </>
  )
}

export default GoodService