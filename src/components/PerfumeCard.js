import React from 'react'

const PerfumeCard = () => {
  return (
    <div className='bg-card' >
          <div className='part-one' >
        </div>
          <div className='part-two'>
        <div className='price-number'>
              <label className='label-perfume' >P E R F U M E</label>
        </div>

        <div className='part-two'>
            <label className='main-label'>
                Gabrielle Essence
                Eau De Parfum
            </label>
        </div>
        <div className='part-two'>
              <p className='description'>
                  A floral, solar and voluptuos interprepation composed by oliver polge,perfumer-Cretor for the House of CHANEL.
              </p>
        </div>
        <div className='price-number'>
            <div style={{ height: "50px", width: "fit-content", marginRight: "10%" }}>
                      <label style={{  fontSize: "2rem", fontWeight: "bold", color: "#3d8168" }}>$149.99</label>
            </div>
              <div
                  style={{
                      display: "flex",
                      justifyContent: "flex-start", 
                      alignItems: "center", 
                      width: "fit-content",
                      height: "50px",
                      textAlign: "left", 
                      
                  }}
              >
                      <s style={{ fontSize: "1rem",  }}>$169.99</s>
              </div>
          </div>

        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
            <button className='button-cart' > 
                <img src={"/reshot-icon-empty-cart.svg"} style={{width:"1rem"}} alt='cart-logo'  ></img>
                 Add to cart</button>
        </div>
        </div>
    </div>
  )
}

export default PerfumeCard