import PageTemplate from './../components/templates/PageTemplate';

import {
    RangeDatePicker
  } from "react-google-flight-datepicker";
  import "react-google-flight-datepicker/dist/main.css";

const Reserveren = () => {
    return (
        <PageTemplate>
            <h1>Reserveren</h1>

            <RangeDatePicker
                startDate={new Date()}
                endDate={new Date()}
            />

            <a 
                href="https://www.tripadvisor.co.uk/VacationRentalReview-g652238-d16674175-Rustige_Bungalow_Mussen_nest-Otterlo_Ede_Gelderland_Province.html"  
                target="_blank"
                rel="noreferrer"
                className="button primary">
                    RESERVEER OP TRIPADVISOR
            </a>
        </PageTemplate>
    )
}

export default Reserveren
