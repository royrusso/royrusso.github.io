import Layout from "@theme/Layout";
import React from "react";

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: "flex",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            padding: "20px",
            height: "50vh",
            width: "1000px",
          }}
        >
          <div>
            <h1>Hello, I am Roy.</h1>
            <p>
              An experienced software engineering executive with a passion for
              technology and innovation. I have a proven track record of
              delivering high-quality software solutions that meet business
              needs. I have a strong background in software development,
              architecture, and project management.
            </p>
            <p>
              I am currently the Vice President of Engineering at{" "}
              <a href="http://www.verusen.com" target="_blank">
                Verusen
              </a>
              .
            </p>
            <p>
              For my complete career journey, check out my profile on{" "}
              <a href="https://www.linkedin.com/in/royrusso/" target="_blank">
                LinkedIn
              </a>
              .{" "}
            </p>
            <div class="container">
              <div class="column">
                <h3>Years</h3>
              </div>
              <div class="column">
                <h3>Company</h3>
              </div>
              <div class="column">
                <h3>Position</h3>
              </div>
              <div class="column">2024-</div>
              <div class="column">Verusen</div>
              <div class="column">VP of Engineering</div>
              <div class="column">2020-2023</div>
              <div class="column">Bluechip Financial</div>
              <div class="column">Chief Technology Officer</div>
              <div class="column">2019-2020</div>
              <div class="column">Volantio</div>
              <div class="column">Chief Technology Officer</div>
              <div class="column">2014-2019</div>
              <div class="column">
                Predikto{" "}
                <span className="acquired">(acquired by Raytheon)</span>
              </div>
              <div class="column">VP of Engineering</div>
              <div class="column">2011-2014</div>
              <div class="column">Altisource</div>
              <div class="column">Chief Architect</div>
              <div class="column">2009-2011</div>
              <div class="column">
                LoopFuse{" "}
                <span className="acquired">(acquired by SalesFusion)</span>
              </div>
              <div class="column">Co-Founder</div>
              <div class="column">2007-2009</div>
              <div class="column">
                JBoss, Inc.{" "}
                <span className="acquired">(acquired by Red Hat)</span>
              </div>
              <div class="column">Founding Engineer</div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "20px",
            width: "400px",
            backgroundColor: "#252526",
          }}
        >
          <h1>Summary</h1>
          <p>Over 25 years of industry experience</p>
          <p>
            <b>3</b> successful startup exits.
          </p>
          <p>
            Co-Founder,{" "}
            <a href="https://nitroiq.io/" target="_blank">
              The NitroIQ Project
            </a>
          </p>
          <p>
            Co-Author,{" "}
            <a
              href="https://www.manning.com/books/elasticsearch-in-action"
              target="_blank"
            >
              Elasticsearch In Action
            </a>
          </p>
          <p>
            Project founder,{" "}
            <a href="https://www.elastichq.org/" target="_blank">
              ElasticHQ
            </a>{" "}
            - the most popular Elasticsearch Monitoring platform
          </p>
          <p>
            Regular speaker at industry technology conferences (PyATL, DevNexus,
            AJUG)
          </p>
          <p>
            Experience with AI/ML, MLOps, and data science in production
            environments.
          </p>
          <p>
            Reputation for building lean high-performing teams with measurable
            results.
          </p>
          <p>
            Hands-on technology executive that understands architecture and code
          </p>
        </div>
      </div>
    </Layout>
  );
}
