import Vue from "vue"
import { Options, Virtual } from "vue-typed"
import { QBtn, QIcon } from "quasar"

@Options({
	components: {
		QBtn,
		QIcon
	}
})
export default class Error404 extends Virtual<Vue>() {

	canGoBack = window.history.length > 1

	goBack () {
		window.history.go(-1)
	}
	
}

