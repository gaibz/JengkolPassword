<!-- Top Navbar -->
<Navbar sliding={false} large>
    <NavLeft>
        <Link iconIos="f7:arrow_left" back/>
    </NavLeft>
    <NavTitle sliding textColor="green">{title}</NavTitle>
    <NavTitleLarge textColor="green">{title}</NavTitleLarge>
</Navbar>

<script>
    import { Navbar,NavLeft, NavTitle, NavTitleLarge, Link} from 'framework7-svelte';

    export let title;

</script>