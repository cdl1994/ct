import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.js';
import BandCarousel from './band_carousel.js';
import CutBG from './cut_bg.js';

class HomePage extends React.Component {
	constructor(){
		super();

		// state;
		this.state={
			"name" : "HomePage",
			"theme":{
				"backgroundWhite":"white",
		        "backgroundColor":"#dcc0ba",
		        "titleTextColor":"#ffffff",
		        "backgroundImage":"image/data/Woodcut.jpg",
		        "fontStyle":"Bodoni-stdroman"
		    },
		    "carousel":[
		        {
		            "image":"image/data/home-banner/banner-2.jpg",
		            "text":"The <i>Perfect Gift</i> for that Perfect Occasion.<br><i>Personalized</i> Cigars."
		        },
		        {
		            "image":"image/data/home-banner/banner-1.jpg",
		            "text":"The <i>Perfect Gift</i> for that Perfect Occasion.<br><i>Personalized</i> Cigars."
		        },
		        {
		            "image":"image/data/home-banner/banner-3.jpg",
		            "text":"The <i>Perfect Gift</i> for that Perfect Occasion.<br><i>Personalized</i> Cigars."
		        }
		    ],
		    "categories":[
		        {
		            "image":"image/data/homepage_category/Wedding.jpg",
		            "title":"Celebrate the Newest Addition to Your Family",
		            "buttonText":"Custom Holiday Cigars"
		        },
		        {
		            "image":"image/data/homepage_category/Groomsmen.jpg",
		            "title":"Say Thank You to the Men Who Stood by Your Side",
		            "buttonText":"Custom Groomsmen Cigar"
		        },
		        {
		            "image":"image/data/homepage_category/ValentinesDay.jpg",
		            "title":"Show Your Partner Some Love",
		            "buttonText":"Custom Valentine’s Day Cigars"
		        },
		        {
		            "image":"image/data/homepage_category/CorporateEvent.jpg",
		            "title":"Show Your Partner Some Love",
		            "buttonText":"Custom Corporate Event Cigars"
		        },
		    ],
		    "customize":[
		        {
		            "image":"image/data/cigar-bands/cigar-bands-2.png",
		            "link":"design-cigar-from-template/The Classic Cigar Band-cigar-band-template/940",
		            "buttonText":"Customize yours"
		        },
		        {
		            "image":"image/data/cigar-bands/cigar-bands-4.svg",
		            "link":"design-cigar-from-template/The Classic Cigar Band-cigar-band-template/940",
		            "buttonText":"Customize yours"
		        },
		        {
		            "image":"image/data/cigar-bands/cigar-bands-6.svg",
		            "link":"design-cigar-from-template/The Classic Cigar Band-cigar-band-template/940",
		            "buttonText":"Customize yours"
		        },
		        {
		            "image":"image/data/cigar-bands/cigar-bands-1.png",
		            "link":"design-cigar-from-template/The Classic Cigar Band-cigar-band-template/940",
		            "buttonText":"Customize yours"
		        },
		        {
		            "image":"image/data/cigar-bands/cigar-bands-3.png",
		            "link":"design-cigar-from-template/The Classic Cigar Band-cigar-band-template/940",
		            "buttonText":"Customize yours"
		        }
		    ],
		    "readmore":[
		        "Cigar",
		        "Cigars",
		        "Food-and-Cigar",
		        "Father's-day",
		        "Celebrations",
		        "Valentine's-Day",
		        "Dad",
		        "Cinco-De-Mayo",
		        "Bachelor-Party-Cigar",
		        "Wedding-Cigar",
		        "Cigar-Humidor",
		        "Cigar-Smoke",
		        "Groom",
		        "Cigar-Culture",
		        "Cigar-Aficionado",
		        "Cuban-Cigars",
		        "Luxury Cigars"
		    ]
		};

		// functions;
	}

	componentDidMount(){
	}

	componentDidUpdate(){
	}

	render() {
		var name = this.state.name;
		var homePageStyle = {
			"background-color" : this.state.theme.backgroundColor,
			"color" : this.state.theme.titleTextColor,
			"font-style" : this.state.theme.fontStyle,
		}

		const buttonList = this.state.readmore.map((item) => <button className='tag white-border-button blog-tags-but'>{item}</button>);

		return (			
			<div style={homePageStyle}>
			  {/*<script src="carousel/jquery-1.11.3.min.js"></script>*/}
			  <div id="home_page_name"> {name} </div>

			  <Carousel list={this.state.carousel}/>
			  
			  <CutBG imageURL={this.state.theme.backgroundImage}/>

			  <div className="container margin-10">
				<div className="h-asseen">
				<h3 className="text-center"><span className="as-seen-in-font">AS SEEN IN</span></h3>
				<div className="col-xs-2 col-xs-offset-1"><a href="http://www.thedailybeast.com/articles/2016/05/30/whatever-happened-to-new-dads-passing-out-cigars" target="_blank"><img src="/image/data/daily-beast.png" /></a></div>
				<div className="col-xs-2"><a href="http://edition.pagesuite.com/html5/reader/production/default.aspx?pubname=&edid=d0190934-1df3-49f7-9f91-c3eeb4d210b6" target="_blank"><img src="/image/data/american-way.png" /></a></div>
				<div className="col-xs-2"><a href="http://mmqb.si.com/mmqb/2016/09/22/nfl-football-lifestyle-gameday-outfit-shirts" target="_blank"><img src="/image/data/sports-illu.png" /></a></div>
				<div className="col-xs-2"><a href="http://www.craveonline.com/culture/1013287-roll-smokes-like-big-shot-custom-tobacco-cigars" target="_blank"><img src="/image/data/crave.png" /></a></div>
				<div className="col-xs-2"><a href="http://wedding-bros.com/wedding-planning/custom-cigars-for-groomsmen-dads-and-all-aficionados-custom-tobacco.html" target="_blank"><img src="/image/data/bros.png" /></a></div>
				<div className="col-xs-2 col-xs-offset-2"><a href="http://www.uptownmagazine.com/2016/12/holiday-gift-guide-the-gifts-they-dont-know-they-really-want/" target="_blank"><img src="/image/data/uptown.png" /></a></div>
				<div className="col-xs-2"><a href="https://www.youtube.com/watch?v=Twm8iclYNGA" target="_blank"><img src="/image/data/fox.png" /></a></div>
				<div className="col-xs-2"><a href="http://www.bostonherald.com/gift_guide/stocking_stuffers/2016/11/customized_cigars_can_light_up_a_smoker_s_holidays" target="_blank"><img src="/image/data/boston.png" /></a></div>
				<div className="col-xs-2"><a href="http://labusinessjournal.com/accounts/login/?next=/news/2016/jul/29/cigar-maker-meets-its-match/" target="_blank"><img src="/image/data/los-ang.png" /></a></div>
				</div>
			  </div>

			  <CutBG imageURL={this.state.theme.backgroundImage}/>
			  <WhiteLine />

			  <div className="col-md-12 nopadding">
				<div className="container margin-10">
				<div className="h-first-cou">
				<h2 className="text-center margin-10">10% off your first order</h2>
				<h4 className="text-center color-white font-tradegothic-stdbold">Simply enter your email here and look for an email with a code to use on your first order.</h4>
				</div>
				</div>
			  </div>

			  <WhiteLine />
			  <BandCarousel list={this.state.customize}/>
			  <CutBG imageURL={this.state.theme.backgroundImage}/>

			  <div className="container margin-10 blog-tags">
				<div className="col-md-6">
				<div className="white-line"></div>
				<div className="row">
				<div className="col-xs-12">
				<h3>Evergreen Text Goes Here...</h3>
				</div>
				</div>
				<div className="white-line"></div>
				<a href="/blog" className="readmore"><img src="/image/data/arrow-right.png" alt="right arrow" className="arrow-right" />Read More</a>
				</div>

				<div className="col-md-6">
				<div className="white-line"></div>
				<div className="row">
				<div className="col-xs-10">
				<div className="color-white blog-tags-m">{buttonList}</div>
				</div>
				<div className="col-xs-2">
				<h3><span><img src="/image/data/first-cou.png" /></span></h3>
				</div>
				</div>
				<div className="brown-line-5"></div>
				</div>
		      </div>
			</div>
		);
	}

}

function WhiteLine(props){
	return (
		<h3 className="centered-line"><span><img src="/image/data/first-cou.png" /></span></h3>
	);
}

export default HomePage;