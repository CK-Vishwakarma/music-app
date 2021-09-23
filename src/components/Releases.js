import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Releases = () => {
  const artists = useSelector((state) => state.musicBrainz.artists);

  return (
    <>
      <div className="releases-box">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Year</StyledTableCell>
                <StyledTableCell align="center">Title</StyledTableCell>
                <StyledTableCell align="center">Release Label</StyledTableCell>
                <StyledTableCell align="right">
                  Number of Tracks
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {artists.map((artist, index) => {
                // const name = artist["label-info"];

                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{artist["date"]}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {artist["title"]}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* {artist["label-info"][0].label.name} */}
                      {artist["title"]}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {artist["track-count"]}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Releases;
