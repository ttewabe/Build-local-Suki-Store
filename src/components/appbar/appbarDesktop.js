import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Actions from './actions'
import { useUIContext } from '../../context/ui'

export default function AppbarDesktop({ matches }) {

  const { setShowSearchBox } = useUIContext();
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
            <SearchIcon onClick={()=> setShowSearchBox(true) }/>
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  )
}
