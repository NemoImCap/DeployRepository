using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MetadataExtractor;

namespace Web.ImageApplication.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            var dir = Server.MapPath("/Content/images");
            var path = Path.Combine(dir, "iguana" + ".jpg");
            var elem = base.File(path, "image/jpeg");
            var directories = ImageMetadataReader.ReadMetadata(path);
            return base.File(path, "image/jpeg");
        }
    }
}