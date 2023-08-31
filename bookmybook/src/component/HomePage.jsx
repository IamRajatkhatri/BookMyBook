import "../css/homepage.css"
const HomePage = (props) => {

  return (

    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Book My Book</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/SignUp">SignUp</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <div className="search">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              </div>
            </form>
          </div>
        </nav>
      </div>
      <div>
	{props.bookData.map((item)=>(
	 <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body"> 
          <div>
          <h2 class="card-text">{item.title}</h2>
          </div>
          <div>
            <p>{item.author}</p>
          </div>
            <button type="submit" onClick={(e)=>{props.deleteItem(e,item)}}>delete</button>
          </div>
	</div>
	))        
  }  
      </div>
    </div>

  )

}

export default HomePage