using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Domain.Context;
using Domain.Domain.Entity;

namespace Web.ImageApplication
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            ConfigContainer.Configure();
            InitDb();
        }

        protected void InitDb()
        {
            //var context = new EfDbContext();
            //var getFiles = Directory.GetFiles(System.AppDomain.CurrentDomain.BaseDirectory + "\\Content\\images");
            //foreach (var path in getFiles)
            //{
            //    var file = new FileStream(path, FileMode.Open);
            //    byte[] bytes = new byte[file.Length];
            //    var model = new ImageItem
            //    {
            //        ImageData = bytes,
            //        Description = "Initializ db",
            //        ImageMimeType = "image/jpeg"
            //    };
            //    file.Read(bytes, 0, (int)file.Length);
            //    using (var dbCtx = new EfDbContext())
            //    {
            //        dbCtx.Entry(model).State = System.Data.Entity.EntityState.Added;
            //        context.ImageItems.Add(model);
            //        dbCtx.SaveChanges();
            //    }
            //}
        }
    }
}
