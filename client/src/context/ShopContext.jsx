import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ShopContext = createContext(null)

const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => load('eyeconic_cart', []))
  const [wishlist, setWishlist] = useState(() => load('eyeconic_wishlist', []))

  useEffect(() => {
    localStorage.setItem('eyeconic_cart', JSON.stringify(cart))
  }, [cart])
  useEffect(() => {
    localStorage.setItem('eyeconic_wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id)
      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [...prev, { ...product, qty }]
    })
  }

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id))

  const updateQty = (id, qty) =>
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
        .filter(Boolean)
    )

  const clearCart = () => setCart([])

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.find((i) => i.id === product.id)
        ? prev.filter((i) => i.id !== product.id)
        : [...prev, product]
    )
  }

  const inWishlist = (id) => wishlist.some((i) => i.id === id)

  const cartCount = useMemo(
    () => cart.reduce((n, i) => n + i.qty, 0),
    [cart]
  )
  const subtotal = useMemo(
    () => cart.reduce((s, i) => s + i.price * i.qty, 0),
    [cart]
  )

  const value = {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    toggleWishlist,
    inWishlist,
    cartCount,
    subtotal,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export const useShop = () => {
  const ctx = useContext(ShopContext)
  if (!ctx) throw new Error('useShop must be used within ShopProvider')
  return ctx
}
