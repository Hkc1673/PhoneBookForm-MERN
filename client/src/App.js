import React from "react";
import style from "./Style";
import PhoneBookForm from "./components/PhoneBookForm";
import InformationTable from "./components/InformationTable";


function App(props) {
  return (
    <section style={style.section}>
      <img
        style={style.cw}
        src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
        alt="clarusway"
      />
      <PhoneBookForm />
      <InformationTable />
    </section>
  );
} export default App;