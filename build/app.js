!function(){angular.module("nark",["ngMaterial","ui.router"])}();
!function(){function e(e,t,r,o){function n(e){return{request:function(t){return e.localStorage.token&&(t.headers.Authorization="Bearer"+e.localStorage.token),t}}}t.html5Mode({enabled:!0,requireBase:!1}),o.factory("authInterceptor",n),n.$inject=["$window"],r.interceptors.push("authInterceptor"),e.state("home",{url:"/",templateUrl:"templates/home.html",controller:"HomeCtrl",controllerAs:"home"})}angular.module("app").config(e),e.$inject=["$stateProvider","$locationProvider","$httpProvider","$provide"]}();
!function(){function n(){}angular.module("app").controller("HomeCtrl",n)}();
!function(){function l(){var l=this;l.test="hello"}angular.module("app").controller("MainCtrl",l)}();
!function(){function n(n){var t=this;t.state=n}angular.module("app").controller("NavLoginCtrl",n),n.$inject=["Login"]}();
!function(){function t(t,n,o,e,i){function a(t){i.post("/auth",t).then(c,l)}function c(e){t.localStorage.token=e.token,o.isLoggedIn=!0,n.go("home")}function l(t){e.show(e.simple().content("Credentials not authenticated"))}var u=this;u.login=a}angular.module("app.user").controller("LoginCtrl",t),t.$inject=["$window","$state","Login","$mdToast","$http"]}();
!function(){function o(o,n){o.localStorage.removeItem("token"),n.isLoggedIn=!1}angular.module("app.user").controller("LogoutCtrl",o),o.$inject=["$window","Login"]}();
!function(){function l(l){l.state("login",{url:"/login",templateUrl:"templates/login.html",controller:"LoginCtrl",controllerAs:"login"}).state("logout",{url:"/logout",templateUrl:"templates/logout.html",controller:"LogoutCtrl",controllerAs:"logout"})}angular.module("app.user").config(l),l.$inject=["$stateProvider"]}();
!function(){function n(n,o){function t(n,t,u,a,e,r){401===r.status&&o.go("login")}n.$on("$stateChangeError",t)}angular.module("app.user").run(n),n.$inject=["$rootScope","$state"]}();
!function(){function n(n){var o;return n.localStorage.token&&(o=!0),{isLoggedIn:o}}angular.module("app.user").factory("Login",n),n.$inject=["$window"]}();
function create(o){o.s,o.e,o.ne;return function(o,n){n.w('<md-toolbar layout="row"><div class="md-toolbar-tools"><a ui-sref="home"><h1>HEP Rewards</h1></a><span flex></span><span ng-controller="NavLoginCtrl as nav"><md-button ui-sref="login" ng-if="!nav.state.isLoggedIn">Login</md-button><md-button ui-sref="logout" ng-if="nav.state.isLoggedIn">Logout</md-button></span></div></md-toolbar>')}}(module.exports=require("marko").c(__filename)).c(create);
function create(e){var r=(e.s,e.e,e.ne),i=e.l,t=i(require.resolve("./vendorstyles.marko"),require),a=i(require.resolve("./header.marko"),require),o=i(require.resolve("./vendorscripts.marko"),require),s=i(require.resolve("./templates.marko"),require),n=e.f,l=e.a;return function(i,c){c.w('<!DOCTYPE html> <html ng-app="app" ng-cloak><head><title>App</title>'),e.i(c,t,{}),c.w('<meta name="viewport" content="initial-scale=1"></head><body ng-controller="MainCtrl as main" layout="column">'),e.i(c,a,{}),c.w("<div ui-view></div>"),e.i(c,o,{}),e.i(c,s,{}),r(i.srcs)&&(c.w("<span>"),n(i.srcs,function(e){c.w("<script"+l("src",e)+"></script>")}),c.w("</span>")),c.w('<browser-refresh enabled="true"></browser-refresh></body></html>')}}(module.exports=require("marko").c(__filename)).c(create);
function create(e){e.s,e.e,e.ne;return function(e,t){t.w('<script type="text/ng-template" id="templates/home.html">\n<md-content class="md-padding">\n    I\'m home jasdkjfas\n</md-content>\n</script>')}}(module.exports=require("marko").c(__filename)).c(create);
function create(a){a.s,a.e,a.ne;return function(a,r){r.w('<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.js"></script><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-animate.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-aria.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/angular-material/0.10.1/angular-material.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js"></script>')}}(module.exports=require("marko").c(__filename)).c(create);
function create(e){e.s,e.e,e.ne;return function(e,a){a.w('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-material/0.10.1/angular-material.min.css">')}}(module.exports=require("marko").c(__filename)).c(create);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1haW4vY29uZmlnLmpzIiwibWFpbi9jdHJsLmhvbWUuanMiLCJtYWluL2N0cmwubWFpbi5qcyIsIm1haW4vY3RybC5uYXZsb2dpbi5qcyIsInVzZXIvY3RybC5sb2dpbi5qcyIsInVzZXIvY3RybC5sb2dvdXQuanMiLCJ1c2VyL3JvdXRlcy5qcyIsInVzZXIvcnVuLmpzIiwidXNlci9zZXJ2aWNlLmxvZ2luLmpzIiwibWFpbi92aWV3cy9oZWFkZXIubWFya28uanMiLCJtYWluL3ZpZXdzL2luZGV4Lm1hcmtvLmpzIiwibWFpbi92aWV3cy90ZW1wbGF0ZXMubWFya28uanMiLCJtYWluL3ZpZXdzL3ZlbmRvcnNjcmlwdHMubWFya28uanMiLCJtYWluL3ZpZXdzL3ZlbmRvcnN0eWxlcy5tYXJrby5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkbG9jYXRpb25Qcm92aWRlciIsIiRodHRwUHJvdmlkZXIiLCIkcHJvdmlkZSIsImF1dGhJbnRlcmNlcHRvciIsIiR3aW5kb3ciLCJyZXF1ZXN0IiwibG9jYWxTdG9yYWdlIiwidG9rZW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImh0bWw1TW9kZSIsImVuYWJsZWQiLCJyZXF1aXJlQmFzZSIsImZhY3RvcnkiLCIkaW5qZWN0IiwiaW50ZXJjZXB0b3JzIiwicHVzaCIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwiY29udHJvbGxlckFzIiwiSG9tZUN0cmwiLCJNYWluQ3RybCIsInNlbGYiLCJ0aGlzIiwidGVzdCIsIk5hdkxvZ2luQ3RybCIsIkxvZ2luIiwiTG9naW5DdHJsIiwiJHN0YXRlIiwiJG1kVG9hc3QiLCIkaHR0cCIsImxvZ2luIiwiY3JlZGVudGlhbHMiLCJwb3N0IiwidGhlbiIsImdldFJlc3BvbnNlIiwib25FcnIiLCJyZXNwb25zZSIsImlzTG9nZ2VkSW4iLCJnbyIsImVyciIsInNob3ciLCJzaW1wbGUiLCJjb250ZW50IiwiTG9nb3V0Q3RybCIsInJlbW92ZUl0ZW0iLCJydW4iLCIkcm9vdFNjb3BlIiwib25TdGF0ZUNoYW5nZUVycm9yIiwiZXZlbnQiLCJ0b1N0YXRlIiwidG9QYXJhbXMiLCJmcm9tU3RhdGUiLCJmcm9tUGFyYW1zIiwiZXJyb3IiLCJzdGF0dXMiLCIkb24iLCJsb2dpbkZhY3RvcnkiLCJjcmVhdGUiLCJfX2hlbHBlcnMiLCJzIiwiZSIsIm5lIiwiZGF0YSIsIm91dCIsInciLCJleHBvcnRzIiwicmVxdWlyZSIsImMiLCJfX2ZpbGVuYW1lIiwibm90RW1wdHkiLCJfX2xvYWRUZW1wbGF0ZSIsImwiLCJfX3ZlbmRvcnN0eWxlc19tYXJrbyIsInJlc29sdmUiLCJfX2hlYWRlcl9tYXJrbyIsIl9fdmVuZG9yc2NyaXB0c19tYXJrbyIsIl9fdGVtcGxhdGVzX21hcmtvIiwiZm9yRWFjaCIsImYiLCJhdHRyIiwiYSIsImkiLCJzcmNzIiwic3JjIl0sIm1hcHBpbmdzIjoiQ0FBQSxXQUNJQSxRQUNLQyxPQUFPLFFBQ0osYUFDQTtDQ0paLFdBS0ksUUFBU0MsR0FBUUMsRUFBZ0JDLEVBQW1CQyxFQUFjQyxHQVU5RCxRQUFTQyxHQUFnQkMsR0FDckIsT0FDSUMsUUFBUyxTQUFTUCxHQUlkLE1BSElNLEdBQVFFLGFBQWFDLFFBQ3JCVCxFQUFPVSxRQUFRQyxjQUFnQixTQUFXTCxFQUFRRSxhQUFhQyxPQUU1RFQsSUFmbkJFLEVBQWtCVSxXQUNkQyxTQUFhLEVBQ2JDLGFBQWEsSUFHakJWLEVBQVNXLFFBQVEsa0JBQWtCVixHQUVuQ0EsRUFBZ0JXLFNBQVMsV0FjekJiLEVBQWNjLGFBQWFDLEtBQUssbUJBRWhDakIsRUFDS2tCLE1BQU0sUUFDSEMsSUFBSyxJQUNMQyxZQUFhLHNCQUNiQyxXQUFZLFdBQ1pDLGFBQWMsU0FqQzFCekIsUUFDS0MsT0FBTyxPQUNQQyxPQUFPQSxHQUNaQSxFQUFPZ0IsU0FBVyxpQkFBaUIsb0JBQW9CLGdCQUFnQjtDQ0ozRSxXQUtJLFFBQVNRLE1BSlQx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QixFQUFFbEIsRUFBS1csTUFFakJYLEVBQUlDLEVBQUUsdUJBQ05OLEVBQVV1QixFQUFFbEIsRUFBS1ksTUFDakJqQixFQUFVdUIsRUFBRWxCLEVBQUthLE1BRWJQLEVBQVNQLEVBQUtvQixRQUNoQm5CLEVBQUlDLEVBQUUsVUFFTmEsRUFBUWYsRUFBS29CLEtBQU0sU0FBU0MsR0FDMUJwQixFQUFJQyxFQUFFLFVBQ0plLEVBQUssTUFBT0ksR0FDWixnQkFHSnBCLEVBQUlDLEVBQUUsWUFHUkQsRUFBSUMsRUFBRSxzRUFHVHRFLE9BQU91RSxRQUFVQyxRQUFRLFNBQVNDLEVBQUVDLGFBQWFELEVBQUVWO0FDdENwRCxRQUFTQSxRQUFPQyxHQUNKQSxFQUFVQyxFQUNSRCxFQUFVRSxFQUNQRixFQUFVRyxFQUV6QixPQUFPLFVBQWdCQyxFQUFNQyxHQUMzQkEsRUFBSUMsRUFBRSxtSkFHVHRFLE9BQU91RSxRQUFVQyxRQUFRLFNBQVNDLEVBQUVDLGFBQWFELEVBQUVWO0FDVHBELFFBQVNBLFFBQU9DLEdBQ0pBLEVBQVVDLEVBQ1JELEVBQVVFLEVBQ1BGLEVBQVVHLEVBRXpCLE9BQU8sVUFBZ0JDLEVBQU1DLEdBQzNCQSxFQUFJQyxFQUFFLGlnQkFHVHRFLE9BQU91RSxRQUFVQyxRQUFRLFNBQVNDLEVBQUVDLGFBQWFELEVBQUVWO0FDVHBELFFBQVNBLFFBQU9DLEdBQ0pBLEVBQVVDLEVBQ1JELEVBQVVFLEVBQ1BGLEVBQVVHLEVBRXpCLE9BQU8sVUFBZ0JDLEVBQU1DLEdBQzNCQSxFQUFJQyxFQUFFLDRIQUdUdEUsT0FBT3VFLFFBQVVDLFFBQVEsU0FBU0MsRUFBRUMsYUFBYUQsRUFBRVYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnbmFyaycsW1xuICAgICAgICAgICAgJ25nTWF0ZXJpYWwnLFxuICAgICAgICAgICAgJ3VpLnJvdXRlcidcbiAgICAgICAgXSlcbn0pKClcbiIsIihmdW5jdGlvbigpIHtcbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5jb25maWcoY29uZmlnKVxuICAgIGNvbmZpZy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlcicsJyRsb2NhdGlvblByb3ZpZGVyJywnJGh0dHBQcm92aWRlcicsJyRwcm92aWRlJ11cbiAgICBmdW5jdGlvbiBjb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlciwgJGh0dHBQcm92aWRlciwkcHJvdmlkZSkge1xuICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xuICAgICAgICAgICAgZW5hYmxlZDogICAgIHRydWUsXG4gICAgICAgICAgICByZXF1aXJlQmFzZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgICRwcm92aWRlLmZhY3RvcnkoJ2F1dGhJbnRlcmNlcHRvcicsYXV0aEludGVyY2VwdG9yKVxuICAgIFxuICAgICAgICBhdXRoSW50ZXJjZXB0b3IuJGluamVjdD1bJyR3aW5kb3cnXVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gYXV0aEludGVyY2VwdG9yKCR3aW5kb3cpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdDogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCZWFyZXInICsgJHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XG4gICAgICAgIFxuICAgICAgICAkc3RhdGVQcm92aWRlclxuICAgICAgICAgICAgLnN0YXRlKCdob21lJywge1xuICAgICAgICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2hvbWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDdHJsJyxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICdob21lJ1xuICAgICAgICAgICAgfSlcbiAgICB9XG59KSgpXG4iLCIoZnVuY3Rpb24oKSB7XG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdhcHAnKVxuICAgICAgICAuY29udHJvbGxlcignSG9tZUN0cmwnLEhvbWVDdHJsKVxuICAgIFxuICAgIGZ1bmN0aW9uIEhvbWVDdHJsKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB9XG59KSgpIiwiKGZ1bmN0aW9uKCkge1xuICAgIGFuZ3VsYXJcbiAgICAgICAgLm1vZHVsZSgnYXBwJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ01haW5DdHJsJyxNYWluQ3RybClcbiAgICBcbiAgICBmdW5jdGlvbiBNYWluQ3RybCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYudGVzdCA9ICdoZWxsbydcbiAgICAgICAgXG4gICAgfVxufSkoKSIsIihmdW5jdGlvbigpIHtcbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5jb250cm9sbGVyKCdOYXZMb2dpbkN0cmwnLE5hdkxvZ2luQ3RybClcbiAgICBcbiAgICBOYXZMb2dpbkN0cmwuJGluamVjdCA9IFsnTG9naW4nXVxuICAgIFxuICAgIGZ1bmN0aW9uIE5hdkxvZ2luQ3RybChMb2dpbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5zdGF0ZSA9IExvZ2luXG4gICAgICAgIFxuICAgIH1cbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdhcHAudXNlcicpXG4gICAgICAgIC5jb250cm9sbGVyKCdMb2dpbkN0cmwnLExvZ2luQ3RybClcbiAgICBcbiAgICBMb2dpbkN0cmwuJGluamVjdCA9IFsnJHdpbmRvdycsJyRzdGF0ZScsICdMb2dpbicsJyRtZFRvYXN0JywnJGh0dHAnXVxuICAgIFxuICAgIGZ1bmN0aW9uIExvZ2luQ3RybCgkd2luZG93LCAkc3RhdGUsIExvZ2luLCAkbWRUb2FzdCwgJGh0dHApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYubG9naW4gPSBsb2dpblxuXG4gICAgICAgIGZ1bmN0aW9uIGxvZ2luKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXV0aCcsIGNyZWRlbnRpYWxzKVxuICAgICAgICAgICAgICAgIC50aGVuKGdldFJlc3BvbnNlLG9uRXJyKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRSZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgICAgICAgJHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS50b2tlblxuICAgICAgICAgICAgTG9naW4uaXNMb2dnZWRJbiA9IHRydWVcbiAgICAgICAgICAgICRzdGF0ZS5nbygnaG9tZScpXG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25FcnIoZXJyKSB7XG4gICAgICAgICAgICAkbWRUb2FzdC5zaG93KFxuICAgICAgICAgICAgICAgICRtZFRvYXN0LnNpbXBsZSgpXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50KCdDcmVkZW50aWFscyBub3QgYXV0aGVudGljYXRlZCcpXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59KSgpXG4iLCIoZnVuY3Rpb24oKSB7XG4gICAgYW5ndWxhclxuICAgICAgICAubW9kdWxlKCdhcHAudXNlcicpXG4gICAgICAgIC5jb250cm9sbGVyKCdMb2dvdXRDdHJsJyxMb2dvdXRDdHJsKVxuICAgIExvZ291dEN0cmwuJGluamVjdCA9IFsnJHdpbmRvdycsICdMb2dpbiddXG4gICAgZnVuY3Rpb24gTG9nb3V0Q3RybCgkd2luZG93LCBMb2dpbikge1xuICAgICAgICAkd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgICAgIExvZ2luLmlzTG9nZ2VkSW4gPSBmYWxzZVxuICAgIH1cbn0pKCkiLCIoZnVuY3Rpb24oKXtcblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ2FwcC51c2VyJylcblx0XHQuY29uZmlnKGNvbmZpZylcblx0Y29uZmlnLiRpbmplY3Q9Wyckc3RhdGVQcm92aWRlciddXG5cdGZ1bmN0aW9uIGNvbmZpZygkc3RhdGVQcm92aWRlcikge1xuXHQkc3RhdGVQcm92aWRlclxuXHRcdC5zdGF0ZSgnbG9naW4nLHtcblx0XHRcdHVybDonL2xvZ2luJyxcblx0XHRcdHRlbXBsYXRlVXJsOid0ZW1wbGF0ZXMvbG9naW4uaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOidMb2dpbkN0cmwnLFxuXHRcdFx0Y29udHJvbGxlckFzOidsb2dpbidcblx0XHR9KVxuXHRcdC5zdGF0ZSgnbG9nb3V0Jyx7XG5cdFx0XHR1cmw6Jy9sb2dvdXQnLFxuXHRcdFx0dGVtcGxhdGVVcmw6J3RlbXBsYXRlcy9sb2dvdXQuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOidMb2dvdXRDdHJsJyxcblx0XHRcdGNvbnRyb2xsZXJBczonbG9nb3V0J1xuXHRcdH0pXG5cdH1cbn0pKClcbiIsIihmdW5jdGlvbigpIHtcblx0YW5ndWxhclxuXHRcdC5tb2R1bGUoJ2FwcC51c2VyJylcblx0XHQucnVuKHJ1bilcblx0XG5cdHJ1bi4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywnJHN0YXRlJ11cblx0ZnVuY3Rpb24gcnVuKCRyb290U2NvcGUsICRzdGF0ZSkge1xuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VFcnJvcicsb25TdGF0ZUNoYW5nZUVycm9yKVxuXHRcdGZ1bmN0aW9uIG9uU3RhdGVDaGFuZ2VFcnJvcihldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcywgZXJyb3IpIHtcblx0XHRcdGlmIChlcnJvci5zdGF0dXMgPT09IDQwMSkge1xuXHRcdFx0XHQkc3RhdGUuZ28oJ2xvZ2luJylcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pKClcbiIsIihmdW5jdGlvbigpIHtcbiAgICBhbmd1bGFyXG4gICAgICAgIC5tb2R1bGUoJ2FwcC51c2VyJylcbiAgICAgICAgLmZhY3RvcnkoJ0xvZ2luJyxsb2dpbkZhY3RvcnkpXG4gICAgXG4gICAgbG9naW5GYWN0b3J5LiRpbmplY3QgPSBbJyR3aW5kb3cnXVxuICAgIFxuICAgIGZ1bmN0aW9uIGxvZ2luRmFjdG9yeSgkd2luZG93KSB7XG4gICAgICAgIHZhciBpc0xvZ2dlZEluO1xuICAgICAgICBpZiAoJHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4pIHtcbiAgICAgICAgICAgIGlzTG9nZ2VkSW4gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46IGlzTG9nZ2VkSW5cbiAgICAgICAgfVxuICAgIH1cbn0pKCkiLCJmdW5jdGlvbiBjcmVhdGUoX19oZWxwZXJzKSB7XG4gIHZhciBzdHIgPSBfX2hlbHBlcnMucyxcbiAgICAgIGVtcHR5ID0gX19oZWxwZXJzLmUsXG4gICAgICBub3RFbXB0eSA9IF9faGVscGVycy5uZTtcblxuICByZXR1cm4gZnVuY3Rpb24gcmVuZGVyKGRhdGEsIG91dCkge1xuICAgIG91dC53KCc8bWQtdG9vbGJhciBsYXlvdXQ9XCJyb3dcIj48ZGl2IGNsYXNzPVwibWQtdG9vbGJhci10b29sc1wiPjxhIHVpLXNyZWY9XCJob21lXCI+PGgxPkhFUCBSZXdhcmRzPC9oMT48L2E+PHNwYW4gZmxleD48L3NwYW4+PHNwYW4gbmctY29udHJvbGxlcj1cIk5hdkxvZ2luQ3RybCBhcyBuYXZcIj48bWQtYnV0dG9uIHVpLXNyZWY9XCJsb2dpblwiIG5nLWlmPVwiIW5hdi5zdGF0ZS5pc0xvZ2dlZEluXCI+TG9naW48L21kLWJ1dHRvbj48bWQtYnV0dG9uIHVpLXNyZWY9XCJsb2dvdXRcIiBuZy1pZj1cIm5hdi5zdGF0ZS5pc0xvZ2dlZEluXCI+TG9nb3V0PC9tZC1idXR0b24+PC9zcGFuPjwvZGl2PjwvbWQtdG9vbGJhcj4nKTtcbiAgfTtcbn1cbihtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrb1wiKS5jKF9fZmlsZW5hbWUpKS5jKGNyZWF0ZSk7IiwiZnVuY3Rpb24gY3JlYXRlKF9faGVscGVycykge1xuICB2YXIgc3RyID0gX19oZWxwZXJzLnMsXG4gICAgICBlbXB0eSA9IF9faGVscGVycy5lLFxuICAgICAgbm90RW1wdHkgPSBfX2hlbHBlcnMubmUsXG4gICAgICBfX2xvYWRUZW1wbGF0ZSA9IF9faGVscGVycy5sLFxuICAgICAgX192ZW5kb3JzdHlsZXNfbWFya28gPSBfX2xvYWRUZW1wbGF0ZShyZXF1aXJlLnJlc29sdmUoXCIuL3ZlbmRvcnN0eWxlcy5tYXJrb1wiKSwgcmVxdWlyZSksXG4gICAgICBfX2hlYWRlcl9tYXJrbyA9IF9fbG9hZFRlbXBsYXRlKHJlcXVpcmUucmVzb2x2ZShcIi4vaGVhZGVyLm1hcmtvXCIpLCByZXF1aXJlKSxcbiAgICAgIF9fdmVuZG9yc2NyaXB0c19tYXJrbyA9IF9fbG9hZFRlbXBsYXRlKHJlcXVpcmUucmVzb2x2ZShcIi4vdmVuZG9yc2NyaXB0cy5tYXJrb1wiKSwgcmVxdWlyZSksXG4gICAgICBfX3RlbXBsYXRlc19tYXJrbyA9IF9fbG9hZFRlbXBsYXRlKHJlcXVpcmUucmVzb2x2ZShcIi4vdGVtcGxhdGVzLm1hcmtvXCIpLCByZXF1aXJlKSxcbiAgICAgIGZvckVhY2ggPSBfX2hlbHBlcnMuZixcbiAgICAgIGF0dHIgPSBfX2hlbHBlcnMuYTtcblxuICByZXR1cm4gZnVuY3Rpb24gcmVuZGVyKGRhdGEsIG91dCkge1xuICAgIG91dC53KCc8IURPQ1RZUEUgaHRtbD4gPGh0bWwgbmctYXBwPVwiYXBwXCIgbmctY2xvYWs+PGhlYWQ+PHRpdGxlPkFwcDwvdGl0bGU+Jyk7XG4gICAgX19oZWxwZXJzLmkob3V0LCBfX3ZlbmRvcnN0eWxlc19tYXJrbywge30pO1xuXG4gICAgb3V0LncoJzxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTFcIj48L2hlYWQ+PGJvZHkgbmctY29udHJvbGxlcj1cIk1haW5DdHJsIGFzIG1haW5cIiBsYXlvdXQ9XCJjb2x1bW5cIj4nKTtcbiAgICBfX2hlbHBlcnMuaShvdXQsIF9faGVhZGVyX21hcmtvLCB7fSk7XG5cbiAgICBvdXQudygnPGRpdiB1aS12aWV3PjwvZGl2PicpO1xuICAgIF9faGVscGVycy5pKG91dCwgX192ZW5kb3JzY3JpcHRzX21hcmtvLCB7fSk7XG4gICAgX19oZWxwZXJzLmkob3V0LCBfX3RlbXBsYXRlc19tYXJrbywge30pO1xuXG4gICAgaWYgKG5vdEVtcHR5KGRhdGEuc3JjcykpIHtcbiAgICAgIG91dC53KCc8c3Bhbj4nKTtcblxuICAgICAgZm9yRWFjaChkYXRhLnNyY3MsIGZ1bmN0aW9uKHNyYykge1xuICAgICAgICBvdXQudygnPHNjcmlwdCcgK1xuICAgICAgICAgIGF0dHIoXCJzcmNcIiwgc3JjKSArXG4gICAgICAgICAgJz48L3NjcmlwdD4nKTtcbiAgICAgIH0pO1xuXG4gICAgICBvdXQudygnPC9zcGFuPicpO1xuICAgIH1cblxuICAgIG91dC53KCc8YnJvd3Nlci1yZWZyZXNoIGVuYWJsZWQ9XCJ0cnVlXCI+PC9icm93c2VyLXJlZnJlc2g+PC9ib2R5PjwvaHRtbD4nKTtcbiAgfTtcbn1cbihtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrb1wiKS5jKF9fZmlsZW5hbWUpKS5jKGNyZWF0ZSk7IiwiZnVuY3Rpb24gY3JlYXRlKF9faGVscGVycykge1xuICB2YXIgc3RyID0gX19oZWxwZXJzLnMsXG4gICAgICBlbXB0eSA9IF9faGVscGVycy5lLFxuICAgICAgbm90RW1wdHkgPSBfX2hlbHBlcnMubmU7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHJlbmRlcihkYXRhLCBvdXQpIHtcbiAgICBvdXQudygnPHNjcmlwdCB0eXBlPVwidGV4dC9uZy10ZW1wbGF0ZVwiIGlkPVwidGVtcGxhdGVzL2hvbWUuaHRtbFwiPlxcbjxtZC1jb250ZW50IGNsYXNzPVwibWQtcGFkZGluZ1wiPlxcbiAgICBJXFwnbSBob21lIGphc2RramZhc1xcbjwvbWQtY29udGVudD5cXG48L3NjcmlwdD4nKTtcbiAgfTtcbn1cbihtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrb1wiKS5jKF9fZmlsZW5hbWUpKS5jKGNyZWF0ZSk7IiwiZnVuY3Rpb24gY3JlYXRlKF9faGVscGVycykge1xuICB2YXIgc3RyID0gX19oZWxwZXJzLnMsXG4gICAgICBlbXB0eSA9IF9faGVscGVycy5lLFxuICAgICAgbm90RW1wdHkgPSBfX2hlbHBlcnMubmU7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHJlbmRlcihkYXRhLCBvdXQpIHtcbiAgICBvdXQudygnPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2FuZ3VsYXJqcy8xLjQuMy9hbmd1bGFyLmpzXCI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2FuZ3VsYXJqcy8xLjQuMy9hbmd1bGFyLWFuaW1hdGUubWluLmpzXCI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2FuZ3VsYXJqcy8xLjQuMy9hbmd1bGFyLWFyaWEubWluLmpzXCI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbmd1bGFyLW1hdGVyaWFsLzAuMTAuMS9hbmd1bGFyLW1hdGVyaWFsLm1pbi5qc1wiPjwvc2NyaXB0PjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW5ndWxhci11aS1yb3V0ZXIvMC4yLjE1L2FuZ3VsYXItdWktcm91dGVyLm1pbi5qc1wiPjwvc2NyaXB0PicpO1xuICB9O1xufVxuKG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtvXCIpLmMoX19maWxlbmFtZSkpLmMoY3JlYXRlKTsiLCJmdW5jdGlvbiBjcmVhdGUoX19oZWxwZXJzKSB7XG4gIHZhciBzdHIgPSBfX2hlbHBlcnMucyxcbiAgICAgIGVtcHR5ID0gX19oZWxwZXJzLmUsXG4gICAgICBub3RFbXB0eSA9IF9faGVscGVycy5uZTtcblxuICByZXR1cm4gZnVuY3Rpb24gcmVuZGVyKGRhdGEsIG91dCkge1xuICAgIG91dC53KCc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuZ3VsYXItbWF0ZXJpYWwvMC4xMC4xL2FuZ3VsYXItbWF0ZXJpYWwubWluLmNzc1wiPicpO1xuICB9O1xufVxuKG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtvXCIpLmMoX19maWxlbmFtZSkpLmMoY3JlYXRlKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
