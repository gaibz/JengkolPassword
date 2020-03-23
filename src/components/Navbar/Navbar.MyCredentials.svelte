<!-- Top Navbar -->
<Navbar sliding={false} large>
    <Searchbar disableButtonText="Cancel"
               placeholder="Search Cards"
               clearButton={true}
               expandable
               class="searchbar-card"
               onSearchbarSearch={onSearchbarSearch}
               customSearch="true"
    />
    <NavLeft>
        <Link iconIos="f7:menu" panelOpen="left"/>
    </NavLeft>
    <NavTitle sliding textColor="green">My Credentials</NavTitle>
    <NavRight>
        <Link iconIos="f7:search" searchbarEnable=".searchbar-card"/>
        <Link panelOpen="right" iconIos="f7:ellipsis_vertical"/>
    </NavRight>
    <NavTitleLarge textColor="green">My Credentials</NavTitleLarge>
</Navbar>

<script>
import { Navbar, Searchbar, NavLeft, NavRight, NavTitle, NavTitleLarge, Link} from 'framework7-svelte';

export let onSearchbarSearch;

</script>