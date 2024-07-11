import React from "react";
import Header from "../components/Header";
import ScrollToTop from "react-scroll-to-top";

const Experience = () => {
  return (
    <>
      <ScrollToTop
        smooth
        color="teal"
        style={{ height: "50px", width: "50px", borderRadius: "50%" }}
      />
      <div class="container-fluid p-0">
        <Header />

        <hr class="m-0" />

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>

            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0"> Business Analyst Internship</h3>
                <div class="subheading mb-3"> Grras Solution Pvt. Ltd (Nagpur)</div>

                <p>
                  ● Conducted business analysis and process improvement initiatives to optimize operational workflows and enhance overall business efficiency.
                </p>
                <p>
                  ● Gathered and documented comprehensive business requirements (BRD, SRS, FRD) to align project goals with stakeholder expectations and ensure clarity throughout.
                </p>
                <p>
                  ● Analyzed gathered requirements, formulated actionable solutions, and maintained proactive communication with stakeholders to drive project success.
                </p>
                <p>
                  ● Utilized business process modeling tools such as Microsoft Word, Excel, PowerBI, and JIRA to streamline processes and improve organizational efficiency.
                </p>
                <p>
                  ● Played a key role in User Acceptance Testing (UAT), provided essential support during production implementation, and developed user manuals to facilitate seamless user adoption.
                </p>
                <p>
                  ● Collaborated cross-functionally with internal teams to ensure the accurate interpretation of requirements and the timely delivery of effective solutions.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">January 2023 - June 2023</span>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0"> Accountant and Customer Service Executive</h3>
                <div class="subheading mb-3">Infosys Limited Pune</div>

                <p>
                  ● In Loyad registered, upon receiving the payment statement
                  from the bank, it needs to be uploaded to the BYD application
                  for financial analysis. While some payments auto-allocate,
                  others require manual intervention, necessitating correct
                  remittance details from the account receivables team to
                  resolve customer queries
                </p>
                <p>
                  ● Daily Reporting: At the end of each day, an Excel report
                  must be generated and sent, utilizing Excel for financial
                  analysis with VLOOKUP, pivot tables, and charts to ensure
                  accurate application of remittance to the correct customer
                  accounts.
                </p>
                
                <p>
                  ● Improved cash management and conducted root cause analysis
                  to identify team errors.
                </p>
                <p>
                  ● In British Telecom, Resolved technical issues related to broadband connectivity,
                  speed, and performance. Monitored network infrastructure and
                  identified potential issues to preemptively address service
                  disruptions.
                </p>
                <p>
                  ● Specialized in training new team members, led process
                  improvements.
                </p>
                <p>
                  ● Provided timely and effective customer support via phone,
                  email, live chat, and tickets.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">May 2018 - March 2022</span>
              </div>
            </div>

            <h3 class="mb-0"> projects</h3>
            <p>
              <div class="subheading mb-3">
                1) Vrinda Store Annul Excel Report
              </div>
              <p>
                <a
                  class="social-icon"
                  href="https://onedrive.live.com/edit?id=D53D8C8154B76423!110&resid=D53D8C8154B76423!110&ithint=file%2Cxlsx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvcyFBaU5rdDFTQmpEM1Zia3NwQWd3U3luLVMxMzA_ZT1RdThyMFk&migratedtospo=true&wdo=2&cid=d53d8c8154b76423"
                >
                  (link)
                </a>
              </p>
              Overview: "Analyzed Vrinda Store's 2022 sales and created a
              dashboard to identify growth opportunities".
              <p>Features:-</p>
              <p>
                ● Analyzed Vrinda Store’s 2022 sales and orders to identify peak periods and purchasing patterns, providing insights for strategic planning and inventory management.
              </p>
              <p>
                ● Created an interactive dashboard to visualize real-time data, enhancing decision-making processes and enabling stakeholders to monitor performance metrics effectively.
              </p>
              <p>
                ● Identified opportunities for revenue growth and operational improvements based on data analysis, delivering actionable recommendations to optimize business outcomes.
              </p>
              <p>
              Tech Stack: Excel, Formulas for data analysis, Automated dashboard creation, VLOOKUP for data retrieval, and Pie-Charts for visual representation.
              </p>
            </p>
            <p>
              <div class="subheading mb-3">
                2) Madhav E-commerce Power BI Report Power Bi Project Link
              </div>
              <p>
                <a
                  class="social-icon"
                  href="https://drive.google.com/file/d/1cvOwMMxJ6QB-MtqWte4B4S3-RTZ3k1Xq/view"
                >
                  (link)
                </a>
              </p>
              Overview: ”Developed an interactive Power BI dashboard for online
              sales analysis with customized visualizations.”
              <p>Features:-</p>
              <p>
                ● Developed an interactive dashboard to analyze online sales data, facilitating insights into sales trends and performance metrics.
              </p>
              <p>
                ● Established data connections, joined tables, performed calculations, and enabled user-defined parameters for dynamic data exploration.
              </p>
              <p>
                ● Created customized visualizations including bar, pie, donut, clustered bar, scatter, line, area, map, and slicers to visually represent insights.
              </p>
              <p> Tech Stack: Power BI</p>
            </p>
          </div>
        </section>

        <hr class="m-0" />
      </div>
    </>
  );
};

export default Experience;
