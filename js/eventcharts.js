function PlotWebsiteAnalyticsChart(data,divisionid,title,yaxistitle,legendText){

	if(data == null || data['pageviews'] == "File has no data."){

		if(data.length==0){
		var tempStr = '<div id="block" class="block text-center no-data3">No Data To Show</div>';
      	iDiv = document.getElementById(divisionid);
      	iDiv.innerHTML += tempStr;
		return ;
		}
	}

	else
	{
		var x = [], y = [], dataarray = [];

			for (var i in data)
			{
			  var temp=[];
			  for(var z in data[i]){
			  	  var temp2=[];
			  	   var y = data[i][z]['x'].substr(0,4),
        			m = data[i][z]['x'].substr(4,2),
        			d = data[i][z]['x'].substr(6,2);
        			modifieddate = y+'-'+m+'-'+d;
			  	  temp2[0]=Date.parse(modifieddate);
			  	  temp2[1]=data[i][z]['y'];
			  	  temp.push(temp2);
			  }
			  x[i]=temp;
			}
		var chart = new Highcharts.Chart({
        chart: {
            type: 'spline',
            renderTo : divisionid,
			events: {
			load: function () {
			this.series[1].hide();
			this.series[2].hide();
			this.series[3].hide();
			this.series[4].hide();
			}
			}
        },
	  credits: {
	  		enabled : false,
		    text: 'Hubilo.com',
		    href: 'http://www.hubilo.com'
		},
        title: {
            text: title
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: yaxistitle
            }
        },
        tooltip: {
			    formatter: function (){
					var date = new Date(this.x);
					var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

			        return '<b>' + this.series.name + '</b><br/>' +
			            date.getDate() + '-' + monthNames[date.getMonth()] + '-' + date.getFullYear() + ': ' + this.y;
			    }
			    
		},
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Page Views',
            data: x['pageviews'],
            animation: {
			    duration: 3000 
            }

        },{
            name: 'Sessions',
            data: x['sessions'],
            animation: {
			    duration: 3000 
            }

        },{
        	name: 'New Visitors',
            data: x['newVisitors'],
            animation: {
			    duration: 3000 
            }

        },{
        	name: 'Returning Visitors',
            data: x['returningVisitors'],
            animation: {
			    duration: 3000 
            }
	},{
		name: legendText,
		data: x['registrations'],
		animation: {
			duration: 3000
		}

        }],
		exporting: {enabled : false, type:'image/jpeg' }

    });	
	chart.reflow();
	}
}


function PlotTicketingAnalyticsChart(data,divisionid){

	if(data == null){
		return ;
		
	}

	else
	{
		var x = {}, y = [], dataarray = [],k=0;

		for (var i in data)
		{
		  var temp=[];
		  for(var z in data[i]){
		  	  var temp2=[];
		  	  temp2[0]=Date.parse(data[i][z]['x']);
		  	  temp2[1]=parseInt(data[i][z]['y']);
		  	  temp.push(temp2);
		  }
		  x[k] = {};
		  x[k]['name']=i;
		  x[k]['data']=temp;
		  x[k]['animation'] = {};
		  x[k]['animation']['duration']=3000;
		  k++;
		}
		var chart = new Highcharts.Chart({
        chart: {
            type: 'spline',
            renderTo : divisionid	
        },
	  credits: {
	  		enabled : false,
		    text: 'Hubilo.com',
		    href: 'http://www.hubilo.com'
		},
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Counts'
            }
        },
        tooltip: {
			    formatter: function (){
					var date = new Date(this.x);
					var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

			        return '<b>' + this.series.name + '</b><br/>' +
			            date.getDate() + '-' + monthNames[date.getMonth()] + '-' + date.getFullYear() + ': ' + this.y;
			    }
			    
		},
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
		exporting: {enabled : false, type:'image/jpeg' }

    });
		for(var i in x){
			chart.addSeries(x[i]);
		}
		for(var i in x){
			if(i!=(Object.keys(x).length-1)){
				chart.series[i].setVisible(false,false);				
			}
		}
	chart.reflow();
	}

}
 
function PlotOnPageAnalyticsChart(data,divisionid,title,yaxistitle){

	if(data == null){
		var tempStr = '<div id="block" class="block text-center no-data3">No Data To Show</div>';
      	document.getElementById(divisionid).appendChild(tempStr);
	}

	else
	{
		var x = [], y = [], dataarray = [];


			for (var i in data)
			{
			  var temp=[];
			  for(var z in data[i]){
			  	  var temp2=[];
			  	  temp2[0]=Date.parse(data[i][z]['x']);
			  	  temp2[1]=data[i][z]['y'];
			  	  temp.push(temp2);
			  }
			  x[i]=temp;
			}


		var chart = new Highcharts.Chart({
        chart: {
            type: 'spline',
            renderTo : divisionid
        },
	  credits: {
	  		enabled : false,
		    text: 'Hubilo.com',
		    href: 'http://www.hubilo.com'
		},
        title: {
            text: title
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: yaxistitle
            }
        },
        tooltip: {
			    formatter: function (){
					var date = new Date(this.x);
					var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

			        return '<b>' + this.series.name + '</b><br/>' +
			            date.getDate() + '-' + monthNames[date.getMonth()] + '-' + date.getFullYear() + ': ' + this.y;
			    }
			    
		},
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Speaker',
            data: x['speaker'],
            animation: {
			    duration: 3000 
            }

        }, {
            name: 'Exhibitor',
            data: x['exhibitor'],
            animation: {
			    duration: 3000 
            }

        },{
        	name: 'Sponsor',
            data: x['sponsor'],
            animation: {
			    duration: 3000 
            }

        },{
        	name: 'Schedule',
            data: x['session'],
            animation: {
			    duration: 3000 
            }

        }],
	exporting: {enabled : false, type:'image/jpeg' }






    });

chart.reflow();
	}


}


function PlotPieChart(data,divisionid,title,color){

	if(data==null || data.length==0)
	{
		var iDiv = document.createElement('div');
		iDiv.id = 'block';
		iDiv.className = 'block text-center no-data';
		
		
		if(color==12)
		document.getElementById('container_user_industry').appendChild(iDiv);
		
		else
		if(color==2)
		document.getElementById('container_user_designation').appendChild(iDiv);
		
		else
		if(color==11)
		document.getElementById('container_user_organization').appendChild(iDiv);

		iDiv.innerHTML = " Please wait for our database to grow. We have something really wonderful that can blow you away.";
		

		return ;
	}

	else
	{
		  $othersvalue = 0;
		  //CLEANING THE DATA & DISPLAYING TOP 5 VALUES IN DATA
		  for(var i in data){
		    if(data[i]['name']==="" || data[i]['name'] === ".." || data[i]['name']===null)
		    data.splice(i,1);
		  }
		    
		  if(data.length>6){
		    for (var i=6;i<data.length;i++)
		    {
			$othersvalue += data[i]['y'];            
			data.splice(i,1);
			i--;        
		    }        
		    data[data.length - 1]['name'] = "Others" ;
		    data[data.length - 1]['y'] = $othersvalue ;
		  	}
			  
					  
			Highcharts.getOptions().plotOptions.pie.colors = (function () {
			var colors = [],
			base = Highcharts.getOptions().colors[color],
			i;
			if(data.length>2){
			for (i = 0; i < 10; i += 1) {
			colors.push(Highcharts.Color(base).brighten((i - 4) / 7).get());
			}
			}
			else{
			for (i = 0; i < 10; i += 1) {
			colors.push(Highcharts.Color(base).brighten((i - 1) / 4).get());
			}
			}
			return colors;
			}());
		    
		/**
		 * Grid-light theme for Highcharts JS
		 * @author Torstein Honsi
		 */

		Highcharts.theme = {
		   colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
		      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee","#f36f0e","#d7ba58","#42A658","#a22154"],
		   chart: {  
		      backgroundColor: "#FFFFFF",
		      style: {
			 fontFamily: "Dosis, sans-serif",
			 //textTransform: 'uppercase'
		      }
		      
		   },
		  credits: {
		  		enabled : false,
			    text: 'Hubilo.com',
			    href: 'http://www.hubilo.com'
			},
		   tooltip: {
		      borderWidth: 0,
		      backgroundColor: 'rgba(219,219,216,0.8)',
		      shadow: false
		   },
		   plotOptions: {
		      	candlestick: {
			 		lineColor: '#404048'
		      	},
		      	pie:{
		   			borderWidth: 4,
		   			borderColor: 'white',
		      	}
		   },
		   background2: '#F0F0EA',
	};

		// Apply the theme
		Highcharts.setOptions(Highcharts.theme);
		    // Build the chart
		    var chart = new Highcharts.Chart({
			chart: {
			    plotBackgroundColor: null,
			    plotBorderWidth: null,
			    plotShadow: false,
			    type: 'pie',
			    renderTo: divisionid,
			    marginTop: 0
			    
			},
			title: {
			    text: title
			},
			tooltip: {
			    pointFormat: (divisionid==="container_website_user_device_category")?'': '{series.name}: <b>{point.y}</b>',
			    positioner: function () {
		        return {
		            // Position the tooltip into the center of
		            // of the series, i.e. center of the pie chart
		            // 8 is the default tooltip padding
		            x: this.chart.series[0].center[0] -
		               (this.label.width / 2) + 8,
		            y: this.chart.series[0].center[1] -
		               (this.label.height / 2) + 8
		        };
    		}
			},
			plotOptions: {
			    pie: {
			        allowPointSelect: true,
			        cursor: 'pointer',
			        dataLabels: {
			            enabled: true,
			            cumulative : -0.50,
			            distance : 20,
			            formatter: function() {
				        if (this.y != 0) {
//				          return '{point.name} : {point.percentage:.1f}%';
				          return this.point.name + ':' + Highcharts.numberFormat(this.point.percentage, 1) + '%';
				        } else {
				          return null;
				        }
				    	},
//			            format: '{point.name} : {point.percentage:.1f}%',
			            style: {
			                color: '#666666',
			                textShadow:false,
			                width : '70px',
			                fontSize : '9',
			                fontWeight : '500'

			            },
			            connectorColor: 'white',
			            connectorPadding : 0
			        },
			        
       		point: {
        	   events: {
            	   		mouseOver: function () {	
                   		this.connector.attr('stroke', this.color);
                   		this.connector.show();
               			},
               			mouseOut: function () {
               			this.connector.attr('stroke', 'white');
                   		this.connector.hide();
               			}
           			}
       				}
			}
			},
			series: [{
			    name: (divisionid=="container_website_user_type")?'Viewers Count':'Attendee Count',
			    size : 200,
			    dataLabels : {
			    	padding : 15,
			    	connectorPadding : 0
			    },
			    data: data,
			    innerSize : '85%',
			    animation: {
	                    duration: 3000
	                }
			}],
			exporting: { enabled : false }
		    });

	}
}

function PlotHorizontalBarChart(data,divisionid){
	if(data == null){
                return ;

        }


	$('#'+divisionid).find('.highcharts-container').css({overflow:'hidden !important'});
	 $('#'+divisionid).highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text:''
        },
        tooltip: {
        	formatter: function(){
        		i = data['categories'].indexOf(this.point.category);
        		count = data['count'][i];
        		return '<b>'+this.point.category+'<b><br>'+'Rs. '+this.point.y+' ('+count+' sold)';
        	}
		},
        xAxis: {
            categories: data['categories'],
            lineWidth: 1
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Ticket Revenue'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            data: data['data'],
            animation: {
            	duration: 3000
            }
        }],
        exporting: { enabled : false }
    });
}

function PlotCustomPieChart(data,divisionid,title,color,size){

	if(data==null || data.length==0)
	{
		return ;
	}

	else
	{
		  $othersvalue = 0;
		  //CLEANING THE DATA & DISPLAYING TOP 5 VALUES IN DATA
		  for(var i in data){
		    if(data[i]['name']==="" || data[i]['name'] === ".." || data[i]['name']===null)
		    data.splice(i,1);
		  }
		  
		  	Highcharts.getOptions().plotOptions.pie.colors = (function () {
			var colors = [],
			base = Highcharts.getOptions().colors[color],
			i;
			for (i = 0; i < 10; i += 1) {
			colors.push(Highcharts.Color(base).brighten((i - 1) / 4).get());
			}
			return colors;
			}());		  
		    
		/**
		 * Grid-light theme for Highcharts JS
		 * @author Torstein Honsi
		 */

		Highcharts.theme = {
		   colors: ["#178BCA","#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
		      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee","#f36f0e","#d7ba58","#42A658","#a22154"],
		   chart: {  
		      backgroundColor: "#FFFFFF",
		      style: {
			 fontFamily: "Dosis, sans-serif",
			 //textTransform: 'uppercase'
		      }
		      
		   },
		  credits: {
		  		enabled : false,
			    text: 'Hubilo.com',
			    href: 'http://www.hubilo.com'
			},
		   tooltip: {
		      borderWidth: 0,
		      backgroundColor: 'rgba(219,219,216,0.8)',
		      shadow: false
		   },
		   plotOptions: {
		      	candlestick: {
			 		lineColor: '#404048'
		      	},
		      	pie:{
		   			borderWidth: 4,
		   			borderColor: 'white',
		      	}
		   },
		   background2: '#F0F0EA',
	};

		// Apply the theme
		Highcharts.setOptions(Highcharts.theme);
		    // Build the chart
		    var chart = new Highcharts.Chart({
			chart: {
			    plotBackgroundColor: null,
			    plotBorderWidth: null,
			    plotShadow: false,
			    type: 'pie',
			    renderTo: divisionid,
			    marginTop: 0
			    
			},
			title: {
			    text: title
			},
			tooltip: {
			    pointFormat: (divisionid==="container_website_user_device_category")?'': '<b>{point.y}</b>',
			    positioner: function () {
		        return {
		            // Position the tooltip into the center of
		            // of the series, i.e. center of the pie chart
		            // 8 is the default tooltip padding
		            x: this.chart.series[0].center[0] -
		               (this.label.width / 2) + 8,
		            y: this.chart.series[0].center[1] -
		               (this.label.height / 2) + 8
		        };
    		}
			},
			legend :
			{
				itemStyle: {
                 font: '7pt Dosis, sans-serif',
                 color: '#666666',
                 fontWeight : '700',
                 textShadow : false
              	},
              	itemHoverStyle: {
                 color: '#666666'
              },
						
			},
			plotOptions: {
			    pie: {
			        allowPointSelect: true,
			        cursor: 'pointer',
			        dataLabels: {
			            enabled: true,
			            cumulative : -0.50,
			            distance : 20,
			            format: '{point.name} : {point.percentage:.2f}%',
			            style: {
			                color: '#666666',
			                textShadow:false,
			                width : '70px',
			                fontSize : '9',
			                fontWeight : '500'

			            },
			            connectorColor: 'white',
			            connectorPadding : 0
			        },
			        
       		point: {
        	   events: {
            	   		mouseOver: function () {	
                   		this.connector.attr('stroke', this.color);
                   		this.connector.show();
               			},
               			mouseOut: function () {
               			this.connector.attr('stroke', 'white');
                   		this.connector.hide();
               			}
           			}
       				}
			}
			},
			series: [{
			    name: '',
			    size : size,
			    showInLegend: true,
			    dataLabels : {
			    	padding : 5,
			    	connectorPadding : 0
			    },
			    data: data,
			    innerSize : '85%',
			    animation: {
	                    duration: 3000
	                }
			}],
			exporting: { enabled : false }
		    });

	}
}


function PlotLineChartUserDatewiseRegistration(data,divisionid,title,subtitle)
{
 
	if(data==null)
	{
		var iDiv = document.createElement('div');
		iDiv.id = 'block';
		iDiv.className = 'block text-center no-data'
		document.getElementById('container_user_datewise_registration').appendChild(iDiv);
		iDiv.innerHTML = " Please wait for our database to grow. We might have something really wonderful to blow you away.";
		// Now create and append to iDiv

		return ;
	}

	else
	{
		  var x = [], y = [], dataarray = [];

			for (var i in data)
			{
			  x[i] = data[i]['x'];
			}


			for (var i in data)
			{
			  y[i] = data[i]['y'];
			}

			for(var i in data)
			{
			  x[i] = Date.parse(x[i]);
			}


			for(var i in data)
			{
			  dataarray.push([x[i],y[i]]);
			}

		var chart = new Highcharts.Chart({

		       chart: {
			    type: 'area',
			    spacingBottom: 30,
			    renderTo:divisionid
			    			},
			title: {
	  		    text: title
			},
			xAxis: {
				 title: {
			        text: subtitle
			    },
			    type : 'datetime',
//			    categories: x
			},
			yAxis: {
			    title: {
			        text: 'Registration Count'
			    },
			    labels: {
			        formatter: function () {
			            return this.value;
			        }
			    }
			},
			tooltip: {
			    formatter: function (){
					var date = new Date(this.x);
					var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

			        return '<b>' + this.series.name + '</b><br/>' +
			            date.getDate() + '-' + monthNames[date.getMonth()] + '-' + date.getFullYear() + ': ' + this.y;
			    }
			    
			},
			plotOptions: {
			    area: {
			        fillOpacity: 0.5
			    }
			},
			credits: {
			    text: 'Hubilo.com',
			    href: 'http://www.hubilo.com',
			     enabled : false  
		       
			},
			series: [{
				showInLegend: false,
			    name: 'Count',
			    forced : true,
			    data : dataarray,
                animation: {
                    duration: 3000
             
            }
			}],
			exporting: {enabled : false, type:'image/jpeg' }
			});
	
	}  
}


function PlotTicketingBarChart(data,divisionid,title,yaxistitle,color)  
{	
		if(data==null)
		{
			var iDiv = document.createElement('div');
			iDiv.id = 'block';
			iDiv.className = 'block text-center no-data'
			
			
			if(color==3)
			document.getElementById('container_user_interest').appendChild(iDiv);
			

			iDiv.innerHTML =  "Please wait for our database to grow. We have something really wonderful that can blow you away.";
			return ;
		}

		else{
		 $othersvalue = 0;

		  //CLEANING THE DATA & DISPLAYING TOP 5 VALUES IN DATA
		  for(var i in data){
		    if(data[i]['name']==="" || data[i]['name'] === ".." || data[i]['name']===null)
		    data.splice(i,1);
		  }
		    
		  if(data.length>6){
		    for (var i=6;i<data.length;i++)
		    {
			$othersvalue += data[i]['y'];            
			data.splice(i,1);
			i--;        
		    }        
		    data[data.length - 1]['name'] = "Others" ;
		    data[data.length - 1]['y'] = $othersvalue ;
		  }

		  var datax = [];
		  var datay = [];
	  	for(var i in data){
	    datax.push(data[i]['name']);
	    datay.push(data[i]['y']);
	  	}

	     Highcharts.theme = {
			   chart: {  
			      style: {
				 fontFamily: "Dosis, sans-serif"
			      }
			      
			   },
			   tooltip: {
			      borderWidth: 0,
			      backgroundColor: 'rgba(219,219,216,0.8)',
			      shadow: false
			   }   
		};
  
		  Highcharts.setOptions(Highcharts.theme);
		     var chart = new Highcharts.Chart({
	        chart: {
	            type: 'column',
	            renderTo: divisionid,
	            
	        },
	        legend : {
	        	enabled : false
	        },
	        xAxis: {
	            categories: datax,
	            labels : {
	            	autoRotation : false
	            }
	        },
	        yAxis: {
	            min: 0,
	            title: {
	                text: yaxistitle
	            }
	        },
	        tooltip: {
	            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	            pointFormat:  '<td style="padding:0 font-size:9">{point.y}</td></tr>',
	            footerFormat: '</table>',
	            shared: true,
	            useHTML: true
	        },
	        plotOptions: {
	            column: {
	                pointPadding: 0.2,
	                borderWidth: 0,
	                color : Highcharts.getOptions().colors[color],
	                dataLabels:{
	                	enabled: true,
	                	color: 'teal',
	                    formatter: function () {
	                        return this.point.y;
	                    }
	                }
	            },
	            series: {
	            	pointWidth: 15
	            }

	        },
	        series: [{
	            name: 'Tokyo',
	            data: datay,
			    animation: {
	                    duration: 3000
	                }

	        }],
	        title : {
	        	text : title
	        },
	        exporting : {
	        enabled : false
	        },
	        credits : {enabled : false}
    });
	}
}

function PlotBarChart(data,divisionid,title,yaxistitle,color)  
{
		
		if(data==null)
		{
			var iDiv = document.createElement('div');
			iDiv.id = 'block';
			iDiv.className = 'block text-center no-data'
			
			
			if(color==3)
			document.getElementById('container_user_interest').appendChild(iDiv);
			

			iDiv.innerHTML =  "Please wait for our database to grow. We have something really wonderful that can blow you away.";
			return ;
		}

		else{
		 othersvalue = 0;

		  //CLEANING THE DATA & DISPLAYING TOP 5 VALUES IN DATA
		  for(var i in data){
		    if(data[i]['name']==="" || data[i]['name'] === ".." || data[i]['name']===null)
		    data.splice(i,1);
		  }
		    
		  if(data.length>6){
		    for (var i=6;i<data.length;i++)
		    {
			othersvalue += data[i]['y'];            
			data.splice(i,1);
			i--;        
		    }        
		    data[data.length - 1]['name'] = "Others" ;
		    data[data.length - 1]['y'] = $othersvalue ;
		  }

		  var datax = [];
		  var datay = [];
	  	for(var i in data){
	    datax.push(data[i]['name']);
	    datay.push(data[i]['y']);
	  	}

	     Highcharts.theme = {
			   chart: {  
			      style: {
				 fontFamily: "Dosis, sans-serif"
			      }
			      
			   },
			   tooltip: {
			      borderWidth: 0,
			      backgroundColor: 'rgba(219,219,216,0.8)',
			      shadow: false
			   }   
		};
  
		  Highcharts.setOptions(Highcharts.theme);
		     var chart = new Highcharts.Chart({
	        chart: {
	            type: 'column',
	            renderTo: divisionid,
	            
	        },
	        legend : {
	        	enabled : false
	        },
	        xAxis: {
	            categories: datax,
	            labels : {
	            	autoRotation : false
	            }
	        },
	        yAxis: {
	            min: 0,
	            title: {
	                text: yaxistitle
	            }
	        },
	        tooltip: {
	            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	            pointFormat:  '<td style="padding:0 font-size:9">{point.y}</td></tr>',
	            footerFormat: '</table>',
	            shared: true,
	            useHTML: true
	        },
	        plotOptions: {
	            column: {
	                pointPadding: 0.2,
	                borderWidth: 0,
	                color : Highcharts.getOptions().colors[color]
	            },
	            series: {
	            	pointWidth: 15
	            }

	        },
	        series: [{
	            name: 'Tokyo',
	            data: datay,
			    animation: {
	                    duration: 3000
	                }

	        }],
	        title : {
	        	text : title
	        },
	        exporting : {
	        enabled : false
	        },
	        credits : {enabled : false}
    });

	}
}



function Plot(data,divisionid,title,color){

	if(data==null)
	{
			return ;
	}

	else
	{		
			if(data.length>5){
				for(var i in data){
					if(data[i]['y']==0){
						data.splice(i,1);
					}
				}
			}
			connectorColor = 'white';
			dataLabelsColor = 'white';
			for(var i in data){
				if(data[i]['y']!=0){
					connectorColor='#ccc';
					dataLabelsColor='#666666';
				}
			}
			//if(cntr==1) return 'No response recorded';
		  Highcharts.getOptions().plotOptions.pie.colors = (function () {
		      var colors = [],
		      base = Highcharts.getOptions().colors[color],
		      i;

		      for (i = 0; i < 10; i += 1) {
			  colors.push(Highcharts.Color(base).brighten((i - 2) / 7).get());
		      }
		      return colors;
		    }());
		    
		/**
		 * Grid-light theme for Highcharts JS
		 * @author Torstein Honsi
		 */

		Highcharts.theme = {
		   colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
		      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
		   chart: {  
		      backgroundColor: "#FFFFFF",
		      style: {
			 fontFamily: "Dosis, sans-serif",
			 //textTransform: 'uppercase'
		      }
		      
		   },
		   plotOptions: {
		      candlestick: {
			 lineColor: '#404048'
		      }
		   },
		   background2: '#F0F0EA'   
	};

		// Apply the theme
		Highcharts.setOptions(Highcharts.theme);
		    // Build the chart
		    var chart = new Highcharts.Chart({
			chart: {
			    plotBackgroundColor: null,
			    plotBorderWidth: null,
			    plotShadow: false,
			    type: 'pie',
			    renderTo: divisionid,
			    
			},
			title: {
			    text: title,
			    style : {
			    	color: '#666666',
	                fontSize : '24px',
	                fontWeight : '500'
			    }
			},
			tooltip: {
			    pointFormat: '{series.name}: <b>{point.y}</b>',
			    positioner: function () {
		        return {
		            // Position the tooltip into the center of
		            // of the series, i.e. center of the pie chart
		            // 8 is the default tooltip padding
		            x: this.chart.series[0].center[0] -
		               (this.label.width / 2) + 8,
		            y: this.chart.series[0].center[1] -
		               (this.label.height / 2) + 48
		        };
    		}
			},
			legend :
			{
				itemStyle: {
                 font: '9pt Dosis, sans-serif',
                 color: '#666666',
                 fontWeight : '700',
                 textShadow : false
              	},
              	itemHoverStyle: {
                 color: '#666666'
              },
						
			},
			plotOptions: {
			    pie: {
			        allowPointSelect: true,
			        cursor: 'pointer',
			        dataLabels: {
			            enabled: true,
//			            cumulative : -0.50,
			            distance : 20,
			            format: '{point.y}',
			            style: {
			                color: '#666666',
			                textShadow:false,
			                width : '70px',
			                fontSize : '9',
			                fontWeight : '500'

			            },
			            connectorColor: connectorColor,
			            connectorPadding : 0
			        }
			},
			point: {
        	   events: {

            	   		mouseOver: function () {	
                   		this.connector.attr('stroke', this.color);
                   		this.connector.show();
               			},
               			mouseOut: function () {
                   		this.connector.attr('stroke', 'white');
                   		this.connector.hide();
               			}
           			}
       				}
			},
			series: [{
			    name: 'Attendee Count',
			    size : 200,
			    dataLabels : {
			    	padding : 15,
			    	color : dataLabelsColor
			    },
			    showInLegend: true,
			    data: data,
			    innerSize : '85%',
			    animation: {
	                    duration: 1000
	                }
			}],
			exporting: { enabled : false }
		    });
	

}}

function PlotFacebookAnalyticsChart(data,divisionid){

	if(data == null){
		return ;
		
	}

	else
	{
		var x = {}, y = [], dataarray = [],k=0;

		for (var i in data)
		{
		  var temp=[];
		  for(var z in data[i]){
		  	  var temp2=[];
		  	  temp2[0]=Date.parse(data[i][z]['x']);
		  	  temp2[1]=parseInt(data[i][z]['y']);
		  	  temp.push(temp2);
		  }
		  x[k] = {};
		  x[k]['name']=i;
		  x[k]['data']=temp;
		  x[k]['animation'] = {};
		  x[k]['animation']['duration']=3000;
		  k++;
		}
		var chart = new Highcharts.Chart({
        chart: {
            type: 'spline',
            renderTo : divisionid	
        },
	  credits: {
	  		enabled : false,
		    text: 'Hubilo.com',
		    href: 'http://www.hubilo.com'
		},
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Counts'
            }
        },
        tooltip: {
    		shared:true,
		},
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
		exporting: {enabled : false, type:'image/jpeg' }

    });
		for(var i in x){
			chart.addSeries(x[i]);
		}
		
	chart.reflow();
	}

}

function PlotFacebookPostAnalyticsBarChart(data,divisionid){
	if(divisionid=='container_facebook_post_week_analytics'){
		days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		for(var i in data['categories']){
			data['categories'][i] = days[i];
		}
	}
	Highcharts.theme = {
		colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
		      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
		chart: {  
				backgroundColor: "#FFFFFF",
				style: {
				fontFamily: "Dosis, sans-serif",
				//textTransform: 'uppercase'
			}
		},
		plotOptions: {
		    candlestick: {
				lineColor: '#404048'
		      	}
		   },
		background2: '#F0F0EA'   
	};

	// Apply the theme
	Highcharts.setOptions(Highcharts.theme);
	var chart = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: divisionid,
            
        },
        legend : {
        	enabled : true,
        	useHTML:true,
        	style:{
        		textTransform:'uppercase'
        	}
        },
        title:'',
        xAxis: {
            categories: data['categories'],
            labels : {
            	autoRotation : false
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip:{
        	shared:true
        },
        plotOptions: {
            column: {
                borderWidth: 0,
				dataLabels:{
                	enabled: true,
                	color: 'teal',
                    formatter: function () {
                    	return this.point.y;
                    }
                }
            },
        },
        exporting : {
        	enabled : false
        },
        credits : {enabled : false}
    });
    x = [],k=0;
	for(var i in data['data']){
		x[k] = [];
		x[k]['name'] = i;
		x[k]['data'] = data['data'][i];
		x[k]['animation'] = {}
		x[k]['animation']['duration']=1000;
		k++;
	}
    for(var i in x){
		chart.addSeries(x[i]);
	}

	chart.reflow();
}

function PlotMeetingSlots(data,divisionid){
	
	Highcharts.theme = {
		chart: {  
			style: {
				fontFamily: "Dosis, sans-serif",
			}
		}
	};
	slots = ["10:00AM","11:00AM","12:00PM","01:00PM","02:00PM","03:00PM","04:00PM","05:00PM","06:00PM","07:00PM","08:00PM","09:00PM"];

	var chart = new Highcharts.Chart({
		chart: {
            polar: true,
            type: 'column',
            renderTo: divisionid
        },

        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },

        pane: {
            size: '85%'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical'
        },

        xAxis: {
            tickmarkPlacement: 'on',
            categories: slots
        },

        yAxis: {
            min: 0,
            endOnTick: false,
            showLastLabel: true,
            title: {
                text: ''
            },
            labels: {
            	enabled : false,
            },
            reversedStacks: false
        },
        tooltip: {
        	formatter:function(){
        		for(var date in data){
        			for(var time in data[date]){
        				time1 = time.substr(0,7);
        				if(time1==this.x){
        					return time+'<br>'+this.series.name+' : '+'<b>'+this.y+' meetings<b>';
        				}
        			}
        		}
        	},
            valueSuffix: ' meetings'
        },

        plotOptions: {
            series: {
                stacking: 'normal',
                shadow: false,
                groupPadding: 0,
                pointPlacement: 'between'
            }
        },
        exporting : {
        	enabled : false
        },
        credits : {enabled : false}
    });
	dates = Object.keys(data);
	x = [];
	for(var date in data){
		x['name'] = date;
		x['pointPlacement'] = 'between';
		temp=[];
		for(var i in slots){
			temp[slots[i]] = 0;
		}
		for(var time in data[date]){
			time1 = time.substr(0,7);
			temp[time1] = parseInt(data[date][time]);
		}
		y = []
		for(var i in temp){
			y.push(temp[i]);
		}
		x['data']=y;
		chart.addSeries(x);
	}

	chart.reflow();
}
