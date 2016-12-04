;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-gengduo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M173.337837 310.297139l679.003572 0c24.283056 0 44.032866-21.859867 44.032866-48.733934s-19.750833-48.733934-44.032866-48.733934L173.337837 212.82927c-24.273846 0-44.023656 21.859867-44.023656 48.733934S149.063991 310.297139 173.337837 310.297139z"  ></path>'+
      ''+
      '<path d="M852.340385 463.266066 173.337837 463.266066c-24.273846 0-44.023656 21.859867-44.023656 48.733934 0 26.874067 19.750833 48.733934 44.023656 48.733934l679.003572 0c24.283056 0 44.032866-21.868053 44.032866-48.733934C896.374274 485.134119 876.616278 463.266066 852.340385 463.266066z"  ></path>'+
      ''+
      '<path d="M852.340385 713.702861 173.337837 713.702861c-24.273846 0-44.023656 21.868053-44.023656 48.733934 0 26.865881 19.750833 48.733934 44.023656 48.733934l679.003572 0c24.283056 0 44.032866-21.859867 44.032866-48.733934S876.616278 713.702861 852.340385 713.702861z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zhanghugaiyao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M558.374 543.071c72.059-35.342 121.686-109.536 121.686-195.358 0-120.057-97.111-217.387-216.9-217.387-119.802 0-216.915 97.329-216.915 217.387 0 85.824 49.631 160.017 121.696 195.358-133.233 40.804-230.144 164.991-230.144 311.875 0 9.998 8.084 18.108 18.078 18.108 9.989 0 18.075-8.108 18.075-18.108 0-160.076 129.473-289.854 289.218-289.854 159.71 0 289.2 129.778 289.2 289.854 0 9.998 8.084 18.108 18.076 18.108 9.979 0 18.078-8.108 18.078-18.108 0-146.887-96.914-271.072-230.138-311.875zM282.217 347.713c0-100.148 81.010-181.332 180.944-181.332 99.916 0 180.911 81.184 180.911 181.332 0 100.139-80.995 181.332-180.911 181.332-99.931 0-180.944-81.189-180.944-181.332z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
