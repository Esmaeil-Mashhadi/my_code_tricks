import React from 'react'

function BootStrap() {
  return (
    <div>
            <h1 className='text-warning'>header one</h1>
            <h2 className='text-muted'>header two</h2>
            <h3 className='text-danger'>header three</h3> 

            <h1 className='display-1'>headone</h1>
            <p className='display-1'>ptag</p>
            
            <p className='text-primary fw-bold text-decoration-underline'>primary color</p>
            <p className='text-white bg-primary'>second text test</p>

            <div className='container-xl'>
                <p  className='text-end bg-primary'>p in container</p>
                <div>div in container</div>
            </div>

            <div className='container-fluid row justify-content-center'>
                    <p className='col bg-primary col-6'>cl0</p>
                    <p className='col bg-orange-400'>cl1</p>
                    <p className='col bg-red-300' >cl2</p>
                    <p className='col bg-green-300'>cl3</p>
                    <p className='col bg-purple-200'>cl4</p>
                    <p className='col bg-primary col-sm-4 col-lg-6'>cl5</p>
            </div>
            <div className='accordion' id='chapters'>
                 <div className='accordion-item'>
                    <h2  className='according-header' id='header-1'>according header</h2>
                    <button className='accordion-button' type='button' data-bs-toggle ="collapse"
                        data-bs-target='#chapter-1' aria-controls='chapter-1' aria-expanded ="true"
                    ></button>
                    <div id='chapter-1' className='accordion-collapse collapse show' 
                        aria-labelledby='chapter-1' data-bs-parent ="#chapters"
                    >
                    <div className='accordion-body'>
                    this is the body of accordion
                    </div>
                        
                    </div>
                 </div>
            </div>
    </div>
  )
}

export default BootStrap