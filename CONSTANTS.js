import { StyleSheet, Platform, StatusBar } from "react-native";
import uuid from "react-native-uuid";
export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        // backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export const dishes = {
    KFC: [
        {
            title: "Krunch Burger",
            desc: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
            price: 250,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        },
        {
            title: "Krunch With Fries N Drink",
            desc: "Krunch + 1 regular Fries + 1 regular Drink",
            price: 470,
            imgUrl: "https://images.kfcpakistan.com/image/1670409700963-image.jpg",
        },
        {
            title: "Kentucky Burger",
            desc: "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ",
            price: 530,
            imgUrl: "https://images.kfcpakistan.com/image/1664273624688-image.png",
        },
        {
            title: "Mighty Zinger Combo",
            desc: "Mighty Zinger+ 1 regular fries+ 1 regular drink",
            price: 850,
            imgUrl: "https://images.kfcpakistan.com/image/1670410433259-image.jpg",
        },
        {
            title: "Zinger Stacker Combo",
            desc: "Stacker + 1 Regular fries+ 1 Regular drink",
            price: 740,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        },
    ],
    Mcdonalds: [
        {
            title: "Krunch Burger",
            desc: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
            price: 250,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        },
        {
            title: "Krunch With Fries N Drink",
            desc: "Krunch + 1 regular Fries + 1 regular Drink",
            price: 470,
            imgUrl: "https://images.kfcpakistan.com/image/1670409700963-image.jpg",
        },
        {
            title: "Kentucky Burger",
            desc: "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ",
            price: 530,
            imgUrl: "https://images.kfcpakistan.com/image/1664273624688-image.png",
        },
        {
            title: "Mighty Zinger Combo",
            desc: "Mighty Zinger+ 1 regular fries+ 1 regular drink",
            price: 850,
            imgUrl: "https://images.kfcpakistan.com/image/1670410433259-image.jpg",
        },
        {
            title: "Zinger Stacker Combo",
            desc: "Stacker + 1 Regular fries+ 1 Regular drink",
            price: 740,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        },
    ],
    Dominos: [
        {
            title: "Krunch Burger",
            desc: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
            price: 250,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        },
        {
            title: "Krunch With Fries N Drink",
            desc: "Krunch + 1 regular Fries + 1 regular Drink",
            price: 470,
            imgUrl: "https://images.kfcpakistan.com/image/1670409700963-image.jpg",
        },
        {
            title: "Kentucky Burger",
            desc: "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ",
            price: 530,
            imgUrl: "https://images.kfcpakistan.com/image/1664273624688-image.png",
        },
        {
            title: "Mighty Zinger Combo",
            desc: "Mighty Zinger+ 1 regular fries+ 1 regular drink",
            price: 850,
            imgUrl: "https://images.kfcpakistan.com/image/1670410433259-image.jpg",
        },
        {
            title: "Zinger Stacker Combo",
            desc: "Stacker + 1 Regular fries+ 1 Regular drink",
            price: 740,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        },
    ],
    Subways: [
        {
            title: "Krunch Burger",
            desc: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
            price: 250,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        },
        {
            title: "Krunch With Fries N Drink",
            desc: "Krunch + 1 regular Fries + 1 regular Drink",
            price: 470,
            imgUrl: "https://images.kfcpakistan.com/image/1670409700963-image.jpg",
        },
        {
            title: "Kentucky Burger",
            desc: "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ",
            price: 530,
            imgUrl: "https://images.kfcpakistan.com/image/1664273624688-image.png",
        },
        {
            title: "Mighty Zinger Combo",
            desc: "Mighty Zinger+ 1 regular fries+ 1 regular drink",
            price: 850,
            imgUrl: "https://images.kfcpakistan.com/image/1670410433259-image.jpg",
        },
        {
            title: "Zinger Stacker Combo",
            desc: "Stacker + 1 Regular fries+ 1 Regular drink",
            price: 740,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        },
    ],
    Hardees: [
        {
            title: "Krunch Burger",
            desc: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
            price: 250,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        },
        {
            title: "Krunch With Fries N Drink",
            desc: "Krunch + 1 regular Fries + 1 regular Drink",
            price: 470,
            imgUrl: "https://images.kfcpakistan.com/image/1670409700963-image.jpg",
        },
        {
            title: "Kentucky Burger",
            desc: "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ",
            price: 530,
            imgUrl: "https://images.kfcpakistan.com/image/1664273624688-image.png",
        },
        {
            title: "Mighty Zinger Combo",
            desc: "Mighty Zinger+ 1 regular fries+ 1 regular drink",
            price: 850,
            imgUrl: "https://images.kfcpakistan.com/image/1670410433259-image.jpg",
        },
        {
            title: "Zinger Stacker Combo",
            desc: "Stacker + 1 Regular fries+ 1 Regular drink",
            price: 740,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        },
    ],
    "Pizza Point": [
        {
            title: "Krunch Burger",
            desc: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
            price: 250,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        },
        {
            title: "Krunch With Fries N Drink",
            desc: "Krunch + 1 regular Fries + 1 regular Drink",
            price: 470,
            imgUrl: "https://images.kfcpakistan.com/image/1670409700963-image.jpg",
        },
        {
            title: "Kentucky Burger",
            desc: "OG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ",
            price: 530,
            imgUrl: "https://images.kfcpakistan.com/image/1664273624688-image.png",
        },
        {
            title: "Mighty Zinger Combo",
            desc: "Mighty Zinger+ 1 regular fries+ 1 regular drink",
            price: 850,
            imgUrl: "https://images.kfcpakistan.com/image/1670410433259-image.jpg",
        },
        {
            title: "Zinger Stacker Combo",
            desc: "Stacker + 1 Regular fries+ 1 Regular drink",
            price: 740,
            imgUrl: "https://images.kfcpakistan.com/image/1670410356108-image.jpg",
        },
    ],
};

export const tastyDiscounts = [
    {
        id: uuid.v4(),
        title: "Subways",
        rating: "4.4",
        imgUrl: "https://cdn.britannica.com/08/193908-050-66767D57/view-Subway-restaurant-Bangkok-Thailand.jpg",
        location: "North Nazimabad",
        description:
            "KFC – It’s finger lickin’ good. Wake up your taste buds. Fast and yummy. Good for your tummy.",
    },
    {
        id: uuid.v4(),
        title: "Dominos",
        rating: "4.1",
        imgUrl: "https://images.deliveryhero.io/image/fd-pk/LH/s7hx-hero.jpg",
        location: "Malir Cantt",
        description:
            "Mcdonalds – It’s finger lickin’ good. Wake up your taste buds. Fast and yummy. Good for your tummy.",
    },
    {
        id: uuid.v4(),
        title: "Pizza Point",
        rating: "4.2",
        imgUrl: "https://www.pizzapoint.com.pk/upload/1660719644-1660719029-1646815962-Fajita-Sensation--min.jpg",
        location: "North Nazimabad",
        description:
            "Taste that makes you go yummmmm. Fulfill your comfort food cravings",
    },
    {
        id: uuid.v4(),
        title: "Dominos",
        rating: "4.4",
        imgUrl: "https://images.deliveryhero.io/image/fd-pk/LH/s9lr-hero.jpg",
        location: "North Nazimabad",
        description:
            "Dominos – Once you try it, you will love it. Wake up your taste buds. Fast and yummy. Good for your tummy.",
    },
    {
        id: uuid.v4(),
        title: "Hardees",
        rating: "4.8",
        imgUrl: "https://pbs.twimg.com/media/DTj2z61XkAEHL2p.jpg",
        location: "North Nazimabad",
        description:
            "Hardees – Once you try it, you will love it. Wake up your taste buds. Fast and yummy. Good for your tummy.",
    },
    {
        id: uuid.v4(),
        title: "KFC",
        rating: "4.4",
        imgUrl: "https://images.kfcpakistan.com/image/1670410532318-image.jpg",
        location: "North Nazimabad",
        description:
            "KFC – Once you try it, you will love it. Wake up your taste buds. Fast and yummy. Good for your tummy.",
    },
];
export const resturantsData = [
    {
        id: uuid.v4(),
        title: "KFC",
        rating: "4.4",
        imgUrl: "https://images.kfcpakistan.com/image/1670410532318-image.jpg",
        location: "North Nazimabad",
        description:
            "KFC – It’s finger lickin’ good. Wake up your taste buds. Fast and yummy. Good for your tummy.",
    },
    {
        id: uuid.v4(),
        title: "Mcdonalds",
        rating: "4.1",
        imgUrl: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/01/mcdonalds-big-mac-fries.jpg?quality=82&strip=1",
        location: "Malir Cantt",
        description:
            "Mcdonalds – It’s finger lickin’ good. Wake up your taste buds. Fast and yummy. Good for your tummy.",
    },
    {
        id: uuid.v4(),
        title: "Pizza Point",
        rating: "4.2",
        imgUrl: "https://www.pizzapoint.com.pk/upload/1660719644-1660719029-1646815962-Fajita-Sensation--min.jpg",
        location: "North Nazimabad",
        description:
            "Taste that makes you go yummmmm. Fulfill your comfort food cravings",
    },
    {
        id: uuid.v4(),
        title: "Dominos",
        rating: "4.4",
        imgUrl: "https://images.deliveryhero.io/image/fd-pk/LH/s9lr-hero.jpg",
        location: "North Nazimabad",
        description:
            "Dominos – Once you try it, you will love it. Wake up your taste buds. Fast and yummy. Good for your tummy.",
    },
    {
        id: uuid.v4(),
        title: "Hardees",
        rating: "4.8",
        imgUrl: "https://pbs.twimg.com/media/DTj2z61XkAEHL2p.jpg",
        location: "North Nazimabad",
        description:
            "Hardees – Once you try it, you will love it. Wake up your taste buds. Fast and yummy. Good for your tummy.",
    },
    {
        id: uuid.v4(),
        title: "KFC",
        rating: "4.4",
        imgUrl: "https://images.kfcpakistan.com/image/1670410532318-image.jpg",
        location: "North Nazimabad",
        description:
            "KFC – Once you try it, you will love it. Wake up your taste buds. Fast and yummy. Good for your tummy.",
    },
];

export const logo = require("./assets/images/logo.png");
