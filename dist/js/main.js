const hamburgerBtn=document.querySelector(".hamburger"),navList=document.querySelector(".nav__list"),arrowBtns=document.querySelectorAll(".card__button"),footerYear=document.querySelector(".footer__year"),navLinks=document.querySelectorAll(".links"),linksArr=Array.from(navLinks),hiddenElements=document.querySelectorAll(".hide"),observer=new IntersectionObserver(e=>{e.forEach(e=>{console.log(e),e.isIntersecting&&e.target.classList.add("open")})}),toggleButton=(hiddenElements.forEach(e=>observer.observe(e)),()=>{hamburgerBtn.classList.toggle("is-active"),navList.classList.toggle("active"),document.body.classList.toggle("sticky-body")}),removeSticky=()=>{document.body.classList.remove("sticky-body"),navList.classList.remove("active"),hamburgerBtn.classList.remove("is-active")};for(const d of arrowBtns)d.addEventListener("mouseenter",function(){this.classList.add("hide")});for(const e of arrowBtns)e.addEventListener("mouseleave",function(){this.classList.remove("hide")});const currentYear=()=>{var e=(new Date).getFullYear();footerYear.innerHTML="©"+e};currentYear(),hamburgerBtn.addEventListener("click",toggleButton),linksArr.forEach(e=>{e.addEventListener("click",removeSticky)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcclxuY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X19saXN0XCIpO1xyXG5jb25zdCBhcnJvd0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRfX2J1dHRvblwiKTtcclxuY29uc3QgZm9vdGVyWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX3llYXInKTtcclxuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlua3MnKTtcclxuY29uc3QgbGlua3NBcnIgPSBBcnJheS5mcm9tKG5hdkxpbmtzKTtcclxuY29uc3QgaGlkZGVuRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlkZScpO1xyXG5cclxuLy9pb2JzZXJ2ZXJcclxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgKChlbnRyaWVzKSA9PiB7XHJcbiAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZW50cnkpXHJcbiAgICBpZihlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnb3BlbicpXHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pXHJcblxyXG5oaWRkZW5FbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xyXG4vL1xyXG5jb25zdCB0b2dnbGVCdXR0b24gPSAoKSA9PiB7XHJcbiAgaGFtYnVyZ2VyQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgbmF2TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcInN0aWNreS1ib2R5XCIpO1xyXG59O1xyXG4vL3RoaXMgZnVuYyByZW1vdmVzIGFib3ZlIHBhcmFtZXRlcnMgc28gdGhhdCdzIHdoeSBwYWdlIGlzIGFnYWluIHNjcm9sbGFibGVcclxuY29uc3QgcmVtb3ZlU3RpY2t5ID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1ib2R5XCIpO1xyXG4gIG5hdkxpc3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBoYW1idXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxufTtcclxuXHJcbmZvciAoY29uc3QgYnRuIG9mIGFycm93QnRucykge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mb3IgKGNvbnN0IGJ0biBvZiBhcnJvd0J0bnMpIHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5jb25zdCBjdXJyZW50WWVhciA9ICgpID0+IHtcclxuICBjb25zdCB5ZWFyID0gKG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gIGZvb3RlclllYXIuaW5uZXJIVE1MID0gJ8KpJyArIHllYXI7XHJcbn1cclxuXHJcbmN1cnJlbnRZZWFyKCk7XHJcbmhhbWJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQnV0dG9uKTtcclxuXHJcbmxpbmtzQXJyLmZvckVhY2gobGlua3MgPT4ge1xyXG4gIGxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVTdGlja3kpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImhhbWJ1cmdlckJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdkxpc3QiLCJhcnJvd0J0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9vdGVyWWVhciIsIm5hdkxpbmtzIiwibGlua3NBcnIiLCJBcnJheSIsImZyb20iLCJoaWRkZW5FbGVtZW50cyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImNvbnNvbGUiLCJsb2ciLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlQnV0dG9uIiwib2JzZXJ2ZSIsImVsIiwidG9nZ2xlIiwiYm9keSIsInJlbW92ZVN0aWNreSIsInJlbW92ZSIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGlzIiwiY3VycmVudFllYXIiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiaW5uZXJIVE1MIiwibGlua3MiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGFBQWVDLFNBQVNDLGNBQWMsWUFBWSxFQUNsREMsUUFBVUYsU0FBU0MsY0FBYyxZQUFZLEVBQzdDRSxVQUFZSCxTQUFTSSxpQkFBaUIsZUFBZSxFQUNyREMsV0FBYUwsU0FBU0MsY0FBYyxlQUFlLEVBQ25ESyxTQUFXTixTQUFTSSxpQkFBaUIsUUFBUSxFQUM3Q0csU0FBV0MsTUFBTUMsS0FBS0gsUUFBUSxFQUM5QkksZUFBaUJWLFNBQVNJLGlCQUFpQixPQUFPLEVBR2xETyxTQUFXLElBQUlDLHFCQUFzQixJQUN6Q0MsRUFBUUMsUUFBUSxJQUNkQyxRQUFRQyxJQUFJQyxDQUFLLEVBQ2RBLEVBQU1DLGdCQUNQRCxFQUFNRSxPQUFPQyxVQUFVQyxJQUFJLE1BQU0sQ0FFckMsQ0FBQyxDQUNILENBQUMsRUFJS0MsY0FGTlosZUFBZUksUUFBUSxHQUFRSCxTQUFTWSxRQUFRQyxDQUFFLENBQUMsRUFFOUIsS0FDbkJ6QixhQUFhcUIsVUFBVUssT0FBTyxXQUFXLEVBQ3pDdkIsUUFBUWtCLFVBQVVLLE9BQU8sUUFBUSxFQUNqQ3pCLFNBQVMwQixLQUFLTixVQUFVSyxPQUFPLGFBQWEsQ0FDOUMsR0FFTUUsYUFBZSxLQUNuQjNCLFNBQVMwQixLQUFLTixVQUFVUSxPQUFPLGFBQWEsRUFDNUMxQixRQUFRa0IsVUFBVVEsT0FBTyxRQUFRLEVBQ2pDN0IsYUFBYXFCLFVBQVVRLE9BQU8sV0FBVyxDQUMzQyxFQUVBLElBQUssTUFBTUMsS0FBTzFCLFVBQ2hCMEIsRUFBSUMsaUJBQWlCLGFBQWMsV0FDakNDLEtBQUtYLFVBQVVDLElBQUksTUFBTSxDQUMzQixDQUFDLEVBR0gsSUFBSyxNQUFNUSxLQUFPMUIsVUFDZDBCLEVBQUlDLGlCQUFpQixhQUFjLFdBQ2pDQyxLQUFLWCxVQUFVUSxPQUFPLE1BQU0sQ0FDOUIsQ0FBQyxFQUdMLE1BQU1JLFlBQWMsS0FDbEIsSUFBTUMsR0FBTyxJQUFLQyxNQUFNQyxZQUFZLEVBQ3BDOUIsV0FBVytCLFVBQVksSUFBTUgsQ0FDL0IsRUFFQUQsWUFBWSxFQUNaakMsYUFBYStCLGlCQUFpQixRQUFTUixZQUFZLEVBRW5EZixTQUFTTyxRQUFRdUIsSUFDZkEsRUFBTVAsaUJBQWlCLFFBQVNILFlBQVksQ0FDOUMsQ0FBQyJ9
