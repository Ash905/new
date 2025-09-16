import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import styled from "styled-components";

const MainContent = styled.main`
  padding-top: 80px; 
`;

export const Layout = ({ children, headerData }) => {
  return (
    <div>
      <Head>
        <title>Govenue</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header headerData={headerData} />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </div>
  );
};