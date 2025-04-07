import React, { Component } from 'react'
import styles from './ReportDetails.module.css'
import html2pdf from 'html2pdf.js';


function generateHtmlFromJson(jsonString) {
  let data;
  try {
    data = JSON.parse(jsonString);
  } catch (error) {
    console.error("Invalid JSON string:", error);
    return `<p>Error parsing JSON input.</p>`;
  }

  let html = `<div class="evaluation-report">`;

  // Iterate over each key in the parsed JSON
  Object.keys(data).forEach((key) => {
    
    if (key === "FINAL SUMMARY") {
      const summary = data[key];
      html += `<div class="final-summary"><h2>${key}</h2>`;
      
      // Process Strengths
      if (summary.Strengths && Array.isArray(summary.Strengths)) {
        html += `<h3>Strengths</h3><ul>`;
        summary.Strengths.forEach((item) => {
          html += `<li>${item}</li>`;
        });
        html += `</ul>`;
      }
      
      // Process Growth Areas
      if (summary["Growth Areas"] && Array.isArray(summary["Growth Areas"])) {
        html += `<h3>Growth Areas</h3><ul>`;
        summary["Growth Areas"].forEach((item) => {
          html += `<li>${item}</li>`;
        });
        html += `</ul>`;
      }
      
      // Process Recommendations
      if (summary.Recommendations) {
        html += `<h3>Recommendations</h3><p>${summary.Recommendations}</p>`;
      }
      
      html += `</div>`;
    } else {
      // For each Domain block
      const domain = data[key];
      html += `<div class="domain"><h2>${key}</h2>`;
      
      if (domain["Overall Grade"]) {
        html += `<p><strong>Overall Grade:</strong> ${domain["Overall Grade"]}</p>`;
      }
      // if (domain.Rationale) {
      //   html += `<p><strong>Rationale:</strong> ${domain.Rationale}</p>`;
      // }
      
      // Process subcomponents within the domain
      Object.keys(domain).forEach((subKey) => {
        if (subKey === "Overall Grade") return;
        const sub = domain[subKey];
        // html += `<div class="subcomponent"><h3>${subKey}</h3>`;
        if (subKey == "Grade") {
          html += `<p><strong>Grade:</strong> ${sub}</p>`;
        }
        if (subKey == "Evidence") {
          html += `<p><strong>Evidence:</strong> ${sub}</p>`;
        }
        if (subKey == "Rationale") {
          html += `<p><strong>Rationale:</strong> ${sub}</p>`;
        }
        html += `</div>`;
      });
      html += `</div>`;
    }
  });

  html += `</div>`;
  return html;
}

export default class ReportDetails extends Component {
  render() {
    const { report } = this.props
    const { closeWindow } = this.props
    const parsedHTML = generateHtmlFromJson(report.report_file); // your raw string goes here
    // const parsedHTML = generateHtmlFromJson(``);

    const generateAndDownloadPDF = () => {
      const container = document.createElement('div');
      container.innerHTML = parsedHTML;
      document.body.appendChild(container);
  
      html2pdf().from(container).set({
        margin: 1,
        filename: 'report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      }).save().then(() => {
        document.body.removeChild(container);
      });
    };

    return (
      <div className={styles.reportDetails}>
        <div className={styles.closeWindowButton}>
          <button onClick={() => this.props.closeWindow()}>
            Close
          </button>
        </div>
        <div className={styles.content}>
            <h1>Report Details: {report.created}</h1>
            {/* <p>{}</p> */}
            {/* {console.log(report)} */}
            <div
              className="evaluation-report"
              dangerouslySetInnerHTML={{ __html: parsedHTML }}
            />
            {/* <p>{report.report_file}</p> */}
            <div className={styles.downloadButton}>
              <button onClick={() => generateAndDownloadPDF()}>
                Download PDF
              </button>
            </div>
        </div>
      </div>
    )
  }
}
