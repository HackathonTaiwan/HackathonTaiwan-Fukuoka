import Vue from 'vue';
import VueResource from 'vue-resource';
import moment from 'moment';

Vue.use(VueResource);

// render css from less
import style from '../less/theme.less';

var tempData = [
			{
				"_id": "57c19ba9b4d509001db3c602",
				"topic": "/status/mqtt",
				"payload": {"peopleID":"01","data":{"sou":"940","air":"4300","hum":"80","tmp":"21","gas":"20","sdb":"100","date":"2016-08-27"}},
				"qos": 2,
				"retain": false,
				"_msgid": "687e6b4a.978194"
			}, {
				"_id": "57c19bb3b4d509001db3c603",
				"topic": "/status/mqtt",
				"payload": {"peopleID":"01","data":{"sou":"940","air":"4300","hum":"80","tmp":"21","gas":"20","sdb":"100","date":"2016-08-27"}},
				"qos": 2,
				"retain": false,
				"_msgid": "73196cde.8ce694"
			}, {
				"_id": "57c19bbdb4d509001db3c604",
				"topic": "/status/mqtt",
				"payload": {"peopleID":"01","data":{"sou":"940","air":"4300","hum":"80","tmp":"21","gas":"20","sdb":"100","date":"2016-08-27"}},
				"qos": 2,
				"retain": false,
				"_msgid": "b7cc3799.4833c8"
			}, {
				"_id": "57c19bc7b4d509001db3c605",
				"topic": "/status/mqtt",
				"payload": {"peopleID":"01","data":{"sou":"940","air":"4300","hum":"80","tmp":"21","gas":"20","sdb":"100","date":"2016-08-27"}},
				"qos": 2,
				"retain": false,
				"_msgid": "63961666.9c69e8"
			}, {
				"_id": "57c19bd1b4d509001db3c606",
				"topic": "/status/mqtt",
				"payload": {"peopleID":"01","data":{"sou":"940","air":"4300","hum":"80","tmp":"21","gas":"20","sdb":"100","date":"2016-08-27"}},
				"qos": 2,
				"retain": false,
				"_msgid": "c8fba521.370458"
			}, {
				"_id": "57c19bdbb4d509001db3c607",
				"topic": "/status/mqtt",
				"payload": {"peopleID":"01","data":{"sou":"940","air":"4300","hum":"80","tmp":"21","gas":"20","sdb":"100","date":"2016-08-27"}},
				"qos": 2,
				"retain": false,
				"_msgid": "4f3e5ef5.b0c1a"
			}, {
				"_id": "57c19be5b4d509001db3c608",
				"topic": "/status/mqtt",
				"payload": {"peopleID":"01","data":{"sou":"940","air":"4300","hum":"80","tmp":"21","gas":"20","sdb":"100","date":"2016-08-27"}},
				"qos": 2,
				"retain": false,
				"_msgid": "b540a40d.4abf58"
			}, {
				"_id": "57c19befb4d509001db3c609",
				"topic": "/status/mqtt",
				"payload": {"peopleID":"01","data":{"sou":"940","air":"4300","hum":"80","tmp":"21","gas":"20","sdb":"100","date":"2016-08-27"}},
				"qos": 2,
				"retain": false,
				"_msgid": "894999a0.76b668"
			}, {
				"_id": "57c19bf9b4d509001db3c60a",
				"topic": "/status/mqtt",
				"payload": {"peopleID":"01","data":{"sou":"940","air":"4300","hum":"80","tmp":"21","gas":"20","sdb":"100","date":"2016-08-27"}},
				"qos": 2,
				"retain": false,
				"_msgid": "97fde46f.680218"
			}, {
				"_id": "57c19c03b4d509001db3c60b",
				"topic": "/status/mqtt",
				"payload": {"peopleID":"01","data":{"sou":"940","air":"4300","hum":"80","tmp":"21","gas":"20","sdb":"100","date":"2016-08-27"}},
				"qos": 2,
				"retain": false,
				"_msgid": "7e531c0d.81ace4"
			}
		];

var payloads = [];
for (var index in tempData) {
	var data = tempData[index].payload;
	data.data.date = moment(data.data.date).format('YYYY/MM/DD H:m:s');
	payloads.push(data)
}

new Vue({
	el: '#api-data',
	data: {
		payloads: payloads

	},
	methods: {
		submit: function (event) {

		}
	}
})