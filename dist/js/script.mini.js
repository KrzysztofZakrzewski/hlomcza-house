"use strict";var currentPhoto,photosArr=[],photos=document.querySelectorAll(".img"),galleryContainer=document.querySelector(".gallery-container"),galleryWrapper=document.querySelector(".gallery-wrapper"),galleryPhoto=document.querySelector(".gallery__photo");function colectAllPhotos(){}photos.forEach(function(e,o){e.addEventListener("click",function(e){galleryContainer.classList.remove("close-galery"),galleryPhoto.src=e.target.src,currentPhoto=o,photos.forEach(function(e){e.setAttribute("tabindex",-1)})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJnYWxsZXJ5UGhvdG8iLCJwaG90b3NBcnIiLCJwaG90b3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeUNvbnRhaW5lciIsImNvbGVjdEFsbFBob3RvcyIsInNob3dQaG90b0luUG9wdXAiLCJpbmRleCIsInBob3RvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInNyYyIsInRhcmdldCIsImN1cnJlbnRQaG90byIsImZvckVhY2giLCJlbGVtZW50Iiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiYUFBQSxJQU1JQSxhQU5KQyxVQUFBLEdBR0lDLE9BQVNDLFNBQVNDLGlCQUFpQixNQUFNLEVBRHZDSCxpQkFBY0UsU0FBQUUsY0FBQSxvQkFBQSxFQUNoQkgsZUFBa0JFLFNBQUFBLGNBQXdCLGtCQUFBLEVBQ3hDRSxhQUFBQSxTQUFtQkgsY0FBU0UsaUJBQWMsRUFNaEQsU0FBU0UsbUJBRVRMLE9BQ09NLFFBQUFBLFNBQUFBLEVBQWdCQyxHQVV0QkMsRUFBTUMsaUJBQWlCLFFBVExDLFNBQUFBLEdBQWpCTixpQkFDYU8sVUFBUUMsT0FBVSxjQUFBLEVBQS9CZCxhQUNBZSxJQUFlTixFQUFBQSxPQUFLSSxJQUFwQkUsYUFDT0MsRUFBUGQsT0FDQ2UsUUFBUUMsU0FBQUEsR0FBUkQsRUFDQ0MsYUFBQSxXQUFBLENBQUEsQ0FBQSxDQUFGLENBQUMsQ0FFRixDQUVnRCxDQU9qRCxDQUFDIiwiZmlsZSI6InNjcmlwdC5taW5pLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgcGhvdG9zQXJyID0gW107XHJcbmxldCBwaG90b3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nJyk7XHJcbmNvbnN0IGdhbGxlcnlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1jb250YWluZXInKTtcclxuY29uc3QgZ2FsbGVyeVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS13cmFwcGVyJyk7XHJcbmxldCBnYWxsZXJ5UGhvdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fcGhvdG8nKTtcclxuXHJcbmxldCBjdXJyZW50UGhvdG87XHJcblxyXG5mdW5jdGlvbiBjb2xlY3RBbGxQaG90b3MoKSB7fVxyXG5cclxucGhvdG9zLmZvckVhY2goKHBob3RvLCBpbmRleCkgPT4ge1xyXG5cdGNvbnN0IHNob3dQaG90b0luUG9wdXAgPSAoZSkgPT4ge1xyXG5cdFx0Z2FsbGVyeUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZS1nYWxlcnknKTtcclxuXHRcdGdhbGxlcnlQaG90by5zcmMgPSBlLnRhcmdldC5zcmM7XHJcblx0XHRjdXJyZW50UGhvdG8gPSBpbmRleDtcclxuXHRcdHBob3Rvcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZ2FsbGVyeVdyYXBwZXIpO1xyXG5cdH07XHJcblxyXG5cdHBob3RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Bob3RvSW5Qb3B1cCk7XHJcblxyXG5cdC8vIHBob3RvLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG5cdC8vIFx0aWYgKGUuY29kZSA9PT0gJ0VudGVyJyB8fCBlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5ID09PSAnRW50ZXInKSB7XHJcblx0Ly8gXHRcdHNob3dQaG90b0luUG9wdXAoZSk7XHJcblx0Ly8gXHR9XHJcblx0Ly8gfSk7XHJcbn0pO1xyXG4iXX0=
