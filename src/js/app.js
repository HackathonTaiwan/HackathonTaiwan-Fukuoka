import Vue from 'vue';
import VueResource from 'vue-resource';
import moment from 'moment';

Vue.use(VueResource);

// render css from less
import style from '../less/theme.less';

new Vue({
	ready() {
		this.updateData();
    },
	el: '#api-data',
	data: {
		payloads: [],
		status: null
	},
	methods: {
		updateData: function () {
			console.log('start polling');

            this.$http.get('//hackathontw.au-syd.mybluemix.net/api/status').then((response) => {
				// success callback
				var payloadData = response.json();

				var payloads = [];
				for (var index in payloadData) {
					var data = JSON.parse(payloadData[index].payload);
					payloads.push(data);
				}

				this.$set('payloads', payloads);
				this.$set('status', 'success');
				setTimeout(this.updateData, 1000 * 2);
			}, (response) => {
				// error callback
				this.$set('status', 'error');
			});
        },
		submit: function (event) {
			console.log(this.payloads)
		}
	}
})