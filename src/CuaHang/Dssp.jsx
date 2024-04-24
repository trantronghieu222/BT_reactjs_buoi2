import React from 'react'
import SanPham from './SanPham'

const Dssp = (props) => {
  const {products, setChiTietSP} = props;
  // console.log(products);
  return (
    <div className='row'>
      {products.map(item => {
        return <div className='col-4 mt-2' key={item.id}>
          <SanPham products={item} setChiTietSP={setChiTietSP}></SanPham>
        </div>
      })}
    </div>
  )
}

export default Dssp