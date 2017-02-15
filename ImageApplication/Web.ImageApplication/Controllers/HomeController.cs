using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Domain.Domain.Entity;
using Domain.Domain.Services;
using Domain.Services;
using MetadataExtractor;

namespace Web.ImageApplication.Controllers
{
    public class HomeController : Controller
    {
        private readonly IImageItemService _imageItemService;

        public HomeController(IImageItemService imageItemService)
        {
            _imageItemService = imageItemService;
        }

        // GET: Home
        public ActionResult Index(HttpPostedFileBase image = null)
        {
            var dir = Server.MapPath("/Content/images");
            var path = Path.Combine(dir, "iguana" + ".jpg");
            var elem = base.File(path, "image/jpeg");
            //var item = new byte[image.ContentLength];

            var directories = ImageMetadataReader.ReadMetadata(path);
            return View();
        }

        public ActionResult GetImagesSlide()
        {
            return PartialView();
        }

        [HttpPost]
        public async Task<JsonResult> UploadFile(string description = "")
        {
            try
            {
                var image = Request.Files[0];
                if (image != null)
                {
                    var model = new ImageItem
                    {
                        ImageData = new byte[image.ContentLength],
                        ImageMimeType = image.ContentType,
                        Description = description
                    };
                    image.InputStream.Read(model.ImageData, 0, image.ContentLength);
                    _imageItemService.AddImage(model);
                }
            }
            catch (Exception)
            {
                Response.StatusCode = (int) HttpStatusCode.BadRequest;
                return Json("Upload failed");
            }
            return Json("File uploaded successfully");
        }
    }
}