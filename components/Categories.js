import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
        >
            {
                categories.map((category,index)=>{
                    return(
                        <CategoriesCard
                        key={index}
                        imgUrl={category.imgUrl}
                        title={category.title}
                    />
                    )
                })
            }
    
        </ScrollView>
    );
};

const categories = [
    {
        imgUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg",
        title: "Pasta",

        data: [
            {
                title: "Spaghetti Bolognaise.",
                imgUrl: "https://static.toiimg.com/thumb/84784534.cms?imgsize=468021&width=800&height=800",
            },
            {
                title: "Lasagne",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
            {
                title: "Fettuccine Alfredo.",
                imgUrl: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F09-2022-sausage-pasta%2Fsausage-pasta-4",
            },
            {
                title: "Pasta Carbonara.",
                imgUrl: "https://images.aws.nestle.recipes/original/2020_06_23T11_58_13_mrs_ImageRecipes_27916lrg.jpg",
            },
            {
                title: "Spaghetti alle Vongole",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
            {
                title: "Macaroni Cheese.",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
        ],
    },
    {
        imgUrl: "https://assets.cntraveller.in/photos/60ba26c0bfe773a828a47146/4:3/w_1440,h_1080,c_limit/Burgers-Mumbai-Delivery.jpg",
        title: "Burgers",

        data: [
            {
                title: "Spaghetti Bolognaise.",
                imgUrl: "https://static.toiimg.com/thumb/84784534.cms?imgsize=468021&width=800&height=800",
            },
            {
                title: "Lasagne",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
            {
                title: "Fettuccine Alfredo.",
                imgUrl: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F09-2022-sausage-pasta%2Fsausage-pasta-4",
            },
            {
                title: "Pasta Carbonara.",
                imgUrl: "https://images.aws.nestle.recipes/original/2020_06_23T11_58_13_mrs_ImageRecipes_27916lrg.jpg",
            },
            {
                title: "Spaghetti alle Vongole",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
            {
                title: "Macaroni Cheese.",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
        ],
    },
    {
        imgUrl: "https://www.simplyrecipes.com/thmb/m1LB58rp40jNA5L7_6O3IJkj4Cc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-BBQ-Chicken-LEAD-10-03fd9892eaae4ce1a8a3f4c949657cfd.jpg",
        title: "BBQ",

        data: [
            {
                title: "Spaghetti Bolognaise.",
                imgUrl: "https://static.toiimg.com/thumb/84784534.cms?imgsize=468021&width=800&height=800",
            },
            {
                title: "Lasagne",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
            {
                title: "Fettuccine Alfredo.",
                imgUrl: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F09-2022-sausage-pasta%2Fsausage-pasta-4",
            },
            {
                title: "Pasta Carbonara.",
                imgUrl: "https://images.aws.nestle.recipes/original/2020_06_23T11_58_13_mrs_ImageRecipes_27916lrg.jpg",
            },
            {
                title: "Spaghetti alle Vongole",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
            {
                title: "Macaroni Cheese.",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
        ],
    },
    {
        imgUrl: "https://i.ytimg.com/vi/d_Rov85ZSN0/maxresdefault.jpg",
        title: "Fish",

        data: [
            {
                title: "Spaghetti Bolognaise.",
                imgUrl: "https://static.toiimg.com/thumb/84784534.cms?imgsize=468021&width=800&height=800",
            },
            {
                title: "Lasagne",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
            {
                title: "Fettuccine Alfredo.",
                imgUrl: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F09-2022-sausage-pasta%2Fsausage-pasta-4",
            },
            {
                title: "Pasta Carbonara.",
                imgUrl: "https://images.aws.nestle.recipes/original/2020_06_23T11_58_13_mrs_ImageRecipes_27916lrg.jpg",
            },
            {
                title: "Spaghetti alle Vongole",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
            {
                title: "Macaroni Cheese.",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
        ],
    },
    {
        imgUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg",
        title: "Pasta",

        data: [
            {
                title: "Spaghetti Bolognaise.",
                imgUrl: "https://static.toiimg.com/thumb/84784534.cms?imgsize=468021&width=800&height=800",
            },
            {
                title: "Lasagne",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
            {
                title: "Fettuccine Alfredo.",
                imgUrl: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F09-2022-sausage-pasta%2Fsausage-pasta-4",
            },
            {
                title: "Pasta Carbonara.",
                imgUrl: "https://images.aws.nestle.recipes/original/2020_06_23T11_58_13_mrs_ImageRecipes_27916lrg.jpg",
            },
            {
                title: "Spaghetti alle Vongole",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
            {
                title: "Macaroni Cheese.",
                imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
            },
        ],
    },
];

export default Categories;
