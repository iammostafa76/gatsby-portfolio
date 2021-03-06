import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

 const index = () => {
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h1>Portfolio</h1>
                <h2>Projects & Websites I've Created</h2>
            </div>
        </Layout>
    );
};

export default index;