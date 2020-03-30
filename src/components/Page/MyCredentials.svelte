<script>
import {Page, List, ListItem, Fab, Icon, FabButtons, FabButton, Badge} from 'framework7-svelte';
import Navbar from '../Navbar/Navbar.MyCredentials.svelte';
import Credentials from '../../js/Model/Credential.js';
import {items} from '../../js/data.js';


function onSearchbarSearch(elm, query, prevQuery) {
    console.log(query);
}

let credential = new Credentials();
credential.setTitle('Tokopedia').setGroup('eCommerce').setFavorited(false);
credential.insert().then((doc) => {
    console.log(doc);
});

credential.find({}).then((doc) => {
    console.log('all data', {doc});
});

</script>

<style>
    .image-rounded {
        border-radius: 50%;
    }
</style>
<Page name="mycards">
    <Navbar onSearchbarSearch={onSearchbarSearch}/>
    <List mediaList>
        {#each items as item}
            <ListItem
                    link="/credential/{item.title}"
                    noChevron="true"
                    subtitle={item.subtitle}
                    title={item.title}>
                <img slot="media" src={item.img_src} width="32" class="image-rounded"/>
<!--                <span slot="subtitle" >-->
<!--                    <Badge color="orange">{item.subtitle}</Badge>-->
<!--                </span>-->
                <span slot="after">
                    {#if item.is_favorited}
                        <Icon ios="f7:star_fill" textColor="orange"/>
                    {:else}
                        <Icon ios="f7:star" />
                    {/if}
                </span>
            </ListItem>
        {/each}
        <ListItem divider="true" />
    </List>
    <Fab position="center-bottom" color="green" text="Credentials">
        <Icon ios="f7:plus" />
    </Fab>
</Page>