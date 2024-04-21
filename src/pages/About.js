import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">khaana khaazana</Typography>
        <p>Welcome to a culinary journey like no other! At <b>khaana khazana</b> , we invite you to savor the flavors of exquisite cuisine in a warm and inviting ambiance. Nestled in the heart of <b>Delhi</b>, our restaurant is a haven for food enthusiasts and connoisseurs seeking an unforgettable dining experience.

khaana khazana, we believe that dining is more than just a meal; it's an art form. Our dedicated team of chefs, renowned for their culinary prowess, craft each dish with precision and passion. Whether you're a fan of traditional classics or eager to explore innovative culinary creations, our diverse menu promises to tantalize your taste buds.

Our commitment to quality extends beyond our kitchen. We source the finest ingredients locally and globally, ensuring that every plate that leaves our kitchen is a masterpiece of taste and presentation. Our extensive wine and cocktail selection perfectly complements our menu, offering you the ideal pairing for your meal.
        </p>
        <br />
        <p>
        As you step into our restaurant, you'll be welcomed by a warm and attentive staff ready to cater to your every need. The ambiance here is an exquisite blend of contemporary elegance and timeless charm, making it the perfect setting for any occasion, from intimate dinners to celebrations with friends and family.

We take pride in creating moments of delight and memories to cherish. Whether you're joining us for a romantic dinner, a business lunch, or a special event, khaana khazana is where culinary artistry meets exceptional hospitality.

We invite you to explore our website to discover our menu, reserve a table, and learn more about our story. Join us at khaana khazana and embark on a culinary adventure that will awaken your senses and leave you craving for more. Your culinary journey begins here!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
