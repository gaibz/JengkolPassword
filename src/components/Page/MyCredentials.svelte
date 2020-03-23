<script>
import {Page, List, ListItem, Fab, Icon, FabButtons, FabButton, Badge} from 'framework7-svelte';
import Navbar from '../Navbar/Navbar.MyCredentials.svelte';
import Credentials from '../../js/Model/Credential.js';

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

let items = [
    {
        title : "Tokopedia",
        subtitle : "eCommerce",
        img_src : "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.tokopedia.com",
        is_favorited : true
    },
    {
        title : "Bukalapak",
        subtitle : "eCommerce",
        img_src : "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.bukalapak.com",
        is_favorited : false
    },
    {
        title : "Shopee",
        subtitle : "eCommerce",
        img_src : "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.shopee.com",
        is_favorited : true
    },
    {
        title : "Amazon",
        subtitle : "eCommerce Luar Negri",
        img_src : "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.amazon.com",
        is_favorited : false
    },
    {
        title : "Paypal",
        subtitle : "Bank",
        img_src : "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.paypal.com",
        is_favorited : true
    },
    {
        title : "Klikpay BCA",
        subtitle : "Bank",
        img_src : "https://s2.googleusercontent.com/s2/favicons?domain_url=https://ibank.klikbca.com",
        is_favorited : false
    },
    {
        title : "Sandisk",
        subtitle : "Flashdisk",
        img_src : "https://via.placeholder.com/32",
        is_favorited : true
    },
    {
        title : "Gak Tau",
        subtitle : "ngetes aja",
        img_src : "https://via.placeholder.com/32",
        is_favorited : true
    },
    {
        title : "Macbook",
        subtitle : "laptop",
        img_src : "https://via.placeholder.com/32",
        is_favorited : true
    },
    {
        title : "PC",
        subtitle : "pc",
        img_src : "https://via.placeholder.com/44",
        is_favorited : true
    }
];

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
                    link="#"
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