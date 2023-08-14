import React, { useEffect, useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import HTTPFetch from '../utils/helper';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { InputSwitch } from 'primereact/inputswitch';
import { Toast } from 'primereact/toast'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const IndexPage = () => {
    const [stateData, setStateData] = useState([])
    const [currIdx, setCurrIdx] = useState()
    const [selectedData, setSelectedData] = useState(null)
    const toast = useRef(null);
    const { t, i18n } = useTranslation('consult');
    console.log(t, '>>>t')

    const onRowSelect = (event) => {
        console.log(event, '<<<event')
        toast.current.show({ severity: 'info', summary: 'Language Selected', detail: `Language: ${event.data.original_language}`, life: 3000 });
        i18n.changeLanguage(event?.data?.original_language);

    };

    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Language Unselected', detail: `Language: ${event.data.original_language}`, life: 3000 });
    };
    // Fetch API 
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=dab17e357c37981ecaf73f404d80118c&language=en-US&page=1'
    const api =  HTTPFetch()

    useEffect(() => { 
        getDataAPI()
    }, [])

    const getDataAPI = () => { 
        api.get(url).then((res) => {
            setStateData(res?.results)
        }).catch((err) => { 
            console.log(err)
        })
    }

    const handleChange = (index) =>{ 
        setCurrIdx(index)
    }

    const imageData = [
        {
            label: "Image 1",
            alt : "image1",
            url: "./assets/theme/banner.jpg"
        },
        { 
            label: "Image 2",
            alt: "imag2",
            url: "./assets/theme/banner2.jpg" 
        }
    ]


    const renderSlides = imageData?.map((image, index) => { 
         return (
            <div key={image?.alt + `--${index}`}>
                <img  src={image?.url} alt={image?.alt}/>
            </div>
         )
    })

    const bodyTemplate = (data, props) => {
        return (
            <>
                <span className="p-column-title">{props.header}</span>
                {data[props.field]}
            </>
        );
    };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="col-12 xl:col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>{('Popular Movie')}</h4>
                            </div>
                            <Toast ref={toast} />

                            <DataTable value={stateData} paginator  rows={20} selectionMode="single" className="p-datatable-products" selection={selectedData} onSelectionChange={(e) => setSelectedData(e.value)} dataKey="id"
                    onRowSelect={onRowSelect} onRowUnselect={onRowUnselect} metaKeySelection={false}>
                                <Column field="id" header="ID" sortable body={bodyTemplate}></Column>
                                <Column field="original_language" header="original_language" sortable body={bodyTemplate}></Column>
                                <Column field="original_title" header="original_title" sortable body={bodyTemplate}></Column>
                                <Column field="overview" header="overview" sortable body={bodyTemplate}></Column>
                            </DataTable>
                        </div>
                    </div>
                    {/* <div className="jumbotron jumbotron-fluid">
                        <div className="logo-container">
                            <div className="logo"></div>
                        </div>
                        <div className="container">

                            <h1 className="display-5">
                                Hello! I'm George Marco Alvin
                            </h1>
                            <h1 className="display-5 thin mt-auto">
                                Consult, Design,  and Develop Websites
                            </h1>
                            <p className="small text-center text-light">
                                Have something great in mind? Feel free to contact me.<br />
                                I'll help you to make it happen.<br />

                            </p>
                            <p className="text-center"><button className="button2 btn-outline-light btn-sm text-uppercase" id="whatsapp" href="#" role="button">Let's Make Contact</button></p>
                        </div>
                    </div> */}
                    <div className='jumbotron jumbotron-fluid'>
                        <Carousel 
                            showArrows={true}
                            autoPlay={true}
                            infiniteLoop={true}
                            selectedItem={imageData[currIdx]}
                            onChange={handleChange}
                            className='carousel-container'
                        >
                            {renderSlides}
                        </Carousel>
                    </div>
                    <main role="main">
                        <div className="custom-container">
                            <div className="grid">
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">{t('consult')} <span className="float-right"><i className="fas fa-comments"></i></span></h5>
                                            <p className="card-text">
                                               {t(`description`)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">{('Design')} <span className="float-right"><i className="fas fa-paint-brush"></i></span></h5>
                                            <p className="card-text">
                                              {(`Policymaker collaborates collective impact humanitarian shared value
                                                vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile
                                                issue outcomes vibrant boots on the ground sustainable.`)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">{('Develop')} <span className="float-right"><i className="fas fa-cubes"></i></span></h5>
                                            <p className="card-text">
                                                {(`Revolutionary circular, movements a or impact framework social impact low-
                                                hanging. Save the compelling revolutionary inspire progress. Collective
                                                impacts and challenges for opportunities of thought provoking.`)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">{('Marketing')} <span className="float-right"><i className="fas fa-bullhorn"></i></span></h5>
                                            <p className="card-text">
                                               {(` Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
                                                replicable, effective altruism youth. Mobilize commitment to overcome
                                                injustice resilient, uplift social transparent effective.`)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">{('Manage')} <span className="float-right"><i className="fa fa-tasks"></i></span></h5>
                                            <p className="card-text">
                                               {(` Change-makers innovation or shared unit of analysis. Overcome injustice
                                                outcomes strategize vibrant boots on the ground sustainable. Optimism,
                                                effective altruism invest optimism corporate social.`)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">{('Evolve')} <span className="float-right"><i className="fas fa-chart-line icon"></i></span></h5>
                                            <p className="card-text">
                                              {(`Activate catalyze and impact contextualize humanitarian. Unit of analysis
                                                overcome injustice storytelling altruism. Thought leadership mass
                                                incarceration. Outcomes big data, fairness, social game-changer.
`)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(IndexPage, comparisonFn);
