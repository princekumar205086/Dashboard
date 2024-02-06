"use client";
import Layout from "../components/layout";
import BottomNavigationPage from "./bottomNavigationPage";
import SpeedDialPage from "./speedDialPage";

export default function Users() {

    return (
        <Layout>
            <SpeedDialPage />
            <BottomNavigationPage />
        </Layout>
    );
}
