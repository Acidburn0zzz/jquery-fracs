(function(a){a(function(){$body=a("body");$panelFracs=a("#panel .fracs");for(var c=1;c<10;c++){(function(){var g=a("<section title='scroll to this element' />").appendTo($body).width(c*300).height(Math.round(Math.random()*600)+100);var e=a("<div class='label'><span class='idx'>#"+c+"</span></div>").appendTo(g);var f=a("<ul />").appendTo(e);f.append(a("<li><span class='info possible' /> of max possible visibility</li>"));f.append(a("<li><span class='info visible' /> visible</li>"));f.append(a("<li><span class='info viewport' /> of viewport</li>"));var i=a("<li>visible rect <span class='info dims' /><ul /></li>").appendTo(f).find("ul");i.append(a("<li>document space <span class='info rect' /></li>"));i.append(a("<li>element space <span class='info rectElementSpace' /></li>"));i.append(a("<li>viewport space <span class='info rectViewportSpace' /></li>"));var h=a("<li class='section' title='scroll to this element' />").appendTo($panelFracs);h.append(a("<span class='idx'>"+c+"</span>"));h.append(a("<span class='info possible' /><span class='info visible' /><span class='info viewport' />"));g.add(h).click(function(){g.fracs("scrollTo",50,50,500)});g.data("panel",h)})()}a("section").fracs(function(g){var f=a(this);var h=f.data("panel");var e=f.find(".label");f.add(h.find(".idx")).css("background-color","rgba(100,200,100,"+g.possible+")");h.find(".visible").text(a.fracs.round(g.visible,4));h.find(".viewport").text(a.fracs.round(g.viewport,4));h.find(".possible").text(a.fracs.round(g.possible,4));h.find(".info").stop(true).css("background-color","rgb(250,250,150)").animate({"background-color":"#fff"},1000);e.find(".visible").text(a.fracs.round(g.visible*100,1)+"%");e.find(".viewport").text(a.fracs.round(g.viewport*100,1)+"%");e.find(".possible").text(a.fracs.round(g.possible*100,1)+"%");if(g.rects===undefined){e.find(".rects").text("undefined")}else{e.find(".dims").text("w/h: "+g.rects.document.width+"x"+g.rects.document.height);e.find(".rect").text("l/t: "+g.rects.document.left+","+g.rects.document.top);e.find(".rectElementSpace").text("l/t: "+g.rects.element.left+","+g.rects.element.top);e.find(".rectViewportSpace").text("l/t: "+g.rects.viewport.left+","+g.rects.viewport.top);e.stop(true).animate({left:g.rects.element.left+"px",top:g.rects.element.top+"px"},100)}});a("section").fracs("check");a("section").eq(5).fracs("unbind").find(".label").empty().append("<span class='idx'>#6</span> (unbound)");a("section").eq(7).fracs(function(e){if(e.possible==1){console.log("#8 max possible visibility")}});var b=a("section");var d=b.eq(3).add(b.eq(4)).add(b.eq(5)).add(b.eq(6)).add(b.eq(7));d.fracs("max","possible",function(e){a("#panel .groups .possible").text(e!==undefined?a(e.element).find(".idx").text():"undefined").stop(true).css("background-color","rgb(250,250,150)").animate({"background-color":"#fff"},1000)});d.fracs("max","visible",function(e){a("#panel .groups .visible").text(e!==undefined?a(e.element).find(".idx").text():"undefined").stop(true).css("background-color","rgb(250,250,150)").animate({"background-color":"#fff"},1000)});d.fracs("max","viewport",function(e){a("#panel .groups .viewport").text(e!==undefined?a(e.element).find(".idx").text():"undefined").stop(true).css("background-color","rgb(250,250,150)").animate({"background-color":"#fff"},1000)})})})(jQuery);