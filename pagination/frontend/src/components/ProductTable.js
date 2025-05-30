
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
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TablePagination, Typography, Container, TextField, Box,
  Button
} from '@mui/material';

const ProductTable = () => {
  const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://192.168.29.202:4000';

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editRowId, setEditRowId] = useState(null);
  const [editValues, setEditValues] = useState({});

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

  const enterEditMode = (product) => {
    setEditRowId(product._id);
    setEditValues({ ...product });
  };

  const handleEditChange = (field, value) => {
    setEditValues((prev) => ({
      ...prev,
      [field]:
        field === 'price' ? parseFloat(value)
        : field === 'inStock' ? value.toLowerCase() === 'yes'
        : value
    }));
  };

  const handleSave = async (id) => {
    try {
      const updatedData = {
        ...editValues,
        price: parseFloat(editValues.price)
      };
      const res = await axios.put(`${baseURL}/api/products/${id}`, updatedData);
      const updatedProducts = products.map((p) =>
        p._id === id ? res.data : p
      );
      setProducts(updatedProducts);
      setEditRowId(null);
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/api/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
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
                .map((product) => (
                  <TableRow key={product._id} data-testid="product-row">
                    {editRowId === product._id ? (
                      <>
                        <TableCell>
                          <TextField
                            value={editValues.name}
                            onChange={(e) => handleEditChange('name', e.target.value)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            type="number"
                            value={editValues.price}
                            onChange={(e) => handleEditChange('price', e.target.value)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            value={editValues.category}
                            onChange={(e) => handleEditChange('category', e.target.value)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            value={editValues.inStock ? 'Yes' : 'No'}
                            onChange={(e) => handleEditChange('inStock', e.target.value)}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={() => handleSave(product._id)}
                            variant="contained"
                            color="success"
                            size="small"
                          >
                            Submit
                          </Button>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.inStock ? 'Yes' : 'No'}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() => enterEditMode(product)}
                            variant="outlined"
                            size="small"
                            sx={{ mr: 1 }}
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => handleDelete(product._id)}
                            variant="outlined"
                            color="error"
                            size="small"
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
          onRowsPerPageChange={(e) => {
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
