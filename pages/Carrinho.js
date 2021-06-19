import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../store/GlobalState'
import CartItem from '../components/CartItem'
import Link from 'next/link'
import { getData, postData } from '../utils/fetchData'
import { useRouter } from 'next/router'


const Carrinho = () => {
  const { state, dispatch } = useContext(DataContext)
  const { Carrinho, auth, orders } = state

  const [total, setTotal] = useState(0)

  const [callback, setCallback] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const getTotal = () => {
      const res = Carrinho.reduce((prev, item) => {
        return prev + (item.price *  item.quantity)
      },0)

      setTotal(res)
    }

    getTotal()
  },[Carrinho])

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem('__next__cart01__devat'))
    if(cartLocal && cartLocal.length > 0){
      let newArr = []
      const updateCart = async () => {
        for (const item of cartLocal){
          const res = await getData(`product/${item._id}`)
          const { _id, title, images, price, inStock, sold } = res.product
          if(inStock > 0){
            newArr.push({ 
              _id, title, images, price, inStock, sold,
              quantity: item.quantity > inStock ? 1 : item.quantity
            })
          }
        }

        dispatch({ type: 'ADD_CART', payload: newArr })
      }

      updateCart()
    } 
  },[callback])

  const handlePayment = async () => {
    if(!address || !mobile)
    return dispatch({ type: 'NOTIFY', payload: {error: 'Please add your address and mobile.'}})

    let newCart = [];
    for(const item of Carrinho){
      const res = await getData(`product/${item._id}`)
      if(res.product.inStock - item.quantity >= 0){
        newCart.push(item)
      }
    }
    
    if(newCart.length < cart.length){
      setCallback(!callback)
      return dispatch({ type: 'NOTIFY', payload: {
        error: 'The product is out of stock or the quantity is insufficient.'
      }})
    }

    dispatch({ type: 'NOTIFY', payload: {loading: true} })

    postData('order', {address, mobile, Carrinho, total}, auth.token)
    .then(res => {
      if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

      dispatch({ type: 'ADD_CART', payload: [] })
      
      const newOrder = {
        ...res.newOrder,
        user: auth.user
      }
      dispatch({ type: 'ADD_ORDERS', payload: [...orders, newOrder] })
      dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
      return router.push(`/order/${res.newOrder._id}`)
    })

  }
  
  if( Carrinho.length === 0 ) 
    return <img className="img-responsive w-100" src="/empty_cart.jpg" alt="not empty"/>

    return(
      <div className="row mx-auto mt-48">
        <Head>
          <title>Carrinho</title>
        </Head>

        <div className="col-md-8 text-secondary table-responsive my-3">
          <h2 className="text-uppercase">Carrinho de Compras</h2>

          <table className="table my-3">
            <tbody>
              {
                Carrinho.map(item => (
                  <CartItem key={item._id} item={item} dispatch={dispatch} Carrinho={Carrinho} />
                ))
              }
            </tbody>
          </table>
        </div>

        <div className="col-md-4 my-3 text-right text-uppercase text-secondary">

            <h3>Total: <span className="text-danger">${total}</span></h3>

            
            <Link href={auth.user ? '#!' : '/signin'}>
              <a className="btn btn-success my-2" onClick={handlePayment}>Pagamento</a>
            </Link>
            
        </div>
      </div>
    )
  }
  
export default Carrinho