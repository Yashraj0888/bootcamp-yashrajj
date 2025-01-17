import { Product } from '../types/product'

function randomStock(): number {
  return Math.floor(Math.random() * 100) + 1
}

export const products: Product[] = [
  
  {
    id: '118',
    name: 'Portable Bluetooth Speaker',
    price: 59.99,
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
    category: 'Audio',
    description: 'Waterproof speaker with deep bass and 12-hour battery life.',
    stock: randomStock(),
    specifications: {
      'Battery Life': '12 hours',
      'Waterproof': 'IPX7',
      'Bluetooth': '5.0',
    },
  },
  {
    id: '121',
    name: 'Action Camera',
    price: 249.99,
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80',
    category: 'Cameras',
    description: 'Capture stunning 4K videos with this waterproof action camera.',
    stock: randomStock(),
    specifications: {
      'Resolution': '4K',
      'Waterproof': 'Yes',
      'Battery Life': '120 mins',
    },
  },
    {
      id: '122',
      name: 'Action Camera',
      price: 249.99,
      rating: 4.6,
      imageUrl: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80',
      category: 'Cameras',
      description: 'Capture stunning 4K videos with this waterproof action camera.',
      stock: 48,
      specifications: {
        'Resolution': '4K',
        'Waterproof': 'Yes',
        'Battery Life': '120 mins',
      },
    },
    {
      id: '124',
      name: 'Wireless Earbuds',
      price: 179.99,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80',
      category: 'Audio',
      description: 'Premium wireless earbuds with noise cancellation.',
      stock: 92,
      specifications: {
        'Battery': '24 hours',
        'Noise Cancelling': 'Yes',
        'Water Resistant': 'IPX4',
      },
    },
    {
      id: '125',
      name: 'Ultra Gaming Mouse',
      price: 89.99,
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80',
      category: 'Gaming',
      description: 'High-precision gaming mouse with customizable RGB.',
      stock: 127,
      specifications: {
        'DPI': '16000',
        'Buttons': '8',
        'RGB': 'Yes',
      },
    },
    {
      id: '126',
      name: 'Pro Laptop',
      price: 1299.99,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80',
      category: 'Computers',
      description: 'Professional laptop with high-performance specs.',
      stock: 23,
      specifications: {
        'Processor': 'Intel i7',
        'RAM': '16GB',
        'Storage': '512GB SSD',
      },
    },
    {
      id: '127',
      name: 'Smart Speaker',
      price: 129.99,
      rating: 4.5,
      imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80',
      category: 'Audio',
      description: 'Voice-controlled smart speaker with premium sound.',
      stock: 76,
      specifications: {
        'Power': '30W',
        'Voice Control': 'Yes',
        'WiFi': 'Dual-band',
      },
    },
    {
      id: '128',
      name: 'Wireless Keyboard',
      price: 119.99,
      rating: 4.6,
      imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
      category: 'Computers',
      description: 'Mechanical wireless keyboard with RGB backlight.',
      stock: 54,
      specifications: {
        'Type': 'Mechanical',
        'Battery': '40 hours',
        'Backlight': 'RGB',
      },
    },
    {
      id: '129',
      name: 'Gaming Monitor',
      price: 349.99,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
      category: 'Gaming',
      description: '27-inch gaming monitor with 144Hz refresh rate.',
      stock: 31,
      specifications: {
        'Size': '27 inch',
        'Refresh Rate': '144Hz',
        'Resolution': '2K',
      },
    },
    {
      id: '130',
      name: 'Drone Pro',
      price: 799.99,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80',
      category: 'Electronics',
      description: 'Professional drone with 4K camera and GPS.',
      stock: 19,
      specifications: {
        'Camera': '4K',
        'Flight Time': '30 mins',
        'Range': '5km',
      },
    },
    
      {id: '2001', name: 'Portable Bluetooth Speaker', price: 59.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80', category: 'Audio', description: 'Waterproof speaker with deep bass and 12-hour battery life.', stock: 'randomStock()', specifications: {'Battery Life': '12 hours', 'Waterproof': 'IPX7', 'Bluetooth': '5.0'}},
      {id: '2002', name: 'Action Camera', price: 249.99, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80', category: 'Cameras', description: 'Capture stunning 4K videos with this waterproof action camera.', stock: 'randomStock()', specifications: {'Resolution': '4K', 'Waterproof': 'Yes', 'Battery Life': '120 mins'}},
      {id: '2003', name: 'Action Camera', price: 249.99, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80', category: 'Cameras', description: 'Capture stunning 4K videos with this waterproof action camera.', stock: 48, specifications: {'Resolution': '4K', 'Waterproof': 'Yes', 'Battery Life': '120 mins'}},
      {id: '2004', name: 'Wireless Earbuds', price: 179.99, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80', category: 'Audio', description: 'Premium wireless earbuds with noise cancellation.', stock: 92, specifications: {'Battery': '24 hours', 'Noise Cancelling': 'Yes', 'Water Resistant': 'IPX4'}},
      {id: '2005', name: 'Ultra Gaming Mouse', price: 89.99, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80', category: 'Gaming', description: 'High-precision gaming mouse with customizable RGB.', stock: 127, specifications: {'DPI': '16000', 'Buttons': '8', 'RGB': 'Yes'}},
      {id: '2006', name: 'Pro Laptop', price: 1299.99, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80', category: 'Computers', description: 'Professional laptop with high-performance specs.', stock: 23, specifications: {'Processor': 'Intel i7', 'RAM': '16GB', 'Storage': '512GB SSD'}},
      {id: '2007', name: 'Smart Speaker', price: 129.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80', category: 'Audio', description: 'Voice-controlled smart speaker with premium sound.', stock: 76, specifications: {'Power': '30W', 'Voice Control': 'Yes', 'WiFi': 'Dual-band'}},
      {id: '2008', name: 'Wireless Keyboard', price: 119.99, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80', category: 'Computers', description: 'Mechanical wireless keyboard with RGB backlight.', stock: 54, specifications: {'Type': 'Mechanical', 'Battery': '40 hours', 'Backlight': 'RGB'}},
      {id: '2009', name: 'Gaming Monitor', price: 349.99, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80', category: 'Gaming', description: '27-inch gaming monitor with 144Hz refresh rate.', stock: 31, specifications: {'Size': '27 inch', 'Refresh Rate': '144Hz', 'Resolution': '2K'}},
      {id: '2010', name: 'Drone Pro', price: 799.99, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80', category: 'Electronics', description: 'Professional drone with 4K camera and GPS.', stock: 19, specifications: {'Camera': '4K', 'Flight Time': '30 mins', 'Range': '5km'}}
    
    ,
    {id: '2011', name: 'Portable Bluetooth Speaker', price: 59.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80', category: 'Audio', description: 'Waterproof speaker with deep bass and 12-hour battery life.', stock: 'randomStock()', specifications: {'Battery Life': '12 hours', 'Waterproof': 'IPX7', 'Bluetooth': '5.0'}},
    {id: '2012', name: 'Action Camera', price: 249.99, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80', category: 'Cameras', description: 'Capture stunning 4K videos with this waterproof action camera.', stock: 'randomStock()', specifications: {'Resolution': '4K', 'Waterproof': 'Yes', 'Battery Life': '120 mins'}},
    {id: '2013', name: 'Wireless Earbuds', price: 179.99, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80', category: 'Audio', description: 'Premium wireless earbuds with noise cancellation.', stock: 92, specifications: {'Battery': '24 hours', 'Noise Cancelling': 'Yes', 'Water Resistant': 'IPX4'}},
    {id: '2014', name: 'Ultra Gaming Mouse', price: 89.99, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80', category: 'Gaming', description: 'High-precision gaming mouse with customizable RGB.', stock: 127, specifications: {'DPI': '16000', 'Buttons': '8', 'RGB': 'Yes'}},
    {id: '2015', name: 'Pro Laptop', price: 1299.99, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80', category: 'Computers', description: 'Professional laptop with high-performance specs.', stock: 23, specifications: {'Processor': 'Intel i7', 'RAM': '16GB', 'Storage': '512GB SSD'}},
    {id: '2016', name: 'Smart Speaker', price: 129.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80', category: 'Audio', description: 'Voice-controlled smart speaker with premium sound.', stock: 76, specifications: {'Power': '30W', 'Voice Control': 'Yes', 'WiFi': 'Dual-band'}},
    {id: '2017', name: 'Wireless Keyboard', price: 119.99, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80', category: 'Computers', description: 'Mechanical wireless keyboard with RGB backlight.', stock: 54, specifications: {'Type': 'Mechanical', 'Battery': '40 hours', 'Backlight': 'RGB'}},
    {id: '2018', name: 'Gaming Monitor', price: 349.99, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80', category: 'Gaming', description: '27-inch gaming monitor with 144Hz refresh rate.', stock: 31, specifications: {'Size': '27 inch', 'Refresh Rate': '144Hz', 'Resolution': '2K'}},
    {id: '2019', name: 'Drone Pro', price: 799.99, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80', category: 'Electronics', description: 'Professional drone with 4K camera and GPS.', stock: 19, specifications: {'Camera': '4K', 'Flight Time': '30 mins', 'Range': '5km'}},
    {id: '2020', name: 'Portable Bluetooth Speaker', price: 59.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80', category: 'Audio', description: 'Waterproof speaker with deep bass and 12-hour battery life.', stock: 'randomStock()', specifications: {'Battery Life': '12 hours', 'Waterproof': 'IPX7', 'Bluetooth': '5.0'}}
,  
{id: '2021', name: 'Portable Bluetooth Speaker', price: 59.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80', category: 'Audio', description: 'Waterproof speaker with deep bass and 12-hour battery life.', stock: 'randomStock()', specifications: {'Battery Life': '12 hours', 'Waterproof': 'IPX7', 'Bluetooth': '5.0'}},
{id: '2022', name: 'Action Camera', price: 249.99, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80', category: 'Cameras', description: 'Capture stunning 4K videos with this waterproof action camera.', stock: 'randomStock()', specifications: {'Resolution': '4K', 'Waterproof': 'Yes', 'Battery Life': '120 mins'}},
{id: '2023', name: 'Wireless Earbuds', price: 179.99, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80', category: 'Audio', description: 'Premium wireless earbuds with noise cancellation.', stock: 92, specifications: {'Battery': '24 hours', 'Noise Cancelling': 'Yes', 'Water Resistant': 'IPX4'}},
{id: '2024', name: 'Ultra Gaming Mouse', price: 89.99, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80', category: 'Gaming', description: 'High-precision gaming mouse with customizable RGB.', stock: 127, specifications: {'DPI': '16000', 'Buttons': '8', 'RGB': 'Yes'}},
{id: '2025', name: 'Pro Laptop', price: 1299.99, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80', category: 'Computers', description: 'Professional laptop with high-performance specs.', stock: 23, specifications: {'Processor': 'Intel i7', 'RAM': '16GB', 'Storage': '512GB SSD'}},
{id: '2026', name: 'Smart Speaker', price: 129.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80', category: 'Audio', description: 'Voice-controlled smart speaker with premium sound.', stock: 76, specifications: {'Power': '30W', 'Voice Control': 'Yes', 'WiFi': 'Dual-band'}},
{id: '2027', name: 'Wireless Keyboard', price: 119.99, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80', category: 'Computers', description: 'Mechanical wireless keyboard with RGB backlight.', stock: 54, specifications: {'Type': 'Mechanical', 'Battery': '40 hours', 'Backlight': 'RGB'}},
{id: '2028', name: 'Gaming Monitor', price: 349.99, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80', category: 'Gaming', description: '27-inch gaming monitor with 144Hz refresh rate.', stock: 31, specifications: {'Size': '27 inch', 'Refresh Rate': '144Hz', 'Resolution': '2K'}},
{id: '2029', name: 'Drone Pro', price: 799.99, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80', category: 'Electronics', description: 'Professional drone with 4K camera and GPS.', stock: 19, specifications: {'Camera': '4K', 'Flight Time': '30 mins', 'Range': '5km'}},
{id: '2030', name: 'Portable Bluetooth Speaker', price: 59.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80', category: 'Audio', description: 'Waterproof speaker with deep bass and 12-hour battery life.', stock: 'randomStock()', specifications: {'Battery Life': '12 hours', 'Waterproof': 'IPX7', 'Bluetooth': '5.0'}}
,
{id: '2031', name: 'Portable Bluetooth Speaker', price: 59.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80', category: 'Audio', description: 'Waterproof speaker with deep bass and 12-hour battery life.', stock: 'randomStock()', specifications: {'Battery Life': '12 hours', 'Waterproof': 'IPX7', 'Bluetooth': '5.0'}},
  {id: '2032', name: 'Action Camera', price: 249.99, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80', category: 'Cameras', description: 'Capture stunning 4K videos with this waterproof action camera.', stock: 'randomStock()', specifications: {'Resolution': '4K', 'Waterproof': 'Yes', 'Battery Life': '120 mins'}},
  {id: '2033', name: 'Wireless Earbuds', price: 179.99, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80', category: 'Audio', description: 'Premium wireless earbuds with noise cancellation.', stock: 92, specifications: {'Battery': '24 hours', 'Noise Cancelling': 'Yes', 'Water Resistant': 'IPX4'}},
  {id: '2034', name: 'Ultra Gaming Mouse', price: 89.99, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80', category: 'Gaming', description: 'High-precision gaming mouse with customizable RGB.', stock: 127, specifications: {'DPI': '16000', 'Buttons': '8', 'RGB': 'Yes'}},
  {id: '2035', name: 'Pro Laptop', price: 1299.99, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80', category: 'Computers', description: 'Professional laptop with high-performance specs.', stock: 23, specifications: {'Processor': 'Intel i7', 'RAM': '16GB', 'Storage': '512GB SSD'}},
  {id: '2036', name: 'Smart Speaker', price: 129.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80', category: 'Audio', description: 'Voice-controlled smart speaker with premium sound.', stock: 76, specifications: {'Power': '30W', 'Voice Control': 'Yes', 'WiFi': 'Dual-band'}},
  {id: '2037', name: 'Wireless Keyboard', price: 119.99, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80', category: 'Computers', description: 'Mechanical wireless keyboard with RGB backlight.', stock: 54, specifications: {'Type': 'Mechanical', 'Battery': '40 hours', 'Backlight': 'RGB'}},
  {id: '2038', name: 'Gaming Monitor', price: 349.99, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80', category: 'Gaming', description: '27-inch gaming monitor with 144Hz refresh rate.', stock: 31, specifications: {'Size': '27 inch', 'Refresh Rate': '144Hz', 'Resolution': '2K'}},
  {id: '2039', name: 'Drone Pro', price: 799.99, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80', category: 'Electronics', description: 'Professional drone with 4K camera and GPS.', stock: 19, specifications: {'Camera': '4K', 'Flight Time': '30 mins', 'Range': '5km'}},
  {id: '2040', name: 'Portable Bluetooth Speaker', price: 59.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80', category: 'Audio', description: 'Waterproof speaker with deep bass and 12-hour battery life.', stock: 'randomStock()', specifications: {'Battery Life': '12 hours', 'Waterproof': 'IPX7', 'Bluetooth': '5.0'}},
  {id: '2041', name: 'Portable Bluetooth Speaker', price: 59.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80', category: 'Audio', description: 'Waterproof speaker with deep bass and 12-hour battery life.', stock: 'randomStock()', specifications: {'Battery Life': '12 hours', 'Waterproof': 'IPX7', 'Bluetooth': '5.0'}},
  {id: '2042', name: 'Action Camera', price: 249.99, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80', category: 'Cameras', description: 'Capture stunning 4K videos with this waterproof action camera.', stock: 'randomStock()', specifications: {'Resolution': '4K', 'Waterproof': 'Yes', 'Battery Life': '120 mins'}},
  {id: '2043', name: 'Wireless Earbuds', price: 179.99, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80', category: 'Audio', description: 'Premium wireless earbuds with noise cancellation.', stock: 92, specifications: {'Battery': '24 hours', 'Noise Cancelling': 'Yes', 'Water Resistant': 'IPX4'}},
  {id: '2044', name: 'Ultra Gaming Mouse', price: 89.99, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80', category: 'Gaming', description: 'High-precision gaming mouse with customizable RGB.', stock: 127, specifications: {'DPI': '16000', 'Buttons': '8', 'RGB': 'Yes'}},
  {id: '2045', name: 'Pro Laptop', price: 1299.99, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80', category: 'Computers', description: 'Professional laptop with high-performance specs.', stock: 23, specifications: {'Processor': 'Intel i7', 'RAM': '16GB', 'Storage': '512GB SSD'}},
  {id: '2046', name: 'Smart Speaker', price: 129.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80', category: 'Audio', description: 'Voice-controlled smart speaker with premium sound.', stock: 76, specifications: {'Power': '30W', 'Voice Control': 'Yes', 'WiFi': 'Dual-band'}},
  {id: '2047', name: 'Wireless Keyboard', price: 119.99, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80', category: 'Computers', description: 'Mechanical wireless keyboard with RGB backlight.', stock: 54, specifications: {'Type': 'Mechanical', 'Battery': '40 hours', 'Backlight': 'RGB'}},
  {id: '2048', name: 'Gaming Monitor', price: 349.99, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80', category: 'Gaming', description: '27-inch gaming monitor with 144Hz refresh rate.', stock: 31, specifications: {'Size': '27 inch', 'Refresh Rate': '144Hz', 'Resolution': '2K'}},
  {id: '2049', name: 'Drone Pro', price: 799.99, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80', category: 'Electronics', description: 'Professional drone with 4K camera and GPS.', stock: 19, specifications: {'Camera': '4K', 'Flight Time': '30 mins', 'Range': '5km'}},
  {id: '2050', name: 'Portable Bluetooth Speaker', price: 59.99, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80', category: 'Audio', description: 'Waterproof speaker with deep bass and 12-hour battery life.', stock: 'randomStock()', specifications: {'Battery Life': '12 hours', 'Waterproof': 'IPX7', 'Bluetooth': '5.0'}}
,
    

  
]

