import React from 'react';
import { Spring } from 'react-spring/renderprops.cjs';
import * as easings from 'd3-ease';
import Head from 'next/head';

import Layout from '../Layout';
import Card from './Card';

const customElastic = easings.easeElasticOut.period(0.6);

const Header = () => (
  <Layout>
    <Head>
      <link href="/static/header.css" rel="stylesheet" />
    </Head>
    <script src="/static/sketch.js" />

    <section
      id="header"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Spring
        from={{ opacity: 0, marginTop: '-50%' }}
        to={{ opacity: 1, marginTop: '-5%' }}
        config={{ duration: 2000, easing: customElastic }}
      >
        {props => (
          <div style={props}>
            <Card />
          </div>
        )}
      </Spring>
      <div className="social">
        <span className="icon first">
          <a href="https://github.com/sidkoparde">
            <img src="/static/images/GitHub.png" alt="GitHub profile" />
          </a>
        </span>
        <span className="icon second">
          <a href="https://www.linkedin.com/in/sid-koparde-34112895/">
            <img src="/static/images/LinkedIn.png" alt="LinkedIn profile" />
          </a>
        </span>
      </div>
      <style jsx>
        {`
          .social {
            position: absolute;
            top: 70vh;
            border: 1px dashed #99999959;
            border-radius: 10%;
            padding: 10px;
          }

          @media only screen and (max-height: 550px) {
            .social {
              position: absolute;
              top: 35vh;
              left: 2px;
              border: 1px dashed #99999959;
              borderradius: 10%;
              padding: 10px;
            }
            .social .icon {
              display: block;
            }
          }
        `}
      </style>
    </section>
  </Layout>
);

export default Header;
