<script>
    import {Page, List, ListItem, Icon, Card} from 'framework7-svelte';
    import {items} from '../../js/data.js';
    import Navbar from "../Navbar/Navbar.CredentialsView.svelte";

    export let f7route;

    let item_id = f7route.params.id;

    let itemdata = {};

    items.forEach((item) => {
        if (item.title === item_id) {
            itemdata = item;
        }
    });

    let datas = itemdata.data;

    function encryptPassword(text) {
        let i = text.length;
        let pass = "";
        for(let a=0;a<=i;a++) {
            pass += '*';
        }
        return pass;
    }

</script>
<Page name="credential">
    <Navbar title={itemdata.title}/>
    <List mediaList>
        {#each datas as item}
            <ListItem
                    link="#"
                    noChevron="true"
                    subtitle={item.type === 'password' ? encryptPassword(item.content) : item.content}
                    title={item.name}>

                <i class='f7-icons text-color-green' slot="media">{item.type === 'password' ? 'lock_shield' : 'person'}</i>

            </ListItem>
        {/each}
    </List>
    <Card content="Info: Click on the list to copy value" bgColor="teal"/>
</Page>