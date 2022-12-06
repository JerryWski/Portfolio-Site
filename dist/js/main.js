const hamburgerBtn=document.querySelector(".hamburger"),navList=document.querySelector(".nav__list"),arrowBtns=document.querySelectorAll(".card__button"),footerYear=document.querySelector(".footer__year"),toggleButton=()=>{hamburgerBtn.classList.toggle("is-active"),navList.classList.toggle("active"),document.body.classList.toggle("sticky-body")},removeSticky=()=>{document.body.classList.remove("sticky-body"),navList.classList.remove("active"),hamburgerBtn.classList.remove("is-active")};for(const a of arrowBtns)a.addEventListener("mouseenter",function(){this.classList.add("hide")});for(const b of arrowBtns)b.addEventListener("mouseleave",function(){this.classList.remove("hide")});const currentYear=()=>{var e=(new Date).getFullYear();footerYear.innerHTML="©"+e};currentYear(),hamburgerBtn.addEventListener("click",toggleButton),navList.addEventListener("click",removeSticky);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcclxuY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X19saXN0XCIpO1xyXG5jb25zdCBhcnJvd0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRfX2J1dHRvblwiKTtcclxuY29uc3QgZm9vdGVyWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX3llYXInKTtcclxuXHJcbmNvbnN0IHRvZ2dsZUJ1dHRvbiA9ICgpID0+IHtcclxuICBoYW1idXJnZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxuICBuYXZMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwic3RpY2t5LWJvZHlcIik7XHJcbn07XHJcbi8vdGhpcyBmdW5jIHJlbW92ZXMgYWJvdmUgcGFyYW1ldGVycyBzbyB0aGF0J3Mgd2h5IHBhZ2UgaXMgYWdhaW4gc2Nyb2xsYWJsZVxyXG5jb25zdCByZW1vdmVTdGlja3kgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LWJvZHlcIik7XHJcbiAgbmF2TGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGhhbWJ1cmdlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG59O1xyXG5cclxuZm9yIChjb25zdCBidG4gb2YgYXJyb3dCdG5zKSB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZvciAoY29uc3QgYnRuIG9mIGFycm93QnRucykge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbmNvbnN0IGN1cnJlbnRZZWFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHllYXIgPSAobmV3IERhdGUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgZm9vdGVyWWVhci5pbm5lckhUTUwgPSAnwqknICsgeWVhcjtcclxufVxyXG5cclxuY3VycmVudFllYXIoKTtcclxuaGFtYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVCdXR0b24pO1xyXG5uYXZMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVTdGlja3kpO1xyXG4iXSwibmFtZXMiOlsiaGFtYnVyZ2VyQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2TGlzdCIsImFycm93QnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb290ZXJZZWFyIiwidG9nZ2xlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYm9keSIsInJlbW92ZVN0aWNreSIsInJlbW92ZSIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGlzIiwiYWRkIiwiY3VycmVudFllYXIiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxhQUFlQyxTQUFTQyxjQUFjLFlBQVksRUFDbERDLFFBQVVGLFNBQVNDLGNBQWMsWUFBWSxFQUM3Q0UsVUFBWUgsU0FBU0ksaUJBQWlCLGVBQWUsRUFDckRDLFdBQWFMLFNBQVNDLGNBQWMsZUFBZSxFQUVuREssYUFBZSxLQUNuQlAsYUFBYVEsVUFBVUMsT0FBTyxXQUFXLEVBQ3pDTixRQUFRSyxVQUFVQyxPQUFPLFFBQVEsRUFDakNSLFNBQVNTLEtBQUtGLFVBQVVDLE9BQU8sYUFBYSxDQUM5QyxFQUVNRSxhQUFlLEtBQ25CVixTQUFTUyxLQUFLRixVQUFVSSxPQUFPLGFBQWEsRUFDNUNULFFBQVFLLFVBQVVJLE9BQU8sUUFBUSxFQUNqQ1osYUFBYVEsVUFBVUksT0FBTyxXQUFXLENBQzNDLEVBRUEsSUFBSyxNQUFNQyxLQUFPVCxVQUNoQlMsRUFBSUMsaUJBQWlCLGFBQWMsV0FDakNDLEtBQUtQLFVBQVVRLElBQUksTUFBTSxDQUMzQixDQUFDLEVBR0gsSUFBSyxNQUFNSCxLQUFPVCxVQUNkUyxFQUFJQyxpQkFBaUIsYUFBYyxXQUNqQ0MsS0FBS1AsVUFBVUksT0FBTyxNQUFNLENBQzlCLENBQUMsRUFHTCxNQUFNSyxZQUFjLEtBQ2xCLElBQU1DLEdBQU8sSUFBS0MsTUFBTUMsWUFBWSxFQUNwQ2QsV0FBV2UsVUFBWSxJQUFNSCxDQUMvQixFQUVBRCxZQUFZLEVBQ1pqQixhQUFhYyxpQkFBaUIsUUFBU1AsWUFBWSxFQUNuREosUUFBUVcsaUJBQWlCLFFBQVNILFlBQVkifQ==
