import Layout from "@theme/Layout";
import React from "react";

export default function Projects() {
  return (
    <Layout title="Projects" description="Projects Page">
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
            width: "1000px",
          }}
        >
          <div>
            <h1>Projects.</h1>
            <p>
              Here are some of my most popular projects on GitHub and elsewhere.
              For a full list of coding projects, check out my{" "}
              <a href="https://github.com/royrusso" target="_blank">
                GitHub Profile
              </a>
              .
            </p>
          </div>
          <div class="container">
            {/* <div class="project-alt">
              <h2>Probus</h2>
              <p>
                A FAST network monitor and UI that actively scans and alerts you
                to network changes, new devices, open ports, and identifies CVEs
                (Common Vulnerabilities and Exposures).
              </p>
              <p>
                <a href="https://github.com/royrusso/probus" target="_blank">
                  GitHub
                </a>
              </p>
              <img src="https://img.shields.io/github/stars/royrusso/probus.svg?label=Github Stars"></img>
              &nbsp;
              <img src="https://img.shields.io/github/forks/royrusso/probus.svg?label=Github Forks"></img>
            </div> */}
            <div class="project-alt">
              <h2>Nitro IQ</h2>
              <p>
                NitroIQ monitors, scores, and improves your Team's Sprint
                performance using sophisticated machine learning - all within
                Jira.
              </p>
              <p>
                <a href="https://nitroiq.io/" target="_blank">
                  Website
                </a>
                &nbsp; | &nbsp;
                <a
                  href="https://marketplace.atlassian.com/apps/1232080?tab=overview&hosting=cloud"
                  target="_blank"
                >
                  Atlassian Marketplace
                </a>
              </p>
            </div>
            <div class="project-alt">
              <h2>Elastic HQ</h2>
              <p>
                The most popular open source management and monitoring platform
                for Elasticsearch.
              </p>
              <p>
                <a href="http://www.elastichq.org" target="_blank">
                  Website
                </a>
                &nbsp; | &nbsp;
                <a
                  href="https://github.com/ElasticHQ/elasticsearch-HQ"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>
              <img src="https://img.shields.io/docker/pulls/elastichq/elasticsearch-hq.svg?label=Docker Pulls"></img>
              &nbsp;
              <img src="https://img.shields.io/github/stars/ElasticHQ/elasticsearch-HQ.svg?label=Github Stars"></img>
              &nbsp;
              <img src="https://img.shields.io/github/forks/ElasticHQ/elasticsearch-HQ.svg?label=Github Forks"></img>
            </div>
            <div class="project-alt">
              <h2>Elasticsearch In Action</h2>
              <p>
                Co-Author of the Manning book, Elasticsearch in Action. A
                comprehensive guide to Elasticsearch.
              </p>
              <p>
                <a
                  href="https://www.manning.com/books/elasticsearch-in-action"
                  target="_blank"
                >
                  Manning
                </a>
                &nbsp; | &nbsp;
                <a
                  href="https://www.amazon.com/Elasticsearch-Action-Radu-Gheorghe/dp/1617291625"
                  target="_blank"
                >
                  Amazon
                </a>
              </p>
            </div>
            <div class="project-alt">
              <h2>Akka Examples</h2>
              <p>
                A collection of Akka examples that showcase the power of the
                Akka Actor Model.
              </p>
              <p>
                <a
                  href="https://github.com/royrusso/akka-java-examples"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>
              <img src="https://img.shields.io/github/stars/royrusso/akka-java-examples.svg?label=Github Stars"></img>
              &nbsp;
              <img src="https://img.shields.io/github/forks/royrusso/akka-java-examples.svg?label=Github Forks"></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
