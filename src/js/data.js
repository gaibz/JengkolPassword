/**
 * @author : Herlangga Sefani <https://github.com/gaibz>
 */

"use strict";

let items = [
    {
        title : "Tokopedia",
        subtitle : "eCommerce",
        img_src : "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.tokopedia.com",
        is_favorited : true,
        data : [
            {
                type:'text',
                name:'Email',
                content:'herlangga.sefani@gmail.com'
            },
            {
                type:'password',
                name:'Password',
                content:'123456'
            },
        ]
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

module.exports = {items};