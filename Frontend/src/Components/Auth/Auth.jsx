import React, { useEffect, useState } from 'react'
import './Auth.css'
import axios from 'axios'
import toast from 'react-hot-toast';

function Auth() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    
    const [isActive, setIsActive] = useState('Add-product')
    // create Product api fetch start from here
    const [addProductData, setAddFormData] = useState({
        name: '',
        des: '',
        img: '',
        category: ''
    })

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const addProductapi = async (e) => {
        e.preventDefault()
        // console.log(addProductData)
        try {
            const response = await axios.post('https://api.digitalstriker.in/api/createProducts', addProductData)
            console.log('add product api called', response)
            toast.success("Product added successfully")
        } catch (error) {
            // console.log(error)
            toast.error("Something went wrong!" + error)
        }
    }

    // create Product api fetch end here

    // get all product api fetch start from here 

    const [allProduct, setAllProduct] = useState([])

    useEffect(() => {
        const getallproduct = async () => {
            try {
                const response = await axios.get('https://api.digitalstriker.in/api/allproduct')
                console.log(response.data.data)
                setAllProduct(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }

        getallproduct()
    }, [])

    // get all product api fetch end here 

    // delete one product api fetch start from here 

    const handleDelete = async (id) => {
        try {
         const res= await axios.delete(`https://api.digitalstriker.in/api/deleteProduct/${id}`);
            console.log(res)
            toast.success("Product deleted successfully");
            // Update the product list after deletion
            const updatedProducts = allProduct.filter(product => product.id !== id);
            setAllProduct(updatedProducts);
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error("Something went wrong!" + error);
        }
    };

   
   
    // delete one product api fetch end from here 

    // contact detail fetch api 

    const [EmailData , setEmailData] = useState([])

    useEffect(()=>{
        const fetchEmail = async () => {
            try {
                const response = await axios.get('https://api.digitalstriker.in/api/getcontact')
                setEmailData(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchEmail()
    },[])

    // delete mail 

    const handleMailDelete = async (id) => {
        try {
         const res = await axios.delete(`https://api.digitalstriker.in/api/delete-mail/${id}`);
            console.log(res)
            toast.success("Email deleted successfully");
            // Update the product list after deletion
            const updatedEmail = EmailData.filter(Email => Email.id !== id);
            setEmailData(updatedEmail);
        } catch (error) {
            console.error('Error deleting Email:', error);
            toast.error("Something went wrong!" + error);
        }
    };

    return (
        <section className='auth-section'>
            <div className="container">
                <div className="heading">
                    <span>Admin</span>
                </div>
                <div className="down">
                    <div className="buttons">
                        <button onClick={() => setIsActive('Add-product')}>Add Product</button>
                        <button onClick={() => setIsActive('All-product')}>All Product</button>
                        <button onClick={() => setIsActive('All-Email')}>Email</button>
                    </div>
                    <div className="main-container">

                        {
                            isActive === "Add-product" ? (
                                <form onSubmit={addProductapi} action="">
                            <div className="up-field">
                                <div className="name same-field">
                                    <label htmlFor="product-name">Product Name:</label>
                                    <input value={addProductData.name} name='name' onChange={handleChange} type="text" placeholder='Product Name' />
                                </div>
                                <div className="image-upload same-field">
                                    <label htmlFor="image">Image Upload:</label>
                                    <input type="text" value={addProductData.img} placeholder='Image link' name="img" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="mid-field">
                                <label htmlFor="category">Category:</label>
                                <select name="category" value={addProductData.category} onChange={handleChange} className='category'>
                                    <option>--Select Your Category--</option>
                                    <option value="Active Product">Active Product</option>
                                    <option value="Passive Product">Passive Product</option>
                                    <option value="Optical Fiber Tools">Optical Fiber Tools</option>
                                </select>
                            </div>
                            <div className="down-field">
                                <label htmlFor="description">Description:</label>
                                <textarea value={addProductData.des} name='des' onChange={handleChange} id="description"></textarea>
                            </div>
                            <div className="btns">
                                <button type='rest'>Rest</button>
                                <button type='submit'>Add Product</button>
                            </div>
                        </form>
                            ) : isActive === "All-product" ? (
                                <div className="main-product-box">
                            {
                                allProduct && allProduct.map((item, index) => (
                                    <div className="col" key={index}>
                                        <div className="img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="des-box">
                                            <div className="detail">
                                                <h4>{item.name}</h4>
                                                <p>{item.category}</p>
                                            </div>
                                            {/* <div className="des">
                                                <p>{item.des}</p>
                                            </div> */}
                                            <div className="delete-btn">
                                                <button  onClick={() => handleDelete(item._id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                            ) : isActive === "All-Email" ? (
                                <div className='table-container'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone No</th>
                                                <th>Message</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                EmailData && EmailData.map((item,index)=>(
                                                <tr key={index}>
                                                    <td>{item.Name}</td>
                                                    <td>{item.Email}</td>
                                                    <td>{item.PhoneNumber}</td>
                                                    <td>{item.Message}</td>
                                                    <td><button onClick={() => handleMailDelete(item._id)}>Delete</button></td>
                                                </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <p>Page Not Found</p>
                            )
                        }

                        
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Auth
