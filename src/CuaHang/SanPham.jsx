import React from 'react'

const SanPham = (props) => {
  const {products, setChiTietSP} = props; 
  // console.log(products);
  return (
    <div>
        <div className='card m-3'>
            <img style={{width: '150px', height: '150px', margin: 'auto'}} src={products.image} />
            <div className='card-body'>
                <h3>{products.name}</h3>
                <p>{products.price} $</p>
                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => setChiTietSP(products)}>Chi tiết</button>
            </div>
        </div>
    </div>
  )
}

export default SanPham