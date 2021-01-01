import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime/css/react-datetime.css';
import { Container, Accordion, Pagination } from 'react-bootstrap';
import axios from 'axios';

import EventList from './components/eventlist';
import Navigation from './components/navigation';

const apiUri = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type';

const GetEvents = (q, start, rows, filter = null) => {
  const refineObj = {};
  if (filter) {
    Object.keys(filter).forEach((key) => { refineObj[`refine.${key}`] = filter[key]; });
  }

  return axios.get(apiUri, {
    params: Object.assign(refineObj, { q, start, rows }),
  })
    .then((res) => res.data);
};

ReactDOM.render(<App />, document.getElementById('app'));
