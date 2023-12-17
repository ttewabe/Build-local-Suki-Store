import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function appbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>My Suki</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Catagories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />

        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </AppbarContainer>
  );
}

export default appbarDesktop;
