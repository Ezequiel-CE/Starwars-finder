import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { css } from "@emotion/css";

export function PaginationComponent({ page, handleChange, pages }) {
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <Pagination
        page={page}
        count={pages}
        onChange={handleChange}
        className={css`
          background-color: white;
          border-radius: 50px;
          @media (max-width: 600px) {
            width: 350px;
          }
        `}
      />
    </Stack>
  );
}
