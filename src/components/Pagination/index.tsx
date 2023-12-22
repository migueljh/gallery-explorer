import MuiPagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme } from '@mui/material';

import { useAppSelector, useAppDispatch, setPage } from '@redux';

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: '#22454d',
        },
      },
    },
  },
});

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.filters.page);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value - 1));
  };

  return (
    <ThemeProvider theme={theme}>
      <MuiPagination
        count={10}
        page={page + 1}
        onChange={handleChange}
        color="standard"
        variant="outlined"
        className="colorwhite"
      />
    </ThemeProvider>
  );
};
