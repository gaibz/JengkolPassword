
export default class Credential
{
    constructor() {
        // let SQLite = require('sqlite3').verbose();
        // this.db = new SQLite.Database(':memory:');
        //
        // this.db.serialize(() => {
        //     // Create credentials table
        //     let column = [
        //         '`credential_id` INTEGER PRIMARY KEY',
        //         '`title` TEXT',
        //         '`group` TEXT',
        //         '`img_src` BLOB',
        //         '`is_favorited` BOOLEAN'
        //     ];
        //     let column_sql = column.join(',');
        //     this.db.run(`CREATE TABLE IF NOT EXISTS \`credentials\` (${column_sql})`);
        //
        //     // // Create credential_content table
        //     // column = [
        //     //     `content_id INTEGER PRIMARY KEY`,
        //     //     `credential_id INTEGER`,
        //     //     `name TEXT`,
        //     //     `type TEXT`,
        //     //     `input_type TEXT`,
        //     //     `value TEXT`
        //     // ];
        //     // column_sql = column.join(',');
        //     // this.db.run(`CREATE TABLE IF NOT EXISTS contents (${column_sql})`);
        // });

        let Datastore = require("nedb");
        this.db = new Datastore();

        this.credential = {
            title: "",
            group: "",
            img_src: '',
            is_favorited: '',
            url : ''
        };
    }


    /**
     * Set Credential title
     * @param title string
     * @returns {Credential}
     */
    setTitle(title)
    {
        this.credential.title = title;
        return this;
    }

    /**
     * Set Credential group
     *
     * @param groupname string
     * @returns {Credential}
     */
    setGroup(groupname)
    {
        this.credential.group = groupname;
        return this;
    }

    /**
     * Set image source of this credential (Logo, etc)
     * @param img string image location
     * @returns {Credential}
     */
    setImageSource(img)
    {
        this.credential.img_src = img;
        return this;
    }

    /**
     *
     * @param fav bool
     * @returns {Credential}
     */
    setFavorited(fav)
    {
        this.credential.is_favorited = fav;
        return this;
    }

    /**
     * Set URL for this credentials
     *
     * @param url string
     */
    setUrl(url)
    {
        this.credential.url = url;
    }

    /**
     * Insert Credential
     *
     * @returns {Promise<unknown>}
     */
    insert()
    {
        let db = this.db;
        let credential = this.credential;
        return new Promise((resolve, reject) => {
            db.insert(credential, function(err, newDoc){
                if(err) reject(err);

                resolve(newDoc);
            });
        });
    }

    find(query)
    {
        let db = this.db;
        return new Promise((resolve, reject) => {
            db.find(query, function(err, doc) {
                if(err) reject(err);

                resolve(doc);
            });
        });
    }
}