
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
//   Paper, TablePagination, Typography, TextField
// } from '@mui/material';

// const ProductTable = () => {
//   const [products, setProducts] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   // Fetch all products initially
//   useEffect(() => {
//     axios.get('http://localhost:4000/api/products')
//       .then(res => {
//         setProducts(res.data);
//         setFilteredProducts(res.data);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   // Fetch filtered products on search
//   useEffect(() => {
//     if (searchText.trim() === '') {
//       setFilteredProducts(products);
//       return;
//     }

//     axios.get(`http://192.168.29.202:4000/api/products/search?name=${searchText}`)
//       .then(res => {
//         setFilteredProducts(res.data);
//         setPage(0); // Reset to first page
//       })
//       .catch(err => console.error(err));
//   }, [searchText, products]);

//   const handleChangePage = (event, newPage) => setPage(newPage);
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: '90%', margin: 'auto', mt: 4 }}>
//       <Typography variant="h4" sx={{ padding: 2, fontWeight: 'bold' }}>
//         Product List
//       </Typography>

//       <TextField
//         label="Search Products by Name"
//         variant="outlined"
//         fullWidth
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//         // sx={{ m: 2 }}
//       />

//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow sx={{ backgroundColor: '#1976d2' }}>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Price</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>In Stock</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredProducts
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((product, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{product.name}</TableCell>
//                   <TableCell>${product.price}</TableCell>
//                   <TableCell>{product.category}</TableCell>
//                   <TableCell>{product.inStock ? 'Yes' : 'No'}</TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <TablePagination
//         rowsPerPageOptions={[10, 25, 50, 100]}
//         component="div"
//         count={filteredProducts.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// };

// export default ProductTable;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
//   TablePagination, Typography, Container, TextField, Box
// } from '@mui/material';

// const ProductTable = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState('');
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   // Fetch products (search aware)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://192.168.29.202:4000';
//         const endpoint = search.trim()
//           ? `/api/products/search?name=${search}`
//           : '/api/products';
//         const res = await axios.get(`${baseURL}${endpoint}`);
//         setProducts(res.data);
//         setPage(0);
//       } catch (err) {
//         console.error('API error:', err);
//       }
//     };

//     fetchData();
//   }, [search]);

//   return (
//     <Container maxWidth="md" sx={{ marginTop: 4 }}>
//       <Typography variant="h5" fontWeight="bold" gutterBottom>
//         Product List
//       </Typography>

//       <Box mb={2}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           label="Search Products by Name"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </Box>

//       <Paper elevation={3}>
//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow sx={{ backgroundColor: '#1976d2' }}>
//                 <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Name</TableCell>
//                 <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Price</TableCell>
//                 <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Category</TableCell>
//                 <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>In Stock</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {products
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((product, i) => (
//                   <TableRow key={i} data-testid="product-row">
//                     <TableCell>{product.name}</TableCell>
//                     <TableCell>${product.price}</TableCell>
//                     <TableCell>{product.category}</TableCell>
//                     <TableCell>{product.inStock ? 'Yes' : 'No'}</TableCell>
//                   </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           component="div"
//           count={products.length}
//           page={page}
//           onPageChange={(e, newPage) => setPage(newPage)}
//           rowsPerPage={rowsPerPage}
//           onRowsPerPageChange={e => {
//             setRowsPerPage(parseInt(e.target.value, 10));
//             setPage(0);
//           }}
//           rowsPerPageOptions={[10, 25, 50, 100]}
//         />
//       </Paper>
//     </Container>
//   );
// };

// export default ProductTable;








import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TablePagination, Typography, Container, TextField, Box, Button
} from '@mui/material';

const ProductTable = () => {
  const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://192.168.29.202:4000';

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editIndex, setEditIndex] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = search.trim()
          ? `/api/products/search?name=${search}`
          : '/api/products';
        const res = await axios.get(`${baseURL}${endpoint}`);
        setProducts(res.data);
        setPage(0);
      } catch (err) {
        console.error('API error:', err);
      }
    };
    fetchData();
  }, [search]);

  // Handle edit field change
  const handleInputChange = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };

  // Save updated product
  const handleSave = async (id) => {
    try {
      const res = await axios.put(`${baseURL}/api/products/${id}`, editedProduct);
      const updatedList = [...products];
      updatedList[editIndex] = res.data;
      setProducts(updatedList);
      setEditIndex(null);
      setEditedProduct({});
    } catch (err) {
      console.error('Update failed', err);
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/api/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Product List
      </Typography>

      <Box mb={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search Products by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      <Paper elevation={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1976d2' }}>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Price</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Category</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>In Stock</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product, i) => (
                  <TableRow key={product._id}>
                    {editIndex === i ? (
                      <>
                        <TableCell>
                          <TextField
                            name="name"
                            value={editedProduct.name}
                            onChange={handleInputChange}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name="price"
                            type="number"
                            value={editedProduct.price}
                            onChange={handleInputChange}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name="category"
                            value={editedProduct.category}
                            onChange={handleInputChange}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name="inStock"
                            value={editedProduct.inStock}
                            onChange={handleInputChange}
                          />
                        </TableCell>
                        <TableCell>
                          <Button variant="contained" color="success" onClick={() => handleSave(product._id)}>
                            Submit
                          </Button>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.inStock ? 'Yes' : 'No'}</TableCell>
                        <TableCell>
                          <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            sx={{ mr: 1 }}
                            onClick={() => {
                              setEditIndex(i);
                              setEditedProduct(product);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            onClick={() => handleDelete(product._id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={products.length}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={e => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          rowsPerPageOptions={[10, 25, 50, 100]}
        />
      </Paper>
    </Container>
  );
};

export default ProductTable;
