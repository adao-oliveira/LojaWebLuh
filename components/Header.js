import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DataContext } from '../store/GlobalState'
import Cookie from 'js-cookie'


function startmenu() {
  af.style.display = "none";
}

function abrefecha() {
  if (af.style.display == "none") {
    af.style.display = "block";
  }
  else {
    startmenu();
  }
}

function NavBar() {
  const router = useRouter()
  const { state, dispatch } = useContext(DataContext)
  const { auth, cart } = state


  const isActive = (r) => {
    if (r === router.pathname) {
      return " active"
    } else {
      return ""
    }
  }

  const handleLogout = () => {
    Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' })
    localStorage.removeItem('firstLogin')
    dispatch({ type: 'AUTH', payload: {} })
    dispatch({ type: 'NOTIFY', payload: { success: 'Logged out!' } })
    return router.push('/')
  }

  const adminRouter = () => {
    return (
      <>
        <Link href="/users">
          <a className="dropdown-item">Usuários</a>
        </Link>
        <Link href="/create">
          <a className="dropdown-item">Produtos</a>
        </Link>
        <Link href="/categories">
          <a className="dropdown-item">Categorias</a>
        </Link>
      </>
    )
  }


  const loggedRouter = () => {
    return (
      <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={auth.user.avatar} alt={auth.user.avatar}
              style={{
                borderRadius: '50%', width: '30px', height: '30px',
                transform: 'translateY(-3px)', marginRight: '3px'
              }} /> {auth.user.name}
          </a>

          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link href="/profile">
              <a className="dropdown-item">Perfil</a>
            </Link>
            {
              auth.user.role === 'admin' && adminRouter()
            }
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={handleLogout}>Sair</button>
          </div>
        </li>
        )
        <header className="main-header">
          <nav className="navbar navbar-expand-lg navbar-light navbar-default bootsnav">
            <div className="container">
              <div className="navbar-header">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                  aria-controls="navbars-rs-food"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-bars text-gray-900"></i>
                </button>
                <Link href="/">
                  <a className="navbar-brand">
                    {/* <h2 className="text-black font-light">Luh Cakes</h2> */}
                    <img src="images/logo.jpg" className="logo" alt="Lu Cakes" />
                  </a>
                </Link>
              </div>

              <div className="navbar-collapse collapse" id="navbar-menu">
                <ul
                  className="nav navbar-nav ml-auto"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                  id="menu"
                >
                  <li className="nav-item">
                    <Link href="/cart">
                      <a className={"nav-link" + isActive('/cart')}>
                        <i className="fas fa-shopping-cart position-relative" aria-hidden="true">
                          <span className="position-absolute"
                            style={{
                              padding: '3px 6px',
                              background: '#ed143dc2',
                              borderRadius: '50%',
                              top: '-10px',
                              right: '-10px',
                              color: 'white',
                              fontSize: '14px'
                            }}>
                            {cart.length}
                          </span>
                        </i> Carrinho
                      </a>
                    </Link>
                  </li>
                  {
                    Object.keys(auth).length === 0
                      ? <li className="nav-item">
                        <Link href="/signin">
                          <a className={"nav-link" + isActive('/signin')}>
                            <i className="fas fa-user" aria-hidden="true"></i> Login
                          </a>
                        </Link>
                      </li>
                      : loggedRouter()
                  }
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/apresentacao">
                      <a className="nav-link">Apresentação</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">Produtos</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">Depoimentos</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="https://app.linktree.com.br/lucakes">
                      <a className="nav-link">Contatos</a>
                    </Link>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
        </header>
      </>
    )
  }
  
  export default NavBar
