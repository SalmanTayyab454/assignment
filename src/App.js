import './assets/css/style.css';
import './App.css';
import n26 from '../src/assets/images/N26-Logo1.png';
import comdirect from '../src/assets/images/comdirect-logo-1.png';
import commerzbank from '../src/assets/images/commerzbank-logo.png';
import consorsbank from '../src/assets/images/consorsbank.png';
import dkbbank from '../src/assets/images/dkb-logo.png';
import ingbank from '../src/assets/images/ing-logo-1.png';
import norisbank from '../src/assets/images/noris-logo.png';
import revolutbank from '../src/assets/images/Revolut_Logo.png';
import mobileProduct from '../src/assets/images/Mobiles-Produkt-Logo.png';
import { useState, useEffect } from 'react';


function App() {
    const [filter1, setFilter1] = useState('');
    const [filter2, setFilter2] = useState('');

    

    useEffect(() => {
        const n26Card = document.querySelector('.n26bank');
        const comdirectCard = document.querySelector('.comdirectbank');
        const dkbCard = document.querySelector('.dkbbank');
        const ingCard = document.querySelector('.ingbank');
        const revolutCard = document.querySelector('.revolutbank');
        const consorCard = document.querySelector('.consorbank');
        const commerzCard = document.querySelector('.commerzbank');
        const norisCard = document.querySelector('.norisbank');

        if (filter1 === 'kostenlose' && filter2 === 'gemeinschaftskonto') {
            console.log("both filters")
            n26Card.style.display = 'grid';
            comdirectCard.style.display = 'grid';
            dkbCard.style.display = 'grid';
            revolutCard.style.display = 'grid';
            ingCard.style.display = 'none';
            consorCard.style.display = 'none';
            commerzCard.style.display = 'none';
            norisCard.style.display = 'none';
          } else if (filter1 === 'kostenlose') {
            console.log("filters 1")
            n26Card.style.display = 'grid';
            comdirectCard.style.display = 'grid';
            dkbCard.style.display = 'grid';
            ingCard.style.display = 'none';
            consorCard.style.display = 'none';
            commerzCard.style.display = 'none';
            revolutCard.style.display = 'none';
            norisCard.style.display = 'none';
          } else if (filter2 === 'gemeinschaftskonto') {
            console.log("filters2")
            revolutCard.style.display = 'grid';
            ingCard.style.display = 'none';
            consorCard.style.display = 'none';
            commerzCard.style.display = 'none';
            norisCard.style.display = 'none';
            n26Card.style.display = 'none';
            comdirectCard.style.display = 'none';
            dkbCard.style.display = 'none';
          } else {
            console.log("all")
            n26Card.style.display = 'grid';
            comdirectCard.style.display = 'grid';
            dkbCard.style.display = 'grid';
            ingCard.style.display = 'grid';
            revolutCard.style.display = 'grid';
            consorCard.style.display = 'grid';
            commerzCard.style.display = 'grid';
            norisCard.style.display = 'grid';
          }
    }, [filter1, filter2]);
    
      
  return (
    <div className="boxed-wrapper">
        <div className="fusion-sides-frame"></div>
        <div id="wrapper" className="fusion-wrapper">
            <div id="home"></div>
            <header class="fusion-header-wrapper">
    <div class="fusion-header-v1 fusion-logo-alignment fusion-logo-left fusion-sticky-menu- fusion-sticky-logo- fusion-mobile-logo- fusion-mobile-menu-design-modern">
        <div class="fusion-header-sticky-height"></div>
        <div class="fusion-header">
            <div class="fusion-row">
                <div class="fusion-logo" data-margin-top="22px" data-margin-bottom="22px" data-margin-left="0px" data-margin-right="0px">
                    <a class="fusion-logo-link" href="https://finanzvergleich.com/"> <img src="https://finanzvergleich.com/wp-content/uploads/2020/10/Finanzvergleich-Standard-Logo.svg" srcset="https://finanzvergleich.com/wp-content/uploads/2020/10/Finanzvergleich-Standard-Logo.svg 1x" width="100" height="100"
                            alt="Finanzvergleich Logo" data-retina_logo_url="" class="fusion-standard-logo" /> </a>
                </div>
                <nav class="fusion-main-menu" aria-label="Hauptmenü">
                    <div class="fusion-overlay-search">
                        <form role="search" class="searchform fusion-search-form fusion-search-form-classic" method="get" action="https://finanzvergleich.com/">
                            <div class="fusion-search-form-content">
                                <div class="fusion-search-field search-field"> <label><span class="screen-reader-text">Suche nach:</span> <input type="search" value="" name="s" class="s" placeholder="Suchen..." required aria-required="true" aria-label="Suchen..."/> </label></div>
                                <div class="fusion-search-button search-button"> <input type="submit" class="fusion-search-submit searchsubmit" aria-label="Suche" value="&#xf002;" /></div>
                            </div>
                        </form>
                        <div class="fusion-search-spacer"></div>
                        <a href="#" role="button" aria-label="Close Search" class="fusion-close-search"></a>
                    </div>
                    <ul id="menu-main-menu" class="fusion-menu">
                        <li id="menu-item-230" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-230 fusion-dropdown-menu" data-item-id="230"><a href="https://finanzvergleich.com/kredit/" class="fusion-bar-highlight"><span class="menu-text">Kredit</span></a>
                            <ul class="sub-menu">
                                <li id="menu-item-8884" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8884 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/kredit/kreditvergleich/" class="fusion-bar-highlight"><span>Kreditvergleich</span></a></li>
                                <li id="menu-item-23601" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23601 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/baufinanzierung/baufinanzierungsvergleich/" class="fusion-bar-highlight"><span>Baufinanzierungs­vergleich</span></a></li>
                            </ul>
                        </li>
                        <li id="menu-item-348" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-348 fusion-dropdown-menu" data-item-id="348"><a href="https://finanzvergleich.com/kreditkarte/" class="fusion-bar-highlight"><span class="menu-text">Kreditkarte</span></a>
                            <ul class="sub-menu">
                                <li id="menu-item-1157" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1157 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/kreditkarte/kreditkarten-vergleich/" class="fusion-bar-highlight"><span>Kreditkarten Vergleich</span></a></li>
                            </ul>
                        </li>
                        <li id="menu-item-34871" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-34871 fusion-dropdown-menu" data-item-id="34871"><a href="https://finanzvergleich.com/girokonto/" class="fusion-bar-highlight"><span class="menu-text">Girokonto</span></a>
                            <ul class="sub-menu">
                                <li id="menu-item-1367" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1310 current_page_item menu-item-1367 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/kostenloses-girokonto/girokonto-vergleich/" class="fusion-bar-highlight"><span>Girokonto Vergleich</span></a></li>
                                <li id="menu-item-16598" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-16598 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/geschaeftskonto/geschaeftskontovergleich/" class="fusion-bar-highlight"><span>Geschäftskonto Vergleich</span></a></li>
                            </ul>
                        </li>
                        <li id="menu-item-6525" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6525 fusion-dropdown-menu" data-item-id="6525"><a href="https://finanzvergleich.com/depot/" class="fusion-bar-highlight"><span class="menu-text">Depot</span></a>
                            <ul class="sub-menu">
                                <li id="menu-item-6526" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6526 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/depot/depot-vergleich/" class="fusion-bar-highlight"><span>Depot Vergleich</span></a></li>
                            </ul>
                        </li>
                        <li id="menu-item-39457" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-39457 fusion-dropdown-menu" data-item-id="39457"><a href="https://finanzvergleich.com/banken/" class="fusion-bar-highlight"><span class="menu-text">Banken</span></a>
                            <ul class="sub-menu">
                                <li id="menu-item-2867" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2867 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/banken/barclays/" class="fusion-bar-highlight"><span>Barclays</span></a>
                                    <ul class="sub-menu">
                                        <li id="menu-item-9672" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9672"><a href="https://finanzvergleich.com/banken/barclays/barclaycard-visa-kreditkarte/" class="fusion-bar-highlight"><span>Barclays Visa Kreditkarte</span></a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-2866" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2866 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/banken/comdirect/" class="fusion-bar-highlight"><span>Comdirect</span></a>
                                    <ul class="sub-menu">
                                        <li id="menu-item-9648" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9648"><a href="https://finanzvergleich.com/banken/comdirect/comdirect-girokonto/" class="fusion-bar-highlight"><span>Comdirect Girokonto</span></a></li>
                                        <li id="menu-item-13655" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13655"><a href="https://finanzvergleich.com/banken/comdirect/comdirect-depot/" class="fusion-bar-highlight"><span>Comdirect Depot</span></a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-13690" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13690 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/banken/consorsbank/" class="fusion-bar-highlight"><span>Consorsbank</span></a></li>
                                <li id="menu-item-1598" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1598 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/banken/dkb/" class="fusion-bar-highlight"><span>DKB</span></a>
                                    <ul class="sub-menu">
                                        <li id="menu-item-1634" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1634"><a href="https://finanzvergleich.com/banken/dkb/dkb-cash/" class="fusion-bar-highlight"><span>DKB Girokonto</span></a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-32100" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32100 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/banken/etoro/" class="fusion-bar-highlight"><span>eToro</span></a></li>
                                <li id="menu-item-35079" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35079 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/banken/flatex/" class="fusion-bar-highlight"><span>Flatex</span></a></li>
                                <li id="menu-item-2144" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2144 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/banken/ing-diba/" class="fusion-bar-highlight"><span>ING</span></a>
                                    <ul class="sub-menu">
                                        <li id="menu-item-9442" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9442"><a href="https://finanzvergleich.com/banken/ing-diba/ing-girokonto/" class="fusion-bar-highlight"><span>ING Girokonto</span></a></li>
                                        <li id="menu-item-30971" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-30971"><a href="https://finanzvergleich.com/banken/ing-diba/ing-depot/" class="fusion-bar-highlight"><span>ING Depot</span></a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-35081" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35081 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/banken/n26/" class="fusion-bar-highlight"><span>N26 Bank</span></a></li>
                                <li id="menu-item-2863" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2863 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/banken/norisbank/" class="fusion-bar-highlight"><span>norisbank</span></a>
                                    <ul class="sub-menu">
                                        <li id="menu-item-10209" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10209"><a href="https://finanzvergleich.com/banken/norisbank/norisbank-girokonto/" class="fusion-bar-highlight"><span>norisbank Girokonto</span></a></li>
                                        <li id="menu-item-10216" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10216"><a href="https://finanzvergleich.com/banken/norisbank/norisbank-kreditkarte/" class="fusion-bar-highlight"><span>norisbank Kreditkarte</span></a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-8138" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8138 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/banken/ofina-kredit/" class="fusion-bar-highlight"><span>Ofina Kredit</span></a></li>
                                <li id="menu-item-37473" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-37473 fusion-dropdown-submenu"><a href="https://finanzvergleich.com/banken/scalable-capital/" class="fusion-bar-highlight"><span>Scalable Capital</span></a></li>
                            </ul>
                        </li>
                        <li id="menu-item-1774" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1774" data-item-id="1774"><a href="https://finanzvergleich.com/wissen/" class="fusion-bar-highlight"><span class="menu-text">Ratgeber</span></a></li>
                        <li class="fusion-custom-menu-item fusion-main-menu-search fusion-search-overlay">
                            <a class="fusion-main-menu-icon fusion-bar-highlight" href="#" aria-label="Suche" data-title="Suche" title="Suche" role="button" aria-expanded="false"></a>
                        </li>
                    </ul>
                </nav>
                <div class="fusion-mobile-menu-icons">
                    <a href="#" class="fusion-icon awb-icon-bars" aria-label="Toggle mobile menu" aria-expanded="false"></a>
                </div>
                <nav class="fusion-mobile-nav-holder fusion-mobile-menu-text-align-left" aria-label="Main Menu Mobile"></nav>
            </div>
        </div>
    </div>
    <div class="fusion-clearfix"></div>
</header>
            <div id="sliders-container" className="fusion-slider-visibility"></div>
            <main id="main" className="clearfix ">
                <div className="fusion-row">
                    <section id="content" style={{width: "100%"}}>
                        <div id="post-1310" className="post-1310 page type-page status-publish hentry"> <span className="entry-title rich-snippet-hidden">Girokonto Vergleich</span><span className="vcard rich-snippet-hidden"><span className="fn"><a href="https://finanzvergleich.com/wissen/author/babsi/" title="Beiträge von Barbara Spoegler" rel="author">Barbara Spoegler</a></span></span>
                            <span className="updated rich-snippet-hidden">2023-02-10T12:21:45+01:00</span>
                            <div className="post-content">
                                <div className="fusion-fullwidth fullwidth-box fusion-builder-row-1 fusion-parallax-none nonhundred-percent-fullwidth non-hundred-percent-height-scrolling lazyload"
                                    data-bg="https://finanzvergleich.com/wp-content/uploads/2018/05/girokonto-vergleich-banner.png">
                                    <div className="fusion-builder-row fusion-row">
                                        <div className="fusion-layout-column fusion_builder_column fusion-builder-column-0 fusion_builder_column_1_1 1_1 fusion-one-full fusion-column-first fusion-column-last" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                            <div className="fusion-column-wrapper fusion-flex-column-wrapper-legacy" style ={{backgroundPosition: "left top", backgroundRepeat: "no-repeat", WebkitBackgroundSize: "cover", MozBackgroundSize: "cover", OBackgroundSize: "cover", backgroundSize: "cover", padding: "0px"}}>
                                                <section id="intro_vgl" style={{backgroundImage: "url('https://dev.finanzvergleich.com/wp-content/uploads//2019/12/girokonto_vergleich_header_opt.jpg')"}}>
                                                    <div className="intro_vgl_layer layer">
                                                        <h1>Kostenlose Girokonten im Vergleich 2023</h1>
                                                    </div>
                                                </section>
                                                <div className="fusion-clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div 
                                className="fusion-fullwidth fullwidth-box fusion-builder-row-2 nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" 
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0)",
                                    backgroundPosition: "center center",
                                    backgroundRepeat: "no-repeat",
                                    paddingTop: "0px",
                                    paddingRight: "0px",
                                    paddingBottom: "0px",
                                    paddingLeft: "0px",
                                    marginBottom: "0px",
                                    marginTop: "0px",
                                    borderWidth: "0px 0px 0px 0px",
                                    borderColor: "#eae9e9",
                                    borderStyle: "solid"    
                                }}>
                                    <div className="fusion-builder-row fusion-row">
                                        <div className="fusion-layout-column fusion_builder_column fusion-builder-column-1 fusion_builder_column_1_1 1_1 fusion-one-full fusion-column-first fusion-column-last" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                            <div className="fusion-column-wrapper fusion-flex-column-wrapper-legacy" 
                                            style={{ 
                                                backgroundPosition: "left top",
                                                backgroundRepeat: "no-repeat",
                                                WebkitBackgroundSize: "cover",
                                                MozBackgroundSize: "cover",
                                                OBackgroundSize: "cover",
                                                backgroundSize: "cover",
                                                padding: "0px",
                                                margin: "0px",
                                            }}>
                                                <div className="fusion-text fusion-text-1">
                                                    <div className="produkt-container">
                                                        <div className="teaserbox_wrap">
                                                            <div className="teaserbox teaserbox_eins" data-name="teaser-N26 Girokonto" data-tracking-section="Girokonto" data-tracking-productname="N26" data-tracking-productid="1873" data-tracking-postid="1818" data-tracking-position="teaser-eins">
                                                                <div className="teaserbox_special_text">
                                                                    Empfehlung:<br/>Bestes kostenloses Konto</div>
                                                                <div className="teaserbox_special_text second"> <img className="lazyload" src={mobileProduct} data-orig-src="https://finanzvergleich.com/wp-content/uploads/2023/01/Mobiles-Produkt-Logo.svg" /> Top mobiles Konto</div>
                                                                <div className="teaserbox_sterne" style={{gridColumn: "2/4"}}>
                                                                    <div className="stars four_stars half"> <span className="star"></span> <span className="star"></span> <span className="star"></span> <span className="star"></span> <span className="star"></span></div>
                                                                </div>
                                                                <div className="teaserbox_note">
                                                                    <div className="product_note" data-id="1310" data-type="teaser" data-note="eins"> <span className="note_outer note_content">1,1</span> <span className="note_text medium_text note_content">Sehr gut</span></div>
                                                                </div>
                                                                <div className="middle_content">
                                                                    <div className="teaserbox_logo logo_n26">
                                                                        <a href="/financeads.php?id=1818" target="_blank" data-name="teaser-N26 Girokonto" data-tracking-section="Girokonto" data-tracking-productname="N26" data-tracking-productid="1873" data-tracking-postid="1818" data-tracking-position="teaser-eins" data-tracking-logo-position="teaser-eins">
                                                                         <img width="100" height="100" src={n26} className="attachment-full size-full lazyload wp-post-image" alt="" data-orig-src="https://finanzvergleich.com/wp-content/uploads/2022/08/N26-Logo.svg" />                                                                            </a>
                                                                    </div>
                                                                </div>
                                                                <div className="teaserbox_bullets">
                                                                    <div className="feature_wrap"> <span className="kk_feature_1 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Bedingungslos kostenlos</span></span> <span className="kk_feature_2 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Weltweit gebührenfrei mit Karte zahlen <span className="tipr" data-tip="N26 erhebt keine Gebühr auf Zahlungen mit der Mastercard Debit – egal ob diese in Euro oder einer anderen Währung erfolgen." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                        </span>
                                                                        <span className="kk_feature_3 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Top Smartphone-Konto <span className="tipr" data-tip="N26 bietet ein vollwertiges Bankkonto fürs Smartphone: Alle wichtigen Aufgaben, von der Kontoeröffnung bis zur Einrichtung eines Dispos oder dem Geldabheben, lassen sich per Handy erledigen." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="teaserbox_cta">
                                                                    <a href="/financeads.php?id=1818" target="_blank" data-name="teaser-N26 Girokonto" data-tracking-section="Girokonto" data-tracking-productname="N26" data-tracking-productid="1818" data-tracking-postid="1818" data-tracking-position="teaser-eins"> <span className="button">Zum Anbieter »</span> </a>
                                                                </div>
                                                            </div>
                                                            <div className="teaserbox teaserbox_zwei" data-name="teaser-comdirect" data-tracking-section="Girokonto" data-tracking-productname="comdirect" data-tracking-productid="117" data-tracking-postid="1809" data-tracking-position="teaser-zwei">
                                                                <div className="teaserbox_special_text"> Tipp:<br/>Beste Direktbank</div>
                                                                <div className="teaserbox_note">
                                                                    <div className="product_note" data-id="1310" data-type="teaser" data-note="zwei"> <span className="note_outer note_content">1,2</span> <span className="note_text medium_text note_content">Sehr gut</span></div>
                                                                </div>
                                                                <div className="middle_content">
                                                                    <div className="teaserbox_logo logo_comdirect">
                                                                        <a href="/financeads.php?id=1809" target="_blank" data-name="teaser-comdirect" data-tracking-section="Girokonto" data-tracking-productname="comdirect" data-tracking-productid="117" data-tracking-postid="1809" data-tracking-position="teaser-zwei" data-tracking-logo-position="teaser-zwei">
                                                                            <img width="200" height="100" src={comdirect} className="attachment-full size-full lazyload wp-post-image" alt="Comdirect Logo" loading="lazy" data-orig-src="https://finanzvergleich.com/wp-content/uploads/2018/06/comdirect-logo-1.svg" />                                                                            </a>
                                                                    </div>
                                                                    <div className="teaserbox_sterne">
                                                                        <div className="stars four_stars half"> <span className="star"></span> <span className="star"></span> <span className="star"></span> <span className="star"></span> <span className="star"></span></div>
                                                                    </div>
                                                                </div>
                                                                <div className="teaserbox_bullets">
                                                                    <div className="feature_wrap"> <span className="kk_feature_1 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Bei aktiver Nutzung kostenlos <span className="tipr" data-tip="Du kannst die Kontoführungsgebühr einfach vermeiden, indem du monatlich entweder für einen Geldeingang von 700 € sorgst &lt;em&gt;und/oder&lt;/em&gt; 3-mal mit Google Pay/Apple Pay bezahlst &lt;em&gt;und/oder&lt;/em&gt; im Comdirect-Depot 1 Trade oder 1 Sparplanausführung in Auftrag gibst. In jedem Fall entfällt die Kontoführungsgebühr in den ersten 6 Monaten." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                        </span>
                                                                        <span className="kk_feature_2 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Top Banking App <span className="tipr" data-tip="Die Banking-App hat sowohl im Google Playstore als auch im App Store von Apple mit die besten Nutzer-Bewertungen. Im App Store wird sie zu den besten Finanz-Apps überhaupt gezählt." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                        </span>
                                                                        <span className="kk_feature_3 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Kostenlos einzahlen & abheben an der Kasse <span className="tipr" data-tip="Du kannst bei zahlreichen Einzelhändlern und Tankstellen beliebig oft gebührenfrei an der Kasse Geld einzahlen und abheben." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="teaserbox_cta">
                                                                    <a href="/financeads.php?id=1809" target="_blank" data-name="teaser-comdirect" data-tracking-section="Girokonto" data-tracking-productname="comdirect" data-tracking-productid="1809" data-tracking-postid="1809" data-tracking-position="teaser-zwei"> <span className="button">Zum Anbieter »</span> </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="products-filter_wrap">
                                                            <div id="mobile_filter_toggle" className="mobile_filter_toggle" data-text-more="Filter anzeigen" data-text-less="Filter ausblenden">
                                                                <div className="filter_text">Filter anzeigen</div>
                                                                <div className="filter_icon"><i className="fa fa-chevron-circle-down icon-toggle"> </i></div>
                                                            </div>
                                                            <div id="products-filter" className="products-filter">
                                                                <div className="filter_item">
                                                                    <span className="filter-header">Kontogebühren</span>
                                                                    <select
                                                                        id="filter_kontogebuhren"
                                                                        className="vergleich_select"
                                                                        size="1"
                                                                        name="kontogebuhren"
                                                                        value={filter1}
                                                                        onChange={(e) => {
                                                                            setFilter1(e.target.value); 
                                                                        }
                                                                        }
                                                                    >                                                
                                                                        <option id="filter_all" name="filter_alle" value="alle">Alle</option> 
                                                                        <option id="product_cost" name="product_cost" value="kostenlose" >Kostenlose Kontoführung</option>
                                                                        <option id="incentive" name="incentive" value="true">Mit Startguthaben</option>
                                                                    </select>
                                                                </div>
                                                                <div className="filter_item">
                                                                    <span className="filter-header">Kontofeature</span>
                                                                    <select
                                                                        id="filter_kontofeature"
                                                                        className="vergleich_select"
                                                                        size="1"
                                                                        name="kontofeature"
                                                                        value={filter2}
                                                                        onChange={(e) => {
                                                                            setFilter2(e.target.value);}
                                                                        }
                                                                    >
                                                                        <option id="filter_all" name="filter_alle" value="alle">Alle</option>
                                                                        <option id="incoming_pm_min" name="incoming_pm_min" value="true" >Ohne Mindestgeldeingang</option>
                                                                        <option id="partnercard" name="partnercard" value="gemeinschaftskonto">Gemeinschaftskonto möglich</option> 
                                                                    </select>
                                                                </div>
                                                                <div className="filter_item">
                                                                    <span className="filter-header">Geld abheben</span>
                                                                    <select id="filter_geld" className="vergleich_select" size="1" name="term">
                                                                         <option id="filter_all" name="filter_alle" value="alle">Alle</option> 
                                                                         <option id="atm_euro_fee" name="atm_euro_fee" value="true" >Kostenlos Geld abheben Eurozone</option> 
                                                                         <option id="atm_international_fee" name="atm_international_fee" value="true">Kostenlos Geld abheben weltweit</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="products-listing list-cards-container">
                                                            <div className="product-item-listing girokontovergleich">
                                                                <div className="product-item n26bank n26first_item_highlight_teaser_set has_stoerer post-1818 tracking_event_name" data-incentive="false" data-partnercard="false" data-atm_euro_fee="true" data-atm_international_fee="false"
                                                                 data-incoming_pm_min="true" data-product_cost="true" data-name="N26 Girokonto" data-tracking-section="Girokonto" data-tracking-productname="N26 Girokonto"
                                                                    data-tracking-productid="1873" data-tracking-postid="1818" data-tracking-position="1">
                                                                    <div className="highlight_element">
                                                                        <div className="highlight_content"> Unsere Top Girokonto Empfehlung</div>
                                                                    </div>
                                                                    <div className="grid_img grid_child_1 grid_child">
                                                                        <a href="/financeads.php?id=1818" target="blank" rel="nofollow" data-tracking-productname="N26 Girokonto" data-tracking-position="1" data-tracking-logo-position="1"> <img width="300" height="300" src={n26} className="attachment-medium size-medium lazyload wp-post-image" alt="" loading="lazy" data-orig-src="https://finanzvergleich.com/wp-content/uploads/2022/08/N26-Logo.svg"
                                                                            /> </a>
                                                                    </div>
                                                                    <div className="grid_child_2 grid_child"></div>
                                                                    <div className="grid_child_3 grid_child">
                                                                        <div className="geb-item">
                                                                            <p className="geb-item-value featured">
                                                                                <span className="kosten_pa_1" data-val="0"> 0,00 € </span>
                                                                            </p>
                                                                            <p className="geb-item-text"> Grundgebühr </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_4 grid_child">
                                                                        <div className="geb-item"> <span className="bargeldauszahlung_value"><span className="kosten_pa_1"> 0,00 </span> %</span> <span className="geb-item-text">Bargeldauszahlung <span className="tipr" data-tip="3 Abhebungen pro Monat sind an allen Automaten mit Mastercard-Zeichen in Deutschland kostenfrei."><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span>                                                                            <span className="geb-item-text-secondary">3 Abhebungen pro Monat sind an allen Automaten mit Mastercard-Zeichen in Deutschland kostenfrei.</span> </span> <span className="zinsen_value"> 11,40 %</span>                                                                            <span className="geb-item-text">Dispo & Überziehungszins</span></div>
                                                                    </div>
                                                                    <div className="grid_child_6 grid_child">
                                                                        <div className="feature_wrap cpt_is_set"> <span className="kk_feature_1 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Kostenlos abheben in Euro <span className="tipr" data-tip="Du kannst in der gesamten Eurozone kostenlos Bargeld abheben. In Deutschland sind 3 Abhebungen pro Monat gebührenfrei." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                            </span>
                                                                            <span className="kk_feature_2 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Abheben & Einzahlen im Laden <span className="tipr" data-tip="Über den Dienst Cash26 kannst Du an der Ladenkasse zahlreicher Einzelhändler sowohl einzahlen als auch abheben. Möglich ist das unter anderem bei REWE, Penny und dm." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                            </span>
                                                                            <span className="kk_feature_3 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Auch ohne Geldeingang kostenlos</span></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_note grid_child">
                                                                        <div className="note">
                                                                            <div className="product_note" data-id="1818" data-type="" data-note=""> <span className="note_outer note_content">1,1</span> <span className="note_text medium_text note_content">Sehr gut</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_7 grid_child">
                                                                        <a href="/financeads.php?id=1818" className="antrag_button fusion-button button-flat fusion-button-round button-large button-default button-4" target="_blank" rel="nofollow" data-tracking-productname="N26 Girokonto" data-tracking-position="1"> <span className="fusion-button-text">Zum Angebot &raquo;</span> </a>
                                                                    </div>
                                                                    <div className="grid_child_8 grid_child">
                                                                        <div className="product-tab-area">
                                                                            <div className="product-actions">
                                                                                <span className="toggle-tabs" data-id="1818">Produktdetails
                                                                                     <i className="fa fa-chevron-circle-down icon-toggle"> </i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_10 grid_child stoerer" bis_skin_checked="1"> 
                                                                        <div className="stoerer_wrap" bis_skin_checked="1">
                                                                            <span className="stoerer stoerer_eins"> 8 Min. Eröffnung </span>
                                                                            <span className="stoerer stoerer_zwei second"> 
                                                                            <img className=" lazyloaded" src={mobileProduct} data-orig-src="https://finanzvergleich.com/wp-content/uploads/2023/01/Mobiles-Produkt-Logo.svg" /> Bestes mobiles Konto </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-item comdirectbank comdirecthas_stoerer post-1809 tracking_event_name" data-incentive="false" data-atm_euro_fee="true" data-atm_international_fee="true"
                                                                    data-incoming_pm_min="false" data-product_cost="true" data-name="comdirect Girokonto" data-tracking-section="Girokonto" data-tracking-productname="comdirect Girokonto" data-tracking-productid="117"
                                                                    data-tracking-postid="1809" data-tracking-position="2">
                                                                    <div className="grid_img grid_child_1 grid_child">
                                                                        <a href="/financeads.php?id=1809" target="blank" rel="nofollow" data-tracking-productname="comdirect Girokonto" data-tracking-position="2" data-tracking-logo-position="2"> <img width="300" height="300" src={comdirect} className="attachment-medium size-medium lazyload wp-post-image" alt="Comdirect Logo" loading="lazy" data-orig-src="https://finanzvergleich.com/wp-content/uploads/2018/06/comdirect-logo-1.svg"
                                                                            /> </a>
                                                                    </div>
                                                                    <div className="grid_child_2 grid_child"></div>
                                                                    <div className="grid_child_3 grid_child">
                                                                        <div className="geb-item">
                                                                            <p className="geb-item-value featured"> <span className="kosten_pa_1" data-val="0"> 0,00 € </span> </p>
                                                                            <p className="geb-item-text"> Grundgebühr <span className="tipr" data-tip="Das Girokonto ist in den ersten 6 Monaten kostenlos. Danach bleibt es kostenlos bei einem Geldeingang von mind. 700 € <em>und/oder</em> mind. 3 Zahlungen mit Google Pay/Apple Pay <em>und/oder</em> 1 Trade/1 Sparplanausführung über das Comdirect Depot pro Monat. Für Studenten, Schüler, Azubis und Praktikanten unter 28 ist das Konto ohne weitere Bedingungen kostenlos. Die Grundgebühr beträgt ansonsten 4,90 € pro Monat."
                                                                                    data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span> </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_4 grid_child">
                                                                        <div className="geb-item"> <span className="bargeldauszahlung_value"><span className="kosten_pa_1"> 0,00 </span> %</span> <span className="geb-item-text">Bargeldauszahlung <span className="tipr" data-tip="Abhebungen innerhalb Deutschlands sind mit der Girocard an allen rund 9.000 Automaten der Cash Group (Commerzbank, Deutsche Bank, Postbank, HypoVereinsbank) sowie in zahlreichen Geschäften und Shell-Tankstellen unbegrenzt kostenlos."><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span>                                                                            <span className="geb-item-text-secondary">Abhebungen innerhalb Deutschlands sind mit der Girocard an allen rund 9.000 Automaten der Cash Group (Commerzbank, Deutsche Bank, Postbank, HypoVereinsbank) sowie in zahlreichen Geschäften und Shell-Tankstellen unbegrenzt kostenlos.</span>                                                                            </span> <span className="zinsen_value"> 9,00 % / 13,50 % </span> <span className="geb-item-text">Dispo / Überziehungszins</span></div>
                                                                    </div>
                                                                    <div className="grid_child_6 grid_child">
                                                                        <div className="feature_wrap"> <span className="kk_feature_1 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Weltweit kostenlos abheben <span className="tipr" data-tip="Mit der Visa-Debitkarte sind Abhebungen an allen deutschen Geldautomaten kostenlos. Im Ausland sind drei Abhebungen pro Monat kostenlos." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                            </span>
                                                                            <span className="kk_feature_2 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Kostenlose Bareinzahlung <span className="tipr" data-tip="Bareinzahlungen sind über die Einzahlautomaten der Commerzbank dreimal pro Kalenderjahr kostenlos. Außerdem kannst Du über den Service „Barzahlen“ an der Ladenkasse zahlreicher Einzelhändler kostenfrei einzahlen." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                            </span>
                                                                            <span className="kk_feature_3 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Bei aktiver Nutzung kostenlos <span className="tipr" data-tip="Du kannst die Kontoführungsgebühr einfach vermeiden, indem du monatlich entweder für einen Geldeingang von 700 € sorgst &lt;em&gt;und/oder&lt;/em&gt; 3-mal mit Google Pay/Apple Pay bezahlst &lt;em&gt;und/oder&lt;/em&gt; im Comdirect-Depot 1 Trade oder 1 Sparplanausführung in Auftrag gibst. In jedem Fall entfällt die Kontoführungsgebühr in den ersten 6 Monaten." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_note grid_child">
                                                                        <div className="note">
                                                                            <div className="product_note" data-id="1809" data-type="" data-note=""> <span className="note_outer note_content">1,2</span> <span className="note_text medium_text note_content">Sehr gut</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_7 grid_child">
                                                                        <a href="/financeads.php?id=1809" className="antrag_button fusion-button button-flat fusion-button-round button-large button-default button-4" target="_blank" rel="nofollow" data-tracking-productname="comdirect Girokonto" data-tracking-position="2"> <span className="fusion-button-text">Zum Angebot &raquo;</span> </a>
                                                                    </div>
                                                                    <div className="grid_child_8 grid_child">
                                                                        <div className="product-tab-area">
                                                                            <div className="product-actions"> <span className="toggle-tabs" data-id="1809">Produktdetails <i className="fa fa-chevron-circle-down icon-toggle"> </i></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="grid_child_10 grid_child stoerer" bis_skin_checked="1"> 
                                                                        <div class="stoerer_wrap" bis_skin_checked="1"> 
                                                                        <span class="stoerer stoerer_eins"> Gute Bargeld-Versorgung </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-item dkbbank dkb-girono_stoerer post-1701 tracking_event_name" data-incentive="false" data-partnercard="true" data-atm_euro_fee="true" data-atm_international_fee="true" 
                                                                    data-incoming_pm_min="false" data-product_cost="true" data-name="DKB Cash Girokonto" data-tracking-section="Girokonto" data-tracking-productname="DKB Cash Girokonto" data-tracking-productid="114"
                                                                    data-tracking-postid="1701" data-tracking-position="3">
                                                                    <div className="grid_img grid_child_1 grid_child">
                                                                        <a href="/financeads.php?id=1701" target="blank" rel="nofollow" data-tracking-productname="DKB Cash Girokonto" data-tracking-position="3" data-tracking-logo-position="3"> <img width="300" height="300" src={dkbbank} className="attachment-medium size-medium lazyload wp-post-image" alt="DKB Logo" loading="lazy" data-orig-src="https://finanzvergleich.com/wp-content/uploads/2018/05/dkb-logo.svg"
                                                                            /> </a>
                                                                    </div>
                                                                    <div className="grid_child_2 grid_child"></div>
                                                                    <div className="grid_child_3 grid_child">
                                                                        <div className="geb-item">
                                                                            <p className="geb-item-value featured"> <span className="kosten_pa_1" data-val="0"> 0,00 € </span> </p>
                                                                            <p className="geb-item-text"> Grundgebühr <span className="tipr" data-tip="Kostenlos ist das Konto bei einem Geldeingang von mind. 700 € im Monat und generell in den ersten 3 Monaten sowie für Kunden unter 28 Jahren."
                                                                                    data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span> </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_4 grid_child">
                                                                        <div className="geb-item"> <span className="bargeldauszahlung_value"><span className="kosten_pa_1"> 0,00 </span> %</span> <span className="geb-item-text">Bargeldauszahlung <span className="tipr" data-tip="Abhebungen sind mit der DKB Visa Debitkarte an allen rund 58.000 Visa Automaten in Deutschland kostenfrei."><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span>                                                                            <span className="geb-item-text-secondary">Abhebungen sind mit der DKB Visa Debitkarte an allen rund 58.000 Visa Automaten in Deutschland kostenfrei.</span> </span> <span className="zinsen_value"> 9,29 %</span>                                                                            <span className="geb-item-text">Dispo & Überziehungszins</span></div>
                                                                    </div>
                                                                    <div className="grid_child_6 grid_child">
                                                                        <div className="feature_wrap cpt_is_set"> <span className="kk_feature_1 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Vorteile für Aktivkunden <span className="tipr" data-tip="In den ersten 3 Monaten sowie dauerhaft bei einem monatlichen Geldeingang ab 700 €/Monat (in den letzten 3 aufeinanderfolgenden Monaten) profitierst Du von unbegrenzt kostenlosen Abhebungen und Kartenzahlungen weltweit, einem vergünstigten Dispo, günstigeren Krediten sowie Cashbacks." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                            </span>
                                                                            <span className="kk_feature_2 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Sofort-Dispo <span className="tipr" data-tip="Bei der Kontoeröffnung erhältst Du bereits bei Bedarf einen Sofort-Dispo ohne Gehaltsnachweis." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                            </span>
                                                                            <span className="kk_feature_3 kk_feature important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Kostenlos ab 700 € Geldeingang</span></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_note grid_child">
                                                                        <div className="note">
                                                                            <div className="product_note" data-id="1701" data-type="" data-note=""> <span className="note_outer note_content">1,2</span> <span className="note_text medium_text note_content">Sehr gut</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_7 grid_child">
                                                                        <a href="/financeads.php?id=1701" className="antrag_button fusion-button button-flat fusion-button-round button-large button-default button-4" target="_blank" rel="nofollow" data-tracking-productname="DKB Cash Girokonto" data-tracking-position="3"> <span className="fusion-button-text">Zum Angebot &raquo;</span> </a>
                                                                    </div>
                                                                    <div className="grid_child_8 grid_child">
                                                                        <div className="product-tab-area">
                                                                            <div className="product-actions"> <span className="toggle-tabs" data-id="1701">Produktdetails <i className="fa fa-chevron-circle-down icon-toggle"> </i></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-item revolutbank revolut-girokontono_stoerer post-38782 tracking_event_name" data-incentive="false" data-partnercard="false" data-atm_euro_fee="true" data-atm_international_fee="true" data-incoming_pm_min="true" data-product_cost="true"
                                                                    data-name="Revolut Girokonto" data-tracking-section="Girokonto" data-tracking-productname="Revolut Girokonto" data-tracking-productid="5220" data-tracking-postid="38782" data-tracking-position="4">
                                                                    <div className="grid_img grid_child_1 grid_child">
                                                                        <a href="/financeads.php?id=38782" target="blank" rel="nofollow" data-tracking-productname="Revolut Girokonto" data-tracking-position="4" data-tracking-logo-position="4"> <img width="300" height="300" src={revolutbank} className="attachment-medium size-medium lazyload wp-post-image" alt="Revolut Logo" loading="lazy" data-orig-src="https://finanzvergleich.com/wp-content/uploads/2022/11/Revolut_Logo_200x100_mittig.svg"
                                                                            /> </a>
                                                                    </div>
                                                                    <div className="grid_child_2 grid_child"></div>
                                                                    <div className="grid_child_3 grid_child">
                                                                        <div className="geb-item">
                                                                            <p className="geb-item-value featured"> <span className="kosten_pa_1" data-val="0"> 0,00 € </span> </p>
                                                                            <p className="geb-item-text"> Grundgebühr </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_4 grid_child">
                                                                        <div className="geb-item"> <span className="bargeldauszahlung_value"><span className="kosten_pa_1"> 0,00 </span> %</span> <span className="geb-item-text">Bargeldauszahlung <span className="tipr" data-tip="5 Abhebungen bis zu einem Gesamtbetrag von 200 € pro Monat sind kostenfrei. Alle weiteren kosten 2,00 % vom Umsatz, mindestens 1,00 €."><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span>                                                                            <span className="geb-item-text-secondary">5 Abhebungen bis zu einem Gesamtbetrag von 200 € pro Monat sind kostenfrei. Alle weiteren kosten 2,00 % vom Umsatz, mindestens 1,00 €.</span>                                                                            </span> <span className="zinsen_value"> -</span> <span className="geb-item-text">Dispo & Überziehungszins</span></div>
                                                                    </div>
                                                                    <div className="grid_child_6 grid_child">
                                                                        <div className="feature_wrap"> <span className="kk_feature_1 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Beliebig viele Unterkonten</span></span> <span className="kk_feature_2 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Auch ohne Geldeingang kostenlos</span></span>
                                                                            <span className="kk_feature_3 kk_feature default"><i className="fas fa-minus-circle"></i><span className="kk_feature_text">Kein Dispo</span></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_note grid_child">
                                                                        <div className="note">
                                                                            <div className="product_note" data-id="38782" data-type="" data-note=""> <span className="note_outer note_content">1,5</span> <span className="note_text short_text note_content">Gut</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_7 grid_child">
                                                                        <a href="/financeads.php?id=38782" className="antrag_button fusion-button button-flat fusion-button-round button-large button-default button-4" target="_blank" rel="nofollow" data-tracking-productname="Revolut Girokonto" data-tracking-position="4"> <span className="fusion-button-text">Zum Angebot &raquo;</span> </a>
                                                                    </div>
                                                                    <div className="grid_child_8 grid_child">
                                                                        <div className="product-tab-area">
                                                                            <div className="product-actions"> <span className="toggle-tabs" data-id="38782">Produktdetails <i className="fa fa-chevron-circle-down icon-toggle"> </i></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-item ingbank ing-diba-girokontono_stoerer post-1803 tracking_event_name" data-incentive="true" data-partnercard="true" data-atm_euro_fee="true" data-atm_international_fee="false"
                                                                    data-incoming_pm_min="false" data-product_cost="true" data-name="ING Girokonto" data-tracking-section="Girokonto" data-tracking-productname="ING Girokonto" data-tracking-productid="159" data-tracking-postid="1803"
                                                                    data-tracking-position="5">
                                                                    <div className="grid_img grid_child_1 grid_child">
                                                                        <a href="/financeads.php?id=1803" target="blank" rel="nofollow" data-tracking-productname="ING Girokonto" data-tracking-position="5" data-tracking-logo-position="5"> <img width="300" height="300" src={ingbank} className="attachment-medium size-medium lazyload wp-post-image" alt="Ing Logo" loading="lazy" data-orig-src="https://finanzvergleich.com/wp-content/uploads/2018/06/ing-logo-1.svg"
                                                                            /> </a>
                                                                    </div>
                                                                    <div className="grid_child_2 grid_child"></div>
                                                                    <div className="grid_child_3 grid_child">
                                                                        <div className="geb-item">
                                                                            <p className="geb-item-value featured"> <span className="kosten_pa_1" data-val="0"> 0,00 € </span> </p>
                                                                            <p className="geb-item-text"> Grundgebühr <span className="tipr" data-tip="Das Girokonto ist kostenlos, wenn Du einen monatlichen Gehaltseingang von mind. 700 € haben oder unter 28 Jahre alt bist, sonst kostet das Konto ab dem 3. Monat nach Kontoeröffnung 4,90 € pro Monat."
                                                                                    data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span> </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_4 grid_child">
                                                                        <div className="geb-item"> <span className="bargeldauszahlung_value"><span className="kosten_pa_1"> 0,00 </span> %</span> <span className="geb-item-text">Bargeldauszahlung <span className="tipr" data-tip="Abhebungen ab 50 € sind mit der ING Visa Karte an allen rund 58.000 Visa Automaten in Deutschland kostenfrei."><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span>                                                                            <span className="geb-item-text-secondary">Abhebungen ab 50 € sind mit der ING Visa Karte an allen rund 58.000 Visa Automaten in Deutschland kostenfrei.</span> </span>
                                                                            <span className="zinsen_value"> 8,99 %</span> <span className="geb-item-text">Dispo & Überziehungszins</span></div>
                                                                    </div>
                                                                    <div className="grid_child_6 grid_child">
                                                                        <div className="feature_wrap cpt_is_set"> <span className="kk_feature_1 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">50 € Prämie <span className="tipr" data-tip="50 € erhältst Du, wenn Du das Konto bis 28.02.2023 eröffnest und wenigstens 5-mal innerhalb der ersten 4 Monate mit der VISA Card [Debitkarte] bezahlst. Die vollständigen Bedingungen findest Du auf der Seite der ING." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                            </span>
                                                                            <span className="kk_feature_2 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Niedrigster Dispozins</span></span> <span className="kk_feature_3 kk_feature important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Kostenlos ab 700 € Geldeingang</span></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_note grid_child">
                                                                        <div className="note">
                                                                            <div className="product_note" data-id="1803" data-type="" data-note=""> <span className="note_outer note_content">1,5</span> <span className="note_text short_text note_content">Gut</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_7 grid_child">
                                                                        <a href="/financeads.php?id=1803" className="antrag_button fusion-button button-flat fusion-button-round button-large button-default button-4" target="_blank" rel="nofollow" data-tracking-productname="ING Girokonto" data-tracking-position="5"> <span className="fusion-button-text">Zum Angebot &raquo;</span> </a>
                                                                    </div>
                                                                    <div className="grid_child_8 grid_child">
                                                                        <div className="product-tab-area">
                                                                            <div className="product-actions"> <span className="toggle-tabs" data-id="1803">Produktdetails <i className="fa fa-chevron-circle-down icon-toggle"> </i></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-item consorbank consorsbankno_stoerer post-33578 tracking_event_name" data-incentive="true" data-partnercard="true" data-atm_euro_fee="true" data-atm_international_fee="false"
                                                                    data-incoming_pm_min="false" data-product_cost="true" data-name="Consorsbank" data-tracking-section="Girokonto" data-tracking-productname="Consorsbank" data-tracking-productid="135" data-tracking-postid="33578"
                                                                    data-tracking-position="6">
                                                                    <div className="grid_img grid_child_1 grid_child">
                                                                        <a href="/financeads.php?id=33578" target="blank" rel="nofollow" data-tracking-productname="Consorsbank" data-tracking-position="6" data-tracking-logo-position="6"> <img width="300" height="300" src={consorsbank} className="attachment-medium size-medium lazyload wp-post-image" alt="Consorsbank Logo" loading="lazy" data-orig-src="https://finanzvergleich.com/wp-content/uploads/2021/12/consorsbank.svg"
                                                                            /> </a>
                                                                    </div>
                                                                    <div className="grid_child_2 grid_child"></div>
                                                                    <div className="grid_child_3 grid_child">
                                                                        <div className="geb-item">
                                                                            <p className="geb-item-value featured"> <span className="kosten_pa_1" data-val="0"> 0,00 € </span> </p>
                                                                            <p className="geb-item-text"> Grundgebühr <span className="tipr" data-tip="Das Girokonto ist bei regelmäßigem Geldeingang ab 700 € pro Monat sowie für alle Kunden unter 28 Jahre kostenlos. Ansonsten fällt eine monatliche Kontoführungsgebühr von 4,00 € an."
                                                                                    data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span> </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_4 grid_child">
                                                                        <div className="geb-item"> <span className="bargeldauszahlung_value"><span className="kosten_pa_1"> 0,00 </span> %</span> <span className="geb-item-text">Bargeldauszahlung <span className="tipr" data-tip="Abhebungen sind mit der Consorsbank Visa Card an allen rund 58.000 Visa Automaten in Deutschland ab einem Abhebebetrag von 50 € kostenfrei. Für geringere Abhebebeträge fällt eine Gebühr von 1,95 € an."><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span>                                                                            <span className="geb-item-text-secondary">Abhebungen sind mit der Consorsbank Visa Card an allen rund 58.000 Visa Automaten in Deutschland ab einem Abhebebetrag von 50 € kostenfrei. Für geringere Abhebebeträge fällt eine Gebühr von 1,95 € an.</span>                                                                            </span> <span className="zinsen_value"> 10,25 %</span> <span className="geb-item-text">Dispo & Überziehungszins</span></div>
                                                                    </div>
                                                                    <div className="grid_child_6 grid_child">
                                                                        <div className="feature_wrap"> <span className="kk_feature_1 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">50 € Prämie <span className="tipr" data-tip="Um 50 € für die Kontoeröffnung zu erhalten, müssen im ersten halben Jahr mindestens in 3 Monaten jeweils wenigstens 1.500 € von einer Fremdbank eingehen. Die vollständigen Bedingungen findest Du auf der Seite der Consorsbank." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                            </span>
                                                                            <span className="kk_feature_2 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Ab 50 € kostenlos abheben</span></span> <span className="kk_feature_3 kk_feature important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Kostenlos ab 700 € Geldeingang</span></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_note grid_child">
                                                                        <div className="note">
                                                                            <div className="product_note" data-id="33578" data-type="" data-note=""> <span className="note_outer note_content">1,6</span> <span className="note_text short_text note_content">Gut</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_7 grid_child">
                                                                        <a href="/financeads.php?id=33578" className="antrag_button fusion-button button-flat fusion-button-round button-large button-default button-4" target="_blank" rel="nofollow" data-tracking-productname="Consorsbank" data-tracking-position="6"> <span className="fusion-button-text">Zum Angebot &raquo;</span> </a>
                                                                    </div>
                                                                    <div className="grid_child_8 grid_child">
                                                                        <div className="product-tab-area">
                                                                            <div className="product-actions"> <span className="toggle-tabs" data-id="33578">Produktdetails <i className="fa fa-chevron-circle-down icon-toggle"> </i></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-item commerzbank commerzbankno_stoerer post-19814 tracking_event_name" data-incentive="true" data-partnercard="true" data-atm_euro_fee="false" data-atm_international_fee="false"
                                                                    data-incoming_pm_min="false" data-product_cost="true" data-name="Commerzbank" data-tracking-section="Girokonto" data-tracking-productname="Commerzbank" data-tracking-productid="3704" data-tracking-postid="19814"
                                                                    data-tracking-position="7">
                                                                    <div className="grid_img grid_child_1 grid_child">
                                                                        <a href="/financeads.php?id=19814" target="blank" rel="nofollow" data-tracking-productname="Commerzbank" data-tracking-position="7" data-tracking-logo-position="7"> <img width="300" height="300" src={commerzbank} className="attachment-medium size-medium lazyload wp-post-image" alt="Commerzbank Logo" loading="lazy" data-orig-src="https://finanzvergleich.com/wp-content/uploads/2020/05/commerzbank-logo.svg"
                                                                            /> </a>
                                                                    </div>
                                                                    <div className="grid_child_2 grid_child"></div>
                                                                    <div className="grid_child_3 grid_child">
                                                                        <div className="geb-item">
                                                                            <p className="geb-item-value featured"> <span className="kosten_pa_1" data-val="0"> 0,00 € </span> </p>
                                                                            <p className="geb-item-text"> Grundgebühr <span className="tipr" data-tip="Das Girokonto ist kostenlos, wenn Du einen monatlichen Geldeingang von mind. 700 € hast. Sonst kostet das Konto 9,90 € pro Monat." data-hasqtip="0"
                                                                                    aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span> </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_4 grid_child">
                                                                        <div className="geb-item"> <span className="bargeldauszahlung_value"><span className="kosten_pa_1"> 0,00 </span> %</span> <span className="geb-item-text">Bargeldauszahlung <span className="tipr" data-tip="Abhebungen innerhalb Deutschlands sind mit der Girocard an allen rund 9.000 Automaten der Cash Group (Commerzbank, Deutsche Bank, Postbank, HypoVereinsbank) sowie in zahlreichen Geschäften und Shell-Tankstellen unbegrenzt kostenlos."><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span>                                                                            <span className="geb-item-text-secondary">Abhebungen innerhalb Deutschlands sind mit der Girocard an allen rund 9.000 Automaten der Cash Group (Commerzbank, Deutsche Bank, Postbank, HypoVereinsbank) sowie in zahlreichen Geschäften und Shell-Tankstellen unbegrenzt kostenlos.</span>                                                                            </span> <span className="zinsen_value"> 12,20 % / 14,70 % </span> <span className="geb-item-text">Dispo / Überziehungszins</span></div>
                                                                    </div>
                                                                    <div className="grid_child_6 grid_child">
                                                                        <div className="feature_wrap cpt_is_set"> <span className="kk_feature_1 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">50 € Prämie <span className="tipr" data-tip="50 Euro Startguthaben nach 3-monatiger aktiver Kontonutzung (mind. 5 monatl. Buchungen über je 25 Euro oder mehr, z.B. von oder an Arbeitgeber, Rentenkassen, Hausverwaltungen, Energieversorger, Telefonanbieter, jedoch keine Eigenüberweisungen oder Überträge), wenn innerhalb der letzten 24 Monate kein Konto bei der Commerzbank bestand. Weitere Bedingungen auf Anbieterseite." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                            </span>
                                                                            <span className="kk_feature_2 kk_feature important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Kostenlos ab 700 € Geldeingang</span></span> <span className="kk_feature_3 kk_feature default"><i className="fas fa-minus-circle"></i><span className="kk_feature_text">39,90 € / Jahr für die Kreditkarte</span></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_note grid_child">
                                                                        <div className="note">
                                                                            <div className="product_note" data-id="19814" data-type="" data-note=""> <span className="note_outer note_content">1,6</span> <span className="note_text short_text note_content">Gut</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_7 grid_child">
                                                                        <a href="/financeads.php?id=19814" className="antrag_button fusion-button button-flat fusion-button-round button-large button-default button-4" target="_blank" rel="nofollow" data-tracking-productname="Commerzbank" data-tracking-position="7"> <span className="fusion-button-text">Zum Angebot &raquo;</span> </a>
                                                                    </div>
                                                                    <div className="grid_child_8 grid_child">
                                                                        <div className="product-tab-area">
                                                                            <div className="product-actions"> <span className="toggle-tabs" data-id="19814">Produktdetails <i className="fa fa-chevron-circle-down icon-toggle"> </i></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_10 grid_child stoerer">
                                                                        <div className="stoerer_wrap"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-item norisbank norisbankno_stoerer post-1815 tracking_event_name" data-incentive="true" data-partnercard="true" data-atm_euro_fee="true" data-atm_international_fee="true"
                                                                    data-incoming_pm_min="false" data-product_cost="true" data-name="norisbank Girokonto" data-tracking-section="Girokonto" data-tracking-productname="norisbank Girokonto" data-tracking-productid="122"
                                                                    data-tracking-postid="1815" data-tracking-position="8">
                                                                    <div className="grid_img grid_child_1 grid_child">
                                                                        <a href="/financeads.php?id=1815" target="blank" rel="nofollow" data-tracking-productname="norisbank Girokonto" data-tracking-position="8" data-tracking-logo-position="8"> <img width="300" height="300" src={norisbank} className="attachment-medium size-medium lazyload wp-post-image" alt="Norisbank Logo" loading="lazy" data-orig-src="https://finanzvergleich.com/wp-content/uploads/2018/06/noris-logo.svg"
                                                                            /> </a>
                                                                    </div>
                                                                    <div className="grid_child_2 grid_child"></div>
                                                                    <div className="grid_child_3 grid_child">
                                                                        <div className="geb-item">
                                                                            <p className="geb-item-value featured"> <span className="kosten_pa_1" data-val="0"> 0,00 € </span> </p>
                                                                            <p className="geb-item-text"> Grundgebühr <span className="tipr" data-tip="Das Girokonto ist kostenlos, wenn Du einen monatlichen Geldeingang von mind. 500 € hast oder unter 21 Jahre alt bist. Sonst kostet das Konto 3,90 € pro Monat. Der Eröffnungsmonat ist kostenfrei."
                                                                                    data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span> </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_4 grid_child">
                                                                        <div className="geb-item"> <span className="bargeldauszahlung_value"><span className="kosten_pa_1"> 0,00 </span> %</span> <span className="geb-item-text">Bargeldauszahlung <span className="tipr" data-tip="Abhebungen sind an allen rund 9.000 Geldautomaten der Cash Group sowie 1.300 teilnehmenden Shell-Tankstellen kostenlos möglich."><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span>                                                                            <span className="geb-item-text-secondary">Abhebungen sind an allen rund 9.000 Geldautomaten der Cash Group sowie 1.300 teilnehmenden Shell-Tankstellen kostenlos möglich.</span> </span>
                                                                            <span className="zinsen_value"> 11,35 % / 13,25 % </span> <span className="geb-item-text">Dispo / Überziehungszins</span></div>
                                                                    </div>
                                                                    <div className="grid_child_6 grid_child">
                                                                        <div className="feature_wrap"> <span className="kk_feature_1 kk_feature most_important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">50 € Wechselprämie <span className="tipr" data-tip="Als Neukunde erhältst Du für die Eröffnung eines Top-Girokontos bis 31.03.2023 eine Kontowechselprämie i. H. v. 50 €. Voraussetzung ist, dass Du mindestens 5 Zahlungspartner über den Online-Kontowechselservice informierst. Alle weiteren Informationen findest Du Sie auf der Webseite der norisbank." data-hasqtip="0" aria-describedby="qtip-0"><i className="fa fa-info-circle vgl-icon-color-neutral"></i></span></span>
                                                                            </span>
                                                                            <span className="kk_feature_2 kk_feature important"><i className="fas fa-check-circle"></i><span className="kk_feature_text">Kostenlos ab 500 € Geldeingang</span></span> <span className="kk_feature_3 kk_feature default"><i className="fas fa-minus-circle"></i><span className="kk_feature_text">Ohne Google Pay</span></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_note grid_child">
                                                                        <div className="note">
                                                                            <div className="product_note" data-id="1815" data-type="" data-note=""> <span className="note_outer note_content">1,6</span> <span className="note_text short_text note_content">Gut</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid_child_7 grid_child">
                                                                        <a href="/financeads.php?id=1815" className="antrag_button fusion-button button-flat fusion-button-round button-large button-default button-4" target="_blank" rel="nofollow" data-tracking-productname="norisbank Girokonto" data-tracking-position="8"> <span className="fusion-button-text">Zum Angebot &raquo;</span> </a>
                                                                    </div>
                                                                    <div className="grid_child_8 grid_child">
                                                                        <div className="product-tab-area">
                                                                            <div className="product-actions"> <span className="toggle-tabs" data-id="1815">Produktdetails <i className="fa fa-chevron-circle-down icon-toggle"> </i></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="fusion-text fusion-text-2">
                                                    <p style={{textAlign: "right"}}><em>Stand <span id="current_month_localized">Februar</span> <span id="current_year">2023</span></em></p>
                                                </div>
                                                <div className="fusion-clearfix"></div>
                                            </div>
                                        </div>
                                        <div className="fusion-layout-column fusion_builder_column fusion-builder-column-2 fusion_builder_column_1_1 1_1 fusion-one-full fusion-column-first fusion-column-last" style={{marginTop:"20px" ,marginBottom:"0px"}}>
                                            <div className="fusion-column-wrapper fusion-flex-column-wrapper-legacy" 
                                            style={{ 
                                                backgroundPosition: 'left top', 
                                                backgroundRepeat: 'no-repeat', 
                                                WebkitBackgroundSize: 'cover', 
                                                MozBackgroundSize: 'cover', 
                                                OBackgroundSize: 'cover', 
                                                backgroundSize: 'cover', 
                                                padding: '0px', 
                                            }} >
                                                <div className="fusion-reading-box-container reading-box-container-1" style={{marginTop:"0px" ,marginBottom:"0px"}}>
                                                    <div className="reading-box" 
                                                    style={{
                                                        backgroundColor: '#ffffff',
                                                        borderWidth: '0px',
                                                        borderColor: '#f6f6f6',
                                                        borderLeftWidth: '3px',
                                                        borderLeftColor: 'var(--primary_color)',
                                                        borderStyle: 'solid'
                                                    }}
                                                        >
                                                        <div className="reading-box-additional">
                                                            <p><span style={{fontSize: "14px", fontStyle: "italic"}}><strong>Hinweis nach § 18 Abs. 6 Zahlungskontengesetz:</strong> Bitte beachte, dass dieser Vergleich keinen kompletten Marktüberblick darstellt.</span></p>
                                                            <p><span style={{fontSize: "14px", fontStyle: "italic"}}><strong>Provisionshinweis:</strong> Die Nutzung unseres Girokonto-Vergleichs kostenlos und unverbindlich. Wir finanzieren unsere Arbeit über Provisionen. Rufst Du über unseren Vergleich die Seite eines hier gelisteten Anbieters auf und eröffnest dort ein Girokonto, so bekommen wir von diesem Anbieter eine kleine Vergütung. Die Provision hat keinerlei Einfluss auf die Kosten Deines Girokontos.</span></p>
                                                        </div>
                                                        <div className="fusion-clearfix"></div>
                                                    </div>
                                                </div>
                                                <div className="fusion-clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <div class="fusion-footer">
                <footer id="footer" class="fusion-footer-copyright-area">
                    <div class="fusion-row">
                        <div class="fusion-copyright-content">
                            <div class="fusion-copyright-notice">
                                <div>
                                    <div class="privacy"> <a href="/datenschutz/">Datenschutz</a> <a href="/impressum/">Impressum</a></div>
                                    <div class="copy-right"> © 2023 Insidemarketing. Alle Rechte vorbehalten.</div>
                                </div>
                            </div>
                            <div class="fusion-social-links-footer"></div>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="fusion-sliding-bar-wrapper"></div>
        </div>
      <div className="to-top-container to-top-right">
        <a href="#" id="toTop" className="fusion-top-top-link"> <span className="screen-reader-text">Nach oben</span> </a>
    </div>
    </div>
  );
}

export default App;




