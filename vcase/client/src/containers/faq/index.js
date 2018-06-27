import React, { Component } from 'react';
import $ from 'jquery';

class FaqList extends Component {
  componentDidMount() {
    $('#accordion').on('show.bs.collapse', e => {
      $(e.target)
        .parent()
        .addClass('faq-shown');
    });
    $('#accordion').on('hide.bs.collapse', e => {
      $(e.target)
        .parent()
        .removeClass('faq-shown');
    });
  }

  componentWillUnmount() {
    $('#accordion').off('show.bs.collapse');
    $('#accordion').off('hide.bs.collapse');
  }

  render() {
    let faqIndex = 0;
    return (
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>VCASE FAQ</h2>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Mis on vCase.gg ja kuidas see toimib?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      vCase.gg on kastide avamise lehekülg {' '}
                      <a href="http://vgo.gg/" target="_blank">
                        VGO esemte jaoks.{' '}
                      </a>. vCaseid saab avada vKey-ga.
                      <br />
                      <br />
                      VGO esemed on digitaalsed esemed, mille loomiseks kasutatakse
                      genereerimise tehnoloogiat, et kõik saaksid vahetada oma VGO esemeid kõigiga,
                      siis kui nad tahavad, ilma igasuguste piirangudeta, ilma ootamisaegadeta
                      ja keelude saamise hirmuta. Iga VGO ese on
                      ainulaadne ja see on genereeritud Ethereumi smart
                      contract-iga. Neid esemeid ei saa piirata vahetuskeeludega
                      nagu ootamisajaga või keeludega.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kuidas ma saan endale vKey?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Olemas on kaks moodust Vkey-ide saamiseks:
                      <ul>
                        <li>
                          Osta üks turult, mis toetab VGO
                          esemeid
                        </li>
                        <li>Omanda võti läbi kaubavahetuse teise VGO </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Why is there only one type of vKey?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Lihtsustamiseks, iga vKey võib avad iga Vcasei.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Miks võtab vCasei avamine nii kaua aega?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      vCase.gg baseerub praeguseks Ethereumi blockchainil,
                      mis toob endaga kaasa mitmeid erinevaid eelised traditionaalsete kasti avamis
                      lehekülgede üle, peamiselt läbipaistvus. Kuid kuniks me lähme üle
                      WAX Blockchainile, kastide avamised võivad võtta kuni kaks
                      minutit, Ethereumi blockchaini kiiruse tõttu.
                      WAX Blockchain saab olema palju kiirem ja
                      teeb kastide avamised koheseks.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kuhu lähevad minu VGO esemed peale vCasei avamist?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      VGO esemed mille sa saad vCasei avamise eest
                      saadetakse sinu{' '}
                      <a href="//trade.opskins.com/inventory" target="_blank">
                        OPSkins ExpressTrade Inventory-sse
                      </a>.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Mida saan ma teha oma VGO esemetega, kui ma nad kätte saan?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Sa saad oma VGO esemeid tasuta kaubavahetuse teel teistele kasutjale anda
                      VGO.gg-es, nii kaua kuni neil oma oma VGO kaubavahetuse URL. Sa
                      saad neid samuti müüa ka turgudel, mis
                      teotavad VGO esemeid.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Millised on tõenäosused vCaseis?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      VCasei' avamiste tõenäosused on umbes 3 korda paremad, kui
                      Steami' kastide tõenäosused.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kuidas ma tean,et vCasei tõenäosused on need, mis te ütlete,
                        et need on?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Sa võid kontrollida kõikide vCaseide avamisite tulemusi, sest
                      kõik genereeritud esemed vCasesis salvestatakse
                      Ethereumi blockchainile. Iga genereeritud ese on ühendatud
                      blockchaini tehinguga, et tagada täielik läbipaistvus. Selle põhjuse pärast
                      ei ole VGO esemeid võimalik dupleerida.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kas on võimalus, et ma kaotan oma VGO esemed või on võimalus, et VGO pannakse
                        Steami poolt kinni?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Ei. Kuna VGO kasutab blockchaini tehnoloogiat siis ei saa Steam ega keegi teine
                      VGO-d kinni panna. Kui OPSkins ExpressTradei
                      lehekülg kaoks homme, siis andmed nende esemete
                      kohta säiliksid ning neid saaks muuta graafikaga, et näidata nende
                      esemete unikaalseid omadusi.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Miks on kastide avamisel pandud miinimum kogus?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      See on sellepärast, sest vCase tegutseb praegusel ajal Ethereum blockchainiga
                      ning seal on miinimum kogus kastide avamisele, mis on seotud
                      ETH gasi tasudega. Kui me oleme üle läinud WAX Blockchainile, siis
                      miinimum kogused muutuvad
                    </div>
                  </div>
                </div>
                <h2 className="sub-header">
                  Kuidas ma saan enda vCasei leheküje teha?
                </h2>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kas ma saan luua enda vCase.gg lehekülje?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Jah. VCasei kood on avatud allikas ja on saadav sinule meie {' '}
                      <a href="https://github.com/vgoskins" taget="_blank">
                        GitHubil
                      </a>.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id={`heading-${faqIndex}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link full-width"
                        data-toggle="collapse"
                        data-target={`#collapse-${faqIndex}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${faqIndex}`}
                      >
                        Kas vCasei lehekülje on partnerite programm?
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse-${faqIndex}`}
                    className="collapse"
                    aria-labelledby={`heading-${faqIndex++}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Jah. Kõik leheküljed, mis kasutavad vCasei funktsionaalsust saavad
                      automaatselt teenida 5% partnerite tasust, mis makstakse sulle
                      reaalajas ETH-iga. Kuna vCasei partnerite programm on
                      smart-contracti alune, siis kui keegi kasutab vKeyid, et avada
                      vCase sinu leheküljel, siis sinu makse saadetakse koheselt sinu
                      Ethereumi addressile.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqList;
