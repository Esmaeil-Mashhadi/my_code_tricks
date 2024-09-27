'use client'
import styles from './form.module.css'

const Page = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
    
        fetch('/api/file', {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
          })
          .catch((error) => {
            console.error('Error submitting form:', error);
          });
      };
    
    
    return (
            <form 
            enctype="multipart/form-data"
            onSubmit={submitHandler}
            className={styles.formContainer}>
  
            {[...Array(3)].map((item) => {
               return <div>
               <div>
                    <label>name</label>
                    <input  name='name' /> 
              </div>

              <div>
                  <label>last name</label>
                  <input  name='lastName' /> 
              </div>

              <div>
               <label>name</label>
               <input  name='image' type='file' /> 
              </div>
               
              </div>
              
            })}
            <button type='submit'>Submit</button>
            
            </form>
    );
};

export default Page;