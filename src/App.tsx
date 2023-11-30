// import React from "react";
import { Routes, Route } from "react-router-dom";
// import axios from "axios";
import { ThemeProvider } from "@/components/theme-provider"


import Home from "./_root/pages/Home";
import AllUsers from "./_root/pages/AllUsers";
import CreatePost from "./_root/pages/CreatePost";
import EditPost from "./_root/pages/EditPost";
import PostDetails from "./_root/pages/PostDetails";
import Profile from "./_root/pages/Profile";
import UpdateProfile from "./_root/pages/UpdateProfile";
import ArtGallery from './_root/pages/ArtGallery';

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupForm from "./_auth/forms/SignupForm";
import SigninForm from "./_auth/forms/SigninForm";

import "./globals.css";
// import { number } from "zod";


const App = () => {
  return (
    <main className="flex h-screen">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
            {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
          </Route>

          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="/explore" element={<Explore />} /> */}
            {/* <Route path="/saved" element={<Saved />} /> */}
            <Route path="/all-users" element={<AllUsers />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:id" element={<EditPost />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/profile/:id/*" element={<Profile />} />
            <Route path="/update-profile/:id" element={<UpdateProfile />} />
            <Route path="/ArtGallery" element={<ArtGallery />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </main>
  );
};

export default App;

// const [post, setPost] = React.useState([]);
// const [image, setImage] = React.useState("");
// React.useEffect(() => {
  //   axios.get(img_ids_URL).then((response) => {
    //     setPost(response.data.objectIDs);
    //     console.log(response.data.objectIDs)
    //   });
    // }, []);
    // const [Id, setId] = React.useState("");
    // const img_ids_URL = "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste%20Renoir";
    // var randomID= post[(Math.floor(Math.random() * 147))]
    // console.log (randomID)
    // const link = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'.concat(randomID)
    // console.log (link)
    // React.useEffect(() => {
      //   axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/438815").then((response) => {
        //     setImage(response.data.primaryImage);
        //     console.log(response.data.primaryImage)
        //   });
        // }, []);
        // if (! post)
        //   return null
        
