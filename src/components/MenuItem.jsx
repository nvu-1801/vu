const MenuItem = () => {
    return <>
    
      {/*  Pizza Card 1 */}
      <div className="col-md-3">
        <div className="card h-100">
          <div className="image-container">
            <img src="./imges/menu-01.jpg" className="card-img-top" alt="Margherita Pizza"/>
            <span className="badge-sell">Sell</span>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Margherita Pizza</h5>
            <p className="card-text"><del>$40.00</del> $24.00</p>
            <button className="btn btn-warning full-width bg-black text-white">Buy</button>
          </div>
        </div>
      </div>
 
    </>
}

export default MenuItem;