import React from "react"
import PropTypes from 'prop-types'
import SEO from "../components/SEO"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LayoutContext } from "../components/Layout"

import styles from "./embassy-page.module.scss"
import PaymentSection from "../components/PaymentSection/PaymentSection";
// import MemberSection from "../components/Members";
// import AssistanceSection from "../components/Assistance";

class EmbassyPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
      current_country: "",
      current_city: null
    };
    this.viewDetail = this.viewDetail.bind(this);
    this.viewList = this.viewList.bind(this);
  }
  viewDetail(country_no, city_no) {
    this.setState({
      view: true,
      current_country: this.props.data.markdownRemark.frontmatter.countries[country_no].country_name,
      current_city: this.props.data.markdownRemark.frontmatter.countries[country_no].cities[city_no]
    })
  }
  viewList() {
    this.setState({
      view: false
    })
  }
  render() {
    const page_data = this.props.data.markdownRemark.frontmatter;
    const { headerLeftTheme, headerRightTheme } = page_data;

    return (
      <>
        <SEO
          title={page_data.title}
          description= "" // {page_data.description || page_data.excerpt}
        />

        <LayoutContext.Consumer>
          {({setHeaderLeftTheme, setHeaderRightTheme}) => {
            setHeaderLeftTheme(headerLeftTheme || 'light');
            setHeaderRightTheme(headerRightTheme || 'dark');
          }}
        </LayoutContext.Consumer>
        <div className="container">
          <div className={styles.EmbassySection}>
            {
              this.state.view === true
              ?
                <>
                  <h1 onClick={()=>this.viewList()} className={styles.DetailHeader}>U.S. Embassy in {this.state.current_country} information - {this.state.current_city.city_name}</h1>
                  <div className="row">
                    <div className="col-8">
                      {page_data.headercontent}
                      <div>Website: <a>{this.state.current_city.url}</a></div>
                    </div>
                    <div className="col-4 align-center">
                      <a className={styles.StartApp}>START APPLICATION</a>
                      <div className={styles.DetailInfo}>
                        <div className={styles.DetailIcon}><FontAwesomeIcon icon="map-marker-alt"></FontAwesomeIcon></div>
                        <div>
                          <h4 className={styles.DetailTitle}>
                             U.S. Embassy in {this.state.current_city.city_name}
                          </h4>
                          <div>{this.state.current_city.address}</div>
                        </div>
                      </div>
                      <div className={styles.DetailInfo}>
                        <div className={styles.DetailIcon}><FontAwesomeIcon icon="phone-alt"></FontAwesomeIcon></div>
                        <div>
                          <h4 className={styles.DetailTitle}>Telephon</h4>
                          <div>{this.state.current_city.phone}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.TagSection}>
                    <a className={styles.StartApp}>START APPLICATION</a>
                  </div>
                  <div className={styles.FooterContent}>
                    {page_data.footercontent}
                  </div>
                </>
              :
                <>
                  <h1>U.S. Embassy in</h1>
                  {
                    page_data.countries.map((country, country_no) => (
                      <div key={country_no} className={styles.Country}>
                        <span>{country.country_name}</span>
                        {
                          country.cities.map((city, city_no) => (
                            <div className={styles.City} key={city_no} onClick={() => this.viewDetail(country_no, city_no)}><a>{city.city_name}</a></div>
                          ))
                        }
                      </div>
                    ))
                  }
                </>
            }
          </div>
        </div>
        <PaymentSection />
      </>
    )
  }
}
EmbassyPageTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
export default EmbassyPageTemplate

