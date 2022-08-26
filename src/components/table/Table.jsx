import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 113455,
      product: " Oppo Reno",
      img: "https://www.notebookcheck.net/uploads/tx_nbc2/OppoReno7_Pro.JPG",
      customer: "James",
      date: "1 March",
      amount: 654,
      method: "Cash on Delivery",
      status: "Approved",
    },

    {
      id: 113456,
      product: "Iphone X",
      img: "https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg",
      customer: "John",
      date: "20 April",
      amount: 794,
      method: "Cash on Delivery",
      status: "Approved",
    },

    {
      id: 113457,
      product: "Nexus 6",
      img: "https://m.media-amazon.com/images/I/716n8eAia+L._SL1500_.jpg",
      customer: "Jemy",
      date: "21 May",
      amount: 354,
      method: "Cash on Delivery",
      status: "Pending",
    },

    {
      id: 113458,
      product: "Nothing Phone 1",
      img: "https://cdn.vox-cdn.com/thumbor/eJNrAIa36xGIePO9OHM2CsQ5VLs=/0x156:2040x1224/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23759794/ajohnson_220708_5332_0008.jpg",
      customer: "Jenny",
      date: "26 January",
      amount: 654,
      method: "Cash on Delivery",
      status: "Approved",
    },

    {
      id: 113459,
      product: "Rog Phone 6",
      img: "https://www.gizmochina.com/wp-content/uploads/2022/07/ASUS-ROG-Phone-6-color.jpg",
      customer: "Mary",
      date: "15 August",
      amount: 634,
      method: "Cash on Delivery",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
