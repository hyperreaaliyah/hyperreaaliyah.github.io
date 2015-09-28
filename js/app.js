(function() {

	var app = angular.module('art-catalogue', [ ]);

	// controller must be capitalized
	app.controller('ArtController', function() {

		this.works = artworks;


		// $http.get('data/works.json').success(function(data) {
  //  			this.works = data;
  // 		});




	});

	var artworks = [
		
		{
			"name": "Tongue in Cheek",
			"number" : 0,
			"photos": [
				{
					"src" : "tongue_in_cheek.png",
					"text" : ""
				}
			],
			"description": "Tongue in Cheek..."
		},
		{
			"name": "Trinity Tub (or What Is Phil Doing Here?)",
			"number" : 1,
			"photos": [
				{
					"src" : "Trinity_tub.png",
					"text" : ""
				}
			],
			"description": "When we were making the marketing materials for HYPERREAALIYAH + HANNA HYY = NOW HERE, we created this image by layering two images on a photograph of Hanna Hyy's work titled <i>Mitä teen täällä?</i> (What Am I Doing Here?). This image was printed for the exhibition and displayed next to Hanna's original work."
		},
		{
			"name": "50 Cent Cleaned My Desktop",
			"number" : 2,
			"photos": [
				{
					"src" : "50cent.png",
					"text" : ""
				}
			],
			"description": "After making this image of 50 Cent in a little black dress our desktop background, it didn't take long to feel compelled to clean it."

		},
		{
			"name": "Art History",
			"number" : 3,
			"photos": [
				{
					"name" : "Bosch Lepore",
					"src" : "Bosch_Lepore.png",
					"text" : ""
				},
				{
					"name" : "Paavo",
					"src" : "Paavo.png",
					"text" : ""
				},
				{
					"name" : "Party",
					"src" : "Party.png",
					"text" : ""
				}

			],
			"description": "Art History"

		},
		{
			"name": "Sympolitics",
			"number" : 4,
			"photos": [
				{
					"name" : "Always Bill",
					"src" : "Bill_is_Gifted.png",
					"text" : "Born out of a pure accident, this image is the starting point of the series Sympolitics, and probably one of the most straightforward in its meaning. This image has been exhibited once and one out of five silisec prints of it has been bought into a private collection."
				},
				{
					"name" : "American Spy Pie",
					"src" : "American_Spy_Pie.png",
					"text" : "This image was created through an subconscious whim. We had our photoshop full of images that were being spliced and diced together. Without a consciously decipherable reason, we felt compelled to join Arnold and Angela. Even though the result immediately struck us visually pleasing there was a strong argument about whether there is meaning in the image or not. Even though we came up with no explanation for it, we decided to save it. And luckily so - only fifteen minutes after when we looked at it again, we burst into spontaneous laughter as the first layer of meaning struck us so hard. There is Angela, very unhappy about the US spying on her mobile phone and there is Arnold, happily holding the symbols of America in his hands while wearing a Hawaii shirt. The realization? When you go to America and have the American Dream, you're very happy - when America gets to you with a treatment reminiscent of a spy novel you're very unhappy. <br/> This image was xhibited in the HYPERREAALIYAH + HANNA HYY = NOW HERE xhibition, and throughout the month we stayed in the gallery it gained many more interpretations, turning out to be a real goldmine of meaning."
				},
				{
					"name" : "Satan in Hell",
					"src" : "Satan_in_Hell.png",
					"text" : "In this image, Barack Obama meets Pope Francis for the first time. They are engaged in one of the fundamental moments of diplomacy - giving and receiving gifts. For many of us, these two individuals are the most powerful men in the world, the President of the United States and the Pope. Yet, who's the angry looking man in Barack's belly? Let us give you a hint - he turned 100 this summer."
				},
				{
					"name" : "Fuck Me, George",
					"src" : "Fuck_Me,_George.png",
					"text" : "This image was born out of a coincidence. We were googling images with the search term of <i>hot gay sex</i> or something along those lines, when we came across a 3d modeling of an amputee in a sexually provocative position. Curious, we surfed to the blog and browsed through it. When we came across the image of the amputee veteran, we just knew he belonged to the floor of the oval office."
				},
				{
					"src" : "Sei_Il_Nostro_Futuro.png",
					"text" : "You are our future, Silvio, reads the sign in the crowd. Politicians like to use their often heteronormative families to deliver a message of trustworthiness and responsibility. Citizenry is also often associated to having a family, which is often considered a fundamental building block of society. Politicians also like to address families in their speeches and in their actions. <br/> Here, Silvio Berlusconi is ecstatically greeting a young girl whose mother seems equally as eager to get to shake Silvio's hand, while a bodyguard makes sure the necessary distance is kept. By overlaying an image of brutally everyday situation in a young family to this politically charged situation of addressing a family, we attempt to show the kind of moments that the political sphere rarely touches - the weariness brought by raising a young child and the intimacy of family. The contrast hopefully brings to surface the disconnect between PR and reality."
				},
				{
					"name" : "Christine Lagarde in Jerusalem",
					"src" : "Christine_in_Bethlehem.png",
					"text" : "In this image, the director of IMF Christine Lagarde stands with her eyes glanced in a demonstration after the Charlie Hebdo massacre. She seems out of place in this political demonstration attended by many world leaders. Yet, the message of that demonstration pales in comparison to the demonstration of Pope Francis on the separation wall between Israel and the West Bank."
				},
				{
					"name" : "Thank You Jesus for President Trump",
					"src" : "Thank_You_Lord_Jesus_for_President_Trump.png",
					"text" : "This image itself is perfect, yet so is reality and we still choose to go for the hyperreal more often than not. Populist politics is always hyperreal – it's more real than reality could ever be for them who take it without a grain of salt. Here, we suggest a conspiracy. What if the democrats are using Trump to distance the moderate republicans from the party? As a symbol of this idea, Hillary Clinton looks very holy and honest with a bare breast, holding the moneys."
				},
				{
					"name" : "Hillary's Hyperhumanity",
					"src" : "Hyper_Humanity.png",
					"text" : "This image of Hillary Clinton and Libyan military personnel in this ecstatic moment is in itself a testimony to Jean Baudrillard's vision of what hyperreality does to our perception of war. He famously claimed that <i>the Gulf War did not take place</i> because of their representation in the media. As a homage to this point, we've layered H.P. Baxter's Hyperhumanity on top of Hillary Clinton. Fittingly, the hyperhumanity logo is reminiscent of that of Unicef."
				},
				{
					"name" : "Time for Two",
					"src" : "Time_for_Two.png",
					"text" : "In this image, US Secretary of State John Kerry is about to give his Russian counterpart Sergei Lavrov Idaho potatoes in Paris. During the meeting, Mr. Kerry highlighted that there is no hidden meaning and no metaphor in the gift. We think this is about sex. This sexual innuendo was also present in the same meeting as the Russians presented Kerry with a pink fur hat."
				},
				{
					"name" : "Drink Saturn Devouring His Son",
					"src" : "Saturn_in_a_Can.png",
					"text" : "Some say Francisco Goya's <i>Saturn Devouring His Son</i> can be seen as a metaphor of the fear of losing one's power. Here, in this image, Vladimir Putin is presented with a can of Saturn Devouring His Son. Will he drink it?"
				}


			],
			"description": "This series was born out of a pure accident. We were looking for an image of Bill Clinton for a piece titled <i>Always Bill</i>, a reminder for ourselves to always bill. When we came across an image of Bill Clinton and Swami Satchidananda, the red hue in the upper right corner of it reminded us of a S/M type image collected to our visual archives some time in the past. The association of these two images was so strong we were compelled to just throw the latter into the first. What was born out of that simple act was pure catharsis. Now the image has in it what we all at least on some point have perceived about Bill Clinton - he is the sex president. <br/> The idea behind this series is thus to take one politically charged image and use it as a base for another image which somehow thwarts or highlights its meaning. Currently there are ten ready images, four of which have been shown in an xhibition. Every image except for <i>Always Bill</i> have been made in the Summer of 2015."

		},
		{
			"name" : "Now Here Kalleria",
			"number" : 5,
			"showVideo" : "true",
			"description": "This is a collection of videos shot during the HYPERREAALIYAH + HANNA HYY = NOW HERE xhibition. The legendary Henry Lämsä did part of the filming. The audiotrack is by HYPERREAALIYAH and RUTTOKUKKO."
		},
		{
			"name": "WEIRD HISTORY OF FINNISH YOUTUBE ART 2005-2015",
			"number" : 6,
			"showVideo" : "true",
			"description": "This is a collection of Finnish Youtube art from the past ten years, collected by HYPERREAALIYAH and Pultset. The video depicts many different sub-genres and the development of the most strong genre SinäTuubaPaska, Finnish equivalent of YoutubePoop. This video was publicly on display during the Night of The Arts in Helsinki on 20th of August 2015, where approximately one hundred people saw it in its entirety."
		},
		{
			"name": "Mind melt in brain felt + MLG for Trio pussit",
			"number" : 7,
			"showVideo" : "true",
			"description": "This is a VJ set done for the band Trio pussit. The video consists of about 12 movies spliced and diced, numerous clips from various MLG videos and a great quantity of grotesque clips from Youtube."
		},
		{
			"name": "Day of 8 feat. SOFA",
			"number" : 8,
			"showVideo" : "true",
			"description": "This video consists of footage shot by Jenna on her 26th birthday."
		},
		{
			"name" : "Henry Lämsä in club Hogarden",
			"number" : 9,
			"showVideo" : "true",
			"description": ""
		},
		{
			"name" : "Ukkometso in Alko: Tax Paid",
			"number" : 10,
			"showVideo" : "true",
			"description": "This video is a reaction to Finland's alcohol monopoly Alko's <i>Tax Paid</i> marketing campaign. "
		},
		{
			"name" : "SUOLEN SISUN HISTORIIKKI",
			"number" : 11,
			"showVideo" : "true",
			"description": "This was by far the biggest collective effort of HYPERREAALIYAH. On Monday the 14th of September, Jenna received a message from an acquaintance and a member of contemporary Finnish SS, Suomen Sisu, to make a video of its 17 year history for private use in their seminar. Jenna agreed immediately, secretly taking their script and giving it to the hands of HYPERREAALIYAH. In three days, a real history was created, showing how the SS looks like in the eyes of an outsider. The video was published publicly at the same time it was scheduled to be shown in the seminar, where it was sent so that there was no chance they had time to look at it in advance. The story does not tell whether they looked at it in the seminar or not. Within two days, the video had 16 000 views on Youtube, which is a lot in Finnish standards. "
		}
		

	]
		


})();

