import PageTemplate from './../components/templates/PageTemplate';
import Button from './../components/Button';

import {
    RangeDatePicker
  } from "react-google-flight-datepicker";
  import "react-google-flight-datepicker/dist/main.css";

const Reserveren = () => {
    return (
        <PageTemplate>
            <h1>Reserveren</h1>

            <RangeDatePicker
                startDate={new Date(2020, 0, 15)}
                endDate={new Date(2020, 1, 1)}
            />

            <Button to="#" text="Reserveer op Tripadvisor" type="primary" />
        </PageTemplate>
    )
}

export default Reserveren
