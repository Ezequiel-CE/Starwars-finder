import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export function PaginationComponent({ page, handleChange, pages }) {
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <Pagination page={page} count={pages} onChange={handleChange} />
    </Stack>
  );
}
