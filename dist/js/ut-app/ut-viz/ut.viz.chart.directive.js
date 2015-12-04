(function (module) {

  "use strict";

  var utScatterChart = function(d3) {

    var createSvg = function(element, attrs, transclude) {
      var svg = d3.select(element[0]).append('svg');
      
      svg.append('g').attr('class', 'data');
      svg.append('g').attr('class', 'x-axis axis');
      svg.append('g').attr('class', 'y-axis axis');

      var width = 600;
      var height = 300;

      var draw = function(svg, width, height, data) {

        // console.log("data", data);

        var margin = 30;

        svg
          .attr('width', width)
          .attr('height', height);

        var xScale = d3.time.scale();
        xScale
          .domain([
            d3.min(data, function(d) { return d.time; }),
            d3.max(data, function(d) { return d.time; })
          ])
          .range([margin, width - margin]);

        var xAxis = d3.svg.axis()
          .scale(xScale)
          .orient('top')
          .tickFormat(d3.time.format('%S'));

        svg.select('.x-axis')
          .attr("transform", "translate(0, " + margin + ")")
          .call(xAxis);

        var yScale = d3.time.scale();
        yScale
          .domain([0, d3.max(data, function(d) { return d.visitors; })])
          .range([margin, height - margin]);

        var yAxis = d3.svg.axis()
          .scale(yScale)
          .orient('left')
          .tickFormat(d3.format('f'));

        svg.select('.y-axis')
          .attr("transform", "translate(" + margin + ")")
          .call(yAxis);

        svg.select('.data')
          .selectAll('circle').data(data)
          .enter()
          .append('circle');

        svg.select('.data')
          .selectAll('circle').data(data)
          .attr('r', 2.5)
          .attr('cx', function(d) { return xScale(d.time); })
          .attr('cy', function(d) { return yScale(d.visitors); });
      };

      return function(scope, element, attrs){  
        scope.$watch('data', function(newVal, oldVal, scope) {
          draw(svg, width, height, scope.data);
        }, true);

      };
    }

    return {
      restrict: "E",
      scope: { 
        data: '='
      },
      compile: createSvg
      // lin: function(scope, element, attrs){  }
    };
  };

  module.directive("utScatterChart", ["d3", utScatterChart]);

}(angular.module("ut.viz")));