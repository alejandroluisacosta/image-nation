import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import ImageComponent from "../../Components/ImageComponent/ImageComponent";
import Navbar from "../../Components/Navbar/Navbar";
import './SearchPage.css';
import React, { useEffect, useState } from 'react';
import Input from '@mui/joy/Input';
import { useDispatch, useSelector } from "react-redux";
import GetInitialImagesThunk from "../../Features/Search/SearchThunk";

const testImages =
    [
        {
            "id": "z1sna-iizCo",
            "slug": "a-large-library-filled-with-lots-of-books-z1sna-iizCo",
            "alternative_slugs": {
                "en": "a-large-library-filled-with-lots-of-books-z1sna-iizCo",
                "es": "una-gran-biblioteca-llena-de-muchos-libros-z1sna-iizCo",
                "ja": "たくさんの本でいっぱいの大きな図書館-z1sna-iizCo",
                "fr": "une-grande-bibliotheque-remplie-de-nombreux-livres-z1sna-iizCo",
                "it": "una-grande-biblioteca-piena-di-libri-z1sna-iizCo",
                "ko": "많은-책으로-가득-찬-큰-도서관-z1sna-iizCo",
                "de": "eine-grosse-bibliothek-mit-vielen-buchern-z1sna-iizCo",
                "pt": "uma-grande-biblioteca-cheia-de-livros-z1sna-iizCo"
            },
            "created_at": "2024-05-20T12:46:55Z",
            "updated_at": "2024-05-22T07:05:15Z",
            "promoted_at": "2024-05-22T06:02:51Z",
            "width": 7546,
            "height": 5023,
            "color": "#40260c",
            "blur_hash": "LQE.z?xa00aKROjtx]j[M{WVt8fR",
            "description": null,
            "alt_description": "a large library filled with lots of books",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1716209210091-7db3f80cc95a?ixid=M3w2MTQwNTJ8MHwxfGFsbHwxfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1716209210091-7db3f80cc95a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwxfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1716209210091-7db3f80cc95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwxfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1716209210091-7db3f80cc95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwxfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1716209210091-7db3f80cc95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwxfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1716209210091-7db3f80cc95a"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-large-library-filled-with-lots-of-books-z1sna-iizCo",
                "html": "https://unsplash.com/photos/a-large-library-filled-with-lots-of-books-z1sna-iizCo",
                "download": "https://unsplash.com/photos/z1sna-iizCo/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHwxfHx8fHx8Mnx8MTcxNjM2MjY3OHw",
                "download_location": "https://api.unsplash.com/photos/z1sna-iizCo/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHwxfHx8fHx8Mnx8MTcxNjM2MjY3OHw"
            },
            "likes": 9,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "asset_type": "photo",
            "user": {
                "id": "CdtXrQZBtRA",
                "updated_at": "2024-05-22T07:12:32Z",
                "username": "mbuff",
                "name": "Sung Jin Cho",
                "first_name": "Sung Jin",
                "last_name": "Cho",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": "My Favorite Moments...",
                "location": "Seoul, Korea",
                "links": {
                    "self": "https://api.unsplash.com/users/mbuff",
                    "html": "https://unsplash.com/@mbuff",
                    "photos": "https://api.unsplash.com/users/mbuff/photos",
                    "likes": "https://api.unsplash.com/users/mbuff/likes",
                    "portfolio": "https://api.unsplash.com/users/mbuff/portfolio",
                    "following": "https://api.unsplash.com/users/mbuff/following",
                    "followers": "https://api.unsplash.com/users/mbuff/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1565090437718-b4fc7fc652f3?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1565090437718-b4fc7fc652f3?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1565090437718-b4fc7fc652f3?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "mbuff",
                "total_collections": 0,
                "total_likes": 23,
                "total_photos": 1341,
                "total_promoted_photos": 61,
                "total_illustrations": 0,
                "total_promoted_illustrations": 0,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "mbuff",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            }
        },
        {
            "id": "vmqFrjnkPGM",
            "slug": "a-woman-standing-in-front-of-a-city-skyline-vmqFrjnkPGM",
            "alternative_slugs": {
                "en": "a-woman-standing-in-front-of-a-city-skyline-vmqFrjnkPGM",
                "es": "una-mujer-de-pie-frente-al-horizonte-de-una-ciudad-vmqFrjnkPGM",
                "ja": "街のスカイラインの前に立つ女性-vmqFrjnkPGM",
                "fr": "une-femme-debout-devant-lhorizon-dune-ville-vmqFrjnkPGM",
                "it": "una-donna-in-piedi-davanti-allo-skyline-di-una-citta-vmqFrjnkPGM",
                "ko": "도시의-스카이라인-앞에-서-있는-여자-vmqFrjnkPGM",
                "de": "eine-frau-die-vor-einer-skyline-einer-stadt-steht-vmqFrjnkPGM",
                "pt": "uma-mulher-em-pe-em-frente-a-um-horizonte-da-cidade-vmqFrjnkPGM"
            },
            "created_at": "2024-05-21T07:45:38Z",
            "updated_at": "2024-05-22T06:05:44Z",
            "promoted_at": "2024-05-22T06:02:47Z",
            "width": 2832,
            "height": 4240,
            "color": "#d9f3f3",
            "blur_hash": "L-KeDtj?ozWV.TRjRjaxNybIn$j[",
            "description": null,
            "alt_description": "a woman standing in front of a city skyline",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1716277420481-581a5380c225?ixid=M3w2MTQwNTJ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1716277420481-581a5380c225?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1716277420481-581a5380c225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1716277420481-581a5380c225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1716277420481-581a5380c225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1716277420481-581a5380c225"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-woman-standing-in-front-of-a-city-skyline-vmqFrjnkPGM",
                "html": "https://unsplash.com/photos/a-woman-standing-in-front-of-a-city-skyline-vmqFrjnkPGM",
                "download": "https://unsplash.com/photos/vmqFrjnkPGM/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcxNjM2MjY3OHw",
                "download_location": "https://api.unsplash.com/photos/vmqFrjnkPGM/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcxNjM2MjY3OHw"
            },
            "likes": 4,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "asset_type": "photo",
            "user": {
                "id": "xH-ymDMRF4o",
                "updated_at": "2024-05-22T06:06:57Z",
                "username": "jcgellidon",
                "name": "JC Gellidon",
                "first_name": "JC",
                "last_name": "Gellidon",
                "twitter_username": "jcgellidon",
                "portfolio_url": "http://www.jcgellidon.com",
                "bio": "Filmmaker and photographer in Manila, Philippines. \r\n Feel free to donate on my Paypal. <3",
                "location": "Makati, Philippines",
                "links": {
                    "self": "https://api.unsplash.com/users/jcgellidon",
                    "html": "https://unsplash.com/@jcgellidon",
                    "photos": "https://api.unsplash.com/users/jcgellidon/photos",
                    "likes": "https://api.unsplash.com/users/jcgellidon/likes",
                    "portfolio": "https://api.unsplash.com/users/jcgellidon/portfolio",
                    "following": "https://api.unsplash.com/users/jcgellidon/following",
                    "followers": "https://api.unsplash.com/users/jcgellidon/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-fb-1502817706-2b51aa841673.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-fb-1502817706-2b51aa841673.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-fb-1502817706-2b51aa841673.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "jcgellidon",
                "total_collections": 0,
                "total_likes": 64,
                "total_photos": 405,
                "total_promoted_photos": 114,
                "total_illustrations": 0,
                "total_promoted_illustrations": 0,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "jcgellidon",
                    "portfolio_url": "http://www.jcgellidon.com",
                    "twitter_username": "jcgellidon",
                    "paypal_email": null
                }
            }
        },
        {
            "id": "xDr50QbwxhY",
            "slug": "a-group-of-white-cubes-sitting-next-to-each-other-xDr50QbwxhY",
            "alternative_slugs": {
                "en": "a-group-of-white-cubes-sitting-next-to-each-other-xDr50QbwxhY",
                "es": "un-grupo-de-cubos-blancos-sentados-uno-al-lado-del-otro-xDr50QbwxhY",
                "ja": "隣り合って座っているホワイトキューブのグループ-xDr50QbwxhY",
                "fr": "un-groupe-de-cubes-blancs-assis-les-uns-a-cote-des-autres-xDr50QbwxhY",
                "it": "un-gruppo-di-cubi-bianchi-seduti-uno-accanto-allaltro-xDr50QbwxhY",
                "ko": "나란히-앉아있는-흰색-큐브-그룹-xDr50QbwxhY",
                "de": "eine-gruppe-von-weissen-wurfeln-die-nebeneinander-sitzen-xDr50QbwxhY",
                "pt": "um-grupo-de-cubos-brancos-sentados-um-ao-lado-do-outro-xDr50QbwxhY"
            },
            "created_at": "2024-05-21T07:47:04Z",
            "updated_at": "2024-05-22T05:55:43Z",
            "promoted_at": "2024-05-22T05:50:58Z",
            "width": 5600,
            "height": 8400,
            "color": "#d9c0a6",
            "blur_hash": "L6NTO1oeV@Mw~qWBIVtRE1xuxut7",
            "description": null,
            "alt_description": "a group of white cubes sitting next to each other",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1716277521543-7ff44dc651a6?ixid=M3w2MTQwNTJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1716277521543-7ff44dc651a6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1716277521543-7ff44dc651a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1716277521543-7ff44dc651a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1716277521543-7ff44dc651a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1716277521543-7ff44dc651a6"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-group-of-white-cubes-sitting-next-to-each-other-xDr50QbwxhY",
                "html": "https://unsplash.com/photos/a-group-of-white-cubes-sitting-next-to-each-other-xDr50QbwxhY",
                "download": "https://unsplash.com/photos/xDr50QbwxhY/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcxNjM2MjY3OHw",
                "download_location": "https://api.unsplash.com/photos/xDr50QbwxhY/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcxNjM2MjY3OHw"
            },
            "likes": 2,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "asset_type": "photo",
            "user": {
                "id": "ogQykx6hk_c",
                "updated_at": "2024-05-22T05:51:06Z",
                "username": "pawel_czerwinski",
                "name": "Pawel Czerwinski",
                "first_name": "Pawel",
                "last_name": "Czerwinski",
                "twitter_username": "pm_cze",
                "portfolio_url": "http://paypal.me/pmcze",
                "bio": "Questions about how you can use the photos? help.unsplash.com/en/collections/1463188-unsplash-license 👍",
                "location": "Poland",
                "links": {
                    "self": "https://api.unsplash.com/users/pawel_czerwinski",
                    "html": "https://unsplash.com/@pawel_czerwinski",
                    "photos": "https://api.unsplash.com/users/pawel_czerwinski/photos",
                    "likes": "https://api.unsplash.com/users/pawel_czerwinski/likes",
                    "portfolio": "https://api.unsplash.com/users/pawel_czerwinski/portfolio",
                    "following": "https://api.unsplash.com/users/pawel_czerwinski/following",
                    "followers": "https://api.unsplash.com/users/pawel_czerwinski/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1592328433409-d9ce8a5333eaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1592328433409-d9ce8a5333eaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1592328433409-d9ce8a5333eaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "pmcze",
                "total_collections": 8,
                "total_likes": 44678,
                "total_photos": 2214,
                "total_promoted_photos": 1836,
                "total_illustrations": 0,
                "total_promoted_illustrations": 0,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "pmcze",
                    "portfolio_url": "http://paypal.me/pmcze",
                    "twitter_username": "pm_cze",
                    "paypal_email": null
                }
            }
        },
        {
            "id": "f0OvHjiGFpk",
            "slug": "a-large-building-with-a-golden-dome-on-top-of-it-f0OvHjiGFpk",
            "alternative_slugs": {
                "en": "a-large-building-with-a-golden-dome-on-top-of-it-f0OvHjiGFpk",
                "es": "un-gran-edificio-con-una-cupula-dorada-en-la-parte-superior-f0OvHjiGFpk",
                "ja": "黄金のドームがそびえ立つ大きな建物-f0OvHjiGFpk",
                "fr": "un-grand-batiment-surmonte-dun-dome-dore-f0OvHjiGFpk",
                "it": "un-grande-edificio-con-una-cupola-dorata-in-cima-f0OvHjiGFpk",
                "ko": "그-위에-황금-돔이-있는-큰-건물-f0OvHjiGFpk",
                "de": "ein-grosses-gebaude-mit-einer-goldenen-kuppel-darauf-f0OvHjiGFpk",
                "pt": "um-grande-edificio-com-uma-cupula-dourada-em-cima-dele-f0OvHjiGFpk"
            },
            "created_at": "2024-05-10T03:53:33Z",
            "updated_at": "2024-05-22T03:48:41Z",
            "promoted_at": "2024-05-21T10:53:29Z",
            "width": 5304,
            "height": 7952,
            "color": "#f3f3f3",
            "blur_hash": "L{M@fkj[ogj[~qfkj[j@%LayWBj[",
            "description": null,
            "alt_description": "a large building with a golden dome on top of it",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1715313200229-0326e4fd2e5e?ixid=M3w2MTQwNTJ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1715313200229-0326e4fd2e5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1715313200229-0326e4fd2e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1715313200229-0326e4fd2e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1715313200229-0326e4fd2e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1715313200229-0326e4fd2e5e"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-large-building-with-a-golden-dome-on-top-of-it-f0OvHjiGFpk",
                "html": "https://unsplash.com/photos/a-large-building-with-a-golden-dome-on-top-of-it-f0OvHjiGFpk",
                "download": "https://unsplash.com/photos/f0OvHjiGFpk/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcxNjM2MjY3OHw",
                "download_location": "https://api.unsplash.com/photos/f0OvHjiGFpk/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcxNjM2MjY3OHw"
            },
            "likes": 22,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "asset_type": "photo",
            "user": {
                "id": "84roYsjoiqU",
                "updated_at": "2024-05-22T03:36:54Z",
                "username": "1amfcs",
                "name": "1AmFcS",
                "first_name": "1AmFcS",
                "last_name": null,
                "twitter_username": null,
                "portfolio_url": null,
                "bio": null,
                "location": "shichuan.chengdu",
                "links": {
                    "self": "https://api.unsplash.com/users/1amfcs",
                    "html": "https://unsplash.com/@1amfcs",
                    "photos": "https://api.unsplash.com/users/1amfcs/photos",
                    "likes": "https://api.unsplash.com/users/1amfcs/likes",
                    "portfolio": "https://api.unsplash.com/users/1amfcs/portfolio",
                    "following": "https://api.unsplash.com/users/1amfcs/following",
                    "followers": "https://api.unsplash.com/users/1amfcs/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1545103677783-def42bc72f70?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1545103677783-def42bc72f70?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1545103677783-def42bc72f70?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": null,
                "total_collections": 1,
                "total_likes": 21,
                "total_photos": 185,
                "total_promoted_photos": 5,
                "total_illustrations": 0,
                "total_promoted_illustrations": 0,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": null,
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            }
        },
        {
            "id": "vPC39ANNgm4",
            "slug": "an-aerial-view-of-the-ocean-with-a-boat-in-the-water-vPC39ANNgm4",
            "alternative_slugs": {
                "en": "an-aerial-view-of-the-ocean-with-a-boat-in-the-water-vPC39ANNgm4",
                "es": "una-vista-aerea-del-oceano-con-un-barco-en-el-agua-vPC39ANNgm4",
                "ja": "水中にボートを浮かべた海の空撮-vPC39ANNgm4",
                "fr": "une-vue-aerienne-de-locean-avec-un-bateau-dans-leau-vPC39ANNgm4",
                "it": "una-veduta-aerea-delloceano-con-una-barca-in-acqua-vPC39ANNgm4",
                "ko": "물-속에-보트가-있는-바다의-조감도-vPC39ANNgm4",
                "de": "eine-luftaufnahme-des-ozeans-mit-einem-boot-im-wasser-vPC39ANNgm4",
                "pt": "uma-vista-aerea-do-oceano-com-um-barco-na-agua-vPC39ANNgm4"
            },
            "created_at": "2024-05-06T12:13:35Z",
            "updated_at": "2024-05-22T06:03:16Z",
            "promoted_at": "2024-05-21T10:53:15Z",
            "width": 8064,
            "height": 4536,
            "color": "#a6d9d9",
            "blur_hash": "LJGxAg-;%1xu~CxtWBofnNj[WVj[",
            "description": null,
            "alt_description": "an aerial view of the ocean with a boat in the water",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1714997219788-660af304f464?ixid=M3w2MTQwNTJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1714997219788-660af304f464?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1714997219788-660af304f464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1714997219788-660af304f464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1714997219788-660af304f464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1714997219788-660af304f464"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/an-aerial-view-of-the-ocean-with-a-boat-in-the-water-vPC39ANNgm4",
                "html": "https://unsplash.com/photos/an-aerial-view-of-the-ocean-with-a-boat-in-the-water-vPC39ANNgm4",
                "download": "https://unsplash.com/photos/vPC39ANNgm4/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcxNjM2MjY3OHw",
                "download_location": "https://api.unsplash.com/photos/vPC39ANNgm4/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcxNjM2MjY3OHw"
            },
            "likes": 77,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {
                "nature": {
                    "status": "approved",
                    "approved_on": "2024-05-08T10:11:28Z"
                },
                "travel": {
                    "status": "rejected"
                },
                "wallpapers": {
                    "status": "rejected"
                },
                "textures-patterns": {
                    "status": "rejected"
                }
            },
            "asset_type": "photo",
            "user": {
                "id": "Vo2vaROlkIY",
                "updated_at": "2024-05-21T22:06:48Z",
                "username": "vrrosario",
                "name": "Victor Rosario",
                "first_name": "Victor",
                "last_name": "Rosario",
                "twitter_username": "VrVictorRosario",
                "portfolio_url": "https://www.instagram.com/vr.victorrosario/",
                "bio": "I'm a Caribbean-based photographer and artist, focusing on capturing the raw beauty of my homeland through my iPhone and drone. I'm passionate about creating new and exciting ways to share my art with the world.",
                "location": "Dominican Republic",
                "links": {
                    "self": "https://api.unsplash.com/users/vrrosario",
                    "html": "https://unsplash.com/@vrrosario",
                    "photos": "https://api.unsplash.com/users/vrrosario/photos",
                    "likes": "https://api.unsplash.com/users/vrrosario/likes",
                    "portfolio": "https://api.unsplash.com/users/vrrosario/portfolio",
                    "following": "https://api.unsplash.com/users/vrrosario/following",
                    "followers": "https://api.unsplash.com/users/vrrosario/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1673549329853-4c1a89707ebcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1673549329853-4c1a89707ebcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1673549329853-4c1a89707ebcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "vr.victorrosario",
                "total_collections": 10,
                "total_likes": 404,
                "total_photos": 216,
                "total_promoted_photos": 42,
                "total_illustrations": 0,
                "total_promoted_illustrations": 0,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "vr.victorrosario",
                    "portfolio_url": "https://www.instagram.com/vr.victorrosario/",
                    "twitter_username": "VrVictorRosario",
                    "paypal_email": null
                }
            }
        },
        {
            "id": "qEfcXtAoMt8",
            "slug": "an-aerial-view-of-a-body-of-water-qEfcXtAoMt8",
            "alternative_slugs": {
                "en": "an-aerial-view-of-a-body-of-water-qEfcXtAoMt8",
                "es": "una-vista-aerea-de-un-cuerpo-de-agua-qEfcXtAoMt8",
                "ja": "水域の航空写真-qEfcXtAoMt8",
                "fr": "une-vue-aerienne-dun-plan-deau-qEfcXtAoMt8",
                "it": "una-veduta-aerea-di-uno-specchio-dacqua-qEfcXtAoMt8",
                "ko": "수역의-조감도-qEfcXtAoMt8",
                "de": "eine-luftaufnahme-eines-gewassers-qEfcXtAoMt8",
                "pt": "uma-vista-aerea-de-um-corpo-de-agua-qEfcXtAoMt8"
            },
            "created_at": "2024-05-13T12:50:12Z",
            "updated_at": "2024-05-22T05:34:42Z",
            "promoted_at": "2024-05-21T10:52:49Z",
            "width": 3640,
            "height": 5464,
            "color": "#f3d9c0",
            "blur_hash": "LxLE[.E#WXS3}Zf8WVoKs:spf6ay",
            "description": null,
            "alt_description": "an aerial view of a body of water",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1715604535453-4e468e0c0fca?ixid=M3w2MTQwNTJ8MHwxfGFsbHw2fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1715604535453-4e468e0c0fca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw2fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1715604535453-4e468e0c0fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw2fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1715604535453-4e468e0c0fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw2fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1715604535453-4e468e0c0fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw2fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1715604535453-4e468e0c0fca"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/an-aerial-view-of-a-body-of-water-qEfcXtAoMt8",
                "html": "https://unsplash.com/photos/an-aerial-view-of-a-body-of-water-qEfcXtAoMt8",
                "download": "https://unsplash.com/photos/qEfcXtAoMt8/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHw2fHx8fHx8Mnx8MTcxNjM2MjY3OHw",
                "download_location": "https://api.unsplash.com/photos/qEfcXtAoMt8/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHw2fHx8fHx8Mnx8MTcxNjM2MjY3OHw"
            },
            "likes": 104,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "asset_type": "photo",
            "user": {
                "id": "l3XWZHiX-nQ",
                "updated_at": "2024-05-22T01:36:54Z",
                "username": "piensaenpixel",
                "name": "Emilio Garcia",
                "first_name": "Emilio",
                "last_name": "Garcia",
                "twitter_username": "piensaenpixel",
                "portfolio_url": null,
                "bio": "@piensaenpixel Everywhere. Ping me for collaborations!",
                "location": "Madrid, Spain",
                "links": {
                    "self": "https://api.unsplash.com/users/piensaenpixel",
                    "html": "https://unsplash.com/@piensaenpixel",
                    "photos": "https://api.unsplash.com/users/piensaenpixel/photos",
                    "likes": "https://api.unsplash.com/users/piensaenpixel/likes",
                    "portfolio": "https://api.unsplash.com/users/piensaenpixel/portfolio",
                    "following": "https://api.unsplash.com/users/piensaenpixel/following",
                    "followers": "https://api.unsplash.com/users/piensaenpixel/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1523306443217-4c56454b65ca?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1523306443217-4c56454b65ca?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1523306443217-4c56454b65ca?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "piensaenpixel",
                "total_collections": 1,
                "total_likes": 10,
                "total_photos": 245,
                "total_promoted_photos": 55,
                "total_illustrations": 0,
                "total_promoted_illustrations": 0,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "piensaenpixel",
                    "portfolio_url": null,
                    "twitter_username": "piensaenpixel",
                    "paypal_email": null
                }
            }
        },
        {
            "id": "hb6O9NpJz9M",
            "slug": "a-woman-sitting-on-a-couch-reading-a-newspaper-hb6O9NpJz9M",
            "alternative_slugs": {
                "en": "a-woman-sitting-on-a-couch-reading-a-newspaper-hb6O9NpJz9M",
                "es": "una-mujer-sentada-en-un-sofa-leyendo-un-periodico-hb6O9NpJz9M",
                "ja": "ソファに座って新聞を読む女性-hb6O9NpJz9M",
                "fr": "une-femme-assise-sur-un-canape-lisant-un-journal-hb6O9NpJz9M",
                "it": "una-donna-seduta-su-un-divano-che-legge-un-giornale-hb6O9NpJz9M",
                "ko": "소파에-앉아-신문을-읽고-있는-여성-hb6O9NpJz9M",
                "de": "eine-frau-die-auf-einer-couch-sitzt-und-eine-zeitung-liest-hb6O9NpJz9M",
                "pt": "uma-mulher-sentada-em-um-sofa-lendo-um-jornal-hb6O9NpJz9M"
            },
            "created_at": "2024-05-13T07:10:49Z",
            "updated_at": "2024-05-22T07:07:55Z",
            "promoted_at": "2024-05-21T10:51:11Z",
            "width": 5304,
            "height": 7952,
            "color": "#26260c",
            "blur_hash": "LeIOOVMc.7RP~V$|x]aer=s+%May",
            "description": null,
            "alt_description": "a woman sitting on a couch reading a newspaper",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1715584083775-30132089b98d?ixid=M3w2MTQwNTJ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1715584083775-30132089b98d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1715584083775-30132089b98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1715584083775-30132089b98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1715584083775-30132089b98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1715584083775-30132089b98d"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-woman-sitting-on-a-couch-reading-a-newspaper-hb6O9NpJz9M",
                "html": "https://unsplash.com/photos/a-woman-sitting-on-a-couch-reading-a-newspaper-hb6O9NpJz9M",
                "download": "https://unsplash.com/photos/hb6O9NpJz9M/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcxNjM2MjY3OHw",
                "download_location": "https://api.unsplash.com/photos/hb6O9NpJz9M/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcxNjM2MjY3OHw"
            },
            "likes": 40,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "asset_type": "photo",
            "user": {
                "id": "-N1_jEXTDpo",
                "updated_at": "2024-05-21T10:51:33Z",
                "username": "soltanimedia",
                "name": "Amirhossein Soltani",
                "first_name": "Amirhossein",
                "last_name": "Soltani",
                "twitter_username": "soltanimediaa",
                "portfolio_url": "https://dribbble.com/SoltaniMedia",
                "bio": "▪️photographer & Videographer | Freelancer 🖤",
                "location": "iran,Tehran",
                "links": {
                    "self": "https://api.unsplash.com/users/soltanimedia",
                    "html": "https://unsplash.com/@soltanimedia",
                    "photos": "https://api.unsplash.com/users/soltanimedia/photos",
                    "likes": "https://api.unsplash.com/users/soltanimedia/likes",
                    "portfolio": "https://api.unsplash.com/users/soltanimedia/portfolio",
                    "following": "https://api.unsplash.com/users/soltanimedia/following",
                    "followers": "https://api.unsplash.com/users/soltanimedia/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1640617386311-ae373bf421cb?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1640617386311-ae373bf421cb?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1640617386311-ae373bf421cb?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "soltanimedia",
                "total_collections": 0,
                "total_likes": 72,
                "total_photos": 141,
                "total_promoted_photos": 29,
                "total_illustrations": 0,
                "total_promoted_illustrations": 0,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "soltanimedia",
                    "portfolio_url": "https://dribbble.com/SoltaniMedia",
                    "twitter_username": "soltanimediaa",
                    "paypal_email": null
                }
            }
        },
        {
            "id": "AMoctnfxw1E",
            "slug": "an-empty-room-with-a-blue-door-and-a-red-brick-wall-AMoctnfxw1E",
            "alternative_slugs": {
                "en": "an-empty-room-with-a-blue-door-and-a-red-brick-wall-AMoctnfxw1E",
                "es": "una-habitacion-vacia-con-una-puerta-azul-y-una-pared-de-ladrillo-rojo-AMoctnfxw1E",
                "ja": "青いドアと赤レンガの壁の空っぽの部屋-AMoctnfxw1E",
                "fr": "une-piece-vide-avec-une-porte-bleue-et-un-mur-de-briques-rouges-AMoctnfxw1E",
                "it": "una-stanza-vuota-con-una-porta-blu-e-un-muro-di-mattoni-rossi-AMoctnfxw1E",
                "ko": "파란-문과-붉은-벽돌-벽이-있는-빈-방-AMoctnfxw1E",
                "de": "ein-leerer-raum-mit-blauer-tur-und-roter-backsteinwand-AMoctnfxw1E",
                "pt": "um-quarto-vazio-com-uma-porta-azul-e-uma-parede-de-tijolos-vermelhos-AMoctnfxw1E"
            },
            "created_at": "2024-05-08T19:47:44Z",
            "updated_at": "2024-05-22T06:57:56Z",
            "promoted_at": "2024-05-21T10:50:53Z",
            "width": 2080,
            "height": 3120,
            "color": "#8c7326",
            "blur_hash": "LCF=c?M|0M^*yC9bIV-:iI-Tof9v",
            "description": null,
            "alt_description": "an empty room with a blue door and a red brick wall",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1715197318611-c2347a558778?ixid=M3w2MTQwNTJ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1715197318611-c2347a558778?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1715197318611-c2347a558778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1715197318611-c2347a558778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1715197318611-c2347a558778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1715197318611-c2347a558778"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/an-empty-room-with-a-blue-door-and-a-red-brick-wall-AMoctnfxw1E",
                "html": "https://unsplash.com/photos/an-empty-room-with-a-blue-door-and-a-red-brick-wall-AMoctnfxw1E",
                "download": "https://unsplash.com/photos/AMoctnfxw1E/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcxNjM2MjY3OHw",
                "download_location": "https://api.unsplash.com/photos/AMoctnfxw1E/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcxNjM2MjY3OHw"
            },
            "likes": 74,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {
                "ugc": {
                    "status": "approved",
                    "approved_on": "2024-05-11T08:31:30Z"
                },
                "wallpapers": {
                    "status": "rejected"
                },
                "textures-patterns": {
                    "status": "rejected"
                },
                "architecture-interior": {
                    "status": "rejected"
                }
            },
            "asset_type": "photo",
            "user": {
                "id": "uekXZMAW97A",
                "updated_at": "2024-05-22T01:32:13Z",
                "username": "kovpad",
                "name": "Konrad Hofmann",
                "first_name": "Konrad",
                "last_name": "Hofmann",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": null,
                "location": "Berlin",
                "links": {
                    "self": "https://api.unsplash.com/users/kovpad",
                    "html": "https://unsplash.com/@kovpad",
                    "photos": "https://api.unsplash.com/users/kovpad/photos",
                    "likes": "https://api.unsplash.com/users/kovpad/likes",
                    "portfolio": "https://api.unsplash.com/users/kovpad/portfolio",
                    "following": "https://api.unsplash.com/users/kovpad/following",
                    "followers": "https://api.unsplash.com/users/kovpad/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1715235405444-526cba350c3dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1715235405444-526cba350c3dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1715235405444-526cba350c3dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "kovpad",
                "total_collections": 0,
                "total_likes": 141,
                "total_photos": 115,
                "total_promoted_photos": 2,
                "total_illustrations": 0,
                "total_promoted_illustrations": 0,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "kovpad",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            }
        },
        {
            "id": "DGivPYwcRls",
            "slug": "a-table-with-a-bunch-of-flowers-on-it-DGivPYwcRls",
            "alternative_slugs": {
                "en": "a-table-with-a-bunch-of-flowers-on-it-DGivPYwcRls",
                "es": "una-mesa-con-un-ramo-de-flores-DGivPYwcRls",
                "ja": "花束が置かれたテーブル-DGivPYwcRls",
                "fr": "une-table-avec-un-bouquet-de-fleurs-dessus-DGivPYwcRls",
                "it": "un-tavolo-con-un-mazzo-di-fiori-DGivPYwcRls",
                "ko": "꽃-한-다발이-놓인-테이블-DGivPYwcRls",
                "de": "ein-tisch-mit-einem-blumenstrauss-darauf-DGivPYwcRls",
                "pt": "uma-mesa-com-um-ramo-de-flores-sobre-ela-DGivPYwcRls"
            },
            "created_at": "2024-05-12T15:57:30Z",
            "updated_at": "2024-05-22T05:38:13Z",
            "promoted_at": "2024-05-21T10:50:50Z",
            "width": 4597,
            "height": 6895,
            "color": "#d9d9c0",
            "blur_hash": "LBNAO@.TD-~p]^t6n--px^-nRiWF",
            "description": null,
            "alt_description": "a table with a bunch of flowers on it",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1715521801502-42db7b79573b?ixid=M3w2MTQwNTJ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1715521801502-42db7b79573b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1715521801502-42db7b79573b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1715521801502-42db7b79573b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1715521801502-42db7b79573b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcxNjM2MjY3OHw&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1715521801502-42db7b79573b"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-table-with-a-bunch-of-flowers-on-it-DGivPYwcRls",
                "html": "https://unsplash.com/photos/a-table-with-a-bunch-of-flowers-on-it-DGivPYwcRls",
                "download": "https://unsplash.com/photos/DGivPYwcRls/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcxNjM2MjY3OHw",
                "download_location": "https://api.unsplash.com/photos/DGivPYwcRls/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcxNjM2MjY3OHw"
            },
            "likes": 30,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "asset_type": "photo",
            "user": {
                "id": "EJTUnS-J4Gs",
                "updated_at": "2024-05-21T21:01:49Z",
                "username": "mutecevvil",
                "name": "Ahmed",
                "first_name": "Ahmed",
                "last_name": null,
                "twitter_username": null,
                "portfolio_url": "http://bio.link/mutecevvil/",
                "bio": "Freelance photographer, I'm after the details 🪄⚡️",
                "location": "İstanbul / Turkey",
                "links": {
                    "self": "https://api.unsplash.com/users/mutecevvil",
                    "html": "https://unsplash.com/@mutecevvil",
                    "photos": "https://api.unsplash.com/users/mutecevvil/photos",
                    "likes": "https://api.unsplash.com/users/mutecevvil/likes",
                    "portfolio": "https://api.unsplash.com/users/mutecevvil/portfolio",
                    "following": "https://api.unsplash.com/users/mutecevvil/following",
                    "followers": "https://api.unsplash.com/users/mutecevvil/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1711549020779-bcd65dd86bf8image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1711549020779-bcd65dd86bf8image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1711549020779-bcd65dd86bf8image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "mutecevviil",
                "total_collections": 30,
                "total_likes": 0,
                "total_photos": 3597,
                "total_promoted_photos": 210,
                "total_illustrations": 0,
                "total_promoted_illustrations": 0,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "mutecevviil",
                    "portfolio_url": "http://bio.link/mutecevvil/",
                    "twitter_username": null,
                    "paypal_email": null
                }
            }
        },
        {
            "id": "MfwayGijwtM",
            "slug": "a-group-of-rocks-sitting-in-the-middle-of-a-body-of-water-MfwayGijwtM",
            "alternative_slugs": {
                "en": "a-group-of-rocks-sitting-in-the-middle-of-a-body-of-water-MfwayGijwtM",
                "es": "un-grupo-de-rocas-en-medio-de-un-cuerpo-de-agua-MfwayGijwtM",
                "ja": "水域の真ん中に座っている岩のグループ-MfwayGijwtM",
                "fr": "un-groupe-de-rochers-assis-au-milieu-dun-plan-deau-MfwayGijwtM",
                "it": "un-gruppo-di-rocce-sedute-nel-mezzo-di-uno-specchio-dacqua-MfwayGijwtM",
                "ko": "물-한가운데에-앉아있는-바위-그룹-MfwayGijwtM",
                "de": "eine-gruppe-von-felsen-die-in-der-mitte-eines-gewassers-sitzen-MfwayGijwtM",
                "pt": "um-grupo-de-rochas-sentado-no-meio-de-um-corpo-de-agua-MfwayGijwtM"
            },
            "created_at": "2024-05-12T21:02:50Z",
            "updated_at": "2024-05-22T06:07:00Z",
            "promoted_at": "2024-05-21T10:48:24Z",
            "width": 5502,
            "height": 8252,
            "color": "#59a6c0",
            "blur_hash": "L+Fs[HSin$W;.TjYW=j[xYniaxf6",
            "description": null,
            "alt_description": "a group of rocks sitting in the middle of a body of water",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1715547748806-dab4f4dfbc85?ixid=M3w2MTQwNTJ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MTYzNjI2Nzh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1715547748806-dab4f4dfbc85?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MTYzNjI2Nzh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1715547748806-dab4f4dfbc85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MTYzNjI2Nzh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1715547748806-dab4f4dfbc85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MTYzNjI2Nzh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1715547748806-dab4f4dfbc85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQwNTJ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MTYzNjI2Nzh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1715547748806-dab4f4dfbc85"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-group-of-rocks-sitting-in-the-middle-of-a-body-of-water-MfwayGijwtM",
                "html": "https://unsplash.com/photos/a-group-of-rocks-sitting-in-the-middle-of-a-body-of-water-MfwayGijwtM",
                "download": "https://unsplash.com/photos/MfwayGijwtM/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MTYzNjI2Nzh8",
                "download_location": "https://api.unsplash.com/photos/MfwayGijwtM/download?ixid=M3w2MTQwNTJ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MTYzNjI2Nzh8"
            },
            "likes": 42,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "asset_type": "photo",
            "user": {
                "id": "NXS3LcUS8Hw",
                "updated_at": "2024-05-22T01:25:57Z",
                "username": "babikacharava",
                "name": "Barbare Kacharava",
                "first_name": "Barbare",
                "last_name": "Kacharava",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": null,
                "location": null,
                "links": {
                    "self": "https://api.unsplash.com/users/babikacharava",
                    "html": "https://unsplash.com/@babikacharava",
                    "photos": "https://api.unsplash.com/users/babikacharava/photos",
                    "likes": "https://api.unsplash.com/users/babikacharava/likes",
                    "portfolio": "https://api.unsplash.com/users/babikacharava/portfolio",
                    "following": "https://api.unsplash.com/users/babikacharava/following",
                    "followers": "https://api.unsplash.com/users/babikacharava/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1586620491173-afd32dbd0c0cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1586620491173-afd32dbd0c0cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1586620491173-afd32dbd0c0cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "babikacharava",
                "total_collections": 1,
                "total_likes": 0,
                "total_photos": 416,
                "total_promoted_photos": 28,
                "total_illustrations": 0,
                "total_promoted_illustrations": 0,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "babikacharava",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            }
}
]

const SearchPage = () => {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const Images = useSelector(state => state.Search.data);
    const ImagesStatus = useSelector(state => state.Search.status);
    const ImagesError = useSelector(state => state.Search.error);
    const dispatch = useDispatch();

    useEffect(() => {
        if (ImagesStatus === 'idle')
            dispatch(GetInitialImagesThunk());
        else if (ImagesStatus === 'pending')
            setLoading(true);
        else if (ImagesStatus === 'fulfilled') {
            setLoading(false);
            console.log(Images); 
            setImages(Images);
        }
    }, [])

    return <>
        {loading ?
        <p>Loading...</p>
        :
        <div>
            <header className="header">
            <Navbar />
            <p>High-quality images</p>
            <p>for high-quality projects</p>
            <Input placeholder="Search" />;
            </header>
            {images.map((image, index) => (
                <ImageComponent isSearchPage={true} authorName={image.user.name} image={image.urls.small} downloadLink={image.urls.full} key={index}/>
            ))}
            <Footer/>
        </div>
        }
        </>
}

export default SearchPage;

