import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '../types/product'

interface CartItem extends Product {
  quantity: number
}

interface State {
  favorites: Product[]
  cart: {
    items: CartItem[]
    total: number
  }
  userPreferences: {
    theme: 'light' | 'dark'
    language: string
    currency: string
  }
  addToFavorites: (product: Product) => void
  removeFromFavorites: (productId: string) => void
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateCartItemQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  updateUserPreferences: (preferences: Partial<State['userPreferences']>) => void
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      favorites: [],
      cart: {
        items: [],
        total: 0,
      },
      userPreferences: {
        theme: 'light',
        language: 'en',
        currency: 'USD',
      },
      addToFavorites: (product) =>
        set((state) => ({
          favorites: [...state.favorites, product],
        })),
      removeFromFavorites: (productId) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== productId),
        })),
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.items.find((item) => item.id === product.id)
          if (existingItem) {
            return {
              cart: {
                items: state.cart.items.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
                total: state.cart.total + product.price,
              },
            }
          }
          return {
            cart: {
              items: [...state.cart.items, { ...product, quantity: 1 }],
              total: state.cart.total + product.price,
            },
          }
        }),
      removeFromCart: (productId) =>
        set((state) => {
          const item = state.cart.items.find((item) => item.id === productId)
          if (!item) return state
          return {
            cart: {
              items: state.cart.items.filter((item) => item.id !== productId),
              total: state.cart.total - item.price * item.quantity,
            },
          }
        }),
      updateCartItemQuantity: (productId, quantity) =>
        set((state) => {
          const item = state.cart.items.find((item) => item.id === productId)
          if (!item) return state
          const quantityDiff = quantity - item.quantity
          return {
            cart: {
              items: state.cart.items.map((item) =>
                item.id === productId ? { ...item, quantity } : item
              ),
              total: state.cart.total + item.price * quantityDiff,
            },
          }
        }),
      clearCart: () =>
        set(() => ({
          cart: {
            items: [],
            total: 0,
          },
        })),
      updateUserPreferences: (preferences) =>
        set((state) => ({
          userPreferences: { ...state.userPreferences, ...preferences },
        })),
    }),
    {
      name: 'product-dashboard-storage',
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    }
  )
)

