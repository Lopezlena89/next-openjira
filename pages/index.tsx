import { Typography } from "@mui/material";
import { NextPage } from "next";
import { Layout } from "@/components/layouts";



const Homepage:NextPage = () => {
  return (
    <Layout >
      <Typography variant='h1' color='primary'>Hola mundo</Typography>
    </Layout>
  )
}

export default Homepage;
