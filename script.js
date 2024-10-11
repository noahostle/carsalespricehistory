let url = window.location.pathname.split("/").at(-2);

let beg = "https://www.carsales.com.au/mobiapi/carsales/v1/insights/";


fetch(beg+url)
	.then(response => response.json())
	.then(data => {
		const hist = data.items.find(item => item.sectionType === "priceChangeHistoryDetail").priceTimeLine;
		console.log(hist);
        render(hist);
	});


function render(hist){
	s = document.createElement("button");
	
	s.style.border="none";
	s.textContent="Price History";
	s.style.height="30px";
	s.style.textAlign="center";
	s.style.margin="auto auto";


	d = document.createElement("div");
	s.onclick=function(){displaynfo(d)};
	d.style.display="none";
	d.innerHTML='<div _ngcontent-iqg-c184="" class="csn-price-insights-modal-section-text total ng-star-inserted">'+hist.title+'</div><ul _ngcontent-iqg-c184="" class="csn-price-insights-modal-price-change-history-list ng-star-inserted">'

	for (let date of hist.items){
		d.innerHTML+='<li _ngcontent-iqg-c184="" class="csn-price-insights-modal-price-change-event ng-star-inserted"><span _ngcontent-iqg-c184="" class="csn-price-insights-modal-price-change-date">'+	date.key	+' 	:	</span><span _ngcontent-iqg-c184="" class="csn-price-insights-modal-price-change-price">'+	date.value	+'</span></li>';
	}

	

	d.innerHTML+='</pricing-insights-modal-price-history>';

	document.body.insertBefore(d, document.body.firstChild);
	document.body.insertBefore(s, document.body.firstChild);
}


function displaynfo(d){
	if (d.style.display=="none"){
		d.style.display="block";
	}
	else {
		d.style.display="none";
	}
}