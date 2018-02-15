import * as $ from 'jquery';
import 'fullcalendar/dist/fullcalendar.min.js';
import 'fullcalendar/dist/fullcalendar.min.css';

export default (function () {
  const date = new Date();
  const d    = date.getDate();
  const m    = date.getMonth();
  const y    = date.getFullYear();

  const events = [{
    title  : 'Shipment 1',
    start  : new Date(y, m, 1),
    desc   : 'Meetings',
    bullet : 'success',
  }, {
    title  : 'Shipment 2',
    start  : new Date(y, m, d - 5),
    end    : new Date(y, m, d - 2),
    desc   : 'Hangouts',
    bullet : 'success',
  }, {
    title  : 'Shipment X',
    start  : new Date(y, m, d - 3, 16, 0),
    allDay : false,
    desc   : 'Product Checkup',
    bullet : 'warning',
  }, {
    title  : 'Shipment Y',
    start  : new Date(y, m, d + 4, 16, 0),
    allDay : false,
    desc   : 'Conference',
    bullet : 'danger',
  }, {
    title  : 'Shipment Foo',
    start  : new Date(y, m, d + 1, 19, 0),
    end    : new Date(y, m, d + 1, 22, 30),
    allDay : false,
    desc   : 'Gathering',
  }, {
    title  : 'Shipment Bar',
    start  : new Date(y, m, 28),
    end    : new Date(y, m, 29),
    url    : 'http ://google.com/',
    desc   : 'Google',
    bullet : 'success',
  }];

  $('#full-calendar').fullCalendar({
    events,
    height   : 800,
    editable : true,
    header: {
      left   : '',
      center : 'title',
      right  : '',
    },
  });
}())
