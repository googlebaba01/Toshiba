import Papa from 'papaparse';
// const Papa = require('papaparse')
import csv from 'jquery-csv'
// var csv = require('jquery-csv');
import $ from 'jquery';

var csvFiles = './dataset.csv'
Papa.parse(csvFiles, {
    delimiter:',',
    preview:2,
    complete:function(ele){console.log(ele)}
});
import FileReader from 'filereader';
const reader = new FileReader()
// reader.readAsText(csvFiles);
