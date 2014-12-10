using System.Web.Mvc;

namespace RequireKoPlayground.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            ViewBag.Greeting = "Welcome to my Require KO Playground!";

            return View();
        }
    }
}