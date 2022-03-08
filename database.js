let Lists = window.localStorage.getItem('lists')
if (!Lists) videoLists = [
	{
		videoTitle: 'Bolasini ko`mgan onalar... | @Abdukarim Mirzayev',
		videoimg: 'https://i.ytimg.com/vi/CEudJuD8QGs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwXTWwhFTEHcyhh9AiSqLALbUgfw',
		iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CEudJuD8QGs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	},
	{
		videoTitle: 'Kurtlar Vadisi Pusu | Tanrıdan Diledim',
		videoimg: 'https://i.ytimg.com/vi/DBVgdWe_OyU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBlCCOEYb7H1KtU1xfjSiTjb_jeWg',
		iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DBVgdWe_OyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	}
]
else videoLists = JSON.parse(Lists)
	