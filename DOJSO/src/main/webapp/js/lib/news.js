var News = (function newsDefinition() {
	'use strict';

	var api = {
		createArticle: createArticle
	};

	var article = {
	    title: undefined,
		subTitle: undefined,
	    trivia: undefined,
	    illustration: {
	    	src: undefined,
	    	title: ''
	    },
	    sections: [],

	    addSection: function addSection(type, title, subtitle) {
			var newSection = Object.create(section);
			newSection.sectionType = title;
			newSection.sectionTitle = subtitle;
			this.sections.push(newSection);
		}
	};

	var section = {
		sectionType: undefined,
		sectionTitle: undefined,
		sectionSubtitle: undefined,
		paragraphs: [],
		sectionIllustration: {
			cover: undefined
		},

		addParagraph: function addParagraph(kind, text) {
			arrayify(text).forEach(function storeParagraph(paragraphText) {
				this.paragraphs.push(createParagraph(kind, paragraphText))
			});
		}
	};

	var paragraph = {
		kind: '', // TODO enumeratificationization
		text: '',
		setKind: function setText(kind) {
			this.kind = kind; // TODO enumeratificationization
		},
		setText: function setText(text) {
			this.text = '';
			this.addText(text);
		},
		addText: function addText() {
			this.text.append(text);	
		}
	};

	function createArticle(title, subtitle, trivia) {
		var newArticle = Object.create(article);
		article.title = title;
		article.subtitle = subtitle;
		article.trivia = trivia;

		return newArticle;
	}

	return api;

	/* private */

	function arrayify(thing) {
		if (!Array.isArray(thing)) {
			return [thing];
		} else {
			return thing
		}
	}
})();
