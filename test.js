

$(document).ready(function () {
	var countryCodeConversion = {"BD": "BGD", "BE": "BEL", "BF": "BFA", "BG": "BGR", "BA": "BIH",
								"BB": "BRB", "WF": "WLF", "BL": "BLM", "BM": "BMU", "BN": "BRN", "BO": "BOL",
								"BH": "BHR", "BI": "BDI", "BJ": "BEN", "BT": "BTN", "JM": "JAM", "BV": "BVT", 
								"BW": "BWA", "WS": "WSM", "BQ": "BES", "BR": "BRA", "BS": "BHS", "JE": "JEY", 
								"BY": "BLR", "BZ": "BLZ", "RU": "RUS", "RW": "RWA", "RS": "SRB", "TL": "TLS", 
								"RE": "REU", "TM": "TKM", "TJ": "TJK", "RO": "ROU", "TK": "TKL", "GW": "GNB", 
								"GU": "GUM", "GT": "GTM", "GS": "SGS", "GR": "GRC", "GQ": "GNQ", "GP": "GLP", 
								"JP": "JPN", "GY": "GUY", "GG": "GGY", "GF": "GUF", "GE": "GEO", "GD": "GRD", 
								"GB": "GBR", "GA": "GAB", "SV": "SLV", "GN": "GIN", "GM": "GMB", "GL": "GRL", 
								"GI": "GIB", "GH": "GHA", "OM": "OMN", "TN": "TUN", "JO": "JOR", "HR": "HRV", 
								"HT": "HTI", "HU": "HUN", "HK": "HKG", "HN": "HND", "HM": "HMD", "VE": "VEN", 
								"PR": "PRI", "PS": "PSE", "PW": "PLW", "PT": "PRT", "SJ": "SJM", "PY": "PRY", 
								"IQ": "IRQ", "PA": "PAN", "PF": "PYF", "PG": "PNG", "PE": "PER", "PK": "PAK", 
								"PH": "PHL", "PN": "PCN", "PL": "POL", "PM": "SPM", "ZM": "ZMB", "EH": "ESH", 
								"EE": "EST", "EG": "EGY", "ZA": "ZAF", "EC": "ECU", "IT": "ITA", "VN": "VNM", 
								"SB": "SLB", "ET": "ETH", "SO": "SOM", "ZW": "ZWE", "SA": "SAU", "ES": "ESP", 
								"ER": "ERI", "ME": "MNE", "MD": "MDA", "MG": "MDG", "MF": "MAF", "MA": "MAR", 
								"MC": "MCO", "UZ": "UZB", "MM": "MMR", "ML": "MLI", "MO": "MAC", "MN": "MNG", 
								"MH": "MHL", "MK": "MKD", "MU": "MUS", "MT": "MLT", "MW": "MWI", "MV": "MDV", 
								"MQ": "MTQ", "MP": "MNP", "MS": "MSR", "MR": "MRT", "IM": "IMN", "UG": "UGA", 
								"TZ": "TZA", "MY": "MYS", "MX": "MEX", "IL": "ISR", "FR": "FRA", "IO": "IOT", 
								"SH": "SHN", "FI": "FIN", "FJ": "FJI", "FK": "FLK", "FM": "FSM", "FO": "FRO", 
								"NI": "NIC", "NL": "NLD", "NO": "NOR", "NA": "NAM", "VU": "VUT", "NC": "NCL", 
								"NE": "NER", "NF": "NFK", "NG": "NGA", "NZ": "NZL", "NP": "NPL", "NR": "NRU", 
								"NU": "NIU", "CK": "COK", "XK": "XKX", "CI": "CIV", "CH": "CHE", "CO": "COL", 
								"CN": "CHN", "CM": "CMR", "CL": "CHL", "CC": "CCK", "CA": "CAN", "CG": "COG", 
								"CF": "CAF", "CD": "COD", "CZ": "CZE", "CY": "CYP", "CX": "CXR", "CR": "CRI", 
								"CW": "CUW", "CV": "CPV", "CU": "CUB", "SZ": "SWZ", "SY": "SYR", "SX": "SXM", 
								"KG": "KGZ", "KE": "KEN", "SS": "SSD", "SR": "SUR", "KI": "KIR", "KH": "KHM", 
								"KN": "KNA", "KM": "COM", "ST": "STP", "SK": "SVK", "KR": "KOR", "SI": "SVN", 
								"KP": "PRK", "KW": "KWT", "SN": "SEN", "SM": "SMR", "SL": "SLE", "SC": "SYC", 
								"KZ": "KAZ", "KY": "CYM", "SG": "SGP", "SE": "SWE", "SD": "SDN", "DO": "DOM", 
								"DM": "DMA", "DJ": "DJI", "DK": "DNK", "VG": "VGB", "DE": "DEU", "YE": "YEM", 
								"DZ": "DZA", "US": "USA", "UY": "URY", "YT": "MYT", "UM": "UMI", "LB": "LBN", 
								"LC": "LCA", "LA": "LAO", "TV": "TUV", "TW": "TWN", "TT": "TTO", "TR": "TUR", 
								"LK": "LKA", "LI": "LIE", "LV": "LVA", "TO": "TON", "LT": "LTU", "LU": "LUX", 
								"LR": "LBR", "LS": "LSO", "TH": "THA", "TF": "ATF", "TG": "TGO", "TD": "TCD", 
								"TC": "TCA", "LY": "LBY", "VA": "VAT", "VC": "VCT", "AE": "ARE", "AD": "AND", 
								"AG": "ATG", "AF": "AFG", "AI": "AIA", "VI": "VIR", "IS": "ISL", "IR": "IRN", 
								"AM": "ARM", "AL": "ALB", "AO": "AGO", "AQ": "ATA", "AS": "ASM", "AR": "ARG", 
								"AU": "AUS", "AT": "AUT", "AW": "ABW", "IN": "IND", "AX": "ALA", "AZ": "AZE", 
								"IE": "IRL", "ID": "IDN", "UA": "UKR", "QA": "QAT", "MZ": "MOZ"};

	/*---------------------------Step 1 ------------------------------------
	-	API functionality for populating the search box
		- Autocomplete request/response expectations: https://stackoverflow.com/questions/5077409/what-does-autocomplete-request-server-response-look-like
		- Requires ajax/jquery UI and style
	------------------------------------------------------------------------*/

	 $("#f_elem_city").autocomplete({
		source: function (request, response) {
		 $.getJSON(
		 	"http://gd.geobytes.com/AutoCompleteCity?callback=?&q=" + request.term,
			// "http://free.rome2rio.com/api/1.4/json/Autocomplete?key=7slkssQD&query="+request.term,
			function (data) {
			// var placesArray = [];
			 // for(let i = 0; i<data.places.length; i++){
			 // 	var valueObject = {
			 // 		"value": data.places[i].longName
			 // 	}
			 // 	placesArray.push(valueObject);
			 // }
			 
			 response(data);
			}
		 );
		},
		minLength: 3,
		select: function (event, ui) {
			var selectedObj = ui.item;
			$("#f_elem_city").val(selectedObj.value);
		 	return false;
		},
		open: function () {
			$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
		},
		close: function () {
			$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
		}
	 });
	 $("#f_elem_city").autocomplete("option", "delay", 100);


	 /*---------------------------Step 2 ------------------------------------
	-	Take the values in the box and use the API to get equired info.
		Part 1: Required Info to search for in the api:
			1. COUNTRY (in ISO-3, caps)	(Get through string manipulation)
			2. CITY    (in caps)	(Get through string manipulation)
			3. Currency (Three letter initial) (May need to search through the API or use a direct object)
			4. The selected month	(Get through user input)
		Part 2: Run the info through our APIs and show desired values.
	------------------------------------------------------------------------*/
	var country, city, currency, selectedMonth;
	
	const bigMacUSD = 5.3;


			// PART 2: Run the info through our APIs and show desired values.

	function getMonthlyWeather(){

    	//needs a valid city name input   
   		var queryURL = "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=1814235921e94fd2998195653171511&q=" + city + "&format=json&mca=yes&showmap=yes"
        
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
          var results = response.data.ClimateAverages[0].month;
        console.log('selected month is ' + selectedMonth); //var selectedMonth is a user input. needs to be an index #, 0-11.

        //minimum temperature of the selected month in input city
          var minTemp = (results[selectedMonth].avgMinTemp_F);
          console.log("average min temp is " + minTemp);

          //maximum temperature of the selected month in input city
          var maxTemp = (results[selectedMonth].absMaxTemp_F);
          console.log("average max temp is " + maxTemp);

          //average daily rainfall in selected month in input city, in milimeters
          var averageDailyRainfall = (results[selectedMonth].avgDailyRainfall);
          console.log("average daily rainfall is " + averageDailyRainfall + "mm");

          //coverts the average rainfall into inches. *(days in a month) /(milimeters in a inch)
          var averageMonthRainfall = averageDailyRainfall * 30 / 25.4;
          console.log("average monthly rainfall is " + averageMonthRainfall + "in");

          $('#min-temp').text(minTemp + "F");
          $('#max-temp').text(maxTemp + "F");
          $('#average-rainfall').text(averageMonthRainfall + "inches");
        }); 
    }
    
    function getBicMacIndex(exchangeRate) {
      	//ALERT - will need to change the var country to the country code. will need to put info a country object
    	var queryURL = "https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_" + country + "?start_date=2017-07-31&end_date=2017-07-31&api_key=9TGtJzuQxqvJizpJDPXX"
            
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
          var results = response.dataset;

          // the cost of a big mac in the input country's currency 
          var countryPrice = (results.data[0][1]);

          //the cost of a big mac in the input country, in USD
          var CountryDollarPrice = countryPrice / exchangeRate;
          console.log(CountryDollarPrice);

          // the USA big mac price divided by the big mac price in the input country 
          var bigMacIndex = bigMacUSD / CountryDollarPrice;
          console.log(bigMacIndex);
          $('#big-mac-cost').text("$" +CountryDollarPrice);
          $('#big-mac-index').text(bigMacIndex);

        });

    }

    function getCurrentExchangeRate() { 

   		var queryURL = "https://v3.exchangerate-api.com/bulk/b23eabf8c9716038ad266c7b/USD"
        
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
          var results = response.rates;
            console.log("country is " + currency);

            //currently using the currency input field, but we will put each country in an object and call the currency from there
            //and we will call the currency code of the selected country
          var exchangeRate = results[currency];  
          console.log('exchange rate is' + exchangeRate);
          $('#exchange-rate').text(exchangeRate + " " + currency + " to USD");

          getBicMacIndex(exchangeRate); //We must call getBigMac here because we need the exchange rate after exchange rate is called.

        });
     }

	function displayValues(){
		getCurrentExchangeRate();
    	getMonthlyWeather();
	} 

	// 	PART 1: Required Info to search for in the api:
			// 1. COUNTRY (in ISO-3, caps)	(Get through string manipulation)
			// 2. CITY    (in caps)	(Get through string manipulation)
			// 3. Currency (Three letter initial) (May need to search through the API or use a direct object)
			// 4. The selected month	(Get through user input)

	 function requiredInfo(cityValues){
	 	var queryURL = "http://gd.geobytes.com/GetCityDetails?callback=?&fqcn=" + cityValues;
	 	// var queryURL = "http://free.rome2rio.com/api/1.4/json/Search?key=7slkssQD&oName=" + country + "&dName=" + country;
	 	$.ajax({
	 	  dataType: "json", //Some APIs don't know what datatype to return unless you tell them to!
          url: queryURL,
          method: "GET"
        }).done(function(data) {
          console.log(data);
          var countryiso2 = data.geobytesinternet;
          var countryiso3 = countryCodeConversion[countryiso2];

    	  city = data.geobytescity.toUpperCase();
    	  country = countryiso3;
    	  currency = data.geobytescurrencycode;

    	  displayValues();
        });
	 }

	 $("#nc-submit-city").on('click',function(event){
	 	event.preventDefault();
	 	
	 	selectedMonth = $('#month-input').val().trim(); //Sets the month here. Rest of info is set in the following function
	 	
	 	if($('#f_elem_city').val() != "" && selectedMonth != ""){
	 		var cityValues = $('#f_elem_city').val().trim(); //Gets a city in format: City, State Initials, Country
	 		requiredInfo(cityValues); 		
	 		$('#f_elem_city').val("");
			 $('#month-input').val("");
			 $('#testForm').animate(function(){
				 top: 50
			 }, 1000);
	 	}else{
	 		alert('Warning: Bad input!'); //Change later
		 }
		 
	 });
});



